import { PortableTextBlock } from "sanity";

type Language = Record<"en" | "es", string>;

interface BaseItemType {
  _id: string;
  name: string;
}

export interface ProfileType extends BaseItemType {
  fullName: string;
  headline: Language;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: Language;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
}

export interface JobType extends BaseItemType {
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

export interface ProjectType extends BaseItemType {
  slug: string;
  tagline: string;
  projectUrl: string;
  logo: string;
  coverImage: {
    alt: string | null;
    image: string;
  };
  description: PortableTextBlock[];
  startDate: Date;
  endDate: Date;
}
