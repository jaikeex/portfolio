export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'BgColor',
      type: 'string',
    },
    {
      name: 'primary',
      title: 'Primary',
      type: 'boolean',
    },
    {
      name: 'importance',
      title: 'Importance',
      type: 'number',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  orderings: [
    {
      title: 'Importance, Ascending',
      name: 'importanceAsc',
      by: [{ field: 'importance', direction: 'asc' }],
    },
  ],
};
