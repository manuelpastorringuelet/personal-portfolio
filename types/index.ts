import { PortableTextBlock } from "sanity";

interface BaseItemType {
  _id: string;
  name: string;
}

export interface ProfileType extends BaseItemType {
  fullName: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
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
  githubUrl: string;
  logo: string;
  coverImage: {
    alt: string | null;
    image: string;
  };
  description: PortableTextBlock[];
  startDate: Date;
  endDate: Date;
}
