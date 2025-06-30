import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            Запутанная
            <span className="text-purple-600 block">История</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Приключенческая игра с невероятно смешными и запутанными поворотами
            сюжета. Готов к неожиданностям?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
            >
              <Icon name="Play" className="mr-2" size={24} />
              Играть сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <Icon name="Download" className="mr-2" size={24} />
              Скачать игру
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} />
              <span>10K+ игроков</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Star" size={20} />
              <span>4.8 рейтинг</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} />
              <span>~5 часов</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-purple-200 opacity-50">
        <Icon name="Gamepad2" size={48} />
      </div>
      <div className="absolute bottom-20 right-10 text-purple-200 opacity-50">
        <Icon name="Zap" size={32} />
      </div>
    </section>
  );
};

export default Hero;
