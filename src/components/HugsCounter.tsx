import { Zap } from "lucide-react";

export const HugsCounter = () => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm font-medium">
      <Zap className="w-4 h-4 text-primary" />
      <span>18,000 millones abachos enviados desde 22 Junio de 2023</span>
    </div>
  );
};