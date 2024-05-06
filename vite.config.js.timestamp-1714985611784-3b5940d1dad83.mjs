// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///home/zamokmaster/app/zamokmaster/node_modules/vite/dist/node/index.js";
import vue from "file:///home/zamokmaster/app/zamokmaster/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///home/zamokmaster/app/zamokmaster/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { ViteImageOptimizer } from "file:///home/zamokmaster/app/zamokmaster/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import postCssSortMediaQueries from "file:///home/zamokmaster/app/zamokmaster/node_modules/postcss-sort-media-queries/index.js";
import autoprefixer from "file:///home/zamokmaster/app/zamokmaster/node_modules/autoprefixer/lib/autoprefixer.js";
import VitePluginSsh from "file:///home/zamokmaster/app/zamokmaster/node_modules/vite-plugin-ssh/dist/index.js";
import vuePugPlugin from "file:///home/zamokmaster/app/zamokmaster/node_modules/vue-pug-plugin/index.js";
import * as nodePath from "path";
var __vite_injected_original_import_meta_url = "file:///home/zamokmaster/app/zamokmaster/vite.config.js";
var repositoryName = nodePath.basename(nodePath.resolve());
var vite_config_default = defineConfig({
  plugins: [
    vue({
      template: {
        preprocessOptions: {
          // 'preprocessOptions' is passed through to the pug compiler
          plugins: [vuePugPlugin]
        }
      }
    }),
    vueJsx(),
    ViteImageOptimizer({
      jpg: {
        quality: 80
      },
      jpeg: {
        quality: 80
      }
    })
    //плагин не умеет создавать на сервере папку проекта - нужно создать папку ручками и указать путь до нее в remotePath
    // VitePluginSsh.default({
    //   host: '2922965-nngroup.twc1.net',
    //   port: 22,
    //   username: 'zamokmaster',
    //   password: 'OoCyoAbLU87G4lykE5AG',
    //   localPath: 'app',
    //   remotePath: `app/zamokmaster/dist`
    // })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssSortMediaQueries({ sort: "desktop-first" }),
        autoprefixer({
          overrideBrowserslist: ["last 3 versions", "ie >= 10"]
        })
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS96YW1va21hc3Rlci9hcHAvemFtb2ttYXN0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3phbW9rbWFzdGVyL2FwcC96YW1va21hc3Rlci92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS96YW1va21hc3Rlci9hcHAvemFtb2ttYXN0ZXIvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuXG5pbXBvcnQgeyBWaXRlSW1hZ2VPcHRpbWl6ZXIgfSBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZS1vcHRpbWl6ZXInXG5pbXBvcnQgcG9zdENzc1NvcnRNZWRpYVF1ZXJpZXMgZnJvbSAncG9zdGNzcy1zb3J0LW1lZGlhLXF1ZXJpZXMnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCBWaXRlUGx1Z2luU3NoIGZyb20gJ3ZpdGUtcGx1Z2luLXNzaCdcbmltcG9ydCB2dWVQdWdQbHVnaW4gZnJvbSAndnVlLXB1Zy1wbHVnaW4nXG5cbmltcG9ydCAqIGFzIG5vZGVQYXRoIGZyb20gJ3BhdGgnXG5jb25zdCByZXBvc2l0b3J5TmFtZSA9IG5vZGVQYXRoLmJhc2VuYW1lKG5vZGVQYXRoLnJlc29sdmUoKSlcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoe1xuICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgcHJlcHJvY2Vzc09wdGlvbnM6IHtcbiAgICAgICAgICAvLyAncHJlcHJvY2Vzc09wdGlvbnMnIGlzIHBhc3NlZCB0aHJvdWdoIHRvIHRoZSBwdWcgY29tcGlsZXJcbiAgICAgICAgICBwbHVnaW5zOiBbdnVlUHVnUGx1Z2luXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgdnVlSnN4KCksXG4gICAgVml0ZUltYWdlT3B0aW1pemVyKHtcbiAgICAgIGpwZzoge1xuICAgICAgICBxdWFsaXR5OiA4MFxuICAgICAgfSxcbiAgICAgIGpwZWc6IHtcbiAgICAgICAgcXVhbGl0eTogODBcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vXHUwNDNGXHUwNDNCXHUwNDMwXHUwNDMzXHUwNDM4XHUwNDNEIFx1MDQzRFx1MDQzNSBcdTA0NDNcdTA0M0NcdTA0MzVcdTA0MzVcdTA0NDIgXHUwNDQxXHUwNDNFXHUwNDM3XHUwNDM0XHUwNDMwXHUwNDMyXHUwNDMwXHUwNDQyXHUwNDRDIFx1MDQzRFx1MDQzMCBcdTA0NDFcdTA0MzVcdTA0NDBcdTA0MzJcdTA0MzVcdTA0NDBcdTA0MzUgXHUwNDNGXHUwNDMwXHUwNDNGXHUwNDNBXHUwNDQzIFx1MDQzRlx1MDQ0MFx1MDQzRVx1MDQzNVx1MDQzQVx1MDQ0Mlx1MDQzMCAtIFx1MDQzRFx1MDQ0M1x1MDQzNlx1MDQzRFx1MDQzRSBcdTA0NDFcdTA0M0VcdTA0MzdcdTA0MzRcdTA0MzBcdTA0NDJcdTA0NEMgXHUwNDNGXHUwNDMwXHUwNDNGXHUwNDNBXHUwNDQzIFx1MDQ0MFx1MDQ0M1x1MDQ0N1x1MDQzQVx1MDQzMFx1MDQzQ1x1MDQzOCBcdTA0MzggXHUwNDQzXHUwNDNBXHUwNDMwXHUwNDM3XHUwNDMwXHUwNDQyXHUwNDRDIFx1MDQzRlx1MDQ0M1x1MDQ0Mlx1MDQ0QyBcdTA0MzRcdTA0M0UgXHUwNDNEXHUwNDM1XHUwNDM1IFx1MDQzMiByZW1vdGVQYXRoXG4gICAgLy8gVml0ZVBsdWdpblNzaC5kZWZhdWx0KHtcbiAgICAvLyAgIGhvc3Q6ICcyOTIyOTY1LW5uZ3JvdXAudHdjMS5uZXQnLFxuICAgIC8vICAgcG9ydDogMjIsXG4gICAgLy8gICB1c2VybmFtZTogJ3phbW9rbWFzdGVyJyxcbiAgICAvLyAgIHBhc3N3b3JkOiAnT29DeW9BYkxVODdHNGx5a0U1QUcnLFxuICAgIC8vICAgbG9jYWxQYXRoOiAnYXBwJyxcbiAgICAvLyAgIHJlbW90ZVBhdGg6IGBhcHAvemFtb2ttYXN0ZXIvZGlzdGBcbiAgICAvLyB9KVxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9LFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIHBvc3RDc3NTb3J0TWVkaWFRdWVyaWVzKHsgc29ydDogJ2Rlc2t0b3AtZmlyc3QnIH0pLFxuICAgICAgICBhdXRvcHJlZml4ZXIoe1xuICAgICAgICAgIG92ZXJyaWRlQnJvd3NlcnNsaXN0OiBbJ2xhc3QgMyB2ZXJzaW9ucycsICdpZSA+PSAxMCddXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUixTQUFTLGVBQWUsV0FBVztBQUV4VCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBRW5CLFNBQVMsMEJBQTBCO0FBQ25DLE9BQU8sNkJBQTZCO0FBQ3BDLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sa0JBQWtCO0FBRXpCLFlBQVksY0FBYztBQVpnSixJQUFNLDJDQUEyQztBQWEzTixJQUFNLGlCQUEwQixrQkFBa0IsaUJBQVEsQ0FBQztBQUczRCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixVQUFVO0FBQUEsUUFDUixtQkFBbUI7QUFBQTtBQUFBLFVBRWpCLFNBQVMsQ0FBQyxZQUFZO0FBQUEsUUFDeEI7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxtQkFBbUI7QUFBQSxNQUNqQixLQUFLO0FBQUEsUUFDSCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0osU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVVIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1Asd0JBQXdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUFBLFFBQ2pELGFBQWE7QUFBQSxVQUNYLHNCQUFzQixDQUFDLG1CQUFtQixVQUFVO0FBQUEsUUFDdEQsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
