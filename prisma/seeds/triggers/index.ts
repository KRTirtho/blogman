import { CreateProfileOnSignupTriggerSeed } from "./create-profile-on-signup";
import { GeneratePostSlugTriggerSeed } from "./generate-post-slug-on-create";
import { UpdatedAtAutoUpdateTrigger } from "./updated-at-triggers";

export const TriggerSeeds = [
  CreateProfileOnSignupTriggerSeed,
  UpdatedAtAutoUpdateTrigger,
  GeneratePostSlugTriggerSeed
];
