export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'organization',
      title: 'Organization',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'datefrom',
      title: 'Date from',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
      }
    },
    {
      name: 'dateto',
      title: 'Date to',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
      }
    },
  ]
}