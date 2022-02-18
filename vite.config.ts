import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({
      resolvers: [
        [AntDesignVueResolver({ importStyle: false })]
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#4B0091',
          'link-color': '#4B0091',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  server: {
    port: 3000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    // 代理
    // proxy: {
    //   '/api': {
    //     target: 'http://API网关所在域名',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   },
    // }
  }
})
