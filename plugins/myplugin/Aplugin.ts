import { Compilation, Compiler } from 'webpack';

class Aplugin {
    apply(compiler: Compiler) {
        compiler.hooks.emit.tapAsync('a-plugin', (compilation, callback) => {
            console.log('我的第一个插件');
            callback();
        });
    }
}

export default Aplugin;

