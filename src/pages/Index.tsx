import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Index = () => {
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    undefined,
  );
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);

  const popularDestinations = [
    {
      city: "Париж",
      country: "Франция",
      price: "от 25 000 ₽",
      image: "🇫🇷",
      code: "PAR",
    },
    {
      city: "Лондон",
      country: "Великобритания",
      price: "от 32 000 ₽",
      image: "🇬🇧",
      code: "LON",
    },
    {
      city: "Дубай",
      country: "ОАЭ",
      price: "от 28 000 ₽",
      image: "🇦🇪",
      code: "DXB",
    },
    {
      city: "Токио",
      country: "Япония",
      price: "от 45 000 ₽",
      image: "🇯🇵",
      code: "NRT",
    },
    {
      city: "Нью-Йорк",
      country: "США",
      price: "от 55 000 ₽",
      image: "🇺🇸",
      code: "NYC",
    },
    {
      city: "Стамбул",
      country: "Турция",
      price: "от 18 000 ₽",
      image: "🇹🇷",
      code: "IST",
    },
  ];

  const features = [
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Защищенные платежи и гарантия возврата средств",
    },
    {
      icon: "Clock",
      title: "24/7 Поддержка",
      description: "Круглосуточная служба поддержки на русском языке",
    },
    {
      icon: "CheckCircle",
      title: "Лучшие цены",
      description: "Гарантия лучшей цены или возврат разницы",
    },
    {
      icon: "Globe",
      title: "Мировое покрытие",
      description: "Билеты в любую точку мира от проверенных авиакомпаний",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Plane" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-800">
                TravelTickets
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-slate-600 hover:text-slate-800 transition-colors font-medium"
              >
                Главная
              </a>
              <a
                href="#search"
                className="text-slate-600 hover:text-slate-800 transition-colors font-medium"
              >
                Поиск
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-slate-800 transition-colors font-medium"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-slate-800 transition-colors font-medium"
              >
                Контакты
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/img/dd05dbb6-267e-4e25-8b62-9300d281b625.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-700/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Путешествуйте по миру
              <br />
              <span className="text-blue-200">с комфортом и надежностью</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Найдите лучшие авиабилеты в любую точку мира. Безопасно, быстро и
              по выгодным ценам.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-blue-100">
              <div className="flex items-center">
                <Icon name="Users" size={16} className="mr-2" />
                <span>Более 1М довольных клиентов</span>
              </div>
              <div className="flex items-center">
                <Icon name="Star" size={16} className="mr-2" />
                <span>4.9 из 5 звезд</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-slate-800">
                Поиск авиабилетов
              </CardTitle>
              <CardDescription className="text-center">
                Найдите лучшие предложения для вашего путешествия
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Откуда
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mow">Москва (MOW)</SelectItem>
                      <SelectItem value="spb">Санкт-Петербург (LED)</SelectItem>
                      <SelectItem value="svo">Екатеринбург (SVX)</SelectItem>
                      <SelectItem value="kzn">Казань (KZN)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Куда
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="par">Париж (PAR)</SelectItem>
                      <SelectItem value="lon">Лондон (LON)</SelectItem>
                      <SelectItem value="dxb">Дубай (DXB)</SelectItem>
                      <SelectItem value="nrt">Токио (NRT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Дата вылета
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <Icon name="Calendar" size={16} className="mr-2" />
                        {departureDate
                          ? departureDate.toLocaleDateString("ru-RU")
                          : "Выберите дату"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={departureDate}
                        onSelect={setDepartureDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Пассажиры
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="1 взрослый" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 взрослый</SelectItem>
                      <SelectItem value="2">2 взрослых</SelectItem>
                      <SelectItem value="3">3 взрослых</SelectItem>
                      <SelectItem value="4">4 взрослых</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                <Icon name="Search" size={20} className="mr-2" />
                Найти билеты
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Популярные направления
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Откройте для себя самые востребованные направления с выгодными
              ценами
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((destination, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">{destination.image}</span>
                        <Badge variant="secondary" className="text-xs">
                          {destination.code}
                        </Badge>
                      </div>
                      <h4 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {destination.city}
                      </h4>
                      <p className="text-slate-600">{destination.country}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">
                        {destination.price}
                      </p>
                      <p className="text-xs text-slate-500">туда-обратно</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Почему выбирают нас
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Мы предоставляем надежный сервис с высоким уровнем безопасности и
              поддержки
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={feature.icon}
                    size={24}
                    className="text-blue-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-blue-400" />
                    <span>+7 (800) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-blue-400" />
                    <span>support@traveltickets.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-blue-400" />
                    <span>Москва, ул. Примерная, 123</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-blue-400" />
                    <span>Работаем круглосуточно</span>
                  </div>
                </div>
              </div>
              <div>
                <Card className="bg-slate-700 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">Быстрая связь</CardTitle>
                    <CardDescription className="text-slate-300">
                      Оставьте заявку и мы свяжемся с вами в течение 5 минут
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      placeholder="Ваше имя"
                      className="bg-slate-600 border-slate-500 text-white"
                    />
                    <Input
                      placeholder="Ваш телефон"
                      className="bg-slate-600 border-slate-500 text-white"
                    />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Отправить заявку
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Plane" size={24} className="text-blue-400" />
              <span className="text-xl font-bold">TravelTickets</span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
          <Separator className="my-4 bg-slate-700" />
          <p className="text-center text-slate-400">
            © 2024 TravelTickets. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
