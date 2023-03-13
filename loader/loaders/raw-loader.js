const rawLoader = function(content) {
    console.log('--------- raw-loader ----------');
    console.log(content);
    return content;
};
module.exports.raw = true;
module.exports = rawLoader;