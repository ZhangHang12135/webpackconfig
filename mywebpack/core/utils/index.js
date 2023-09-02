const fs = require('fs');
/**
 *
 * 统一路径分隔符 主要是为了后续生成模块ID方便
 * @param {*} path
 * @returns
 */
function toUnixPath(path) {
    return path.replace(/\\/g, '/');
}

function tryExtensions(
    modulePath,
    extensions,
    originModulePath,
    moduleContext
  ) {
    // 优先尝试不需要扩展名选项
    extensions.unshift('');
    for (let extension of extensions) {
      if (fs.existsSync(modulePath + extension)) {
        return modulePath + extension;
      }
    }

    // 未匹配对应文件
    throw new Error(
      `No module, Error: Can't resolve ${originModulePath} in  ${moduleContext}`
    );
  }

/**
 *
 *
 * @param {*} chunk
 * name属性入口文件名称
 * entryModule入口文件module对象
 * modules 依赖模块路径
 */
function getSourceCode(chunk) {
    const { name, entryModule, modules } = chunk;
    return  `
    (() => {
        var __webpack_modules__ = {
            ${modules.map(module => {
                return `'${module.id}': (module) => {
                    ${module._source}
                }`
            }).join(',')}
        };
        // the module cache
        var __webpack_module_cache__ = {};
        // the require function
        function __webpack_require__(moduleId) {
            // Check if module is in cache
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== undefined) {
                return cachedModule.exports;
            }
            // Create a new module (and put it into the cache)
            var module = (__webpack_module_cache__[moduleId] = {
              // no module.id needed
              // no module.loaded needed
              exports: {},
            });
            // Execute the module function
            __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
            
            // Return the exports of the module
            return module.exports;
        }

        var __webpack_exports__ = {};
        (() => {
            ${entryModule._source}
        })();
    })();
    `;
}

module.exports = {
    toUnixPath,
    tryExtensions,
    getSourceCode
}