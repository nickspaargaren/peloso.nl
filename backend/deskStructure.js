import S from '@sanity/desk-tool/structure-builder'
import { AiOutlineContacts } from 'react-icons/ai'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('General')
        .icon(AiOutlineContacts)
        .child(
          S.document()
            .schemaType('general')
            .documentId('general')
        ),
      ...S.documentTypeListItems().filter(listItem => !['general'].includes(listItem.getId()))
    ])