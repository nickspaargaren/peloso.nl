import { AiOutlineComment } from 'react-icons/ai'

export default {
  name: 'languages',
  title: 'Languages',
  type: 'document',
  icon: AiOutlineComment,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Proficiency',
      type: 'string',
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    }
  ],
  orderings: [
    {
      title: 'Handmatig',
      name: 'Handmatig',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
}