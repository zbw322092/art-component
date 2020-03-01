import rollupTypescript from '@rollup/plugin-typescript';
import rollupLess from 'rollup-plugin-less';


export default [
  {
    input: './src/swiper.ts',
    output: {
      name: 'Swiper',
      file: './dist/js/swiper.esm.js',
      format: 'esm',
      sourcemap: true,
      sourcemapFile: './dist/js/swiper.esm.js.map',
      strict: true
    },
    plugins: [
      rollupTypescript(),
      rollupLess({ output: './dist/css/swiper.css' })
    ]
  }
]