
import { ShoppingBag, User } from "lucide-react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-white/50 backdrop-blur-sm">
      <Logo />
      
      <ul className="hidden md:flex items-center gap-8 font-medium">
        <li><Link to="/gallery" className="hover:text-primary transition-colors">Galería</Link></li>
        <li><Link to="/valentines" className="hover:text-primary transition-colors">San Valentín</Link></li>
      </ul>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:text-primary transition-colors hidden">
          <User className="w-5 h-5" />
        </button>
        <button className="p-2 hover:text-primary transition-colors hidden">
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};
