import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { AiOutlineComment, AiOutlineContacts } from 'react-icons/ai';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import schemas from './schemas/schema';

export default defineConfig({
  name: 'pelosonl',
  title: 'Danielle Peloso',
  projectId: 'ozsvr5j0',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S, context) => S.list()
        .title('Content')
        .items([
          orderableDocumentListDeskItem({
            name: 'languages',
            title: 'Languages',
            type: 'languages',
            icon: AiOutlineComment,
            S,
            context,
          }),
          S.listItem()
            .title('General')
            .icon(AiOutlineContacts)
            .child(
              S.document()
                .schemaType('general')
                .documentId('general'),
            ),
          ...S.documentTypeListItems().filter(
            (listItem) => ![ 'general' ].includes(listItem.getId()) && ![ 'languages' ].includes(listItem.getId()),
          ),
        ]),
    }),
  ],
  schema: {
    types: schemas,
  },
});
