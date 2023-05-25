import { SeedOperation } from "@/utils/dbms/seed-operation";

export class GeneratePostSlugTriggerSeed extends SeedOperation {
  async run(): Promise<void> {
    await this.client.$executeRaw`
      CREATE OR REPLACE FUNCTION public.gen_post_slug() RETURNS TRIGGER AS 
      $$ 
      BEGIN
        NEW.slug := REPLACE(REPLACE(TRIM(LOWER(NEW.title)), '  ', ' '), ' ', '-') || '-' || nanoid(7);
        RETURN NEW;
      END;
      $$
      LANGUAGE plpgsql
      SECURITY DEFINER
      SET search_path = public;
    `;

    await this.client.$executeRaw`
      CREATE OR REPLACE TRIGGER gen_post_slug_on_create_trigger
        BEFORE INSERT OR UPDATE
        ON public."Post"
        FOR EACH ROW
      EXECUTE
        PROCEDURE public.gen_post_slug();
    `;
  }
}
