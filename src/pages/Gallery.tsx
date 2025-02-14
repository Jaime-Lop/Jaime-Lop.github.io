import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Navigation } from "@/components/Navigation";
import image1 from "../components/images/image_1.jpeg";
import image2 from "../components/images/image_2.jpeg";
import image3 from "../components/images/image_3.jpeg";
import image4 from "../components/images/image_4.jpeg";
import image5 from "../components/images/image_5.jpeg";
import image6 from "../components/images/image_6.jpeg";
import image7 from "../components/images/image_7.jpeg";
import image8 from "../components/images/image_8.jpeg";

const images = [
  {
    url: image1,
    alt: "bird's eye view photograph of green mountains"
  },
  {
    url: image2,
    alt: "bird's eye view photograph of green mountains"
  },
  {
    url: image3,
    alt: "bird's eye view photograph of green mountains"
  },
  {
    url: image4,
    alt: "bird's eye view photograph of green mountains"
  },
  {
    url: image5,
    alt: "bird's eye view photograph of green mountains"
  },
  {
    url: image6,
    alt: "bird's eye view photograph of green mountains"
  },
  {
    url: image7,
    alt: "bird's eye view photograph of green mountains"
  },
  {
    url: image8,
    alt: "bird's eye view photograph of green mountains"
  }

];

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 hero-gradient">
        <div className="container mx-auto px-4 py-12">
          <div className="relative">
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 transform -rotate-90 whitespace-nowrap">
              <h2 className="text-2xl font-serif text-gray-600">Nosotros juntos a través del tiempo</h2>
            </div>
            
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1 h-[600px]">
                      <div className="h-full w-full overflow-hidden rounded-lg">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="h-full w-full object-contain transition-transform hover:scale-105"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;