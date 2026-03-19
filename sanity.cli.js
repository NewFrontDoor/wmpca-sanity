import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ks1tw0fr',
    dataset: 'production',
  },
  vite: (prev) => ({
    ...prev,
    esbuild: {
      ...prev.esbuild,
      loader: 'jsx',
      include: /\.(js|jsx)$/,
    },
    optimizeDeps: {
      ...prev.optimizeDeps,
      esbuildOptions: {
        ...prev.optimizeDeps?.esbuildOptions,
        loader: {
          ...prev.optimizeDeps?.esbuildOptions?.loader,
          '.js': 'jsx',
        },
      },
    },
  }),
})