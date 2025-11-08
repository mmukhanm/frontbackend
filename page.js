"use client"; 

import React, { useState, useEffect } from 'react';

// ============================================
// ЖАЛПЫ СТИЛЬДЕР ЖӘНЕ КОНСТАНТАЛАР
// ============================================
const commonSectionClasses = "py-16 px-4 md:px-8 max-w-6xl mx-auto";
const cardClasses = "bg-white p-6 rounded-xl shadow-lg";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
  body { 
    font-family: 'Inter', sans-serif; 
    scroll-behavior: smooth;
  }
  section {
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-in;
  }
`;

// ============================================
// АНИМАЦИЯ КОМПОНЕНТІ
// ============================================
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, delay]);

  return (
    <div
      ref={setRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// ============================================
// НАВИГАЦИЯ КОМПОНЕНТІ
// ============================================
const Navigation = ({ navItems, onLoginClick }) => {
  const NavLink = ({ label, id }) => (
    <a
      href={`#${id}`}
      className="px-3 py-2 rounded-full transition duration-300 text-sm md:text-base text-gray-100 hover:bg-green-600 hover:text-white"
    >
      {label}
    </a>
  );

  return (
    <header className="bg-green-700 shadow-xl sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-3xl font-bold text-white cursor-pointer hover:text-green-200 transition"
            >
              Автомектеп <span className="text-yellow-300">Жасыл Шам</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-2">
            {navItems.map(item => (
              <NavLink key={item.id} label={item.label} id={item.id} />
            ))}
          </nav>

          <button
            onClick={onLoginClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-2 rounded-lg transition transform hover:scale-105"
          >
            Жеке кабинет
          </button>
        </div>
      </div>
    </header>
  );
};

// ============================================
// КІРУ МОДАЛІ КОМПОНЕНТІ
// ============================================
const LoginModal = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Жүйеге кіру</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email немесе телефон</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
              placeholder="example@mail.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Құпия сөз</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
            >
              Кіру
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 rounded-lg transition"
            >
              Жабу
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ============================================
// ФУТЕР КОМПОНЕНТІ
// ============================================
const Footer = () => (
  <footer className="bg-gray-800 text-white mt-12">
    <div className="max-w-4xl mx-auto p-6 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} «Жасыл Шам» Автомектебі. Барлық құқықтар қорғалған.</p>
    </div>
  </footer>
);

// ============================================
// БАСТЫ БЕТ КОМПОНЕНТІ
// ============================================
const HomePage = () => {
  const cards = [
    { 
      title: 'Практикалық сабақтар', 
      text: 'Сіздің таңдауыңыз бойынша МКПП немесе АКПП. Қала бойынша және арнайы алаңдағы дайындық.', 
      color: 'green', 
      delay: 400 
    },
    { 
      title: 'Онлайн Теория', 
      text: 'Теориялық оқытудың икемді кестесі. Сабақтарды үйден немесе жұмыстан көріңіз.', 
      color: 'blue', 
      delay: 600 
    },
    { 
      title: 'Қолдау', 
      text: 'Құжаттарды ресімдеуде және емтиханға дайындалуда толық сүйемелдеу.', 
      color: 'yellow', 
      delay: 800 
    }
  ];

  return (
    <section id="home" className={`${commonSectionClasses} bg-gray-50 text-center`}>
      <AnimatedSection>
        <h1 className="text-6xl font-extrabold text-green-700 mb-6 animate-bounce">«Жасыл Шам» Автомектебі</h1>
      </AnimatedSection>
      
      <AnimatedSection delay={200}>
        <p className="text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
          Жүргізуші куәлігіне кәсіби мамандармен жол бастаңыз. Біз заманауи автокөліктерді, тәжірибелі нұсқаушыларды және емтиханды сәтті тапсырудың 95% кепілдігін ұсынамыз!
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {cards.map((card, idx) => (
          <AnimatedSection key={idx} delay={card.delay}>
            <div className={`${cardClasses} hover:shadow-lg hover:scale-105 transition-all duration-300 border-t-4 border-${card.color}-500`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{card.title}</h2>
              <p className="text-gray-600">{card.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

// ============================================
// КУРСТАР БЕТІ КОМПОНЕНТІ
// ============================================
const CoursesPage = () => (
  <section id="courses" className={`${commonSectionClasses} bg-white`}>
    <AnimatedSection>
      <h1 className="text-4xl font-bold text-green-700 mb-10 border-b-2 pb-3 text-center">Санаттар және оқыту пакеттері</h1>
    </AnimatedSection>
    
    <div className="grid md:grid-cols-2 gap-8">
      <AnimatedSection delay={200}>
        <div className={`${cardClasses} border-l-8 border-green-500 hover:scale-105 transition-transform duration-300`}>
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 animate-pulse">Ең танымал</span>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">B санаты (Стандарт)</h2>
          <p className="text-green-600 text-2xl font-bold mb-4">150 000 ₸</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
            <li>134 сағат теория (онлайн/офлайн)</li>
            <li>25 сағат МКПП-да тәжірибе</li>
            <li>Жол полициясында толық қолдау</li>
            <li>Оқу мерзімі: 3 ай</li>
          </ul>
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={400}>
        <div className={`${cardClasses} border-l-8 border-blue-500 hover:scale-105 transition-transform duration-300`}>
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 animate-pulse">Ұсынылады</span>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">B санаты (Премиум)</h2>
          <p className="text-blue-600 text-2xl font-bold mb-4">250 000 ₸ (АКПП)</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
            <li>134 сағат теория + жеке кеңестер</li>
            <li>35 сағат АКПП-да тәжірибе</li>
            <li>Ішкі емтихандар шектеусіз</li>
            <li>Жеке менеджер</li>
          </ul>
        </div>
      </AnimatedSection>
    </div>

    <AnimatedSection delay={600}>
      <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Қосымша санаттар</h2>
        <div className="flex justify-around flex-wrap gap-4 text-center">
          <p className="text-lg font-medium">A санаты (Мотоциклдер): <span className="text-red-500 font-bold">80 000 ₸</span></p>
          <p className="text-lg font-medium">C санаты (Жүк көліктері): <span className="text-red-500 font-bold">350 000 ₸</span></p>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

// ============================================
// ЖҚЕ БЕЛГІЛЕР БЕТІ КОМПОНЕНТІ
// ============================================
const RulesPage = () => {
  const rules = [
    { 
      title: '1. Ескерту белгілері', 
      text: 'Жолдағы қауіптер туралы ескертеді. Әдетте қызыл жиегі бар үшбұрыш пішінді болады.', 
      icon: '▲', 
      color: 'yellow', 
      delay: 200 
    },
    { 
      title: '2. Басымдық белгілері', 
      text: 'Қиылыстардан, жолдардың кесілістерінен өту кезектілігін белгілейді.', 
      icon: '🛑', 
      color: 'red', 
      delay: 400 
    },
    { 
      title: '3. Тыйым салатын белгілер', 
      text: 'Қозғалысқа белгілі бір шектеулерді енгізеді. Көбінесе қызыл жиегі бар дөңгелек пішінді болады.', 
      icon: '🚫', 
      color: 'gray', 
      delay: 600 
    }
  ];

  return (
    <section id="rules" className={`${commonSectionClasses} bg-gray-100`}>
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-blue-700 mb-10 border-b-2 pb-3 text-center">ЖҚЕ: Жол белгілерінің негізгі топтары</h1>
        <p className="text-gray-600 mb-8 text-center max-w-xl mx-auto">
          Белгілерді білу – қауіпсіз жүргізудің негізі. Біздің теория курсымызда осы және басқа да ережелер толық оқытылады.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {rules.map((rule, idx) => (
          <AnimatedSection key={idx} delay={rule.delay}>
            <div className={`${cardClasses} border-t-4 border-${rule.color}-500 hover:scale-105 transition-transform duration-300`}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="mr-2 text-3xl">{rule.icon}</span> {rule.title}
              </h2>
              <p className="text-gray-700">{rule.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

// ============================================
// БІЗ ТУРАЛЫ БЕТІ КОМПОНЕНТІ
// ============================================
const AboutPage = () => {
  const stats = [
    { value: '95%', label: 'Сәтті тапсыру', color: 'green' },
    { value: '12+', label: 'Тәжірибелі нұсқаушылар', color: 'blue' },
    { value: '2010', label: 'Құрылған жылы', color: 'gray' }
  ];

  return (
    <section id="about" className={`${commonSectionClasses} bg-white`}>
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-green-700 mb-10 border-b-2 pb-3 text-center">Неліктен бізді таңдайды?</h1>
      </AnimatedSection>
      
      <AnimatedSection delay={200}>
        <div className="bg-green-50 p-8 rounded-xl shadow-inner space-y-4 hover:shadow-2xl transition-shadow duration-300">
          <p className="text-gray-700 text-lg">
            «Жасыл Шам» автомектебі 2010 жылдан бастап жұмыс істейді. Біздің түлектеріміз жолдағы ең жауапты және сенімді жүргізушілерге айналғанын мақтан тұтамыз.
          </p>
          <p className="text-gray-700 text-lg font-medium border-l-4 border-green-500 pl-4 py-1">
            Біздің барлық нұсқаушылардың жүргізу өтілі 10 жылдан асады және халықаралық оқыту стандарттары бойынша сертификатталған. Біз сабырлыққа, болжамдылыққа және жол қозғалысының басқа қатысушыларына құрмет көрсетуге үйретеміз.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center pt-4">
            {stats.map((stat, idx) => (
              <div key={idx} className={`p-3 bg-${stat.color}-200 rounded-lg hover:scale-110 transition-transform duration-300`}>
                <p className={`text-4xl font-extrabold text-${stat.color}-800`}>{stat.value}</p>
                <p className="text-sm text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

// ============================================
// БАЙЛАНЫС БЕТІ КОМПОНЕНТІ
// ============================================
const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className={`${commonSectionClasses} bg-gray-50`}>
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-blue-700 mb-10 border-b-2 pb-3 text-center">Алғашқы сабаққа жазылыңыз!</h1>
      </AnimatedSection>
      
      <div className="max-w-xl mx-auto">
        <AnimatedSection delay={200}>
          <div className={`${cardClasses} p-8 border-t-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300`}>
            <p className="text-gray-700 mb-6 text-center">
              Өзіңіздің деректеріңізді қалдырыңыз, біз сіздің оқу кестеңізді талқылау үшін 15 минут ішінде сізге қайта қоңырау шаламыз.
            </p>
            
            {isSubmitted && (
              <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg animate-fadeIn" role="alert">
                <strong>Рахмет!</strong> Өтінішіңіз қабылданды. Біз сізбен жақын арада байланысамыз.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Аты</label>
                <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-green-500 focus:border-green-500 transition" placeholder="Сіздің атыңыз" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Телефон</label>
                <input type="tel" id="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-green-500 focus:border-green-500 transition" placeholder="+7 (7XX) XXX-XX-XX" required />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Қызықтыратын санаты</label>
                <select id="category" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-green-500 focus:border-green-500 transition">
                  <option>B санаты (Жеңіл)</option>
                  <option>A санаты (Мото)</option>
                  <option>C санаты (Жүк)</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition shadow-xl disabled:opacity-50 transform hover:scale-105"
                disabled={isSubmitted}
              >
                Өтінім жіберу
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// ============================================
// ЖЕКЕ КАБИНЕТ - ҮЛГЕРІМ ТАБЫ
// ============================================
const ProgressTab = () => (
  <div className="space-y-6 animate-fadeIn">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Оқу үлгерімі</h2>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Теория</h3>
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span>Аяқталған сабақтар</span>
            <span className="font-bold">85/134</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-green-600 h-3 rounded-full transition-all duration-1000" style={{width: '63%'}}></div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Практика</h3>
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span>Өтілген сағаттар</span>
            <span className="font-bold">18/25</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full transition-all duration-1000" style={{width: '72%'}}></div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-yellow-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Соңғы тестілер</h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span>Жол белгілері</span>
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">92%</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Маневрлер</span>
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">88%</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Басымдық ережелері</span>
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">75%</span>
        </div>
      </div>
    </div>
  </div>
);

// ============================================
// ЖЕКЕ КАБИНЕТ - КЕСТЕ ТАБЫ
// ============================================
const ScheduleTab = () => {
  const lessons = [
    { date: '15 қараша, Дүйсенбі', time: '14:00-16:00', type: 'Теория', topic: 'Қауіпті жағдайлар' },
    { date: '17 қараша, Сәрсенбі', time: '10:00-12:00', type: 'Практика', topic: 'Қала бойынша жүргізу' },
    { date: '20 қараша, Сенбі', time: '16:00-18:00', type: 'Практика', topic: 'Параллель паркинг' }
  ];

  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Сабақтар кестесі</h2>
      
      {lessons.map((lesson, idx) => (
        <div key={idx} className="border-l-4 border-green-500 bg-white p-4 rounded-r-lg shadow hover:shadow-lg transition">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-bold text-gray-800">{lesson.date}</p>
              <p className="text-green-600 font-semibold">{lesson.time}</p>
              <p className="text-gray-600 mt-2">{lesson.topic}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              lesson.type === 'Теория' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
            }`}>
              {lesson.type}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

// ============================================
// ЖЕКЕ КАБИНЕТ - ТӨЛЕМДЕР ТАБЫ
// ============================================
const PaymentsTab = () => {
  const payments = [
    { date: '01.10.2025', amount: '50 000 ₸', status: 'Төленді' },
    { date: '15.10.2025', amount: '50 000 ₸', status: 'Төленді' },
    { date: '30.10.2025', amount: '50 000 ₸', status: 'Күтілуде' }
  ];

  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Төлемдер тарихы</h2>
      
      <div className="bg-green-50 p-6 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600">Жалпы сома</p>
            <p className="text-3xl font-bold text-green-700">150 000 ₸</p>
          </div>
          <div>
            <p className="text-gray-600">Төленді</p>
            <p className="text-3xl font-bold text-blue-700">100 000 ₸</p>
          </div>
          <div>
            <p className="text-gray-600">Қалды</p>
            <p className="text-3xl font-bold text-red-700">50 000 ₸</p>
          </div>
        </div>
      </div>

      {payments.map((payment, idx) => (
        <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <span className="text-gray-700">{payment.date}</span>
          <span className="font-bold text-gray-800">{payment.amount}</span>
          <span className={`px-3 py-1 rounded-full text-sm ${
            payment.status === 'Төленді' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
          }`}>
            {payment.status}
          </span>
        </div>
      ))}
    </div>
  );
};

// ============================================
// ЖЕКЕ КАБИНЕТ - ҚҰЖАТТАР ТАБЫ
// ============================================
const DocumentsTab = () => {
  const documents = [
    { name: 'Жеке куәлік көшірмесі', status: 'Қабылданды', icon: '✅' },
    { name: 'Медициналық анықтама', status: 'Қабылданды', icon: '✅' },
    { name: 'Фотосурет 3x4', status: 'Күтілуде', icon: '⏳' },
    { name: 'Шарт', status: 'Қол қойылды', icon: '✅' }
  ];

  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Құжаттар</h2>
      
      {documents.map((doc, idx) => (
        <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <div className="flex items-center">
            <span className="text-2xl mr-3">{doc.icon}</span>
            <span className="text-gray-800 font-medium">{doc.name}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            doc.status === 'Қабылданды' || doc.status === 'Қол қойылды' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-yellow-100 text-yellow-700'
          }`}>
            {doc.status}
          </span>
        </div>
      ))}
    </div>
  );
};

// ============================================
// ЖЕКЕ КАБИНЕТ - НЕГІЗГІ КОМПОНЕНТ
// ============================================
const UserDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('progress');

  const tabs = [
    { id: 'progress', label: 'Үлгерім', icon: '📊' },
    { id: 'schedule', label: 'Кесте', icon: '📅' },
    { id: 'payments', label: 'Төлемдер', icon: '💳' },
    { id: 'documents', label: 'Құжаттар', icon: '📄' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 animate-fadeIn">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-green-700">Сәлеметсіз бе, {user.name}!</h1>
              <p className="text-gray-600 mt-1">Санат: {user.category} | Нұсқаушы: {user.instructor}</p>
            </div>
            <button
              onClick={onLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
            >
              Шығу
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex border-b">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-6 text-center transition ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'progress' && <ProgressTab />}
            {activeTab === 'schedule' && <ScheduleTab />}
            {activeTab === 'payments' && <PaymentsTab />}
            {activeTab === 'documents' && <DocumentsTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// НЕГІЗГІ APP КОМПОНЕНТІ
// ============================================
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  const navItems = [
    { label: 'Басты бет', id: 'home' },
    { label: 'Курстар және бағалар', id: 'courses' },
    { label: 'ЖҚЕ: Белгілер', id: 'rules' },
    { label: 'Біз туралы', id: 'about' },
    { label: 'Байланыс', id: 'contact' },
  ];

  const handleLogin = () => {
    const mockUser = {
      name: 'Андижан Мұхаммед',
      category: 'B санаты (Стандарт)',
      instructor: 'Галиханов Ілияс'
    };
    setUser(mockUser);
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  if (isLoggedIn && user) {
    return (
      <>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{globalStyles}</style>
        <UserDashboard user={user} onLogout={handleLogout} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{globalStyles}</style>
      
      <LoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
        onLogin={handleLogin}
      />
      
      <Navigation 
        navItems={navItems} 
        onLoginClick={() => setShowLogin(true)}
      />

      <main className="min-h-[100vh]">
        <HomePage />
        <CoursesPage />
        <RulesPage />
        <AboutPage />
        <ContactPage />
      </main>

      <Footer />
    </div>
  );
};

export default App;