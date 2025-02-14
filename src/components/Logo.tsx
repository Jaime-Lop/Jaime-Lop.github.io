import { Heart } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Heart className="w-6 h-6 text-primary fill-primary" />
      <span className="font-serif font-semibold text-lg">Hugs</span>
    </div>
  );
};