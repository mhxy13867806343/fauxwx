import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import cleanPlugin from 'vite-plugin-clean';
import Compression from "unplugin-compression/vite";
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
const viteTimestamp = new Date().getTime()
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const hostProcessVITE_API_URL=env.VITE_API_URL //获取环境变量
  return defineConfig({
    base: './',
    esbuild: {
      drop:['console','debugger']
    },
    resolve: {
      // alias: [//配置别名
      //  { find: '@', replacement: resolve(__dirname, 'src') }
      // ],
      alias:{
        '@':'/src',
        "icon":'/src/assets/icon',
        "weatherIcon":'/src/assets/weather-Icons-1.3.3/icons',
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json",'.vue','.css','.less','.scss','.sass','.styl','.html',
        '.png','.gif','.jpg','.jpeg','.svg','.webp','.ico','.md','.markdown','.yml',
        '.yaml','.xml','.csv','.txt','.ts','.tsx','.jsx','.mjs','.cjs','.wasm','.webmanifest','.pdf','.doc','.docx','.xls','.xlsx','.ppt','.pptx','.mp3','.mp4','.avi','.flv','.wmv','.mov','.ogg','.swf','.ttf','.woff','.woff2','.eot' ],
      preserveSymlinks: false,
    },
    plugins: [
      vue(),
      Components({
        resolvers: [
          ElementPlusResolver()
        ],
        dirs:['src/components'],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
      }),
      AutoImport({
        // targets to transform
        include: [
          /\.[tj]sx?$/,
          /\.vue$/,
          /\.vue\?vue/,
          /\.md$/,
        ],
        
        // global imports to register
        imports: [
          // 插件预设支持导入的api
          'vue',
          'vue-router', //可以删除
          'pinia',
          // 自定义导入的api
        ],
        
        // Generate corresponding .eslintrc-auto-import.json file.
        // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        
        // Filepath to generate corresponding .d.ts file.
        // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
        // Set `false` to disable.
        dts: './auto-imports.d.ts',
        resolvers: [ElementPlusResolver()],
      }),
      cleanPlugin(
          {
            targetFiles: ['dist', 'test']
          }
      ),
      Compression({
        // 可以使用 `zip`, `tar`, `taz`
        adapter: "zip",
        // 要压缩的目录的相对路径
        source: "dist",
        // 要输出的目录的相对路径
        outDir: "./",
        // 压缩后的文件名
        formatter: "{{name}}.{{ext}}"
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
        deleteOriginFile: false
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title:'',//标题
            icon:'/vite.svg',//图标
            amapKey:env.VITE_API_GATEWAY_URL
          },
        },
      }),
    ],
    publicDir: 'public',
    cacheDir: 'node_modules/.vite',
    css:{
      modules:{},
      devSourcemap: false,
      postcss:{
        plugins:[
          tailwindcss,
          autoprefixer,
        ]
      }
    },
    server:{
      host: 'localhost',
      port:'5173',
      strictPort: true,
      open: true,
      proxy:{
        '/api':{
          target:hostProcessVITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
          
        }
      }
    },
    preview:{
      port:'8082',
      strictPort: true,
      open: true,
      proxy:{
        '/api':{
          target:hostProcessVITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
          
        }
      }
    },
    build:{
      rollupOptions:{
        output:{
          chunkFileNames: `js/[name]-[hash].${viteTimestamp}.js`,
          entryFileNames: `js/[name]-[hash].${viteTimestamp}.js`,
          assetFileNames: `[ext]/[name]-[hash].${viteTimestamp}.[ext]`,
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        },
        // external: Object.keys(pkg.dependencies || {}),
        // logLevel: setViteLogLevel('silent'),
      }
    }
  })
}
