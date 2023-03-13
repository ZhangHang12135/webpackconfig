import type { Compiler } from 'webpack';
import { ConcatSource } from 'webpack-sources';
interface Options {
    name: string;
}

class BannerWebpackPlugin {
    constructor(public options: Options){};
    apply(compiler: Compiler) {
        compiler.hooks.compilation.tap('BannerPlugin', compilation => {
            compilation.hooks.processAssets.tap('BannerPlugin', () => {
                compilation.chunks.forEach(chunk => {
                    chunk.files.forEach(file => {
                        //@ts-ignore
                        compilation.updateAsset(file, old => {
                            //@ts-ignore
                            return new ConcatSource(`/*!\n*${this.options.name}\n*/\n`, old);
                        })
                    })
                })
            });
        })
    }
}
export default BannerWebpackPlugin;