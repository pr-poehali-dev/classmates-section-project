import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const GRADUATION_DATE = new Date('2026-06-20T00:00:00');
const REUNION_DATE = new Date('2036-09-01T00:00:00');

const classmates = [
  {
    id: 1,
    name: 'Александра Петрова',
    emoji: '🌸',
    role: 'Отличница и душа компании',
    bio: 'Всегда готова помочь с домашним заданием и поднять настроение своей улыбкой. Мечтает стать врачом.',
    facts: ['Читает по 3 книги в месяц', 'Победитель олимпиады по биологии', 'Тайный кондитер'],
    color: 'from-rose-900/40 to-pink-900/30',
    accent: '#f9a8d4',
  },
  {
    id: 2,
    name: 'Дмитрий Козлов',
    emoji: '⚡',
    role: 'Технарь и изобретатель',
    bio: 'Чинит всё, что ломается в классе. Уже написал три приложения и мечтает о стартапе.',
    facts: ['Участвовал в хакатоне', 'Знает 4 языка программирования', 'Ест пиццу каждый день'],
    color: 'from-blue-900/40 to-indigo-900/30',
    accent: '#93c5fd',
  },
  {
    id: 3,
    name: 'Мария Сидорова',
    emoji: '🎨',
    role: 'Художник и творческий дух',
    bio: 'Украшает жизнь класса своими рисунками. Её скетчбук — целая энциклопедия школьной жизни.',
    facts: ['Рисует с 4 лет', 'Три выставки в городе', 'Делает татуировки хной'],
    color: 'from-amber-900/40 to-orange-900/30',
    accent: '#fcd34d',
  },
  {
    id: 4,
    name: 'Иван Новиков',
    emoji: '⚽',
    role: 'Капитан команды',
    bio: 'Первый на поле, последний с тренировки. Его голы приносят победы, а шутки — хорошее настроение.',
    facts: ['Забил 47 голов за сезон', 'КМС по футболу', 'Боится пауков'],
    color: 'from-green-900/40 to-emerald-900/30',
    accent: '#86efac',
  },
  {
    id: 5,
    name: 'Екатерина Морозова',
    emoji: '🎵',
    role: 'Музыкант и поэт',
    bio: 'Написала гимн нашего класса. Голос, от которого замирает сердце на каждом школьном концерте.',
    facts: ['Поёт с 6 лет', 'Сочинила 12 песен', 'Коллекционирует виниловые пластинки'],
    color: 'from-violet-900/40 to-purple-900/30',
    accent: '#c4b5fd',
  },
  {
    id: 6,
    name: 'Артём Волков',
    emoji: '📚',
    role: 'Философ и книгочей',
    bio: 'Всегда имеет мнение на любую тему. Его рассуждения о жизни удивляют даже учителей.',
    facts: ['Прочитал 200+ книг', 'Ведёт философский блог', 'Встаёт в 5 утра каждый день'],
    color: 'from-teal-900/40 to-cyan-900/30',
    accent: '#5eead4',
  },
];

const memories = [
  { id: 1, emoji: '🏕️', title: 'Школьный поход', year: '2023', text: 'Три дня в лесу, бесконечный дождь и самые вкусные сосиски в жизни.' },
  { id: 2, emoji: '🎭', title: 'Новогодний спектакль', year: '2024', text: 'Иван забыл слова, но импровизировал так, что весь зал смеялся 10 минут.' },
  { id: 3, emoji: '🏆', title: 'Победа на олимпиаде', year: '2024', text: 'Первое место в городе по физике. Мы кричали на весь коридор!' },
  { id: 4, emoji: '🍕', title: 'День рождения класса', year: '2023', text: 'Пицца, фильм до утра и клятва дружить вечно.' },
  { id: 5, emoji: '✈️', title: 'Экскурсия в Москву', year: '2025', text: 'Потеряли Диму в метро, нашли в кафе с ноутбуком — работал над стартапом.' },
  { id: 6, emoji: '🎓', title: 'Последний звонок', year: '2026', text: 'Этот день настал. Всё впереди — и это самое прекрасное.' },
];

const galleryItems = [
  { id: 1, emoji: '📷', label: 'Первый урок', year: '2015' },
  { id: 2, emoji: '🎪', label: 'Школьный праздник', year: '2019' },
  { id: 3, emoji: '🌟', label: 'Награждение', year: '2022' },
  { id: 4, emoji: '🎯', label: 'Соревнования', year: '2023' },
  { id: 5, emoji: '🌸', label: 'Весенний день', year: '2024' },
  { id: 6, emoji: '🏅', label: 'Победители', year: '2024' },
  { id: 7, emoji: '🎶', label: 'Концерт', year: '2025' },
  { id: 8, emoji: '🎓', label: 'Выпускной', year: '2026' },
];

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

function Stars() {
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: `${Math.random() * 4}s`,
    duration: `${Math.random() * 3 + 2}s`,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  );
}

function Nav({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const tabs = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'profiles', label: 'Профили', icon: 'Users' },
    { id: 'memories', label: 'Воспоминания', icon: 'Heart' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-3 py-2 shadow-2xl">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-golos font-medium transition-all duration-300 ${
              active === t.id
                ? 'bg-gold text-black shadow-lg'
                : 'text-white/60 hover:text-white/90'
            }`}
          >
            <Icon name={t.icon} size={15} />
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

function CountdownBlock({ label, date, small }: { label: string; date: Date; small?: boolean }) {
  const { days, hours, minutes, seconds } = useCountdown(date);
  return (
    <div className={small ? 'opacity-70' : ''}>
      <p className="font-golos text-gold/60 text-xs tracking-[0.25em] uppercase mb-4">{label}</p>
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        {[
          { value: days, label: 'дней' },
          { value: hours, label: 'часов' },
          { value: minutes, label: 'минут' },
          { value: seconds, label: 'секунд' },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <div className={`flex items-center justify-center bg-card border border-gold/20 rounded-2xl glow-gold mb-2 ${small ? 'w-12 sm:w-16 h-12 sm:h-16' : 'w-16 sm:w-24 h-16 sm:h-24'}`}>
              <span className={`font-cormorant font-bold text-gold ${small ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-5xl'}`}>
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <p className="font-golos text-muted-foreground text-xs uppercase tracking-wider">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomePage({ setActive }: { setActive: (s: string) => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-24 pb-16">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/f63ece15-7ca9-45b0-aec1-5eb06da68222/files/cfcca1f1-ddef-417f-bd15-366ee540ec07.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <p className="font-golos text-gold/70 text-sm tracking-[0.3em] uppercase mb-4">
            2015 — 2026
          </p>
          <h1 className="font-cormorant text-6xl sm:text-8xl font-light text-foreground leading-none mb-2">
            Великий
          </h1>
          <h1 className="font-cormorant text-6xl sm:text-8xl font-bold text-gold leading-none mb-8">
            Гэ класс
          </h1>
        </div>

        <p className="animate-fade-in-up delay-200 font-golos text-muted-foreground text-lg max-w-lg mx-auto mb-16 opacity-0" style={{ animationFillMode: 'forwards' }}>
          или ге... За 9+2 года так и не определились.
        </p>

        <div className="animate-fade-in-up delay-300 opacity-0 mb-10 text-center" style={{ animationFillMode: 'forwards' }}>
          <CountdownBlock label="До выпускного осталось" date={GRADUATION_DATE} />
        </div>

        <div className="animate-fade-in-up delay-400 opacity-0 mb-16 text-center" style={{ animationFillMode: 'forwards' }}>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold/20 to-transparent mx-auto mb-8" />
          <CountdownBlock label="До следующей встречи выпускников осталось" date={REUNION_DATE} small />
        </div>

        <div className="animate-fade-in-up delay-500 opacity-0 flex flex-wrap gap-4 justify-center" style={{ animationFillMode: 'forwards' }}>
          <button
            onClick={() => setActive('profiles')}
            className="group flex items-center gap-2 bg-gold text-black font-golos font-semibold px-8 py-3 rounded-full hover:bg-gold-light transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Icon name="Users" size={18} />
            Посмотреть профили
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-float">
        <div className="text-gold/30 text-xs font-golos tracking-widest">✦ ✦ ✦</div>
      </div>
    </div>
  );
}

function ProfilesPage() {
  const [selected, setSelected] = useState<typeof classmates[0] | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="font-golos text-gold/60 text-xs tracking-[0.3em] uppercase mb-3">Знакомьтесь</p>
          <h2 className="font-cormorant text-5xl sm:text-7xl font-light text-foreground">
            Наши <span className="text-gold italic">люди</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classmates.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setSelected(c)}
              className={`text-left bg-card border border-border rounded-3xl p-6 card-hover animate-fade-in-up opacity-0`}
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-3xl mb-4 border border-white/10`}>
                {c.emoji}
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-1">{c.name}</h3>
              <p className="font-golos text-xs text-muted-foreground mb-4">{c.role}</p>
              <div className="flex flex-wrap gap-2">
                {c.facts.slice(0, 2).map((f, fi) => (
                  <span key={fi} className="font-golos text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                    {f}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-golos" style={{ color: c.accent }}>
                <span>Подробнее</span>
                <Icon name="ArrowRight" size={12} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-card border border-border rounded-3xl p-8 max-w-md w-full animate-scale-in relative shadow-2xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selected.color} flex items-center justify-center text-4xl mb-5 border border-white/10`}>
              {selected.emoji}
            </div>
            <h3 className="font-cormorant text-3xl font-semibold text-foreground mb-1">{selected.name}</h3>
            <p className="font-golos text-xs text-gold mb-4 uppercase tracking-wider">{selected.role}</p>
            <p className="font-golos text-muted-foreground text-sm leading-relaxed mb-6">{selected.bio}</p>
            <div>
              <p className="font-golos text-xs text-muted-foreground uppercase tracking-wider mb-3">Интересные факты</p>
              <ul className="space-y-2">
                {selected.facts.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 font-golos text-sm text-foreground">
                    <span className="text-gold text-xs">✦</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MemoriesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="font-golos text-gold/60 text-xs tracking-[0.3em] uppercase mb-3">11 лет вместе</p>
          <h2 className="font-cormorant text-5xl sm:text-7xl font-light text-foreground">
            <span className="text-gold italic">Воспоминания</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

          <div className="space-y-8">
            {memories.map((m, i) => (
              <div
                key={m.id}
                className="relative flex gap-6 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-card border border-gold/30 flex items-center justify-center text-2xl z-10 glow-gold">
                  {m.emoji}
                </div>
                <div className="flex-1 bg-card border border-border rounded-2xl p-5 hover:border-gold/30 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-cormorant text-xl font-semibold text-foreground">{m.title}</h3>
                    <span className="font-golos text-xs text-gold/60 border border-gold/20 px-3 py-1 rounded-full">{m.year}</span>
                  </div>
                  <p className="font-golos text-sm text-muted-foreground leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30" />
            <span className="font-cormorant text-2xl italic text-gold/60">и ещё тысячи моментов...</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="font-golos text-gold/60 text-xs tracking-[0.3em] uppercase mb-3">Наши фото</p>
          <h2 className="font-cormorant text-5xl sm:text-7xl font-light text-foreground">
            <span className="text-gold italic">Галерея</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`animate-fade-in-up opacity-0 group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/40 transition-all duration-300 card-hover ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              style={{
                animationDelay: `${i * 0.08}s`,
                animationFillMode: 'forwards',
                aspectRatio: i === 0 ? '1/1' : '4/3',
              }}
            >
              <div
                className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(https://cdn.poehali.dev/projects/f63ece15-7ca9-45b0-aec1-5eb06da68222/files/c691542c-8676-4af4-80f8-df75a6d7ed35.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: `${(i * 15) % 100}% ${(i * 20) % 100}%`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-golos text-white text-sm font-medium">{item.label}</p>
                <p className="font-golos text-gold/70 text-xs">{item.year}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="group flex items-center gap-2 mx-auto border border-gold/40 text-gold font-golos px-8 py-3 rounded-full hover:bg-gold/10 transition-all duration-300">
            <Icon name="Upload" size={16} />
            Добавить фотографии
          </button>
          <p className="font-golos text-muted-foreground text-xs mt-3">Скоро можно будет загружать свои снимки</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState('home');

  const renderPage = () => {
    switch (active) {
      case 'home': return <HomePage setActive={setActive} />;
      case 'profiles': return <ProfilesPage />;
      case 'memories': return <MemoriesPage />;
      case 'gallery': return <GalleryPage />;
      default: return <HomePage setActive={setActive} />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Stars />
      <Nav active={active} setActive={setActive} />
      <main key={active} className="animate-fade-in">
        {renderPage()}
      </main>
    </div>
  );
}