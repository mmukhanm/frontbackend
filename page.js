"use client"; 

import React, { useState } from 'react';

const commonSectionClasses = "py-16 px-4 md:px-8 max-w-6xl mx-auto";
const cardClasses = "bg-white p-6 rounded-xl shadow-lg";

// --- 1. Басты бет (Home Section) ---
const HomeSection = () => (
  <section id="home" className={`${commonSectionClasses} bg-gray-50 text-center`}>
    <h1 className="text-6xl font-extrabold text-green-700 mb-6">«Жасыл Шам» Автомектебі</h1>
    <p className="text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
      Жүргізуші куәлігіне кәсіби мамандармен жол бастаңыз. Біз заманауи автокөліктерді, тәжірибелі нұсқаушыларды және емтиханды сәтті тапсырудың **95% кепілдігін** ұсынамыз!
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-left">
      <div className={`${cardClasses} hover:shadow-green-300 transition duration-300 border-t-4 border-green-500`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Практикалық сабақтар</h2>
        <p className="text-gray-600">Сіздің таңдауыңыз бойынша МКПП немесе АКПП. Қала бойынша және арнайы алаңдағы дайындық.</p>
      </div>
      <div className={`${cardClasses} hover:shadow-blue-300 transition duration-300 border-t-4 border-blue-500`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Онлайн Теория</h2>
        <p className="text-gray-600">Теориялық оқытудың икемді кестесі. Сабақтарды үйден немесе жұмыстан көріңіз.</p>
      </div>
      <div className={`${cardClasses} hover:shadow-yellow-300 transition duration-300 border-t-4 border-yellow-500`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Қолдау</h2>
        <p className="text-gray-600">Құжаттарды ресімдеуде және емтиханға дайындалуда толық сүйемелдеу.</p>
      </div>
    </div>
  </section>
);

// --- 2. Курстар және бағалар (Courses Section) ---
const CoursesSection = () => (
  <section id="courses" className={`${commonSectionClasses} bg-white`}>
    <h1 className="text-4xl font-bold text-green-700 mb-10 border-b-2 pb-3 text-center">Санаттар және оқыту пакеттері</h1>
    
    <div className="grid md:grid-cols-2 gap-8">
      {/* Пакет Standard */}
      <div className={`${cardClasses} border-l-8 border-green-500`}>
        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Ең танымал</span>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">"B" санаты (Стандарт)</h2>
        <p className="text-green-600 text-2xl font-bold mb-4">150 000 ₸</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
          <li>134 сағат теория (онлайн/офлайн)</li>
          <li>25 сағат МКПП-да тәжірибе</li>
          <li>Жол полициясында толық қолдау</li>
          <li>Оқу мерзімі: 3 ай</li>
        </ul>
      </div>
      
      {/* Пакет Premium */}
      <div className={`${cardClasses} border-l-8 border-blue-500`}>
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Ұсынылады</span>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">"B" санаты (Премиум)</h2>
        <p className="text-blue-600 text-2xl font-bold mb-4">250 000 ₸ (АКПП)</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
          <li>134 сағат теория + жеке кеңестер</li>
          <li>35 сағат АКПП-да тәжірибе</li>
          <li>Ішкі емтихандар шектеусіз</li>
          <li>Жеке менеджер</li>
        </ul>
      </div>
    </div>

    {/* Другие Категории */}
    <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Қосымша санаттар</h2>
      <div className="flex justify-around flex-wrap gap-4 text-center">
        <p className="text-lg font-medium">"A" санаты (Мотоциклдер): <span className="text-red-500 font-bold">80 000 ₸</span></p>
        <p className="text-lg font-medium">"C" санаты (Жүк көліктері): <span className="text-red-500 font-bold">350 000 ₸</span></p>
      </div>
    </div>
  </section>
);

// --- 3. ЖҚЕ: Белгілер (Rules Section) ---
const RulesSection = () => (
  <section id="rules" className={`${commonSectionClasses} bg-gray-100`}>
    <h1 className="text-4xl font-bold text-blue-700 mb-10 border-b-2 pb-3 text-center">ЖҚЕ: Жол белгілерінің негізгі топтары</h1>
    <p className="text-gray-600 mb-8 text-center max-w-xl mx-auto">
      Белгілерді білу – қауіпсіз жүргізудің негізі. Біздің теория курсымызда осы және басқа да ережелер толық оқытылады.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      {/* Группа 1: Ескерту белгілері */}
      <div className={`${cardClasses} border-t-4 border-yellow-500`}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
          <span className="text-yellow-500 mr-2 text-3xl">▲</span> 1. Ескерту белгілері
        </h2>
        <p className="text-gray-700">
          Жолдағы қауіптер туралы ескертеді. Әдетте қызыл жиегі бар үшбұрыш пішінді болады. (Мысалы: Қауіпті бұрылыс, Жол жұмыстары).
        </p>
      </div>

      {/* Группа 2: Басымдық белгілері */}
      <div className={`${cardClasses} border-t-4 border-red-500`}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
          <span className="text-red-500 mr-2 text-3xl">🛑</span> 2. Басымдық белгілері
        </h2>
        <p className="text-gray-700">
          Қиылыстардан, жолдардың кесілістерінен өту кезектілігін белгілейді. (Мысалы: Жол бер, Басты жол).
        </p>
      </div>

      {/* Группа 3: Тыйым салатын белгілер */}
      <div className={`${cardClasses} border-t-4 border-gray-700`}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
          <span className="text-red-700 mr-2 text-3xl">🚫</span> 3. Тыйым салатын белгілер
        </h2>
        <p className="text-gray-700">
          Қозғалысқа белгілі бір шектеулерді енгізеді. Көбінесе қызыл жиегі бар дөңгелек пішінді болады. (Мысалы: Кіруге тыйым салынады).
        </p>
      </div>
    </div>
  </section>
);

// --- 4. Біз туралы (About Section) ---
const AboutSection = () => (
  <section id="about" className={`${commonSectionClasses} bg-white`}>
    <h1 className="text-4xl font-bold text-green-700 mb-10 border-b-2 pb-3 text-center">Неліктен бізді таңдайды?</h1>
    
    <div className="bg-green-50 p-8 rounded-xl shadow-inner space-y-4">
      <p className="text-gray-700 text-lg">
        «Жасыл Шам» автомектебі 2010 жылдан бастап жұмыс істейді. Біздің түлектеріміз жолдағы ең жауапты және сенімді жүргізушілерге айналғанын мақтан тұтамыз.
      </p>
      <p className="text-gray-700 text-lg font-medium border-l-4 border-green-500 pl-4 py-1">
        Біздің барлық нұсқаушылардың жүргізу өтілі 10 жылдан асады және халықаралық оқыту стандарттары бойынша сертификатталған. Біз сабырлыққа, болжамдылыққа және жол қозғалысының басқа қатысушыларына құрмет көрсетуге үйретеміз.
      </p>
      <div className="grid grid-cols-3 gap-4 text-center pt-4">
        <div className="p-3 bg-green-200 rounded-lg">
          <p className="text-4xl font-extrabold text-green-800">95%</p>
          <p className="text-sm text-gray-700">Сәтті тапсыру</p>
        </div>
        <div className="p-3 bg-blue-200 rounded-lg">
          <p className="text-4xl font-extrabold text-blue-800">12+</p>
          <p className="text-sm text-gray-700">Тәжірибелі нұсқаушылар</p>
        </div>
        <div className="p-3 bg-gray-200 rounded-lg">
          <p className="text-4xl font-extrabold text-gray-800">2010</p>
          <p className="text-sm text-gray-700">Құрылған жылы</p>
        </div>
      </div>
    </div>
  </section>
);

// --- 5. Байланыс (Contact Section) ---
const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // На самом деле здесь была бы логика отправки данных на сервер (Firestore/Backend)
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className={`${commonSectionClasses} bg-gray-50`}>
      <h1 className="text-4xl font-bold text-blue-700 mb-10 border-b-2 pb-3 text-center">Алғашқы сабаққа жазылыңыз!</h1>
      <div className="max-w-xl mx-auto">
        <div className={`${cardClasses} p-8 border-t-4 border-blue-500`}>
          <p className="text-gray-700 mb-6 text-center">
            Өзіңіздің деректеріңізді қалдырыңыз, біз сіздің оқу кестеңізді талқылау үшін 15 минут ішінде сізге қайта қоңырау шаламыз.
          </p>
          
          {isSubmitted && (
            <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
              <strong>Рахмет!</strong> Өтінішіңіз қабылданды. Біз сізбен жақын арада байланысамыз.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Аты</label>
              <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-green-500 focus:border-green-500" placeholder="Сіздің атыңыз" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Телефон</label>
              <input type="tel" id="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-green-500 focus:border-green-500" placeholder="+7 (7XX) XXX-XX-XX" required />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Қызықтыратын санаты</label>
              <select id="category" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-green-500 focus:border-green-500">
                <option>B санаты (Жеңіл)</option>
                <option>A санаты (Мото)</option>
                <option>C санаты (Жүк)</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition shadow-xl disabled:opacity-50"
              disabled={isSubmitted}
            >
              Өтінім жіберу
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


// Главный компонент приложения (Single Page Website)
const App = () => {
  // Нам не нужен useState для навигации, так как мы используем нативные anchor-ссылки (#id)

  // Данные для навигационной панели (на казахском)
  const navItems = [
    { label: 'Басты бет', id: 'home' },
    { label: 'Курстар және бағалар', id: 'courses' },
    { label: 'ЖҚЕ: Белгілер', id: 'rules' },
    { label: 'Біз туралы', id: 'about' },
    { label: 'Байланыс', id: 'contact' },
  ];

  // Компонент NavLink теперь использует <a> с href=#id
  const NavLink = ({ label, id }) => (
    <a
      href={`#${id}`}
      // В CSS мы добавим плавный скроллинг
      className={`
        px-3 py-2 rounded-full transition duration-300 text-sm md:text-base
        text-gray-100 hover:bg-green-600 hover:text-white
        // В SPA сложно точно отслеживать, какой элемент активен, поэтому убрал класс active
      `}
    >
      {label}
    </a>
  );
  
  // Добавление CSS для плавного скроллинга
  const globalStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
    body { 
      font-family: 'Inter', sans-serif; 
      scroll-behavior: smooth; /* Плавный скроллинг к якорям */
    }
    section {
        min-height: 80vh; /* Минимальная высота для видимости секций */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
  `;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{globalStyles}</style>
      
      {/* Навигационная панель (Шапка) */}
      <header className="bg-green-700 shadow-xl sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Логотип / Название сайта */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="text-3xl font-bold text-white cursor-pointer hover:text-green-200 transition"
              >
                Автомектеп <span className="text-yellow-300">Жасыл Шам</span>
              </a>
            </div>
            
            {/* Основные ссылки */}
            <nav className="hidden md:flex space-x-2">
              {navItems.map(item => (
                <NavLink key={item.id} label={item.label} id={item.id} />
              ))}
            </nav>

            {/* Мобильное меню (кнопка) */}
            <div className="md:hidden">
              <button
                onClick={() => alert("Мәзір жоғарғы жағында немесе мобильді нұсқада қолжетімді. Навигация үшін '#id' қолданылады.")}
                className="text-white hover:text-green-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white"
              >
                {/* Иконка бургер-меню */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Основной контент страницы: Все секции подряд */}
      <main className="min-h-[100vh]">
        <HomeSection />
        <CoursesSection />
        <RulesSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Футер */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-4xl mx-auto p-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} «Жасыл Шам» Автомектебі. Барлық құқықтар қорғалған.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;