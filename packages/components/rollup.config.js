import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'

const packageJson = require('./package.json')

export default {
    input: './src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
        },
        {
            file: packageJson.module,
            format: 'esm',
        },
    ],
    plugins: [
        typescript(),
        resolve({
            extensions: ['.ts', '.tsx'],
        }),
        commonjs(),
    ],
    external: ['react', 'styled-components'],
}
