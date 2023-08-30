import { type SchemaTypeDefinition } from "sanity";

import profile from "@/schemas/profile";
import job from "@/schemas/job";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, job],
};
