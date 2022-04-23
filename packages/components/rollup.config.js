import commonjs from '@rollup/plugin-commonjs'
import path from 'path'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'

const packageJson = require(path.join(__dirname, './package.json'))

export default {
    input: path.join(__dirname, './src/index.tsx'),
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
