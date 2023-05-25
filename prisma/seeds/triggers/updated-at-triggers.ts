import { SeedOperation } from "@/utils/dbms/seed-operation";

export class UpdatedAtAutoUpdateTrigger extends SeedOperation {
  async run(): Promise<void> {
    await this.client.$executeRaw`
      create extension if not exists "moddatetime" with schema "extensions";
    `;

    await this.client.$executeRaw`
      CREATE OR REPLACE TRIGGER post_updated_at_trigger BEFORE UPDATE ON public."Post" FOR EACH ROW EXECUTE FUNCTION moddatetime('updatedAt')
    `;

    await this.client.$executeRaw`
      CREATE OR REPLACE TRIGGER profile_updated_at_trigger BEFORE UPDATE ON public."Profile" FOR EACH ROW EXECUTE FUNCTION moddatetime('updatedAt')
    `;

    await this.client.$executeRaw`
      CREATE OR REPLACE TRIGGER tag_updated_at_trigger BEFORE UPDATE ON public."Tag" FOR EACH ROW EXECUTE FUNCTION moddatetime('updatedAt')
    `;
  }
}
