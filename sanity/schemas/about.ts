export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [
        {
          name: 'paragraph',
          title: 'Paragraph',
          type: 'string',
        },
      ],
    },
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [
        {
          name: 'highlight',
          title: 'Highlight',
          type: 'document',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'importance',
              title: 'Importance',
              type: 'number',
            },
            {
              name: 'imgUrl',
              title: 'ImgUrl',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
