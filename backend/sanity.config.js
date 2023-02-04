// sanity.config.js
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas/schema'

export default defineConfig({
  name: 'Peloso.nl',
  title: 'Danielle Peloso',
  projectId: 'ozsvr5j0',
  dataset: 'production',
  plugins: [
    deskTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})