export default {
  name: 'languages',
  title: 'Languages',
  type: 'document',
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
      name: 'orderRank',
      title: 'Order',
      type: 'string',
      hidden: true,
    },
  ],
};
