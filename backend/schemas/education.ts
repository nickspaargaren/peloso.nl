import { AiOutlineBook } from "react-icons/ai";

import { defineArrayMember, defineField, defineType } from "sanity";

export const educationSchema = defineType({
  name: "education",
  title: "Education",
  type: "document",
  icon: AiOutlineBook,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Institution logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "location",
      title: "Place of Education",
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
