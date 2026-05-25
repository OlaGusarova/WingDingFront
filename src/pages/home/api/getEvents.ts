import type { Event } from '../../../app/(pages)/types'
// Серверная функция для получения событий
export async function getEvents(): Promise<Event[]> {
  // Здесь будет запрос к бэкенду
  // const res = await fetch('http://localhost:5000/api/events');
  // return res.json();
  
  // Демо-данные
  return [
    {
      id: 1,
      title: 'Концерт группы "Звуки Му"',
      description: 'Легендарная рок-группа с юбилейным туром. Не пропустите!',
      date: '2026-06-15T19:00:00',
      location: 'Крокус Сити Холл, Москва',
      image: '/images/concert1.jpg',
      price: 2500,
      isFree: false,
      category: 'concert',
    },
    {
      id: 2,
      title: 'Выставка современного искусства',
      description: 'Работы молодых художников со всего мира',
      date: '2026-06-10T10:00:00',
      location: 'ЦДХ, Москва',
      image: '/images/exhibition.jpg',
      price: 500,
      isFree: false,
      category: 'exhibition',
    },
    {
      id: 3,
      title: 'Футбольный матч: Спартак - Зенит',
      description: 'Центральный матч тура. Станьте свидетелем борьбы!',
      date: '2026-06-20T20:00:00',
      location: 'Открытие Банк Арена, Москва',
      image: '/images/sport.jpg',
      price: 1500,
      isFree: false,
      category: 'sport',
    },
    {
      id: 4,
      title: 'Бесплатный мастер-класс по программированию',
      description: 'Изучите основы React и Next.js с нуля',
      date: '2026-06-25T14:00:00',
      location: 'Online',
      image: '/images/education.jpg',
      price: 0,
      isFree: true,
      category: 'education',
    },
  ];
}