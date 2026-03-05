import { defineConfig } from "sanity"
import { structureTool } from 'sanity/structure'
import { schemaTypes } from "./schemas"

export default defineConfig({
  name: "wmpca",
  projectId: 'ks1tw0fr',
  dataset: 'production',

  plugins: [
    structureTool()
  ],
  schema: {
    types: [ ...schemaTypes ],
  },
})