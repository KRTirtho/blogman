import { SeedOperation } from "@/utils/dbms/seed-operation";

export class CreateProfileOnSignupFunctionSeed extends SeedOperation {
  async run(): Promise<void> {
    const sql = this.createFunction(
      "create_profile_on_signup",
      `--sql
        insert into public."Profile"(id)
          values (new.id);
        return new;
        `,
    );

    await this.client.$executeRawUnsafe(sql);
  }
}
