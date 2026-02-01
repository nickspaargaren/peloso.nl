import { AiOutlineFormatPainter } from "react-icons/ai";

import { defineField, defineType } from "sanity";

export const skillsSchema = defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  icon: AiOutlineFormatPainter,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
