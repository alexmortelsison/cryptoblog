import { defineField, defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "excerpt",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "url",
    }),
    defineField({
      name: "category",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
});
