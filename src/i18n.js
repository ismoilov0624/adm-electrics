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

          about_title: "Kompaniyamiz haqida",
          text_1:
            "Sim to‘plamlarimiz ilg‘or texnologiyalar va qat’iy sifat standartlari asosida ishlab chiqariladi. Bu har bir mahsulotning ishonchliligi va uzoq xizmat muddatini ta'minlaydi.",
          text_2:
            "Biz texnologiyalarni doimiy ravishda yangilab, takomillashtirib boramiz. Asosiy qadriyatlarimiz — mas’uliyat, sifat va mijozlarga e’tibor.",
          production: "Ishlab chiqarish",
          production_text: "4,500 m² ishlab chiqarish maydoni",
          capacity: "Quvvat",
          capacity_text: "Yiliga 100,000+ to‘plam",
          growth: "O‘sish",
          growth_text: "20% o‘sish rejalashtirilgan",
          established: "Asos solingan sana: 02.06.2023",
          area: "Maydoni: 15,000 m²",
          learn_more: "Biz haqimizda batafsil",

          forecast_title: "Yillik ishlab chiqarish prognozi",
          forecast_growth_title: "O‘sish rejalashtirilmoqda",
          forecast_growth_text:
            "Barqaror o‘sishni ta’minlash uchun kompaniyamiz innovatsiyalar, bozorni kengaytirish va xodimlarga sarmoya kiritish strategiyasini ishlab chiqqan.",
          forecast_quality_title: "Sifat va innovatsiyalar",
          forecast_quality_text:
            "Zamonaviy texnologiyalarni joriy etish mahsulot sifati va samaradorligini oshirishga xizmat qiladi.",
          forecast_people_title: "Xodimlarga investitsiya",
          forecast_people_text:
            "Xodimlarni o‘qitish va ularning malakasini oshirish bizning uzoq muddatli muvaffaqiyat strategiyamizning asosi hisoblanadi.",
          forecast_chart_title: "Ishlab chiqarish o‘sish prognozi",
          forecast_footer_note:
            "Bizning ustuvorligimiz – sifat, innovatsiya va ishonch asosida barqaror rivojlanish.",

          mainCategory: "Asosiy elektr simi",
          frontCategory: "Old elektr simi",
          floorCategory: "Pol elektr simi",
          doorCategory: "Eshik elektr simi",
          frontBumperCategory: "Old bamper simi",
          rearBumperCategory: "Orqa bamper simi",

          mainDescription:
            "Barcha asosiy elektr komponentlarini bog‘lovchi sim",
          frontDescription: "Dvigatel va old elektr komponentlari uchun sim",
          floorDescription: "Avtomobil tagidagi komponentlarni ulovchi sim",
          doorDescription: "Deraza, qulf va oynalarni boshqaruvchi eshik simi",
          frontBumperDescription:
            "Sensor va yoritgichlar uchun old bamper simi",
          rearBumperDescription:
            "Park sensorlari va yoritgichlar uchun orqa bamper simi",

          actualPart: "Asl detal",
          techDiagram: "Texnik diagramma",
          keyConnections: "Asosiy ulanishlar",

          // Main Wiring harness connections
          mainConn1: "Dvigatel boshqaruv ulanishlari",
          mainConn2: "Ichki boshqaruv bloki ulanishlari",
          mainConn3: "Elektr taqsimlash ulanishlari",

          // Front Wiring harness connections
          frontConn1: "Dvigatel sensor ulanishlari",
          frontConn2: "Boshqaruv bloki ulanishlari",
          frontConn3: "Dvigatel bo'limi ulanish bloki",

          // Floor Wiring harness connections
          floorConn1: "Pol sensor ulanishlari",
          floorConn2: "Yerga ulash va quvvat ulanishlari",
          floorConn3: "O'rindiq boshqaruv ulanishlari",

          // Door Wiring harness connections
          doorConn1: "Haydovchi eshigi qulf mexanizmi",
          doorConn2: "Elektr oyna asosiy tugmasi",
          doorConn3: "Haydovchi smart kalit tashqi dastagi",
          doorConn4: "POL elektr simi bilan ulanish",

          // Front Bumper harness connections
          frontBumperConn1: "Old PDW sensor markazi",
          frontBumperConn2: "Old PDW sensor chap/o'ng",
          frontBumperConn3: "Ulanish konnektori",
          frontBumperConn4: "Old elektr simi bilan ulanish",

          // Rear Bumper harness connections
          rearBumperConn1: "Orqa PDW sensor chap/o'ng",
          rearBumperConn2: "Markaziy orqa chiroq",
          rearBumperConn3: "POL elektr simi bilan ulanish",

          viewDetails: "Batafsil",
          keyConnections: "Asosiy ulanishlar",

          // Product names
          mainHarness: "Asosiy elektr simi",
          frontHarness: "Old elektr simi",
          doorHarness: "Eshik elektr simi",
          bumperHarness: "Bamper elektr simi",
          batteryHarness: "Akkumulyator elektr simi",

          // Product descriptions
          mainDescription:
            "Barcha asosiy elektr komponentlarini bog'lovchi sim",
          frontDescription: "Dvigatel va old elektr komponentlari uchun sim",
          doorDescription: "Deraza, qulf va oynalarni boshqaruvchi eshik simi",
          bumperDescription: "Sensor va yoritgichlar uchun old bamper simi",
          batteryDescription:
            "Park sensorlari va yoritgichlar uchun orqa bamper simi",
          frontBumperHarness: "Old bamper simi",
          rearBumperHarness: "Orqa bamper simi",
          floorHarness: "Pol elektr simi",
          productionHighlights: {
            title: "Ishlab chiqarish yutuqlari",
            subtitle:
              "Zamonaviy texnologiyalar bilan jihozlangan korxonamiz eng yuqori sifatli mahsulotlarni taqdim etadi",
            cards: {
              annualProduction: {
                title: "Yillik ishlab chiqarish",
                text: "ADM Electrics zavodi yiliga 100 000 dan ortiq to‘plam ishlab chiqarishga tayyor. Yangi lokallashtirish rejalari asosida bu ko‘rsatkich yaqin yillarda 20% dan ortiq o‘sishi kutilmoqda. Yangi loyihalar bilan ishlab chiqarish 50% ga oshiriladi.",
              },
              facility: {
                title: "Ishlab chiqarish hududi",
                text: "Bizning ishlab chiqarish ob'ektimiz Asaka sanoat zonasida joylashgan bo‘lib, qulay logistika va asosiy hamkorlarga yaqin joylashuvi bilan ajralib turadi. Umumiy maydoni 15 000 m², ishlab chiqarish maydoni esa 4 500 m² ni tashkil etadi.",
              },
              start: {
                title: "Ishlab chiqarishni boshlanishi",
                text: "Doimiy ishlab chiqarish 2024-yil 15-apreldan boshlandi. Bu muhim bosqich tayyorgarlik ishlarining yakunlangani va to‘liq miqyosdagi ishlab chiqarishni boshlanishini bildiradi.",
              },
            },
          },

          yearsExperience: "Tajriba yillari",
          projectsCompleted: "Bajarilgan loyihalar",
          teamMembers: "Jamoa a'zolari",
          countries: "Qamrab olingan davlatlar",
          ourMission: "Bizning misiya",
          missionStatement:
            "Missiyamiz – avtomobil, sanoat va boshqa sohalar uchun yuqori sifatli, xavfsiz va innovatsion sim to‘plamlarini (wiring harness) ishlab chiqish va yetkazib berish orqali mijozlarimiz ehtiyojlarini qondirish, zamonaviy texnologiyalar asosida ishonchli mahsulotlar yaratish va hamkorlikda barqaror taraqqiyotga erishish.",

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
            rights: "©2025 Adm Electrics | Barcha huquqlar himoyalangan.",
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

          about_title: "О нашей компании",
          text_1:
            "Наши жгуты проводов производятся с использованием передовых технологий и строгих стандартов качества. Это обеспечивает высокую надежность и длительный срок службы каждого изделия.",
          text_2:
            "Мы стремимся предоставлять клиентам лучшее, постоянно обновляя и совершенствуя наши технологии. Наши основные ценности — ответственность, качество и ориентация на клиента.",
          production: "Производство",
          production_text: "Производственная площадь 4,500 м²",
          capacity: "Мощность",
          capacity_text: "100,000+ комплектов в год",
          growth: "Рост",
          growth_text: "Планируется рост на 20%",
          established: "Основано: 02.06.2023",
          area: "Площадь: 15,000 м²",
          learn_more: "Узнать больше о нас",

          forecast_title: "Прогноз годового производства",
          forecast_growth_title: "Планирование роста",
          forecast_growth_text:
            "Для обеспечения стабильного роста бизнеса наша компания разработала стратегию, ориентированную на инновации, расширение рынка и инвестиции в персонал.",
          forecast_quality_title: "Качество и инновации",
          forecast_quality_text:
            "Внедрение современных технологий для повышения качества продукции и эффективности операций — основа нашей бизнес-стратегии.",
          forecast_people_title: "Инвестиции в людей",
          forecast_people_text:
            "Обучение сотрудников и развитие их профессиональных навыков — ключевой элемент нашей стратегии долгосрочного успеха.",
          forecast_chart_title: "Прогноз роста производства",
          forecast_footer_note:
            "Наш приоритет — устойчивое развитие, основанное на качестве, инновациях и доверии.",

          mainCategory: "Основная электропроводка",
          frontCategory: "Передняя электропроводка",
          floorCategory: "Электропроводка пола",
          doorCategory: "Электропроводка двери",
          frontBumperCategory: "Проводка переднего бампера",
          rearBumperCategory: "Проводка заднего бампера",

          mainDescription:
            "Основная проводка, соединяющая все основные электрические компоненты",
          frontDescription:
            "Передняя проводка для двигателя и передних компонентов",
          floorDescription: "Проводка пола для подключения нижних компонентов",
          doorDescription: "Проводка двери для окон, замков и зеркал",
          frontBumperDescription:
            "Проводка переднего бампера для датчиков и освещения",
          rearBumperDescription:
            "Проводка заднего бампера для парковочных датчиков и освещения",

          actualPart: "Фактическая деталь",
          techDiagram: "Техническая схема",
          keyConnections: "Ключевые соединения",

          // Main Wiring harness connections
          mainConn1: "Соединения управления двигателем",
          mainConn2: "Соединения внутреннего блока управления",
          mainConn3: "Соединения распределения питания",

          // Front Wiring harness connections
          frontConn1: "Соединения датчиков двигателя",
          frontConn2: "Соединения блока управления",
          frontConn3: "Соединения блока моторного отсека",

          // Floor Wiring harness connections
          floorConn1: "Соединения датчиков пола",
          floorConn2: "Соединения заземления и питания",
          floorConn3: "Соединения управления сиденьем",

          // Door Wiring harness connections
          doorConn1: "Привод замка двери водителя",
          doorConn2: "Главный переключатель стеклоподъемника",
          doorConn3: "Внешняя ручка смарт-ключа водителя",
          doorConn4: "Соединение с проводкой ПОЛА",

          // Front Bumper harness connections
          frontBumperConn1: "Центральный датчик PDW переднего бампера",
          frontBumperConn2: "Левый/правый датчик PDW переднего бампера",
          frontBumperConn3: "Соединительный разъем",
          frontBumperConn4: "Соединение с передней проводкой",

          // Rear Bumper harness connections
          rearBumperConn1: "Левый/правый датчик PDW заднего бампера",
          rearBumperConn2: "Центральный фонарь заднего хода",
          rearBumperConn3: "Соединение с проводкой ПОЛА",

          viewDetails: "Подробнее",
          keyConnections: "Ключевые соединения",

          // Product names
          mainHarness: "Основная электропроводка",
          frontHarness: "Передняя электропроводка",
          doorHarness: "Электропроводка двери",
          bumperHarness: "Проводка бампера",
          batteryHarness: "Проводка аккумулятора",

          // Product descriptions
          mainDescription:
            "Основная проводка, соединяющая все основные электрические компоненты",
          frontDescription:
            "Передняя проводка для двигателя и передних компонентов",
          doorDescription: "Проводка двери для окон, замков и зеркал",
          bumperDescription:
            "Проводка переднего бампера для датчиков и освещения",
          batteryDescription:
            "Проводка заднего бампера для парковочных датчиков и освещения",

          frontBumperHarness: "Проводка переднего бампера",
          rearBumperHarness: "Проводка заднего бампера",
          floorHarness: "Электропроводка пола",
          productionHighlights: {
            title: "Основные моменты производства",
            subtitle:
              "Наше современное предприятие оснащено новейшими технологиями для обеспечения продукции самого высокого качества",
            cards: {
              annualProduction: {
                title: "Годовое производство",
                text: "Завод ADM Electrics готов производить более 100 000 комплектов в год. Согласно новым планам локализации, этот показатель вырастет более чем на 20% в ближайшие годы. С новыми проектами производство планируется увеличить на 50%.",
              },
              facility: {
                title: "Производственное помещение",
                text: "Наше производство расположено в промышленной зоне Асака, что обеспечивает удобную логистику и близость к ключевым партнерам. Общая площадь составляет 15 000 м², из которых 4 500 м² — производственные площади.",
              },
              start: {
                title: "Начало производства",
                text: "Регулярное производство началось 15.04.2024. Этот этап символизирует завершение подготовительных работ и запуск масштабного производства для удовлетворения растущих потребностей партнеров.",
              },
            },
          },

          yearsExperience: "Годы опыта",
          projectsCompleted: "Выполненные проекты",
          teamMembers: "Члены команды",
          countries: "Охваченные страны",
          ourMission: "Наша миссия",
          missionStatement:
            "Наша миссия – разрабатывать и поставлять высококачественные, безопасные и инновационные жгуты проводов (wiring harness) для автомобильной, промышленной и других отраслей, удовлетворяя потребности клиентов, создавая надёжные продукты на основе современных технологий и обеспечивая устойчивое развитие в сотрудничестве с партнёрами.",

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
            "Компания была основана в 2023 году и расположена на земельном участке площадью 1,4 гектара в городе Асака, Андиджанская область. Начало серийного производства запчастей намечено на 15 апреля 5 года.",
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
            rights: "©2025 Adm Electrics | Все права защищены.",
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

          about_title: "About Our Company",
          text_1:
            "Our wire harnesses are manufactured using advanced technologies and strict quality standards. This ensures high reliability and long service life of each product. Each wire harness meets international and industry safety and quality standards.",
          text_2:
            "We strive to provide our customers with the best by constantly updating and improving our technologies. Our core values are responsibility, quality and customer focus.",
          production: "Production",
          production_text: "4,500 m² production area",
          capacity: "Capacity",
          capacity_text: "100,000+ sets per year",
          growth: "Growth",
          growth_text: "20% increase planned",
          established: "Established: 02.06.2023",
          area: "Area: 15,000 m²",
          learn_more: "Learn More About Us",

          forecast_title: "Forecast of Annual Production",
          forecast_growth_title: "Planning for Growth",
          forecast_growth_text:
            "To ensure stable business growth, our company has developed a strategy focused on innovation, market expansion, and investment in personnel.",
          forecast_quality_title: "Quality and Innovation",
          forecast_quality_text:
            "Implementing modern technologies to enhance product quality and operational efficiency is at the core of our business strategy.",
          forecast_people_title: "Investment in People",
          forecast_people_text:
            "Training employees and developing their professional skills is a key component of our long-term success strategy.",
          forecast_chart_title: "Production Growth Forecast",
          forecast_footer_note:
            "Our priority is sustainable development based on quality, innovation, and trust.",

          mainCategory: "Main Wiring harness",
          frontCategory: "Front Wiring harness",
          floorCategory: "Floor Wiring harness",
          doorCategory: "Door Wiring harness",
          frontBumperCategory: "Front Bumper harness",
          rearBumperCategory: "Rear Bumper harness",

          mainDescription:
            "Main wiring harness connecting all major electrical components",
          frontDescription:
            "Front harness for engine and front electrical components",
          floorDescription:
            "Floor harness connecting underbody electrical components",
          doorDescription:
            "Driver door harness for window, lock and mirror controls",
          frontBumperDescription:
            "Front bumper harness for sensors and lighting",
          rearBumperDescription:
            "Rear bumper harness for parking sensors and lighting",

          actualPart: "Actual Part",
          techDiagram: "Technical Diagram",
          keyConnections: "Key Connections",

          // Main Wiring harness connections
          mainConn1: "Engine control connections",
          mainConn2: "Interior control unit connections",
          mainConn3: "Power distribution connections",

          // Front Wiring harness connections
          frontConn1: "Engine sensor connections",
          frontConn2: "Control unit connections",
          frontConn3: "Engine room junction connections",

          // Floor Wiring harness connections
          floorConn1: "Floor sensor connections",
          floorConn2: "Ground and power connections",
          floorConn3: "Seat control connections",

          // Door Wiring harness connections
          doorConn1: "Driver Door Lock Actuator",
          doorConn2: "Power Window Main Switch",
          doorConn3: "Driver Smart Key Outside Handle",
          doorConn4: "Connection With FLOOR Harness",

          // Front Bumper harness connections
          frontBumperConn1: "Front PDW Sensor Center",
          frontBumperConn2: "Front PDW Sensor Left/Right",
          frontBumperConn3: "Joint Connector",
          frontBumperConn4: "Connection With Front Harness",

          // Rear Bumper harness connections
          rearBumperConn1: "Rear PDW Sensor Left/Right",
          rearBumperConn2: "Center Back-Up Lamp",
          rearBumperConn3: "Connection With FLOOR Harness",

          viewDetails: "View Details",
          keyConnections: "Key Connections",

          viewDetails: "View Details",
          keyConnections: "Key Connections",

          // Product names
          mainHarness: "Main Harness",
          frontHarness: "Front Harness",
          doorHarness: "Door Harness",
          bumperHarness: "Bumper Harness",
          batteryHarness: "Battery Harness",

          // Product descriptions
          mainDescription:
            "Main wiring harness connecting all major electrical components",
          frontDescription:
            "Front harness for engine and front electrical components",
          doorDescription:
            "Driver door harness for window, lock and mirror controls",
          bumperDescription: "Front bumper harness for sensors and lighting",
          batteryDescription:
            "Rear bumper harness for parking sensors and lighting",

          frontBumperHarness: "Front Bumper Harness",
          rearBumperHarness: "Rear Bumper Harness",
          floorHarness: "Floor Harness",
          productionHighlights: {
            title: "Production Highlights",
            subtitle:
              "Our state-of-the-art facility is equipped with the latest technology to ensure the highest quality products",
            cards: {
              annualProduction: {
                title: "Annual Production",
                text: "Our ADM Electrics factory is ready to produce over 100,000 sets per year. According to the new localization plans, this figure will increase by more than 20% in the coming years. With new projects, production is planned to grow by 50%.",
              },
              facility: {
                title: "Production Facility",
                text: "Our production facility is located in the Asaka Industrial Zone, which provides convenient logistics and proximity to key partners. With a total area of 15,000 m² and production area of 4,500 m², we have ample space for growth.",
              },
              start: {
                title: "Start of Production",
                text: "Regular production started on 15.04.2024. This milestone symbolizes the completion of preparatory work and the start of full-scale production to meet the growing needs of our partners.",
              },
            },
          },

          yearsExperience: "Years of Experience",
          projectsCompleted: "Projects Completed",
          teamMembers: "Team Members",
          countries: "Countries Reached",
          ourMission: "Our Mission",
          missionStatement:
            "Our mission is to design and deliver high-quality, safe, and innovative wiring harness solutions for the automotive, industrial, and other sectors — meeting customer needs, producing reliable products based on modern technologies, and achieving sustainable growth through strong partnerships.",

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
            rights: "©2025 Adm Electrics | All rights reserved.",
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
