import { getProfile } from "./sanity/sanity.query";
import { ProfileType } from "./types";

const profile: ProfileType[] = await getProfile();

interface DictionaryEntry {
  headline: string;
  shortBio?: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    headline: profile[0].headline.en,
    shortBio: profile[0].shortBio.en,
  },
  es: {
    headline: profile[0].headline.es,
    shortBio: profile[0].shortBio.es,
  },
};
