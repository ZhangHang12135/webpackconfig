class PluginB {
    apply(compiler) {
        compiler.hooks.done.tap('plugin-b', () => {
            console.log('plugin B be callback!');
        })
    }
}
module.exports = PluginB;