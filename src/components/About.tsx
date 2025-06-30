import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "BookOpen",
      title: "Запутанный сюжет",
      description:
        "Множество неожиданных поворотов и смешных ситуаций, которые заставят вас смеяться до слез",
    },
    {
      icon: "Users",
      title: "Яркие персонажи",
      description:
        "Встречайте незабываемых героев, каждый со своими причудами и особенностями",
    },
    {
      icon: "Puzzle",
      title: "Интерактивность",
      description:
        "Ваши решения влияют на развитие истории и определяют судьбу персонажей",
    },
    {
      icon: "Smile",
      title: "Юмор",
      description:
        "Отличный способ поднять настроение и отвлечься от повседневных забот",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Об игре</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "Запутанная История" — это увлекательное приключение, где каждый
            поворот сюжета удивляет и развеселяет. Погрузитесь в мир абсурдных
            ситуаций и неожиданных решений.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm bg-gray-50 hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={feature.icon as any}
                    size={24}
                    className="text-purple-600"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Готовы к приключению?
          </h3>
          <p className="text-gray-600 mb-6">
            Каждое прохождение уникально! Откройте для себя все тайны запутанной
            истории.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>✨ Множественные концовки</span>
            <span>🎭 Комедийные диалоги</span>
            <span>🎪 Неожиданные повороты</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
