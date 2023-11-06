import { QueryParams, groq } from "next-sanity";
import { client } from "./lib/client";

const revalidationOptions = { next: { revalidate: 10 } };
const DEFAULT_PARAMS = {} as QueryParams;

export async function getProfile() {
  const query = groq`
    *[_type == "profile"]{
      _id,
      fullName,
      headline { en, es},
      profileImage { alt, "image": asset->url },
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }
  `;

  return client.fetch(query, DEFAULT_PARAMS, revalidationOptions);
}

export async function getJob() {
  const query = groq`
    *[_type == "job"]{
      _id,
      name,
      jobTitle,
      "logo": logo.asset->url,
      url,
      description,
      startDate,
      endDate
    }
  `;

  return client.fetch(query, DEFAULT_PARAMS, revalidationOptions);
}

export async function getProjects() {
  const query = groq`
    *[_type == "project"]{
      _id, 
      name,
      "slug": slug.current,
      tagline,
      "logo": logo.asset->url,
      startDate
    }
  `;

  return client.fetch(query, DEFAULT_PARAMS, revalidationOptions);
}

export async function getSingleProject(slug: string) {
  const query = groq`
    *[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      githubUrl,
      coverImage { alt, "image": asset->url },
      tagline,
      description
    }
  `;

  return client.fetch(query, { slug }, revalidationOptions);
}
