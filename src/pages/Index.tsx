import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.08),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(219,39,119,0.06),transparent_50%),radial-gradient(circle_at_50%_90%,rgba(147,51,234,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      <div className="relative container mx-auto px-4 py-12 max-w-6xl">
        
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6 text-sm font-medium text-purple-700">
            <Icon name="Sparkles" size={16} />
            <span>Бесплатный премиум на 3 месяца</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Sora AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
            Революционная нейросеть для создания видео из текста. 
            Превратите ваши идеи в видео за считанные минуты.
          </p>
          
          <Button 
            size="lg" 
            className="text-lg px-16 py-8 rounded-full bg-purple-600 hover:bg-purple-700 shadow-2xl shadow-purple-600/30 transition-all hover:scale-105 font-semibold"
          >
            <Icon name="Download" size={28} className="mr-3" />
            Скачать бесплатно
          </Button>
          
          <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Icon name="Check" size={18} className="text-purple-600" />
              <span>Без регистрации</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={18} className="text-purple-600" />
              <span>Все платформы</span>
            </div>
          </div>
        </section>

        <section className="py-16 space-y-32">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Видео из текста за минуты
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Опишите сцену — Sora воплотит её в жизнь. Передовые алгоритмы 
                создают реалистичные видео высокого качества до 60 секунд.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-2xl aspect-video overflow-hidden shadow-2xl bg-gray-100">
              <div className="w-full h-full flex items-center justify-center">
                <Icon name="Image" size={64} className="text-gray-300" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-2xl bg-gray-100">
              <div className="w-full h-full flex items-center justify-center">
                <Icon name="Image" size={64} className="text-gray-300" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Премиум доступ бесплатно
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Безлимитная генерация видео, все стили и эффекты, приоритетная 
                обработка — бесплатно первые 3 месяца. Без ограничений.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <Icon name="Check" size={20} className="text-purple-600 flex-shrink-0" />
                  <span>Безлимитная генерация</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Icon name="Check" size={20} className="text-purple-600 flex-shrink-0" />
                  <span>Все стили и эффекты</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Icon name="Check" size={20} className="text-purple-600 flex-shrink-0" />
                  <span>Приоритетная обработка</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Просто и понятно
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Интуитивный интерфейс — никаких специальных знаний. 
                Опишите идею, нейросеть сделает остальное.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-2xl aspect-video overflow-hidden shadow-2xl bg-gray-100">
              <div className="w-full h-full flex items-center justify-center">
                <Icon name="Image" size={64} className="text-gray-300" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Начните создавать сейчас
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Скачайте Sora и получите 3 месяца премиум доступа. 
              Никаких ограничений и скрытых платежей.
            </p>
            
            <Button 
              size="lg" 
              className="text-lg px-16 py-8 rounded-full bg-purple-600 hover:bg-purple-700 shadow-2xl shadow-purple-600/30 transition-all hover:scale-105 font-semibold"
            >
              <Icon name="Download" size={28} className="mr-3" />
              Скачать Sora
            </Button>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={18} className="text-purple-600" />
                <span>Безопасно</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Zap" size={18} className="text-purple-600" />
                <span>Быстро</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={18} className="text-purple-600" />
                <span>50 000+ пользователей</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Index;