import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Screenshots from "@/components/Screenshots";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Screenshots />

      {/* Download Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Скачать игру
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать для Windows
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Smartphone" className="mr-2" size={20} />
              Скачать для Android
            </Button>
          </div>
          <p className="mt-4 text-gray-600">Бесплатно • Без рекламы • 150 МБ</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Запутанная История. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
