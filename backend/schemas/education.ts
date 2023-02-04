import { AiOutlineBook } from 'react-icons/ai';

export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  icon: AiOutlineBook,
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
      name: 'logo',
      title: 'Institution logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'location',
      title: 'Place of Education',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [ { type: 'block' } ],
    },
    {
      name: 'datefrom',
      title: 'Date from',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
      },
    },
    {
      name: 'dateto',
      title: 'Date to',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
      },
    },
  ],
};
