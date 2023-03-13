const syncLoader = function(content, map, meta) {
    // 注意，this 是webpack暴露的实例对象
    const callback = this.async();
    console.log('---------- sync loader --------');
    setTimeout(() => {
        callback(null, content, map, meta);
    }, 1000);
}
module.exports = syncLoader;