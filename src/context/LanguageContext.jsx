import React, { createContext, useState, useContext } from 'react';

// Создаём контекст
const LanguageContext = createContext();

// Объект с переводами
const translations = {
  uz: {
    // TopBar
    topbar_message: "Buyurtmalaringiz bepul yetkazib beramiz • atiga 1 kun ichida",
    language_uz: "UZBEK",
    language_ru: "RUSSIAN",

    // Header
    header_logo: "BrandLogo",
    header_home: "Bosh sahifa",
    header_catalog: "Katalog",
    header_about: "Haqimizda",
    header_contact: "Aloqa",
    header_search: "Sizni qidiryapsiz?",
    header_contact_button: "Aloqaga chiqish",

    // HomePage (Banner, Categories, etc.)
    banner_title: "Eng so'nggi chegirmalar",
    banner_description: "Sizning sevimli mahsulotlaringizga 50% gacha chegirma!",
    banner_button: "Hozir xarid qiling",
    categories_title: "Kategoriyalar",
    new_discounts_title: "Yangi chegirmalar",
    popular_products_title: "Mashhur mahsulotlar",
    new_products_title: "Yangi mahsulotlar",
    all_products_title: "Barcha mahsulotlar",

    // AboutPage
    about_title: "Biz haqimizda",
    about_description: "Lorem ipsum dolor sit amet consectetur. Pulvinar senectus elit aliquam arcu faucibus ultricies mauris cursus. Risus in eu dui egestus enim.",
    about_stat_1: "10.5K Sotuvchilar bizning saytimizda faol",
    about_stat_2: "33K Oylik mahsulot sotuvi",
    about_stat_3: "45.5K Mijozlar bizning saytimizda faol",
    about_stat_4: "25K Yillik umumiy sotuv",

    // ContactPage
    contact_call_title: "Bizga Qo'ng'iroq Qiling",
    contact_call_description: "Biz 24/7 kun tartibida ishlaymiz",
    contact_call_number: "Raqam: +9989917777777",
    contact_write_title: "Bizga yozing",
    contact_write_description: "Shakli to'ldiring va biz 24 saat ichida siz bilan bog'lanamiz",
    contact_email_1: "Email: customer@exclusive.com",
    contact_email_2: "Email: support@EXCLUSIVE.com",
    contact_form_name: "Ismingiz *",
    contact_form_phone: "Telefon raqamingiz *",
    contact_form_message: "Sizning habaringiz",
    contact_form_submit: "Habar yuborish",

    // CatalogPage
    catalog_title: "Katalog",
    catalog_categories: "Kategoriyalar",
    catalog_all_categories: "Barcha kategoriyalar",
    catalog_price_range: "Narx oralig'i",
    catalog_sort: "Saralash",
    catalog_sort_asc: "Narx bo'yicha o'sish",
    catalog_sort_desc: "Narx bo'yicha kamayish",
    catalog_sort_default: "Standart",
  },
  ru: {
    // TopBar
    topbar_message: "Бесплатная доставка ваших заказов • всего за 1 день",
    language_uz: "УЗБЕКСКИЙ",
    language_ru: "РУССКИЙ",

    // Header
    header_logo: "BrandLogo",
    header_home: "Главная",
    header_catalog: "Каталог",
    header_about: "О нас",
    header_contact: "Контакты",
    header_search: "Что вы ищете?",
    header_contact_button: "Связаться",

    // HomePage (Banner, Categories, etc.)
    banner_title: "Последние скидки",
    banner_description: "Скидки до 50% на ваши любимые товары!",
    banner_button: "Купить сейчас",
    categories_title: "Категории",
    new_discounts_title: "Новые скидки",
    popular_products_title: "Популярные товары",
    new_products_title: "Новые товары",
    all_products_title: "Все товары",

    // AboutPage
    about_title: "О нас",
    about_description: "Lorem ipsum dolor sit amet consectetur. Pulvinar senectus elit aliquam arcu faucibus ultricies mauris cursus. Risus in eu dui egestus enim.",
    about_stat_1: "10.5K Активных продавцов на нашем сайте",
    about_stat_2: "33K Ежемесячных продаж товаров",
    about_stat_3: "45.5K Активных клиентов на нашем сайте",
    about_stat_4: "25K Годовой валовой продажи",

    // ContactPage
    contact_call_title: "Позвоните нам",
    contact_call_description: "Мы работаем 24/7",
    contact_call_number: "Номер: +9989917777777",
    contact_write_title: "Напишите нам",
    contact_write_description: "Заполните форму, и мы свяжемся с вами в течение 24 часов",
    contact_email_1: "Email: customer@exclusive.com",
    contact_email_2: "Email: support@EXCLUSIVE.com",
    contact_form_name: "Ваше имя *",
    contact_form_phone: "Ваш номер телефона *",
    contact_form_message: "Ваше сообщение",
    contact_form_submit: "Отправить сообщение",

    // CatalogPage
    catalog_title: "Каталог",
    catalog_categories: "Категории",
    catalog_all_categories: "Все категории",
    catalog_price_range: "Диапазон цен",
    catalog_sort: "Сортировка",
    catalog_sort_asc: "По возрастанию цены",
    catalog_sort_desc: "По убыванию цены",
    catalog_sort_default: "По умолчанию",
  },
};

// Провайдер контекста
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('uz'); // По умолчанию узбекский

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Хук для использования контекста
export const useLanguage = () => useContext(LanguageContext);