import { defineField, defineType } from "sanity";

export const languagesSchema = defineType({
  name: "languages",
  title: "Languages",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Proficiency",
      type: "string",
    }),
    defineField({
      name: "orderRank",
      title: "Order",
      type: "string",
      hidden: true,
    }),
  ],
});
