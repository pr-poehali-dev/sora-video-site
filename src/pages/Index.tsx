import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/30 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        <section className="min-h-[90vh] flex flex-col items-center justify-center text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-8 text-sm font-medium text-primary">
            <Icon name="Sparkles" size={16} />
            <span>Бесплатный премиум доступ</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            Sora AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl">
            Революционная нейросеть для создания видео из текста
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl">
            Превратите ваши идеи в потрясающие видеоролики с помощью искусственного интеллекта. 
            Получите полный доступ ко всем функциям абсолютно бесплатно.
          </p>
          
          <Button 
            size="lg" 
            className="text-lg px-12 py-7 rounded-full bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30 transition-all hover:scale-105 font-semibold"
          >
            <Icon name="Download" size={24} className="mr-2" />
            Скачать бесплатно
          </Button>
          
          <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Check" size={18} className="text-primary" />
              <span>Windows, Mac, Linux</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={18} className="text-primary" />
              <span>Без регистрации</span>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Создавайте видео из текста за минуты
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sora использует передовые алгоритмы машинного обучения для генерации 
                реалистичных видео высокого качества. Просто опишите сцену — и нейросеть 
                воплотит её в жизнь.
              </p>
              <div className="flex gap-4">
                <div className="flex items-start gap-2">
                  <Icon name="Zap" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Быстро</p>
                    <p className="text-sm text-muted-foreground">До 60 секунд видео</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Sparkles" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Качественно</p>
                    <p className="text-sm text-muted-foreground">Full HD разрешение</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-3xl aspect-[4/3] overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/6a43111c-0cda-408d-abd6-d7aaa42fb1ec/files/044189ac-db9e-450e-8981-3ca389cbafac.jpg" 
                alt="AI video generation interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="rounded-3xl aspect-[4/3] overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/6a43111c-0cda-408d-abd6-d7aaa42fb1ec/files/fdb54883-7467-4f9d-b166-5ee154b18873.jpg" 
                alt="Premium features"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Премиум функции бесплатно
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Получите полный доступ ко всем возможностям Sora без ограничений. 
                Безлимитная генерация, все стили и эффекты, приоритетная обработка — 
                всё это доступно бесплатно в течение первых 3 месяцев.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                  <span>Безлимитная генерация видео</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                  <span>Все стили и визуальные эффекты</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                  <span>Приоритетная обработка запросов</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Простота использования
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Интуитивный интерфейс и мощные инструменты редактирования делают 
                работу с Sora простой и приятной. Не нужны специальные знания — 
                просто опишите вашу идею, и нейросеть сделает всё остальное.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-secondary/50 p-4 rounded-xl">
                  <Icon name="Palette" size={32} className="text-primary mb-2" />
                  <p className="font-semibold text-sm">Стилизация</p>
                </div>
                <div className="bg-secondary/50 p-4 rounded-xl">
                  <Icon name="Settings" size={32} className="text-primary mb-2" />
                  <p className="font-semibold text-sm">Настройки</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-3xl aspect-[4/3] overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/6a43111c-0cda-408d-abd6-d7aaa42fb1ec/files/2b453964-85fc-426b-b383-8fdb8f5ec679.jpg" 
                alt="Simple interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Начните создавать уже сегодня
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Скачайте Sora бесплатно и получите 3 месяца премиум доступа. 
              Никаких ограничений, никаких скрытых платежей.
            </p>
            
            <Button 
              size="lg" 
              className="text-lg px-12 py-7 rounded-full bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30 transition-all hover:scale-105 font-semibold"
            >
              <Icon name="Download" size={24} className="mr-2" />
              Скачать Sora
            </Button>
            
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={18} className="text-primary" />
                <span>Безопасно</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Zap" size={18} className="text-primary" />
                <span>Быстрая установка</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={18} className="text-primary" />
                <span>1М+ пользователей</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-border/50 mt-20">
          <div className="text-center text-muted-foreground text-sm">
            <p>© 2024 Sora AI. Все права защищены.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;