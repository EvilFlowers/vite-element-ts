import type { ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default ({}: ConfigEnv): UserConfig => {
  const root = process.cwd();
  return {
    root,
    resolve: {
      alias: [
        {
          find: /^@\//,
          replacement: resolve(__dirname, 'src') + '/',
        },
      ],
    },
    server: {
      port: 8000,
    },
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
    plugins: [vue()],
  };
};
