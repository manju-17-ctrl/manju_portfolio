import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useLatestPrompt() {
  return useQuery({
    queryKey: [api.prompts.getLatest.path],
    queryFn: async () => {
      const res = await fetch(api.prompts.getLatest.path, { credentials: "include" });
      
      if (res.status === 404) {
        return null;
      }

      if (!res.ok) {
        throw new Error('Failed to fetch latest prompt');
      }

      const data = await res.json();
      return api.prompts.getLatest.responses[200].parse(data);
    },
    // Don't retry on 404s as it just means no prompt exists yet
    retry: (failureCount, error: any) => {
      if (error?.status === 404) return false;
      return failureCount < 3;
    },
  });
}
