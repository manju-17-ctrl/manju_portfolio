import { useLatestPrompt } from "@/hooks/use-prompts";
import { PromptCard, EmptyPromptState, LoadingPromptState } from "@/components/PromptCard";
import { Sparkles, Terminal } from "lucide-react";

export default function Home() {
  const { data: prompt, isLoading, isError } = useLatestPrompt();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Cyber-Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Ambient Glows */}
      <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16 flex flex-col min-h-screen">
        
        {/* Header */}
        <header className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono text-primary mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>SYSTEM ONLINE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 tracking-tighter">
            AI Prompt<span className="text-primary">Viewer</span>
          </h1>
          
          <p className="text-muted-foreground max-w-xl mx-auto text-lg font-light">
            Review generated development prompts in a high-fidelity environment tailored for engineers.
          </p>
        </header>

        {/* Content */}
        <main className="flex-grow flex flex-col justify-center">
          {isLoading ? (
            <LoadingPromptState />
          ) : isError || !prompt ? (
            <EmptyPromptState />
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between max-w-5xl mx-auto px-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground font-mono">
                  <Terminal className="w-4 h-4 text-secondary" />
                  <span>prompt_id: {prompt.id}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground font-mono">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span>Rendered with GitHub Flavored Markdown</span>
                </div>
              </div>
              
              <PromptCard 
                title={prompt.title} 
                content={prompt.content} 
              />
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-20 py-6 text-center border-t border-border/30">
          <p className="text-sm text-muted-foreground font-mono">
            Crafted for <span className="text-primary">AI-Driven Development</span> • v1.0.0
          </p>
        </footer>
      </div>
    </div>
  );
}
