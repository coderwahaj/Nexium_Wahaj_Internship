import { Card, CardContent } from "@/components/ui/card";

export default function QuoteCard({
  quote,
}: {
  quote: { text: string};
}) {
  return (
    <Card className="transition-all duration-300 bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 text-gray-900 dark:text-white p-6 shadow-lg border border-gray-200 dark:border-white/10">
      <CardContent>
        <p className="text-lg italic mb-2 text-gray-700 dark:text-slate-100">
          “{quote.text}”
        </p>
      </CardContent>
    </Card>
  );
}
