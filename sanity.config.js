import { defineConfig } from "sanity"
import { structureTool } from 'sanity/structure'
import { dashboardTool } from "@sanity/dashboard"
import { schemaTypes } from "./schemas"
import { adminStructure } from "./structure"

export default defineConfig({
  name: "wmpca",
  projectId: 'ks1tw0fr',
  dataset: 'production',
  schema: {
    types: [ ...schemaTypes ],
  },
  plugins: [
    structureTool({
      structure: adminStructure
    })
  ],

})
