export default {
  name: "general",
  title: "General",
  __experimental_actions: [
    /* 'create', */
    "update",
    /* 'delete', */
    "publish",
  ],
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "lastname",
      title: "Lastname",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "birthdate",
      title: "Date of birth",
      type: "date",
    },
    {
      name: "birthplace",
      title: "Place of birth",
      type: "string",
    },
    {
      name: "nationality",
      title: "Nationality",
      type: "string",
    },
    {
      name: "residence",
      title: "Residence",
      type: "string",
    },
    {
      name: "image",
      title: "Profile image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
