// sanity.config.js
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'

export default defineConfig({
  name: 'Peloso.nl',
  title: 'Danielle Peloso',
  projectId: 'ozsvr5j0',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: deskStructure
    })
  ],
  schema: {
    types: schemas,
  },
})