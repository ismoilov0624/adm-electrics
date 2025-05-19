// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // optional: detect language
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      uz: {
        translation: {
          home: "Bosh sahifa",
          about: "Kompaniya haqida",
          company_structure: "Korxona boshqaruvi",
          news: "Yangiliklar",
          contact: "Kontaktlar",
          career: "Karyera",
          address: "Asaka district, Kamolot MFY, Marg'iloniy street, house 65",
          aboutCompanyTitle: "“ADM ELECTRICS” MChJ",
          aboutCompanyText:
            "“ADM ELECTRICS” quyidagi yo‘nalishlarda faoliyat yuritadi:",
          companyProduct1:
            "Avtotransport vositalari uchun butlovchi qismlar: elektr komponentlar va HVAC tizimi uchun komponentlar ishlab chiqarish;",
          companyProduct2:
            "Kesish, germetizatsiyalash, siqish, yig‘ish va sinovdan o‘tkazish jarayonlarini mahalliylashtirish;",
          companyProduct3:
            "Mahalliy va xorijiy bozorlarga yuqori sifatli mahsulotlar yetkazib berish.",
          aboutCompanyDetails:
            "Korxona 2023-yilda tashkil etilgan bo‘lib, Andijon viloyatining Asaka shahridagi 1,4 gektar yer maydonida joylashgan. Ehtiyot qismlarni seriyaviy ishlab chiqarishning boshlanishi – 2024-yilning 15-apreldan belgilangan.",
          productsTitle: "Mahsulotlar",
          newsTitle: "Yangiliklar",
          readMore: "Batafsil",
          allNews: "Barcha yangiliklar",
          aboutCompanyAlt: "Kompaniya sharhi",
          aboutCompanyTitleFull:
            "“ADM ELECTRICS” MChJ avtomobil sanoatiga mo’ljallangan sim o’rovlarini ishlab chiqarishga ixtisoslashgan kompaniya hisoblanadi.",
          aboutCompanyFullText:
            "Bizning mahsulotlarimiz “ADM Jizzakh” zavodida ishlab chiqariladigan KIA avtomobillarining tarkibiy qismidir. Bizning sim o’rovlari ilg’or texnologiyalar va qat’iy sifat standartlari asosida ishlab chiqariladi. Bu har bir mahsulotning yuqori ishonchliligi va uzoq umr ko’rishini ta’minlaydi. Har bir sim o’rovlar xalqaro va sanoat xavfsizlik hamda sifat standartlariga javob berishini kafolatlaydi. Biz texnologiyalarimizni doimiy ravishda yangilash va takomillashtirish orqali mijozlarimizga eng yaxshisini taqdim etishga intilamiz. Asosiy qadriyatlarimiz javobgarlik, sifat va mijozlarga yo’naltirilganlikdir. Korxonamiz jamoasi yuqori malakali mutaxassislar to’plamidan iborat bo’lib, ular o’z bilim va ko’nikmalarini doimiy ravishda oshirib borishadi. Biz kompaniyamiz muvaffaqiyatining asosi hisoblanadigan xodimlarimizdan faxrlanamiz. Biz hamkorlikka ochiqmiz va mijozlarimizga faqat eng yaxshi mahsulot va xizmatlarni taklif qilishga har doim tayyormiz.",
          strategicGoalsTitle: "Strategik maqsadlar",
          strategicGoalsText:
            "ADM Electrics kompaniyasining bosh maqsadi – innovatsion texnologiyalar va yuqori sifatli mahsulotlar orqali mijozlar ehtiyojlarini maksimal darajada qondirish. Biz avtomobil sanoati uchun zamonaviy va ishonchli sim o‘ramlarini ishlab chiqarishga ixtisoslashganmiz, bu esa xavfsizlik va samaradorlikni ta’minlashga qaratilgan.",
          goal1_title: "Innovatsiyalarni tatbiq etish:",
          goal1_desc:
            "Yangi texnologiyalarni joriy qilish orqali mahsulot sifatini oshirish va ishlab chiqarish jarayonlarini optimallashtirish.",
          goal2_title: "Barqaror rivojlanish",
          goal2_desc:
            "Tabiiy resurslarni tejamkorlik bilan ishlatish va ekologik xavfsizlikni ta’minlash orqali atrof-muhitga ijobiy ta’sir ko‘rsatish.",
          goal3_title: "Mijozlar bilan ishlash",
          goal3_desc:
            "Mijozlarning fikr-mulohazalarini tinglash va ular asosida mahsulotlarimizni doimiy ravishda takomillashtirish.",
          ourPartners: "Bizning hamkorlar",
          phone: "Telefon",
          email: "Elektron pochta",
          schedule: "Qabul kunlari",
          home: "Bosh sahifa",
          management: "Korxona boshqaruvi",
          phone: "Telefon:",
          email: "Elektron pochta:",
          schedule: "Qabul kunlari:",
          //structure
          ourEmployees: "Bizning jamoa",
          allEmployees: "Barcha xodimlar",

          company_structure: "Korxona boshqaruvi",
          positions: {
            ceo: "Bosh direktor",
            deputy_production: "Ishlab chiqarish bo'yicha direktor o'rinbosari",
            admin_head: "Ma'muriyat bo'limi rahbari",
            hr_head: "Xodimlar boshqaruvi bo'limi rahbari",
            financial_manager: "Moliyaviy menedjer",
            chief_accountant: "Bosh Xisobchi",
            procurement_head: "Xarid bo'limi rahbari",
            warehouse_head: "Ombor mudiri",
            quality_head: "Sifat nazorati bo'limi rahbari",
            maintenance_head:
              "Kommunal va texnik xizmat ko'rsatish bo'limi rahbari",
            chief_technologist: "Bosh texnolog",
          },
          schedule: "Qabul vaqti",
          otherNews: "Boshqa yangiliklar",
          newsNotFound: "Yangilik topilmadi.",
          footer: {
            address1: "Asaka tumani Kamolot MFY",
            address2: "Marg'iloniy ko`chasi, 65-uy",
            email: "Email",
            phone: "Telefon",
            address: "Manzil",
            socialMedia: "Ijtimoy tarmoqlar",
            links: {
              home: "Bosh sahifa",
              about: "Kompaniya haqida",
              structure: "Korxona boshqaruvi",
              news: "Yangiliklar",
              career: "Karyera",
              contact: "Kontaktlar",
            },
            legalText:
              "ADM ELECTRICS O‘zbekiston Respublikasi hududida o‘z faoliyatini O‘zbekiston Respublikasi qonunchiligiga muvofiq amalga oshiradi.",
            rights: "©2024 Adm Electrics | Barcha huquqlar himoyalangan.",
          },
          contact_page: {
            breadcrumb: "Kontaktlar",
            home: "Bosh sahifa",
            title: "Biz bilan bog'lanish",
            name: "F.I.Sh.",
            name_placeholder: "Ismingizni kiriting",
            email: "Email",
            email_placeholder: "Emailingizni kiriting",
            phone: "Telefon",
            phone_placeholder: "Telefon raqamingizni kiriting",
            message: "Sizning xabaringiz",
            message_placeholder: "Xabaringizni kiriting",
            submit: "Yuborish",
            map_title: "Bizning manzil",
            form_success: "Xabaringiz muvaffaqiyatli yuborildi!",
            form_error: "Iltimos, barcha majburiy maydonlarni to'ldiring.",
          },
        },
      },
      ru: {
        translation: {
          home: "Главная",
          about: "О компании",
          company_structure: "Структура компании",
          news: "Новости",
          contact: "Контакты",
          career: "Карьера",
          address: "Улица Маргилонская, дом 65, Камолот МФЙ, район Асака",
          aboutCompanyTitle: "“ADM ELECTRICS” MChJ",
          aboutCompanyText:
            "“ADM ELECTRICS” занимается следующими направлениями:",
          companyProduct1:
            "Запасные части для автотранспортных средств: производство электрических компонентов и компонентов для HVAC систем;",
          companyProduct2:
            "Локализация процессов резки, герметизации, сжатия, сборки и испытаний;",
          companyProduct3:
            "Поставка высококачественной продукции на местные и зарубежные рынки.",
          aboutCompanyDetails:
            "Компания была основана в 2023 году и расположена на земельном участке площадью 1,4 гектара в городе Асака, Андиджанская область. Начало серийного производства запчастей намечено на 15 апреля 2024 года.",
          productsTitle: "Продукция",
          newsTitle: "Новости",
          readMore: "Подробнее",
          allNews: "Все новости",
          aboutCompanyAlt: "Обзор компании",
          aboutCompanyTitleFull:
            "ООО «ADM ELECTRICS» — компания, специализирующаяся на производстве жгутов проводов для автомобильной промышленности.",
          aboutCompanyFullText:
            "Наша продукция является составной частью автомобилей KIA, производимых на заводе «ADM Jizzakh». Наши жгуты проводов изготавливаются с использованием передовых технологий и строгих стандартов качества, что обеспечивает высокую надежность и долгий срок службы каждого изделия. Каждый жгут проводов соответствует международным и отраслевым стандартам безопасности и качества. Мы стремимся постоянно обновлять и совершенствовать наши технологии, чтобы предложить нашим клиентам лучшее. Наши основные ценности — ответственность, качество и ориентация на клиента. Наша команда состоит из высококвалифицированных специалистов, которые постоянно повышают свои знания и навыки. Мы гордимся нашими сотрудниками, которые являются основой успеха нашей компании. Мы открыты для сотрудничества и всегда готовы предложить нашим клиентам только лучшие продукты и услуги.",
          strategicGoalsTitle: "Стратегические цели",
          strategicGoalsText:
            "Основная цель компании ADM Electrics — максимально удовлетворить потребности клиентов с помощью инновационных технологий и высококачественной продукции. Мы специализируемся на производстве современных и надежных жгутов проводов для автомобильной промышленности, что способствует обеспечению безопасности и эффективности.",
          goal1_title: "Внедрение инноваций:",
          goal1_desc:
            "Повышение качества продукции и оптимизация производственных процессов за счет внедрения новых технологий.",
          goal2_title: "Устойчивое развитие",
          goal2_desc:
            "Оказание положительного воздействия на окружающую среду путем рационального использования природных ресурсов и обеспечения экологической безопасности.",
          goal3_title: "Работа с клиентами",
          goal3_desc:
            "Постоянное совершенствование нашей продукции на основе отзывов и предложений клиентов.",
          phone: "Телефон",
          email: "Электронная почта",
          schedule: "Дни приёма",
          home: "Главная",
          management: "Управление предприятием",
          ourPartners: "Наши партнеры",
          phone: "Телефон:",
          email: "Электронная почта:",
          schedule: "Дни приема:",
          //structure
          ourEmployees: "Наша команда",
          allEmployees: "Все сотрудники",
          company_structure: "Структура компании",
          positions: {
            ceo: "Генеральный директор",
            deputy_production: "Заместитель директора по производству",
            admin_head: "Руководитель административного отдела",
            hr_head: "Руководитель отдела управления персоналом",
            financial_manager: "Финансовый менеджер",
            chief_accountant: "Главный бухгалтер",
            procurement_head: "Руководитель отдела закупок",
            warehouse_head: "Заведующий складом",
            quality_head: "Руководитель отдела контроля качества",
            maintenance_head:
              "Руководитель отдела коммунального и технического обслуживания",
            chief_technologist: "Главный технолог",
          },
          schedule: "Время приёма",
          otherNews: "Другие новости",
          newsNotFound: "Новость не найдена.",
          footer: {
            address1: "МФЙ Камолот, Асакинский район",
            address2: "Улица Маргилоний, дом 65",
            email: "Эл. почта",
            phone: "Телефон",
            address: "Адрес",
            socialMedia: "Социальные сети",
            links: {
              home: "Главная",
              about: "О компании",
              structure: "Структура предприятия",
              news: "Новости",
              career: "Карьера",
              contact: "Контакты",
            },
            legalText:
              "ADM ELECTRICS осуществляет свою деятельность на территории Республики Узбекистан в соответствии с законодательством Республики Узбекистан.",
            rights: "©2024 Adm Electrics | Все права защищены.",
          },
          contact_page: {
            breadcrumb: "Контакты",
            home: "Главная",
            title: "Связаться с нами",
            name: "Ф.И.О.",
            name_placeholder: "Введите ваше имя",
            email: "Электронная почта",
            email_placeholder: "Введите вашу почту",
            phone: "Телефон",
            phone_placeholder: "Введите ваш номер телефона",
            message: "Ваше сообщение",
            message_placeholder: "Введите ваше сообщение",
            submit: "Отправить",
            map_title: "Наш адрес",
            form_success: "Ваше сообщение было успешно отправлено!",
            form_error: "Пожалуйста, заполните все обязательные поля.",
          },
        },
      },
      en: {
        translation: {
          home: "Home",
          about: "About Company",
          company_structure: "Company Structure",
          news: "News",
          contact: "Contact",
          career: "Career",
          address: "Asaka district, Kamolot MFY, Marg'iloniy street, house 65",
          aboutCompanyTitle: "“ADM ELECTRICS” LLC",
          aboutCompanyText: "“ADM ELECTRICS” operates in the following areas:",
          companyProduct1:
            "Spare parts for automotive vehicles: manufacturing electrical components and HVAC system components;",
          companyProduct2:
            "Localization of processes such as cutting, sealing, compression, assembly, and testing;",
          companyProduct3:
            "Supplying high-quality products to local and foreign markets.",
          aboutCompanyDetails:
            "The company was established in 2023 and is located on a 1.4-hectare land in Asaka city, Andijan region. The start of serial production of spare parts is scheduled for April 15, 2024.",
          productsTitle: "Products",
          newsTitle: "News",
          readMore: "Read More",
          allNews: "All News",
          aboutCompanyAlt: "Company Overview",
          aboutCompanyTitleFull:
            "“ADM ELECTRICS” LLC is a company specializing in the production of wire harnesses for the automotive industry.",
          aboutCompanyFullText:
            "Our products are integral components of KIA vehicles manufactured at the “ADM Jizzakh” plant. Our wire harnesses are produced using advanced technologies and strict quality standards, ensuring high reliability and long service life for each product. Each wire harness complies with international and industry safety and quality standards. We strive to continuously update and improve our technologies to provide our customers with the best. Our core values are responsibility, quality, and customer orientation. Our team consists of highly qualified specialists who continuously enhance their knowledge and skills. We take pride in our employees, who are the foundation of our company's success. We are open to collaboration and always ready to offer our clients only the best products and services.",
          strategicGoalsTitle: "Strategic Goals",
          strategicGoalsText:
            "The main goal of ADM Electrics is to meet customer needs to the maximum extent through innovative technologies and high-quality products. We specialize in the production of modern and reliable wire harnesses for the automotive industry, aimed at ensuring safety and efficiency.",
          goal1_title: "Implementation of Innovations:",
          goal1_desc:
            "Enhancing product quality and optimizing production processes through the introduction of new technologies.",
          goal2_title: "Sustainable Development",
          goal2_desc:
            "Positively impacting the environment by efficiently utilizing natural resources and ensuring ecological safety.",
          goal3_title: "Customer Engagement",
          goal3_desc:
            "Continuously improving our products based on customer feedback and suggestions.",
          ourPartners: "Our Partners",
          phone: "Phone",
          email: "Email",
          schedule: "Reception Days",
          home: "Home",
          management: "Company Management",
          phone: "Phone:",
          email: "Email:",
          schedule: "Schedule:",
          //srtucture
          ourEmployees: "Our team",
          allEmployees: "All employees",
          company_structure: "Company Structure",
          positions: {
            ceo: "Chief Executive Officer",
            deputy_production: "Deputy Director for Production",
            admin_head: "Head of Administration Department",
            hr_head: "Head of Human Resources Department",
            financial_manager: "Financial Manager",
            chief_accountant: "Chief Accountant",
            procurement_head: "Head of Procurement Department",
            warehouse_head: "Warehouse Manager",
            quality_head: "Head of Quality Control Department",
            maintenance_head:
              "Head of Maintenance and Technical Services Department",
            chief_technologist: "Chief Technologist",
          },
          schedule: "Reception Time",
          otherNews: "Other News",
          newsNotFound: "News not found.",
          footer: {
            address1: "Kamolot MFY, Asaka district",
            address2: "65 Margiloniy Street",
            email: "Email",
            phone: "Phone",
            address: "Address",
            socialMedia: "Social media",
            links: {
              home: "Home",
              about: "About company",
              structure: "Company structure",
              news: "News",
              career: "Career",
              contact: "Contact",
            },
            legalText:
              "ADM ELECTRICS operates in the territory of the Republic of Uzbekistan in accordance with the legislation of the Republic of Uzbekistan.",
            rights: "©2024 Adm Electrics | All rights reserved.",
          },
          contact_page: {
            breadcrumb: "Contact",
            home: "Home",
            title: "Contact Us",
            name: "Full Name",
            name_placeholder: "Enter your name",
            email: "Email",
            email_placeholder: "Enter your email",
            phone: "Phone",
            phone_placeholder: "Enter your phone number",
            message: "Your Message",
            message_placeholder: "Enter your message",
            submit: "Submit",
            map_title: "Our Address",
            form_success: "Your message has been successfully sent!",
            form_error: "Please fill out all required fields.",
          },
        },
      },
    },
  });

export default i18n;
