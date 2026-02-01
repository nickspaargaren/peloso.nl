import { AiOutlineShop } from "react-icons/ai";

import { defineArrayMember, defineField, defineType } from "sanity";

export const workSchema = defineType({
  name: "work",
  title: "Work",
  type: "document",
  icon: AiOutlineShop,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "organization",
      title: "Organization",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Organization logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      name: "datefrom",
      title: "Date from",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
      },
    }),
    defineField({
      name: "dateto",
      title: "Date to",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
      },
    }),
  ],
});
