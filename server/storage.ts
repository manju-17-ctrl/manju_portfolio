import { db } from "./db";
import { prompts, messages, type Prompt, type InsertPrompt, type Message, type InsertMessage } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getLatestPrompt(): Promise<Prompt | undefined>;
  createPrompt(prompt: InsertPrompt): Promise<Prompt>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemStorage implements IStorage {
  private prompts: Map<number, Prompt>;
  private messages: Map<number, Message>;
  private currentId: number;
  private currentMsgId: number;

  constructor() {
    this.prompts = new Map();
    this.messages = new Map();
    this.currentId = 1;
    this.currentMsgId = 1;
  }

  async getLatestPrompt(): Promise<Prompt | undefined> {
    const allPrompts = Array.from(this.prompts.values());
    allPrompts.sort((a, b) => {
      const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return timeB - timeA;
    });
    return allPrompts[0];
  }

  async createPrompt(insertPrompt: InsertPrompt): Promise<Prompt> {
    const id = this.currentId++;
    const prompt: Prompt = { ...insertPrompt, id, createdAt: new Date() };
    this.prompts.set(id, prompt);
    return prompt;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.currentMsgId++;
    const message: Message = { ...insertMessage, id, createdAt: new Date() };
    this.messages.set(id, message);
    return message;
  }
}

export class DatabaseStorage implements IStorage {
  async getLatestPrompt(): Promise<Prompt | undefined> {
    if (!db) throw new Error("Database not initialized");
    const [prompt] = await db
      .select()
      .from(prompts)
      .orderBy(desc(prompts.createdAt))
      .limit(1);
    return prompt;
  }

  async createPrompt(insertPrompt: InsertPrompt): Promise<Prompt> {
    if (!db) throw new Error("Database not initialized");
    const [prompt] = await db
      .insert(prompts)
      .values(insertPrompt)
      .returning();
    return prompt;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    if (!db) throw new Error("Database not initialized");
    const [message] = await db
      .insert(messages)
      .values(insertMessage)
      .returning();
    return message;
  }
}

export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();
