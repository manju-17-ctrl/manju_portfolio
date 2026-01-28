import { z } from 'zod';
import { insertPromptSchema, prompts } from './schema';

export const api = {
  prompts: {
    getLatest: {
      method: 'GET' as const,
      path: '/api/prompts/latest',
      responses: {
        200: z.custom<typeof prompts.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    },
  },
};
