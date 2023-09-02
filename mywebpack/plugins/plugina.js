class PluginA {
    apply(compiler) {
        compiler.hooks.run.tap('plugin-a', () => {
            console.log('plugin a be callback!');
        })
    }
}
module.exports = PluginA;