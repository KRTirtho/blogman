import { PrismaClient } from "@prisma/client";

export class SeedOperation {
  client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  createFunction(
    name: string,
    body: string,
    {
      returns,
      security,
      schema,
    }: {
      security?: "definer" | "invoker";
      returns?: "void" | "trigger";
      schema?: string;
    } = { security: "definer", returns: "trigger", schema: "public" }
  ): string {
    return `--sql
      CREATE OR REPLACE FUNCTION ${schema}.${name}()
      RETURNS ${returns}
      LANGUAGE plpgsql
      SECURITY ${security?.toUpperCase()}
      AS $function$begin
        ${body}
      end;$function$;
      `;
  }

  createTrigger(config: {
    name: string;
    table: string;
    execution: string;
    executionOrder?: "before" | "after" | "instead of";
    operation?: "insert" | "update" | "delete";
    operationType?:
      | `for each ${"row" | "statement"}`
      | `for ${"row" | "statement"}`;
    executorType?: "function" | "procedure";
    when?: string;
  }): string {
    const {
      name,
      executionOrder,
      execution,
      executorType,
      operation,
      operationType,
      table,
      when,
    } = {
      executorType: "function",
      operationType: "for each row",
      executionOrder: "after",
      operation: "insert",
      ...config,
    };

    return `--sql
    CREATE TRIGGER ${name} ${executionOrder} ${operation} ON ${table} ${operationType} EXECUTE ${executorType} ${
      when ? `WHEN ${when}` : ""
    } ${execution};
    `;
  }

  run(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
