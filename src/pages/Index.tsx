import { Navigation } from "@/components/Navigation";
import { HugsCounter } from "@/components/HugsCounter";
import { EmailForm } from "@/components/EmailForm";
import { HeroIllustration } from "@/components/HeroIllustration";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 hero-gradient">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <HugsCounter />
              
              <div className="space-y-4">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                  Envíar abachos! puedes no escatimar :)
                </h1>
              </div>

              <EmailForm />
            </div>

            <HeroIllustration />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;