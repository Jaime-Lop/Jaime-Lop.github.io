import { toast } from "sonner";
import { useState } from "react";

export const EmailForm = () => {
  const [count, setCount] = useState(1534);

  const handleSendHug = () => {
    setCount(prev => prev + 1);
    toast.success("Abrazo virtual enviado! 🤗");
  };

  return (
    <button
      onClick={handleSendHug}
      className="px-6 py-2 bg-primary text-white rounded-lg font-medium transition-all hover:bg-primary/90 active:scale-95"
    >
      Envíar abachos!
    </button>
  );
};