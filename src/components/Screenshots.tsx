import { Card } from "@/components/ui/card";

const Screenshots = () => {
  const screenshots = [
    {
      title: "Главное меню",
      description: "Стильный интерфейс с атмосферной музыкой",
    },
    {
      title: "Диалоги персонажей",
      description: "Живые беседы с яркими героями",
    },
    {
      title: "Игровые локации",
      description: "Детализированные сцены приключений",
    },
    {
      title: "Выбор решений",
      description: "Влияйте на развитие сюжета",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Скриншоты</h2>
          <p className="text-xl text-gray-600">
            Взгляните на игровой процесс и атмосферу "Запутанной Истории"
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {screenshots.map((screenshot, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="text-center text-purple-600">
                  <div className="w-16 h-16 bg-purple-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <p className="font-medium">Скриншот #{index + 1}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600">{screenshot.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Хотите увидеть больше?</p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Смотреть трейлер →
            </a>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Галерея изображений →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
