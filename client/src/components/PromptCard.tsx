import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";
import { Copy, Download, FileJson, Terminal } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface PromptCardProps {
  title: string;
  content: string;
  className?: string;
}

export function PromptCard({ title, content, className = "" }: PromptCardProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "Prompt content is ready to paste.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Failed to copy",
        description: "Please try again manually.",
      });
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/markdown" });
    element.href = URL.createObjectURL(file);
    element.download = `${title.replace(/\s+/g, "_").toLowerCase()}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast({
      title: "Download started",
      description: "Saving prompt as markdown file...",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative w-full max-w-5xl mx-auto ${className}`}
    >
      {/* Decorative top border with "tabs" look */}
      <div className="flex items-center justify-between bg-muted/80 border-t border-x border-border rounded-t-xl px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center text-xs font-mono text-muted-foreground bg-background/50 px-3 py-1 rounded border border-border/50">
            <FileJson className="w-3.5 h-3.5 mr-2 text-primary" />
            {title}.md
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="group flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20"
          >
            <Copy className={`w-3.5 h-3.5 ${copied ? "text-green-500" : ""}`} />
            <span>{copied ? "Copied!" : "Copy Raw"}</span>
          </button>
          
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-all border border-transparent hover:border-secondary/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-background/95 border border-border rounded-b-xl shadow-2xl overflow-hidden relative group">
        
        {/* Neon Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-50" />
        
        <div className="p-8 md:p-12 overflow-x-auto">
          <article className="prose prose-invert max-w-none">
            <ReactMarkdown
              components={{
                code({ node, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  // @ts-ignore - types conflict for children
                  const isInline = !match && !String(children).includes("\n");
                  
                  return !isInline && match ? (
                    <div className="relative rounded-lg overflow-hidden my-6 border border-border/50 shadow-lg">
                      <div className="absolute top-0 right-0 px-2 py-1 text-[10px] font-mono text-muted-foreground bg-muted/80 rounded-bl backdrop-blur-sm border-l border-b border-border/50">
                        {match[1]}
                      </div>
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                          margin: 0,
                          borderRadius: 0,
                          padding: "1.5rem",
                          background: "hsl(var(--muted) / 0.5)",
                          fontSize: "0.9rem",
                        }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <code className="font-mono text-sm bg-primary/10 text-primary px-1.5 py-0.5 rounded border border-primary/20" {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </motion.div>
  );
}

export function EmptyPromptState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6 border border-dashed border-muted-foreground/20 rounded-2xl bg-muted/5 max-w-2xl mx-auto"
    >
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6 ring-4 ring-muted/30">
        <Terminal className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-display font-bold text-foreground mb-2">No Prompt Generated Yet</h3>
      <p className="text-muted-foreground max-w-md">
        The system is ready. Generate a prompt to see the structured output here in full developer-mode glory.
      </p>
    </motion.div>
  );
}

export function LoadingPromptState() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 animate-pulse">
      <div className="flex items-center justify-between bg-muted/40 border border-border/50 rounded-t-xl px-4 py-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-muted" />
          <div className="w-3 h-3 rounded-full bg-muted" />
          <div className="w-3 h-3 rounded-full bg-muted" />
        </div>
        <div className="w-24 h-6 rounded bg-muted/50" />
      </div>
      <div className="bg-background border border-border rounded-b-xl p-8 h-[600px] relative overflow-hidden">
        <div className="space-y-4">
          <div className="h-8 bg-muted/30 w-3/4 rounded" />
          <div className="h-4 bg-muted/20 w-1/2 rounded" />
          <div className="h-40 bg-muted/10 w-full rounded mt-8" />
          <div className="space-y-2 mt-8">
            <div className="h-4 bg-muted/20 w-full rounded" />
            <div className="h-4 bg-muted/20 w-5/6 rounded" />
            <div className="h-4 bg-muted/20 w-4/6 rounded" />
          </div>
        </div>
        
        {/* Scanning effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-sm animate-[scan_2s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}
