const loaderUtils = require('loader-utils');

const fileLoader = function(content) {
    const options = this.getOptions();
    console.log(options);
    const filename = loaderUtils.interpolateName(this, options.name + '.[hash].[ext]');
    this.emitFile(options.output + '/' + filename, content)
    return `export default '${filename}'`;
};

module.exports = fileLoader;
module.exports.raw = true;