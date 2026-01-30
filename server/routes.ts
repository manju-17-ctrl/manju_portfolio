import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { insertMessageSchema } from "@shared/schema";
import fs from "fs/promises";
import path from "path";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // API Route to get the latest prompt
  app.get(api.prompts.getLatest.path, async (req, res) => {
    const prompt = await storage.getLatestPrompt();
    if (!prompt) {
      return res.status(404).json({ message: "No prompt found" });
    }
    res.json(prompt);
  });

  // API Route to save contact messages
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(messageData);
      res.json(message);
    } catch (error) {
      res.status(400).json({ message: "Invalid message data" });
    }
  });

  // Seed function to ensure the prompt exists in DB
  await seedPrompt();

  return httpServer;
}

async function seedPrompt() {
  const existing = await storage.getLatestPrompt();
  if (!existing) {
    try {
      const promptContent = await fs.readFile(path.join(process.cwd(), "DEVELOPMENT_PROMPT.md"), "utf-8");
      await storage.createPrompt({
        title: "Full-Stack AI-Assisted Portfolio Website",
        content: promptContent,
      });
      console.log("Seeded initial prompt from file.");
    } catch (error) {
      console.error("Failed to seed prompt:", error);
    }
  }
}
