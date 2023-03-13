import type { Compiler } from 'webpack';

class Bplugin {
    apply(compiler: Compiler) {
        compiler.hooks.compilation.tap('b-plugin', (compilation) => {
            console.log('这里是b-plugin插件');
        });
    }
}

export default Bplugin;

