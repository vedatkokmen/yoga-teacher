export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "authorTitle",
      title: "Author Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "string",
    },
    {
      name: "authorImage",
      title: "Author image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
