import { defineType } from "sanity";
import { BiUser } from "react-icons/bi";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "headline",
      title: "Headline",
      type: "object",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(40).max(50),
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
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
      name: "shortBio",
      title: "Short Bio",
      type: "object",
      fields: [
        {
          title: "English",
          name: "en",
          type: "text",
          rows: 4,
        },
        {
          title: "Spanish",
          name: "es",
          type: "text",
          rows: 4,
        },
      ],
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add your social media links:",
      fields: [
        {
          name: "github",
          title: "Github URL",
          type: "url",
          initialValue: "https://github.com/",
        },
        {
          name: "linkedin",
          title: "Linkedin URL",
          type: "url",
          initialValue: "https://linkedin.com/in/",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      description: "Add a list of skills",
      of: [{ type: "string" }],
    },
  ],

