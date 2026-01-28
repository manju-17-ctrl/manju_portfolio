import { db } from "./db";
import { prompts, type Prompt, type InsertPrompt } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getLatestPrompt(): Promise<Prompt | undefined>;
  createPrompt(prompt: InsertPrompt): Promise<Prompt>;
}

export class DatabaseStorage implements IStorage {
  async getLatestPrompt(): Promise<Prompt | undefined> {
    const [prompt] = await db
      .select()
      .from(prompts)
      .orderBy(desc(prompts.createdAt))
      .limit(1);
    return prompt;
  }

  async createPrompt(insertPrompt: InsertPrompt): Promise<Prompt> {
    const [prompt] = await db
      .insert(prompts)
      .values(insertPrompt)
      .returning();
    return prompt;
  }
}

export const storage = new DatabaseStorage();
