import { SeedOperation } from "@/utils/dbms/seed-operation";

export class CreateProfileOnSignupTriggerSeed extends SeedOperation {
  async run(): Promise<void> {
    await this.client.$executeRaw`
      CREATE OR REPLACE FUNCTION public.create_profile_on_signup() RETURNS TRIGGER AS 
      $$ 
      BEGIN
        INSERT INTO public."Profile"(id)
          VALUES (NEW.id);
        RETURN NEW;
      END;
      $$
      LANGUAGE plpgsql
      SECURITY DEFINER
      SET search_path = public;
    `;

    await this.client.$executeRaw`
      CREATE OR REPLACE TRIGGER create_profile_on_signup_trigger 
        AFTER INSERT
        ON auth.users
        FOR EACH ROW
      EXECUTE
        PROCEDURE public.create_profile_on_signup();
    `;
  }
}
