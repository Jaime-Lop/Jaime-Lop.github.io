
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useWindowSize } from '@/hooks/use-window-size';
import { Navigation } from "@/components/Navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const loveMessages = [
  "Eres una persona super mega duper especial para pipupip...",
  "Eres la razón de que yo quiero ser mejor cada día... ✨",
  "Eres la persona que me hace sentir especial con todo lo que haces... 🌟",
  "Tu amor y tu cariño son mucho más de lo que pude haber pedido nunca... 🌈",
  "Si estoy teniendo un mal día sé que siempre cuento contigo... 💝",
  "Cada salida y plan me hace muy feliz y espero seguir teniendo aventuras contigo... ⭐",
  "Eres mi persona favorita del mundo mundial... 🌎",
  "Cada ida al parque me da una nueva oportunidad de ver a mi lider de su ejercito patuno... 💖",
];

const Valentines = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isMessageVisible, setIsMessageVisible] = useState(true);
  const { toast } = useToast();
  const { width, height } = useWindowSize();

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setIsMessageVisible(false);
      setTimeout(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % loveMessages.length);
        setIsMessageVisible(true);
      }, 500); // Wait for fade out before changing message
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(messageInterval);
  }, []);

  const handleYesClick = () => {
    setShowConfetti(true);
    setShowModal(true);
    toast({
      title: "¡Yay! 💖",
      description: "¡Sabía que dirías que sí! 🎉",
    });
    // Hide confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handleNoHover = () => {
    // Move button to random position within viewport
    const newX = Math.random() * (width - 100);
    const newY = Math.random() * (height - 40);
    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={200}
          colors={['#D946EF', '#FFDEE2', '#FDE1D3', '#E5DEFF']}
        />
      )}
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="hero-gradient rounded-3xl p-8 md:p-12 max-w-2xl w-full text-center space-y-8 relative">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            ¿Quieres ser mi San Valentín? 💝
          </h1>
          
          <div className="h-20 flex items-center justify-center">
            <p 
              className={`text-lg md:text-xl text-gray-700 font-sans transition-opacity duration-500 ease-in-out ${
                isMessageVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {loveMessages[currentMessageIndex]}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
            <Button
              onClick={handleYesClick}
              className="w-40 h-12 text-lg hover:scale-110 transition-transform"
            >
              ¡Sí! 💖
            </Button>

            <Button
              variant="secondary"
              onMouseEnter={handleNoHover}
              style={{
                position: noButtonPosition.x ? 'fixed' : 'relative',
                left: noButtonPosition.x,
                top: noButtonPosition.y,
                transition: 'all 0.2s ease',
              }}
              className="w-40 h-12 text-lg"
            >
              No 😢
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-serif">
              ¡Feliz Día de San Valentín! ❤️
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <p className="text-lg">
              Gracias por hacer cada día más especial. ¡Te quiero mucho! 🌹
            </p>
            <Button onClick={() => setShowModal(false)}>
              Cerrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Valentines;
