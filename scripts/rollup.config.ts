import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from "rollup-plugin-sourcemaps"
import typescript from "rollup-plugin-typescript2"
import json from 'rollup-plugin-json'

const pkg = require('../package.json')

const libraryName = '__musee__'

export default {
    input: `src/index.ts`,
    output:  [
        {file: pkg.main, name: 'musee', format: 'umd',  sourcemap: true},
        {file: pkg.module, format: 'es', sourcemap: true }
    ],
    external: [],
    watch: {
        include: 'src/**'
    },
    plugins: [
        // allow json resolution
        json(),
        typescript({ useTsconfigDeclarationDir: true }),
        // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
        commonjs(),
        // Allow node_modules resolution, so you can use 'external' to control
        // which external modules to include in the bundle
        // https://github.com/rollup/rollup-plugin-node-resolve#usage
        resolve(),
        // Resolve source maps to the original source
        sourceMaps(),
    ]
}