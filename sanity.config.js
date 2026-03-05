import { defineConfig } from "sanity"
import { structureTool } from 'sanity/structure'
import { dashboardTool } from "@sanity/dashboard"
import { schemaTypes } from "./schemas"

export default defineConfig({
  name: "wmpca",
  projectId: 'ks1tw0fr',
  dataset: 'production',

  plugins: [
    dashboardTool({
      widgets: [ ],
    }),
    structureTool()
  ],
  schema: {
    types: [ ...schemaTypes ],
  },
})
