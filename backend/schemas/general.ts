import { defineArrayMember, defineField, defineType } from "sanity";

export const generalSchema = defineType({
  name: "general",
  title: "General",
  // @ts-expect-error - experimental actions is not typed
  __experimental_actions: ["update", "publish"],
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "lastname",
      title: "Lastname",
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
      name: "birthdate",
      title: "Date of birth",
      type: "date",
    }),
    defineField({
      name: "birthplace",
      title: "Place of birth",
      type: "string",
    }),
    defineField({
      name: "nationality",
      title: "Nationality",
      type: "string",
    }),
    defineField({
      name: "residence",
      title: "Residence",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Profile image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
