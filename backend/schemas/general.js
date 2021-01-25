export default {
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'lastname',
      title: 'Lastname',
      type: 'string',
    },
    {
      name: 'birthdate',
      title: 'Date of birth',
      type: 'date',
    },
    {
      name: 'birthplace',
      title: 'Place of birth',
      type: 'string',
    },
    {
      name: 'nationality',
      title: 'Nationality',
      type: 'string',
    },
    {
      name: 'residence',
      title: 'Residence',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Profile image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email address',
      type: 'string'
    },
  ]
}