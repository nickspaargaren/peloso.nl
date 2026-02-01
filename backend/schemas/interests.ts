import { AiOutlineTrophy } from "react-icons/ai";

import { defineField, defineType } from "sanity";

export const interestsSchema = defineType({
  name: "interests",
  title: "Interests",
  type: "document",
  icon: AiOutlineTrophy,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
