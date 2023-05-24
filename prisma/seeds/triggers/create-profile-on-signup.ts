import { SeedOperation } from "@/utils/dbms/seed-operation";

export class CreateProfileOnSignupTriggerSeed extends SeedOperation {
  async run(): Promise<void> {
    const sql = this.createTrigger({
      name: "create_profile_on_signup_trigger",
      table: "auth.users",
      execution: "create_profile_on_signup()",
      executionOrder: "after",
      operation: "insert",
      operationType: "for each row",
      executorType: "function",
    });
    await this.client.$executeRawUnsafe(sql);
  }
}
