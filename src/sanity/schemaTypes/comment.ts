import { defineType } from "sanity";

export const comment = defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
    },
    {
      name: "date",
      title: "Date",
      type: "string",
    },
    {
      name: "time",
      title: "Time",
      type: "string",
    }
  ],
});