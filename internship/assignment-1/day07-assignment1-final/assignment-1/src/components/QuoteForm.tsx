"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import QuoteCard from "./QuoteCard";
import { quotes } from "../data/quotes";
import { toast } from "sonner";
import ThemeToggle from "./ToggleTheme";

export default function QuoteForm() {
  const [topic, setTopic] = useState("");
  const [matchedQuotes, setMatchedQuotes] = useState<typeof quotes>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const result = quotes.filter(
      (q) => q.topic.toLowerCase() === topic.toLowerCase()
    );
    setMatchedQuotes(result);
    setHasSearched(true);

    if (result.length > 0) {
      toast.success("Quotes Found", {
        description: `Found ${result.length} quote(s) for "${topic}"`,
      });
    } else {
      toast.error("No Quotes Found", {
        description: `No quotes found for "${topic}"`,
      });
    }
  };

  const handleRandom = () => {
    const randomQuotes = [...quotes]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setMatchedQuotes(randomQuotes);
    setHasSearched(true);

    toast("Random Quotes 🎲", {
      description: "Here are 3 randomly selected quotes.",
    });
  };

  const handleClear = () => {
    setTopic("");
    setMatchedQuotes([]);
    setHasSearched(false);
    toast.info("Cleared", {
      description: "Input and results have been cleared.",
    });
  };

  return (
    <div className="space-y-4 w-full max-w-xl mx-auto">
      {/* Theme toggle and Clear button */}
      <div className="flex justify-end gap-2 mb-2">
        <Button variant="outline" size="default" onClick={handleClear}>
          Clear
        </Button>
        <ThemeToggle />
      </div>

      {/* Input and action buttons */}
      <div className="flex gap-2 mt-10">
        <Input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic e.g. success"
        />
        <Button onClick={handleSearch}>Search</Button>
        <Button variant="secondary" onClick={handleRandom}>
          Random
        </Button>
      </div>

      {/* Quotes Display */}
      <div className="space-y-4">
        {matchedQuotes.length > 0 ? (
          matchedQuotes.map((quote, idx) => (
            <QuoteCard key={idx} quote={quote} />
          ))
        ) : hasSearched ? (
          <p className="text-gray-400 text-sm text-center dark:text-gray-500">
            No quotes to display.
          </p>
        ) : null}
      </div>

      {/* Footer */}
      <div className="pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
        Built with ❤️ by{" "}
        <span className="font-semibold text-gray-800 dark:text-yellow-400">
          Wahaj Asif
        </span>
        <br />
        using{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-400"
        >
          TailwindCSS
        </a>
        , and{" "}
        <a
          href="https://ui.shadcn.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-rose-500 hover:underline dark:text-rose-400"
        >
          ShadCN UI
        </a>
      </div>
    </div>
  );
}
