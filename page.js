"use client"; // <--- Бұл директива useState пайдалану үшін қажет

import React, { useState } from 'react';

// Компонент для отображения одной страницы
const PageContent = ({ page, navigateTo }) => {
  const commonClasses = "p-8 max-w-4xl mx-auto min-h-[60vh] md:p-10";

  // --- 1. Басты бет (Главная) ---
  if (page === 'home') {
    return (
      <div className={commonClasses}>
        <h1 className="text-5xl font-extrabold text-green-700 mb-6 text-center">«Жасыл Шам» Автомектебі</h1>
        <p className="text-xl text-gray-700 mb-10 leading-relaxed text-center">
          Жүргізуші куәлігіне кәсіби мамандармен жол бастаңыз. Біз заманауи автокөліктерді, тәжірибелі нұсқаушыларды және емтиханды сәтті тапсырудың 95% кепілдігін ұсынамыз!
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-green-300 transition duration-300 border-t-4 border-green-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Біздің курстар мен бағалар</h2>
            <p className="text-gray-600 mb-4">A, B немесе C санаттарын таңдаңыз. Бізде икемді кестелер және ыңғайлы оқыту пакеттері бар.</p>
            <button
              onClick={() => navigateTo('courses')}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition shadow-md"
            >
              Бағаларды көру
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-blue-300 transition duration-300 border-t-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Теория: ЖҚЕ белгілері</h2>
            <p className="text-gray-600 mb-4">Негізгі жол белгілерін қазірден бастап оқыңыз. Бұл маңызды және оңай!</p>
            <button
              onClick={() => navigateTo('rules')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition shadow-md"
            >
              ЖҚЕ оқу
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- 2. Курстар және бағалар (Курсы и Цены) ---
  if (page === 'courses') {
    return (
      <div className={commonClasses}>
        <h1 className="text-4xl font-bold text-green-700 mb-8 border-b pb-2">Санаттар және оқыту пакеттері</h1>
        
        <div className="space-y-6">
          {/* Пакет Standard */}
          <div className="bg-white p-6 rounded-xl shadow-xl border-l-4 border-green-500">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">"B" санаты (Стандарт)</h2>
            <p className="text-green-600 text-xl font-semibold mb-4">150 000 ₸</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>134 сағат теория (онлайн/офлайн)</li>
              <li>25 сағат МКПП-да тәжірибе</li>
              <li>Жол полициясында толық қолдау</li>
              <li>Оқу мерзімі: 3 ай</li>
            </ul>
          </div>
          
          {/* Пакет Premium */}
          <div className="bg-white p-6 rounded-xl shadow-xl border-l-4 border-blue-500">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">"B" санаты (Премиум)</h2>
            <p className="text-blue-600 text-xl font-semibold mb-4">250 000 ₸ (АКПП)</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>134 сағат теория + жеке кеңестер</li>
              <li>35 сағат АКПП-да тәжірибе</li>
              <li>Ішкі емтихандар шектеусіз</li>
              <li>Жеке менеджер</li>
            </ul>
          </div>

          {/* Другие Категории */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Қосымша санаттар</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>**"A" санаты**: Мотоциклдер (80 000 ₸)</li>
              <li>**"C" санаты**: Жүк көліктері (350 000 ₸)</li>
            </ul>
          </div>
        </div>
        
        <button
          onClick={() => navigateTo('home')}
          className="mt-8 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          &larr; Басты бетке
        </button>
      </div>
    );
  }

  // --- 3. ЖҚЕ: Белгілер (ПДД: Знаки) ---
  if (page === 'rules') {
    return (
      <div className={commonClasses}>
        <h1 className="text-4xl font-bold text-blue-700 mb-8 border-b pb-2">Жол белгілерінің негізгі топтары</h1>
        <p className="text-gray-600 mb-6">Белгілерді білу – қауіпсіз жүргізудің негізі. Міне, үш негізгі топ.</p>

        <div className="bg-white p-6 rounded-xl shadow-xl space-y-6">
          {/* Группа 1: Ескерту белгілері */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="text-yellow-500 mr-2 text-3xl">▲</span> 1. Ескерту белгілері
            </h2>
            <p className="text-gray-700 mb-2">
              Әдетте қызыл жиегі бар үшбұрыш пішінді болады. Жолдағы қауіптер туралы ескертеді.
            </p>
            <ul className="list-disc list-inside ml-6 text-sm text-gray-600">
              <li>Мысал: "Шлагбаумсыз теміржол өткелі", "Қауіпті бұрылыстар".</li>
            </ul>
            [Ескерту жол белгілерінің суреті]
          </div>

          {/* Группа 2: Басымдық белгілері */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="text-red-500 mr-2 text-3xl">🛑</span> 2. Басымдық белгілері
            </h2>
            <p className="text-gray-700 mb-2">
              Қиылыстардан, жолдардың кесілістерінен немесе жолдың тар учаскелерінен өту кезектілігін белгілейді.
            </p>
            <ul className="list-disc list-inside ml-6 text-sm text-gray-600">
              <li>Мысал: "Жол бер", "Басты жол".</li>
            </ul>
          </div>

          {/* Группа 3: Тыйым салатын белгілер */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="text-red-700 mr-2 text-3xl">🚫</span> 3. Тыйым салатын белгілер
            </h2>
            <p className="text-gray-700 mb-2">
              Қозғалысқа белгілі бір шектеулерді енгізеді немесе алып тастайды. Көбінесе қызыл жиегі бар дөңгелек пішінді болады.
            </p>
            <ul className="list-disc list-inside ml-6 text-sm text-gray-600">
              <li>Мысал: "Кіруге тыйым салынады", "Ең жоғары жылдамдықты шектеу".</li>
            </ul>
          </div>
        </div>
        
        <button
          onClick={() => navigateTo('home')}
          className="mt-8 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          &larr; Басты бетке
        </button>
      </div>
    );
  }

  // --- 4. Біз туралы (О нас) ---
  if (page === 'about') {
    return (
      <div className={commonClasses}>
        <h1 className="text-4xl font-bold text-green-700 mb-6 border-b pb-2">Неліктен бізді таңдайды?</h1>
        <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
          <p className="text-gray-700 text-lg">
            «Жасыл Шам» автомектебі 2010 жылдан бастап жұмыс істейді. Біздің түлектеріміз жолдағы ең жауапты және сенімді жүргізушілерге айналғанын мақтан тұтамыз.
          </p>
          <p className="text-gray-700 text-lg font-medium border-l-4 border-green-500 pl-4 py-1">
            Біздің барлық нұсқаушылардың жүргізу өтілі 10 жылдан асады және халықаралық оқыту стандарттары бойынша сертификатталған. Біз сабырлыққа, болжамдылыққа және жол қозғалысының басқа қатысушыларына құрмет көрсетуге үйретеміз.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center mt-6">
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-3xl font-bold text-green-600">95%</p>
              <p className="text-sm text-gray-600">Сәтті тапсыру</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">12+</p>
              <p className="text-sm text-gray-600">Тәжірибелі нұсқаушылар</p>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg">
              <p className="text-3xl font-bold text-gray-600">2010</p>
              <p className="text-sm text-gray-600">Құрылған жылы</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- 5. Байланыс (Контакты) ---
  if (page === 'contact') {
    return (
      <div className={commonClasses}>
        <h1 className="text-4xl font-bold text-blue-700 mb-6 border-b pb-2">Алғашқы сабаққа жазылыңыз!</h1>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-gray-700 mb-6">
            Өзіңіздің деректеріңізді қалдырыңыз, біз сіздің оқу кестеңізді талқылау үшін 15 минут ішінде сізге қайта қоңырау шаламыз.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Аты</label>
              <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-green-500 focus:border-green-500" placeholder="Сіздің атыңыз" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Телефон</label>
              <input type="tel" id="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-green-500 focus:border-green-500" placeholder="+7 (7XX) XXX-XX-XX" />
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
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition shadow-xl"
              onClick={(e) => { e.preventDefault(); alert("Өтінішіңіз үшін рахмет! Біз сізбен жақын арада байланысамыз."); }}
            >
              Өтінім жіберу
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Страница 404
  if (page === '404') {
    return (
      <div className={commonClasses}>
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 Қате</h1>
        <p className="text-gray-600">Бет табылмады. Басты бетке оралыңыз.</p>
      </div>
    );
  }
  
  // Дефолтное отображение
  return <PageContent page="404" />;
};

// Главный компонент приложения (имитация Next.js App)
const App = () => {
  // State для имитации маршрутизации (хранит текущую страницу)
  const [currentPage, setCurrentPage] = useState('home');

  // Функция для навигации
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Прокрутка наверх при смене страницы
  };

  // Данные для навигационной панели (на казахском)
  const navItems = [
    { label: 'Басты бет', page: 'home' },
    { label: 'Курстар және бағалар', page: 'courses' },
    { label: 'ЖҚЕ: Белгілер', page: 'rules' },
    { label: 'Біз туралы', page: 'about' },
    { label: 'Байланыс', page: 'contact' },
  ];

  const NavLink = ({ label, page }) => (
    <button
      onClick={() => navigateTo(page)}
      className={`
        px-3 py-2 rounded-full transition duration-300 text-sm md:text-base
        ${currentPage === page
          ? 'bg-white text-green-700 shadow-md font-semibold'
          : 'text-gray-100 hover:bg-green-600 hover:text-white'
        }
      `}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>
      
      {/* Навигационная панель (Шапка) */}
      <header className="bg-green-700 shadow-xl sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Логотип / Название сайта */}
            <div className="flex-shrink-0">
              <span
                className="text-3xl font-bold text-white cursor-pointer hover:text-green-200 transition"
                onClick={() => navigateTo('home')}
              >
                Автомектеп <span className="text-yellow-300">Жасыл Шам</span>
              </span>
            </div>
            
            {/* Основные ссылки */}
            <nav className="hidden md:flex space-x-2">
              {navItems.map(item => (
                <NavLink key={item.page} label={item.label} page={item.page} />
              ))}
            </nav>

            {/* Мобильное меню (используем кнопку для открытия) */}
            <div className="md:hidden">
              <button
                onClick={() => alert("Навигация (Басты бет, Курстар) жоғарғы панельде қолжетімді.")}
                className="text-white hover:text-green-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white"
              >
                {/* Иконка бургер-меню */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Основной контент страницы */}
      <main className="py-12">
        <PageContent page={currentPage} navigateTo={navigateTo} />
      </main>

      {/* Футер */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-4xl mx-auto p-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} «Жасыл Шам» Автомектебі. Барлық құқықтар қорғалған.</p>
          <p className="text-gray-400 mt-1">Next.js негізінде жасалған көпбеттік қосымшаның имитациясы.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;