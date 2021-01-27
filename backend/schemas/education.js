export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'institution',
      title: 'Institution',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Place of Education',
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