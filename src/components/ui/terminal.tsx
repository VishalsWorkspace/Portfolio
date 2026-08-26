"use client";

import { useEffect, useState } from "react";

type Line = {
  prompt: string;
  output: string[];
};

const LINES: Line[] = [
  {
    prompt: "whoami",
    output: ["vishal singh — genai / applied ai engineer"],
  },
  {
    prompt: "cat focus.txt",
    output: ["multi-agent systems · local & cloud rag · edge computer vision"],
  },
  {
    prompt: "./ship --target production",
    output: ["✓ ai-tool-hunter    deployed", "✓ aidf-drone        exhibited", "✓ pdf-rag-assistant live"],
  },
];

const TYPE_MS = 32;
const LINE_PAUSE_MS = 480;
const LOOP_PAUSE_MS = 2400;

export function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [doneLines, setDoneLines] = useState<number>(0);

  useEffect(() => {
    const current = LINES[lineIndex];
    if (!current) return;

    if (charIndex < current.prompt.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_MS);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setDoneLines((d) => Math.max(d, lineIndex + 1));
      if (lineIndex < LINES.length - 1) {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      } else {
        const reset = setTimeout(() => {
          setLineIndex(0);
          setCharIndex(0);
          setDoneLines(0);
        }, LOOP_PAUSE_MS);
        return () => clearTimeout(reset);
      }
    }, LINE_PAUSE_MS);

    return () => clearTimeout(t);
  }, [charIndex, lineIndex]);

  return (
    <div className="w-full rounded-xl border border-border-subtle bg-surface/80 font-mono text-sm shadow-2xl shadow-black/10 backdrop-blur">
      <div className="flex items-center gap-1.5 border-b border-border-subtle px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 text-xs text-muted">zsh — vishal@portfolio</span>
      </div>
      <div className="flex min-h-[168px] flex-col gap-2 px-4 py-4">
        {LINES.map((line, i) => {
          if (i > lineIndex) return null;
          const isCurrent = i === lineIndex;
          const typed = isCurrent ? line.prompt.slice(0, charIndex) : line.prompt;
          const showOutput = isCurrent ? doneLines > i : true;

          return (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-accent-2">➜</span>
                <span className="text-muted">~</span>
                <span className="text-foreground">
                  {typed}
                  {isCurrent && charIndex < line.prompt.length && (
                    <span className="animate-blink ml-0.5 inline-block h-4 w-[7px] translate-y-[2px] bg-accent align-middle" />
                  )}
                </span>
              </div>
              {showOutput &&
                line.output.map((out, j) => (
                  <div key={j} className="pl-5 text-muted">
                    {out}
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
