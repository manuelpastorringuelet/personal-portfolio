import { BiPackage } from "react-icons/bi";
import { defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  description: "Project Schema",
  type: "document",
  icon: BiPackage,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the project",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logo",
      title: "Project Logo",
      type: "image",
    },
    {
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this project",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      description: "Write a full description about this project",
      of: [{ type: "block" }],
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
      description: "When did you start this project?",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
      description: "When did you end this project?",
    },
  ],

