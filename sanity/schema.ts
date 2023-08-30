import { type SchemaTypeDefinition } from "sanity";

import profile from "@/schemas/profile";
import job from "@/schemas/job";
import project from "@/schemas/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, job, project],
};
