'use client';

import ServiceCard from '@/components/serviceCard/component';
import { ExpandMoreRounded } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

const OurServices = () => {
  const womenList = [
    {
      title: 'Парение',
      list: [
        {
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          name: 'Боярское парение 2',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at fuga vel vero obcaecati ducimus magnam repellendus architecto harum. Accusantium reiciendis dignissimos ullam aspernatur quasi quod rem molestiae, amet error?',
          price: 2500,
          time: 30,
        },
        {
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          name: 'В гостях у парильщика',
          price: 1500,
          description: 'Описание для В гостях у парильщика',
          time: 45,
        },
        {
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          name: 'Массаж ног для снятия усталости',
          price: 600,
          description: 'Описание для Массаж ног для снятия усталости',
          time: 20,
        },
        {
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          name: 'Круговое парение',
          price: 1000,
          description: 'Описание для Круговое парение',
          time: 40,
        },
        {
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          name: 'Зима-Лето парение',
          price: 1200,
          description: 'Описание для Зима-Лето парение',
          time: 35,
        },
        {
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          name: 'Скипидарная ванночка для ног',
          price: 700,
          description: 'Описание для Скипидарная ванночка для ног',
          time: 25,
        },
        {
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          name: 'Лечебное парение',
          price: 1500,
          description: 'Описание для Лечебное парение',
          time: 50,
        },
        {
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          name: 'Маска-патчи для глаз',
          price: 250,
          description: 'Описание для Маска-патчи для глаз',
          time: 15,
        },
        {
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          name: 'Боярское парение',
          price: 1800,
          description: 'Описание для Боярское парение',
          time: 30,
        },
        {
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          name: 'Царское парение "Sumbule"',
          price: 3500,
          description: 'Описание для Царское парение "Sumbule"',
          time: 60,
        },
      ],
    },

    {
      title: 'Пилинг',
      list: [
        {
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          name: 'Пилинг с американским мылом',
          price: 850,
          description: 'Описание для Пилинг с американским мылом',
          time: 30,
        },
        {
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          name: 'Маска для лица "Коллаген"',
          price: 600,
          description: 'Описание для Маска для лица "Коллаген"',
          time: 20,
        },
        {
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          name: 'Пилинг с имбирным/розовым мылом',
          price: 800,
          description: 'Описание для Пилинг с имбирным/розовым мылом',
          time: 35,
        },
      ],
    },

    {
      title: 'Скрабы Ж',
      list: [
        {
          name: 'Маслотерапия',
          price: 1800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Насладитесь процедурой маслотерапии, которая поможет восстановить упругость и гладкость вашей кожи. Это идеальный способ расслабиться и придать вашей коже здоровый и сияющий вид.',
        },
        {
          name: 'Скраб "Kismit"',
          price: 1500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 45,
          description:
            'Скраб "Kismit" содержит уникальную формулу с натуральными ингредиентами, которые помогут вам избавиться от отмерших клеток кожи, придавая коже мягкость и гладкость.',
        },
        {
          name: 'Скраб "PENTA"',
          price: 1200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 40,
          description:
            'Скраб "PENTA" обогащен экстрактами пяти различных растений, которые помогают очистить и увлажнить кожу, оставляя ее свежей и сияющей.',
        },
        {
          name: 'Скраб "Альганика"',
          price: 1500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 45,
          description:
            'Скраб "Альганика" содержит в себе морские водоросли и минералы, которые помогут улучшить цвет лица и увлажнить кожу, делая ее более упругой и эластичной.',
        },
      ],
    },

    {
      title: 'Ногтевой сервис',
      list: [
        {
          name: 'Маникюр классический',
          price: 650,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 45,
          description:
            'Процедура классического маникюра включает в себя обрезку и формирование ногтей, удаление кутикулы, пилинг и нанесение увлажняющего крема.',
        },
        {
          name: 'Стрижка ногтей рук',
          price: 250,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 15,
          description:
            'Стрижка ногтей рук помогает поддерживать их опрятными и здоровыми, предотвращает их ломкость и заточение.',
        },
        {
          name: 'Стрижка ногтей ног',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 20,
          description:
            'Стрижка ногтей ног важна для поддержания их здоровья и предотвращения роста вросших ногтей.',
        },
        {
          name: 'Покрытие шеллак (руки)',
          price: 650,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Покрытие шеллаком для рук позволяет сохранить красоту маникюра на протяжении длительного времени, не требуя частой коррекции.',
        },
        {
          name: 'Обработка пяток',
          price: 800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Процедура обработки пяток помогает устранить огрубевшую кожу и трещины, придавая пяткам мягкость и гладкость.',
        },
        {
          name: 'Парафинотерапия рук',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Парафинотерапия для рук помогает увлажнить кожу, смягчить кутикулу, улучшить кровообращение и сделать кожу более гладкой и мягкой.',
        },
        {
          name: 'Парафинотерапия ног',
          price: 600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Парафинотерапия для ног помогает смягчить кожу, улучшить состояние ногтей и предотвратить трещины.',
        },
        {
          name: 'Кератолик (жидкость для обработки пяток)',
          price: 250,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 20,
          description:
            'Кератолик используется для удаления огрубевшей кожи и трещин на пятках, делая их мягкими и гладкими.',
        },
        {
          name: 'Снятие: шеллак (гель-лака)',
          price: 300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 20,
          description:
            'Процедура снятия шеллака или гель-лака помогает избежать повреждения натуральных ногтей при удалении покрытия.',
        },
        {
          name: 'Покрытие простым лаком',
          price: 150,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Покрытие ногтей простым лаком обеспечивает стильный и аккуратный вид, не требуя особого ухода.',
        },
        {
          name: 'Педикюр классический',
          price: 1500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Педикюр классический включает в себя обрезку и формирование ногтей, удаление огрубевшей кожи, пилинг и массаж.',
        },
        {
          name: 'Покрытие шеллак (ноги)',
          price: 600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Покрытие шеллаком для ног помогает сохранить красоту педикюра на длительное время, не требуя частой коррекции.',
        },
      ],
    },

    {
      title: 'Магазин',
      list: [
        {
          name: 'Удаление вросшего ногтя',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Процедура удаления вросшего ногтя помогает избавиться от дискомфорта и предотвратить возможные осложнения.',
        },
        {
          name: 'Обработка пальчиков',
          price: 600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Обработка пальчиков помогает поддерживать кожу в здоровом состоянии и предотвращает ее сухость и раздражение.',
        },
        {
          name: 'Укрепление (база)',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 45,
          description:
            'Процедура укрепления ногтей базой помогает предотвратить их ломкость и делает их более прочными и здоровыми.',
        },
        {
          name: 'Спа уход для ног',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 45,
          description:
            'Спа уход для ног включает в себя массаж, пилинг и увлажнение кожи, придавая ей мягкость и гладкость.',
        },
        {
          name: 'Спа уход для рук',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 45,
          description:
            'Спа уход для рук включает в себя массаж, пилинг и увлажнение кожи, делая ее более мягкой и ухоженной.',
        },
      ],
    },

    {
      title: 'Ванны',
      list: [
        {
          name: 'Чай травяной',
          price: 350,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Расслабляющая ванна с травяным чаем помогает снять стресс, успокоить нервную систему и улучшить общее самочувствие.',
        },
        {
          name: 'Комплекс ванн',
          price: 0,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Комплекс ванн предлагает различные виды ванн для достижения желаемого эффекта, включая расслабление, очищение и тонизирование кожи.',
        },
        {
          name: 'Маска для волос',
          price: 0,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 20,
          description:
            'Маска для волос во время ванны помогает увлажнить и питать волосы, делая их мягкими и блестящими.',
        },
        {
          name: 'Пилинг',
          price: 0,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Пилинг в ванне помогает очистить кожу от отмерших клеток, улучшить цвет лица и сделать кожу более гладкой и мягкой.',
        },
        {
          name: 'Скраб н',
          price: 0,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Скраб для тела во время ванны помогает улучшить циркуляцию крови, снять отшелушивание и сделать кожу более гладкой и увлажненной.',
        },
        {
          name: 'Янтарная ванна',
          price: 1700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Янтарная ванна помогает снять напряжение и усталость, оказывает успокаивающее и антистрессовое действие, придает коже мягкость и шелковистость.',
        },
        {
          name: 'Ванны из пант Алтайского марала',
          price: 1700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Ванны из пант Алтайского марала способствуют оздоровлению и укреплению организма, улучшают обмен веществ, тонизируют кожу и оказывают общеукрепляющее действие.',
        },
        // Добавьте сюда остальные процедуры
      ],
    },

    {
      title: 'Массаж',
      list: [
        {
          name: 'Массаж с китайским маслом',
          price: 0,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Массаж с китайским маслом помогает расслабиться, улучшить циркуляцию крови и облегчить мышечное напряжение.',
        },
        {
          name: 'К.Mix массаж 60 минут',
          price: 2300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Комплексный массаж "Mix" длительностью 60 минут включает в себя различные техники массажа для достижения максимального расслабления и улучшения состояния мышц.',
        },
        {
          name: 'К.Mix массаж 90 минут',
          price: 3300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 90,
          description:
            'Комплексный массаж "Mix" длительностью 90 минут включает в себя различные техники массажа для достижения максимального расслабления и улучшения состояния мышц.',
        },
        {
          name: 'К.Relax массаж 60 минут',
          price: 2000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Расслабляющий массаж "Relax" длительностью 60 минут помогает снять напряжение и улучшить общее самочувствие.',
        },
        {
          name: 'К.Relax массаж 90 минут',
          price: 3000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 90,
          description:
            'Расслабляющий массаж "Relax" длительностью 90 минут помогает снять напряжение и улучшить общее самочувствие.',
        },
        {
          name: 'К.Антицеллюлитный массаж',
          price: 2300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Антицеллюлитный массаж направлен на разглаживание кожи, улучшение кровообращения и уменьшение объемов.',
        },
        {
          name: 'К.Воротниковая зона',
          price: 800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Массаж воротниковой зоны направлен на снятие напряжения в области шеи и плеч, улучшение кровообращения и снятие головных болей.',
        },
        {
          name: 'К.Детский массаж до 10 лет',
          price: 1000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Детский массаж предназначен для улучшения сна, снятия стресса и напряжения у детей до 10 лет.',
        },
        {
          name: 'К.Классический массаж 60 минут',
          price: 1700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Классический массаж длительностью 60 минут направлен на расслабление мышц, улучшение кровообращения и общее оздоровление.',
        },
        {
          name: 'К.Классический массаж 90 минут',
          price: 2500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 90,
          description:
            'Классический массаж длительностью 90 минут направлен на расслабление мышц, улучшение кровообращения и общее оздоровление.',
        },
        {
          name: 'К.Лимфодренажный',
          price: 2000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Лимфодренажный массаж способствует улучшению лимфоциркуляции, выводу токсинов и лишней жидкости, а также укреплению иммунитета.',
        },
        {
          name: 'К.Спина',
          price: 1200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Массаж спины направлен на снятие напряжения, улучшение кровообращения и расслабление мышц.',
        },
        {
          name: 'К.Спина,ноги',
          price: 1400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Комплексный массаж спины и ног направлен на снятие напряжения, улучшение кровообращения и общее оздоровление.',
        },
        {
          name: 'К.Спортивный массаж 60 минут',
          price: 2200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description:
            'Спортивный массаж длительностью 60 минут предназначен для подготовки мышц к физической нагрузке, восстановления после тренировок и профилактики спортивных травм.',
        },
        {
          name: 'К.Стопы',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Массаж стоп помогает снять усталость, улучшить кровообращение и общее самочувствие.',
        },
        {
          name: 'D.Массаж банками',
          price: 600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Массаж с применением банок помогает улучшить кровообращение, снять напряжение и боли в мышцах.',
        },
        {
          name: 'Массаж головы 15 минут',
          price: 800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 15,
          description:
            'Массаж головы длительностью 15 минут помогает снять стресс, улучшить кровообращение в области головы и снять головную боль.',
        },
        {
          name: 'Т.Спортивный массаж 90 минут',
          price: 3300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 90,
          description:
            'Спортивный массаж – это эффективная процедура, направленная на расслабление мышц, улучшение их эластичности и уменьшение болевых ощущений. Длительность сеанса 90 минут.',
        },
        {
          name: 'Ультразвуковой пилинг',
          price: 800,
          description:
            'Пилинг лица с использованием ультразвуковой технологии.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 40,
        },
        {
          name: 'Скраб для лица Tree hut',
          price: 600,
          description:
            'Нежный скраб для лица для удаления ороговевших клеток кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
        },
        {
          name: 'Маски для лица',
          price: 0,
          description:
            'Разнообразные маски для лица, предназначенные для различных типов кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 20,
        },
        {
          name: 'Депиляция',
          price: 0,
          description:
            'Удаление нежелательного волоса с различных участков тела.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
        },
        {
          name: 'Коррекция бровей',
          price: 300,
          description:
            'Подстройка формы бровей для достижения идеального вида.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 15,
        },
        {
          name: 'Депиляция (всего тела)',
          price: 4000,
          description: 'Полное удаление волос с различных участков тела.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 90,
        },
        {
          name: 'Коррекция бровей с покраской',
          price: 500,
          description:
            'Подстройка формы бровей и окрашивание для выделения контура.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
        },
        {
          name: 'Бикини полное',
          price: 1500,
          description: 'Полное удаление волос в области бикини.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 45,
        },
        {
          name: 'Бикини частичное',
          price: 1000,
          description: 'Частичное удаление волос в области бикини.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
        },
        {
          name: 'Лицо',
          price: 400,
          description: 'Удаление волос с лица для создания гладкой кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 20,
        },
        {
          name: 'Ноги до колен',
          price: 500,
          description: 'Удаление волос с ног до коленного сгиба.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
        },
        {
          name: 'Ноги полностью',
          price: 1000,
          description: 'Полное удаление волос с ног.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 45,
        },
        {
          name: 'Живот',
          price: 400,
          description: 'Удаление волос с области живота.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 20,
        },
        {
          name: 'Руки до локтя',
          price: 350,
          description: 'Удаление волос с рук до локтя.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 20,
        },
        {
          name: 'Руки полностью',
          price: 600,
          description: 'Полное удаление волос с рук.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
        },
        {
          name: 'Нос',
          price: 250,
          description: 'Удаление волос из носа для более аккуратного вида.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 15,
        },
        {
          name: 'Усики',
          price: 250,
          description: 'Удаление волос над верхней губой.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 15,
        },
        {
          name: 'Подмышечные впадины',
          price: 450,
          description: 'Удаление волос из подмышечных впадин.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 25,
        },
      ],
    },

    {
      title: 'Косметология',

      list: [
        {
          name: 'Косметические маски',
          price: 0,
          description: 'Разнообразные маски для ухода за кожей лица.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Коррекция морщин ( маска, сыворотка)',
          price: 1200,
          description:
            'Процедура коррекции морщин с применением маски и сыворотки.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Маска лифтинговая',
          price: 700,
          description:
            'Лифтинговая маска для улучшения тонуса и упругости кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Маска отбеливающая',
          price: 700,
          description: 'Маска для осветления и выравнивания тонуса кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Маска питательная',
          price: 700,
          description: 'Маска для питания и увлажнения кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Маска подсушивающая',
          price: 700,
          description: 'Маска для уменьшения жирности кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Маска успокаивающая',
          price: 700,
          description:
            'Маска для снятия раздражения и уменьшения покраснений кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Скраб Израильский',
          price: 600,
          description: 'Скраб для глубокого очищения пор кожи лица.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 20,
        },
        {
          name: 'Скраб, пилинг лица',
          price: 600,
          description:
            'Скраб для удаления ороговевших клеток и очищения кожи лица.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Маска восстанавливающая GiGi',
          price: 700,
          description: 'Маска для восстановления и регенерации кожи лица.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Маска Альгинатная',
          price: 700,
          description: 'Альгинатная маска для интенсивного увлажнения кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Уходовые процедуры',
          price: 0,
          description: 'Процедуры по уходу за кожей лица и тела.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: '3 ANTI-AGE уход',
          price: 2500,
          description: 'Антивозрастная программа ухода за кожей.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Лифтинг массаж',
          price: 850,
          description:
            'Лифтинг массаж лица для улучшения тонуса и омоложения кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Лифтинговая программа',
          price: 1500,
          description:
            'Программа лифтинга для лица с использованием инновационных технологий.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Массаж лица классический',
          price: 600,
          description:
            'Классический массаж лица для расслабления и улучшения кровообращения.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Омолож-е и освет-е (линия Illustrious)',
          price: 2000,
          description:
            'Процедура омоложения и осветления кожи лица с использованием продукции линии Illustrious.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Осветление лица линия Illustrious',
          price: 1700,
          description:
            'Процедура осветления кожи лица с использованием продукции линии Illustrious.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Пилинг рисовый GiGi увл',
          price: 1500,
          description:
            'Пилинг на основе рисовых отрубей для увлажнения и очищения кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
        },
        {
          name: 'Пилинг рисовый Сhristina увл',
          price: 1500,
          description:
            'Пилинг на основе рисовых отрубей для увлажнения и очищения кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },

        {
          name: 'Чистка лица',
          price: 0,
          description:
            'Стандартная чистка лица для удаления загрязнений и комедонов.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
        },
        {
          name: 'Аппаратная чистка лица',
          price: 2000,
          description:
            'Глубокая чистка лица с использованием аппаратных методов.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
        },
        {
          name: 'Дарсонваль',
          price: 300,
          description:
            'Процедура лечения кожи с помощью высокочастотного тока.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Классическая чистка лица',
          price: 1700,
          description:
            'Стандартная чистка лица для удаления черных точек и жирных пробок.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 50,
        },
        {
          name: 'Коагуляция 1 элемент',
          price: 100,
          description:
            'Удаление мелких образований на коже с помощью коагуляции.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Комбинированная чистка',
          price: 2000,
          description:
            'Комбинированная процедура чистки лица для глубокого очищения.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
        },
        {
          name: 'Коррекция морщин ампулой',
          price: 800,
          description: 'Процедура коррекции морщин с использованием ампул.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 40,
        },
        {
          name: 'Механ.чистка лица сложная',
          price: 1700,
          description:
            'Сложная механическая чистка лица для глубокого очищения.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Поверхностный пилинг лица',
          price: 1200,
          description: 'Поверхностный пилинг для улучшения текстуры кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Удаление жировиков 1 элемент',
          price: 100,
          description: 'Удаление отдельных жировых образований на коже.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Ультразвуковая чистка (сложная)',
          price: 2500,
          description:
            'Глубокая ультразвуковая чистка лица для эффективного очищения кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
        },
        {
          name: 'Ультразвуковая чистка',
          price: 1700,
          description:
            'Стандартная ультразвуковая чистка лица для улучшения состояния кожи.',
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
        },
      ],
    },

    {
      title: 'Парикхмахерская Ж',
      list: [
        {
          name: 'Краски',
          price: 0,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 0,
          description: 'Различные краски для окрашивания волос.',
        },
        {
          name: 'Couture blond bar 30 мл',
          price: 70,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
          description: 'Краска для волос Couture blond bar объемом 30 мл.',
        },
        {
          name: 'Estel Golor off',
          price: 200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Краситель для удаления пигментации волос Estel Golor off.',
        },
        {
          name: "Кератин.питание 'Эстель'",
          price: 2000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 90,
          description:
            "Процедура кератинового питания волос от бренда 'Эстель'.",
        },
        {
          name: 'Корректор Estel 5 мл',
          price: 50,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Корректор для волос Estel объемом 5 мл.',
        },
        {
          name: 'Краска Couture 10 мл',
          price: 70,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Краска для волос Couture объемом 10 мл.',
        },
        {
          name: 'Краска Couture 30 мл',
          price: 215,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
          description: 'Краска для волос Couture объемом 30 мл.',
        },
        {
          name: 'Краска Couture 60 мл',
          price: 430,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Краска для волос Couture объемом 60 мл.',
        },
        {
          name: 'Краска Deluxe/silver 10 мл',
          price: 70,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Краска для волос Deluxe/silver объемом 10 мл.',
        },
        {
          name: 'Краска Deluxe/silver 30 мл',
          price: 200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Краска для волос Deluxe/silver объемом 30 мл.',
        },
        {
          name: 'Краска Estel Deluxe',
          price: 350,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Краска для волос Estel Deluxe.',
        },
        {
          name: 'Краска Estel Deluxe 10 мл',
          price: 100,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Краска для волос Estel Deluxe объемом 10 мл.',
        },
        {
          name: 'Краска Estel Deluxe 30 мл',
          price: 300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
          description: 'Краска для волос Estel Deluxe объемом 30 мл.',
        },
        {
          name: 'Краска Estel Deluxe 60 мл',
          price: 600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Краска для волос Estel Deluxe объемом 60 мл.',
        },
        {
          name: 'Краска Estel Prince 10 мл',
          price: 70,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Краска для волос Estel Prince объемом 10 мл.',
        },
        {
          name: 'Краска Estel Prince 100 мл',
          price: 700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Краска для волос Estel Prince объемом 100 мл.',
        },
        {
          name: 'Краска Estel Prince 50 мл',
          price: 350,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
          description: 'Краска для волос Estel Prince объемом 50 мл.',
        },
        {
          name: 'Краска Estel Silver 10 мл',
          price: 70,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Краска для волос Estel Silver объемом 10 мл.',
        },
        {
          name: 'Краска Estel Silver 30 мл',
          price: 300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Краска для волос Estel Silver объемом 30 мл.',
        },
        {
          name: 'Краска Estel Silver 60 мл',
          price: 600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Краска для волос Estel Silver объемом 60 мл.',
        },
        {
          name: 'Краска ollin 10 мл',
          price: 70,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Краска для волос ollin объемом 10 мл.',
        },
        {
          name: 'Краска ollin 30 мл',
          price: 210,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Краска для волос ollin объемом 30 мл.',
        },
        {
          name: 'Краска ollin 60 мл',
          price: 420,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Краска для волос ollin объемом 60 мл.',
        },
        {
          name: 'Краска Хна',
          price: 150,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Краска для волос на основе хны.',
        },
        {
          name: 'Маска интен. д п в Curex Therapy',
          price: 600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Интенсивная маска для волос из линии Curex Therapy.',
        },
        {
          name: 'Окислитель estel 50 гр',
          price: 80,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Окислитель для волос Estel объемом 50 гр.',
        },
        {
          name: 'Супра 30 гр',
          price: 300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Специальный препарат Supra для ухода за волосами объемом 30 гр.',
        },
        {
          name: 'Локоны 100гр',
          price: 150,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Средство для создания локонов на волосах в объеме 100 гр.',
        },
        {
          name: 'Окрашивание и уход',
          price: 0,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Окрашивание волос и последующий уход за ними.',
        },
        {
          name: 'Маска оттеночная',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Оттеночная маска для волос.',
        },
        {
          name: 'Маска питательная для волос',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 20,
          description: 'Питательная маска для ухода за волосами.',
        },
        {
          name: 'Мелирование',
          price: 1000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Процесс нанесения мелирования на волосы.',
        },
        {
          name: 'Обесцвечивание',
          price: 800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Процедура обесцвечивания волос.',
        },
        {
          name: 'Омбре балаяж работа',
          price: 1000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 90,
          description: 'Покраска волос в стиле омбре и балаяж.',
        },
        {
          name: 'Покраска бровей',
          price: 200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 20,
          description: 'Покраска бровей.',
        },
        {
          name: 'Покраска волос',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
          description: 'Покраска волос.',
        },
        {
          name: 'Прикорневой обьем пудрой',
          price: 200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 15,
          description: 'Придание объема волосам с помощью специальной пудры.',
        },
        {
          name: 'Сложное окрашивание',
          price: 1200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 90,
          description: 'Сложная процедура окрашивания волос.',
        },
        {
          name: 'Смывка',
          price: 600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Смывка окраски с волос.',
        },
        {
          name: 'Флисинг',
          price: 700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description: "Техника окрашивания волос 'флисинг'.",
        },
        {
          name: 'Частичное мелирование (1прядь)',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description: 'Частичное мелирование волос (1 прядь).',
        },
        {
          name: 'Экранирование волос (Спа д/я волос)',
          price: 700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description: 'Процедура экранирования волос в спа-салоне.',
        },
        {
          name: 'Хим.завивка',
          price: 900,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 90,
          description: 'Химическая завивка волос.',
        },
      ],
    },

    {
      title: 'Стрижка, Укладка',
      list: [
        {
          name: 'Гофре прикорневое',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description: 'Прикорневое гофрирование волос.',
        },
        {
          name: 'Коррекция бровей',
          price: 300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description: 'Коррекция формы бровей.',
        },
        {
          name: 'Локоны(сушка,локон)',
          price: 800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 45,
          description: 'Создание локонов при сушке волос.',
        },
        {
          name: 'Мытье волос',
          price: 250,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 15,
          description: 'Мытье волос перед проведением других процедур.',
        },
        {
          name: 'Плетение косичек',
          price: 300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description: 'Плетение косичек на волосах.',
        },
        {
          name: 'Пляжные локоны',
          price: 800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description: 'Придание волосам эффекта пляжных локонов.',
        },
        {
          name: 'Полировка волос',
          price: 600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 45,
          description:
            'Процедура полировки волос для придания им блеска и гладкости.',
        },
        {
          name: 'Стрижка (от длины)',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 45,
          description: 'Стрижка волос с сохранением текущей длины.',
        },
        {
          name: 'Стрижка детская (до10 лет)',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description: 'Стрижка волос для детей до 10 лет.',
        },
        {
          name: 'Стрижка челки',
          price: 300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 15,
          description: 'Стрижка челки по желанию клиента.',
        },
        {
          name: 'Сушка по направлению',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Сушка волос в определенном направлении для создания объема или формы.',
        },
        {
          name: 'Укладка',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 30,
          description:
            'Укладка волос без использования термических инструментов.',
        },
        {
          name: 'Укладка утюжком',
          price: 600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 45,
          description:
            'Укладка волос с использованием утюжка для создания прямых линий или волнистых узоров.',
        },
        {
          name: 'Усики с ниткой',
          price: 150,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 15,
          description: 'Удаление лишних волос на лице с использованием нити.',
        },
        {
          name: 'Фелирование волос',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          time: 60,
          description: 'Фелирование волос для придания им объема и текстуры.',
        },
      ],
    },
  ];

  const menList = [
    {
      title: 'Парение',
      list: [
        {
          name: 'Круговое парение',
          price: 1000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Процедура парения в сауне, охватывающая весь организм.',
        },
        {
          name: 'Лечебное парение',
          price: 1200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description:
            'Парение с использованием лечебных трав и эфирных масел.',
        },
        {
          name: 'В гостях у парильщика',
          price: 1400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Парение под руководством опытного парильщика.',
        },
        {
          name: 'Боярское парение',
          price: 1700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Роскошное парение в стиле боярской усадьбы.',
        },
        {
          name: 'Королевское парение "Sumbule"',
          price: 2200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 90,
          description:
            'Изысканное королевское парение с использованием ароматических трав и масел.',
        },
        {
          name: 'Лечебное парение с растяжкой',
          price: 1500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 90,
          description: 'Парение, сочетающееся с растяжкой мышц и суставов.',
        },
        {
          name: 'Парение "зима-лето"',
          price: 1500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description:
            'Контрастное парение, чередующееся с холодным и горячим воздухом.',
        },
        {
          name: 'Пенный массаж',
          price: 1400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
          description:
            'Массаж с использованием пены для более эффективного расслабления и очищения кожи.',
        },
        {
          name: 'Хан пар',
          price: 3500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 120,
          description:
            'Парение по восточным традициям, сочетающееся с массажем и ароматерапией.',
        },
      ],
    },

    {
      title: 'Пилинг',
      list: [
        {
          name: 'Султан пилинг (маска альгинатная, пилинг, скраб)',
          price: 3200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 90,
          description:
            'Комплексный пилинг с использованием альгинатной маски, пилинга и скраба.',
        },
        {
          name: 'Пилинг лица',
          price: 350,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
          description:
            'Пилинг для лица для удаления ороговевших клеток и стимуляции обновления кожи.',
        },
        {
          name: 'Пилинг с имбирным/розовым мылом',
          price: 800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description:
            'Пилинг с использованием имбирного или розового мыла для более нежной и гладкой кожи.',
        },
        {
          name: 'Альгинатная маска для лица',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Маска на основе альгината для увлажнения и питания кожи лица.',
        },
        {
          name: 'Домывка (после массажа)',
          price: 450,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 15,
          description:
            'Процедура домывки кожи после массажа для удаления остатков масла и косметики.',
        },
        {
          name: 'Маска для волос NaturMed+/Скипофит',
          price: 600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Маска для волос для увлажнения и восстановления структуры.',
        },
        {
          name: 'Общий пилинг',
          price: 650,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
          description: 'Комплексный пилинг для обновления и очищения кожи.',
        },
        {
          name: 'Пилинг с корейским мылом',
          price: 800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description:
            'Пилинг с использованием корейского мыла для глубокого очищения кожи.',
        },
        {
          name: 'Пилинг с американским мылом',
          price: 850,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description:
            'Пилинг с использованием американского мыла для очищения и омоложения кожи.',
        },
        {
          name: 'Пилинг-маска для лица "Premium"',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Эксклюзивная пилинг-маска для лица для улучшения состояния кожи.',
        },
        {
          name: 'Премиум пилинг (пилинг, маска альгинатная, скраб, ванна скипидарная)',
          price: 5000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 120,
          description:
            'Роскошная процедура пилинга с альгинатной маской, скрабом и ванной скипидарной.',
        },
        {
          name: 'Пилинг со скраб-мылом',
          price: 850,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description:
            'Пилинг с использованием скраб-мыла для глубокого очищения кожи.',
        },
      ],
    },

    {
      title: 'Ванны',
      list: [
        {
          name: 'Скипидарная ванна',
          price: 1600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Ванна с использованием скипидара для укрепления здоровья и очищения организма.',
        },
        {
          name: 'Ванны из пант Алтайского марала',
          price: 1700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Ванны, насыщенные экстрактом пантового марала, для восстановления сил и энергии.',
        },
        {
          name: 'Душ "Шарко" (5-7 минут)',
          price: 800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 10,
          description:
            'Короткий процесс душа под массажные струи "Шарко" для оздоровления и бодрости.',
        },
        {
          name: 'Ванна с морской солью',
          price: 1300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Ванна с добавлением морской соли для расслабления и очищения кожи.',
        },
        {
          name: 'Винная ванна',
          price: 2000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 40,
          description:
            'Ванна с добавлением виноградных экстрактов для укрепления кожи и общего оздоровления.',
        },
        {
          name: 'Маска для волос NaturMed+/Скипофит',
          price: 600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Маска для волос для увлажнения и восстановления структуры.',
        },
        {
          name: 'Пенный массаж',
          price: 1400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
          description:
            'Массаж с использованием пены для расслабления и стимуляции кровообращения.',
        },
      ],
    },

    {
      title: 'Массаж',
      list: [
        {
          name: 'Массаж с кит.маслом',
          price: 0,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Массаж с использованием китайского масла для глубокого расслабления.',
        },
        {
          name: 'Массаж с кремом',
          price: 0,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Массаж с использованием крема для питания и увлажнения кожи.',
        },
        {
          name: 'Кр.Mix массаж (60 минут)',
          price: 2300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Смешанный массаж длительностью 60 минут.',
        },
        {
          name: 'Кр.Mix массаж (90 минут)',
          price: 3300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 90,
          description: 'Смешанный массаж длительностью 90 минут.',
        },
        {
          name: 'Кр.Relax массаж (60 минут)',
          price: 2000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Массаж для релаксации длительностью 60 минут.',
        },
        {
          name: 'Кр.Relax массаж (90 минут)',
          price: 3000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 90,
          description: 'Массаж для релаксации длительностью 90 минут.',
        },
        {
          name: 'Кр.Воротниковая зона',
          price: 1000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Массаж воротниковой зоны для снятия напряжения.',
        },
        {
          name: 'Кр.Детский массаж (до 10 лет)',
          price: 1000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Массаж для детей до 10 лет.',
        },
        {
          name: 'Кр.Классический массаж (60 минут)',
          price: 1700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Классический массаж длительностью 60 минут.',
        },
        {
          name: 'Кр.Классический массаж (90 минут)',
          price: 2500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 90,
          description: 'Классический массаж длительностью 90 минут.',
        },
        {
          name: 'Кр.Спина',
          price: 1200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Массаж спины для снятия напряжения и улучшения кровообращения.',
        },
        {
          name: 'Кр.спина, ноги',
          price: 1400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
          description: 'Массаж спины и ног для полного расслабления.',
        },
        {
          name: 'Кр.Спортивный массаж (60 минут)',
          price: 2200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Спортивный массаж длительностью 60 минут.',
        },
        {
          name: 'Кр.Спортивный массаж (90 минут)',
          price: 3300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 90,
          description: 'Спортивный массаж длительностью 90 минут.',
        },
        {
          name: 'Крем к массажу',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 0,
          description: 'Крем для использования во время массажа.',
        },
        {
          name: 'Массаж головы (15 минут)',
          price: 800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 15,
          description:
            'Массаж головы для расслабления и улучшения кровообращения.',
        },
        {
          name: 'Массаж  с маслом Домикс',
          price: 0,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Массаж с маслом Домикс для улучшения состояния кожи.',
        },
        {
          name: 'Массаж с турецким маслом',
          price: 0,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Массаж с использованием турецкого масла для глубокого расслабления.',
        },
        {
          name: 'Масло к массажу',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 0,
          description: 'Масло для использования во время массажа.',
        },
        {
          name: 'Т.Mix массаж (60 минут)',
          price: 2300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Смешанный массаж длительностью 60 минут.',
        },
        {
          name: 'Т.Mix массаж (90 минут)',
          price: 3300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 90,
          description: 'Смешанный массаж длительностью 90 минут.',
        },
        {
          name: 'Т.Relax массаж (60 минут)',
          price: 2000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Массаж для релаксации длительностью 60 минут.',
        },
        {
          name: 'Т.Relax массаж (90 минут)',
          price: 3000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 90,
          description: 'Массаж для релаксации длительностью 90 минут.',
        },
        {
          name: 'Т.Воротниковая зона',
          price: 800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Массаж воротниковой зоны для снятия напряжения.',
        },
        {
          name: 'Т.Детский массаж (до 10 лет)',
          price: 1000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Массаж для детей до 10 лет.',
        },
        {
          name: 'Т.Классический массаж (60 минут)',
          price: 1700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Классический массаж длительностью 60 минут.',
        },
        {
          name: 'Т.Классический массаж (70 минут)',
          price: 2500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 70,
          description: 'Классический массаж длительностью 70 минут.',
        },
        {
          name: 'Т.Спина (20мин)',
          price: 1200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 20,
          description:
            'Массаж спины для снятия напряжения и улучшения кровообращения.',
        },
        {
          name: 'Т.Спина,ноги (40мин)',
          price: 1400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 40,
          description: 'Массаж спины и ног для полного расслабления.',
        },
        {
          name: 'Т.Спортивный массаж (60 минут)',
          price: 2200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Спортивный массаж длительностью 60 минут.',
        },
        {
          name: 'Т.Спортивный массаж (90 минут)',
          price: 3300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 90,
          description: 'Спортивный массаж длительностью 90 минут.',
        },
        {
          name: 'Массаж с корейским маслом',
          price: 0,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Массаж с использованием корейского масла для глубокого расслабления.',
        },
        {
          name: 'Массаж банками',
          price: 600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Массаж с использованием банок для улучшения кровообращения.',
        },
        {
          name: 'Массаж головы 15 минут',
          price: 800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 15,
          description:
            'Массаж головы для расслабления и улучшения кровообращения.',
        },
      ],
    },

    {
      title: 'Скрабы М',
      list: [
        {
          name: 'Скраб сахарный Eco',
          price: 1600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Скраб на основе сахара, экологически чистый продукт.',
        },
        {
          name: "Скраб 'Penta'",
          price: 1200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: "Скраб 'Penta' для эффективного очищения кожи.",
        },
        {
          name: 'Скраб Tree Hut',
          price: 2000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Скраб от Tree Hut для нежного ухода за кожей.',
        },
        {
          name: 'Скраб разогревающий',
          price: 1800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Скраб, обладающий разогревающим эффектом для стимуляции кровообращения.',
        },
        {
          name: 'Косметология',
          price: 0,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 0,
          description:
            'Различные косметологические процедуры для улучшения состояния кожи.',
        },
        {
          name: 'Классическая чистка лица',
          price: 1500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Комплексная чистка лица включающая в себя маску.',
        },
        {
          name: 'Vip-уход за лицом,лифтинговый уход',
          price: 2000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 90,
          description:
            'Эксклюзивный уход за лицом, включая ручной массаж, ампульный концентрат, маску и завершающий крем.',
        },
        {
          name: 'Механическая чистка лица (сложная)',
          price: 1700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description:
            'Сложная механическая чистка лица для удаления загрязнений.',
        },
        {
          name: 'Удаление жировиков (1-элемент)',
          price: 50,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 15,
          description: 'Удаление одного жировика.',
        },
        {
          name: 'Ультразвуковая чистка лица (сложная)',
          price: 2000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description:
            'Сложная ультразвуковая чистка лица для глубокого очищения пор.',
        },
        {
          name: 'Комплексная чистка лица с ультразвуком',
          price: 1700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description:
            'Комплексная чистка лица включающая ультразвук для более эффективного очищения.',
        },
        {
          name: 'Массаж лица классический',
          price: 700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Классический массаж лица для расслабления и оздоровления кожи.',
        },
        {
          name: 'Моделирующий лифтинг-массаж',
          price: 850,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
          description:
            'Массаж лица с целью моделирования и улучшения контуров.',
        },
        {
          name: 'Аппаратная чистка лица (аквапилинг)',
          price: 1500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
          description:
            'Чистка лица с использованием аппарата для глубокого очищения.',
        },
        {
          name: 'Микротоковая терапия',
          price: 1000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description:
            'Процедура для улучшения состояния кожи лица, повышения тургора и лечения акне.',
        },
        {
          name: 'RW лифтинг',
          price: 1200,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 45,
          description: 'Процедура лифтинга лица.',
        },
        {
          name: 'ANTI-AGE Уход',
          price: 2000,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description:
            'Уход за кожей лица для предотвращения признаков старения.',
        },
        {
          name: 'Классический уход лица',
          price: 1300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 60,
          description: 'Классический уход за кожей лица.',
        },
      ],
    },
    {
      title: 'Маски для лица',
      list: [
        {
          name: 'Альгинатная маска',
          price: 700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Увлажняющая и питательная альгинатная маска для лица.',
        },
        {
          name: 'Отбеливающая маска',
          price: 700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Маска, предназначенная для отбеливания и выравнивания тона кожи.',
        },
        {
          name: 'Успокаивающая маска',
          price: 700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Маска с успокаивающим эффектом для чувствительной кожи.',
        },
        {
          name: 'Поросуживающая маска',
          price: 700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description:
            'Маска, которая способствует сужению пор и улучшению текстуры кожи.',
        },
        {
          name: 'Увлажняющая маска',
          price: 700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Маска для интенсивного увлажнения кожи лица.',
        },
        {
          name: 'Маска вокруг глаз',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 20,
          description: 'Маска для ухода за кожей вокруг глаз.',
        },
        {
          name: 'Маска Противосполительная',
          price: 700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Маска с противовоспалительным действием.',
        },
      ],
    },
    {
      title: 'Депиляция и шугаринг',
      list: [
        {
          name: 'Бикини полное',
          price: 1500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Полная депиляция зоны бикини.',
        },
        {
          name: 'Подмышечные впадины',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Депиляция в подмышечных впадинах.',
        },
        {
          name: 'Депиляция Грудная клетка',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Депиляция области грудной клетки.',
        },
        {
          name: 'Депиляция Живота',
          price: 800,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Депиляция области живота.',
        },
        {
          name: 'Депиляция Лица',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Депиляция лица.',
        },
        {
          name: 'Депиляция подбород.шея',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Депиляция области подбородка и шеи.',
        },
        {
          name: 'Депиляция Спины',
          price: 700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Депиляция спины.',
        },
        {
          name: 'Депиляция ушей',
          price: 300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Депиляция области ушей.',
        },
        {
          name: 'Очищение носа',
          price: 300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Процедура очищения носа.',
        },
        {
          name: 'Бакенбарды',
          price: 350,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Депиляция бакенбардов.',
        },
      ],
    },
    {
      title: 'Пилинги',
      list: [
        {
          name: 'Миндальный пилинг',
          price: 1500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Пилинг на основе миндальных частиц.',
        },
        {
          name: 'Рисовый пилинг',
          price: 1500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Пилинг на основе рисовых экстрактов.',
        },
      ],
    },
    {
      title: 'Парикмахерские услуги',
      list: [
        {
          name: 'Стрижка под машинку',
          price: 350,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Стрижка волос под машинку.',
        },
        {
          name: 'Стрижка наголо',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Стрижка волос наголо.',
        },
        {
          name: 'Стрижка спортивная',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Стрижка в спортивном стиле.',
        },
        {
          name: 'Стрижка модельная',
          price: 550,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Стрижка с моделированием.',
        },
        {
          name: 'Стрижка детская (до 10 лет)',
          price: 450,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Стрижка волос для детей до 10 лет.',
        },
        {
          name: 'Окантовка',
          price: 300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Окантовка волос.',
        },
        {
          name: 'Филировка волос',
          price: 300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Филировка волос для создания объема и текстуры.',
        },
        {
          name: 'Сушка по направлению',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Сушка волос с учетом направления роста.',
        },
        {
          name: 'Мытье волос',
          price: 250,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Процедура мытья волос.',
        },
        {
          name: 'Покраска волос',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Покраска волос в выбранный оттенок.',
        },
        {
          name: 'Стрижка усов',
          price: 250,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Стрижка усов.',
        },
        {
          name: 'Стрижка бороды',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Стрижка бороды в выбранном стиле.',
        },
        {
          name: 'Бритье бороды',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Процедура бритья бороды.',
        },
        {
          name: 'Краска Deluxe/silver 30 мл',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Краска для волос серебристого оттенка.',
        },
        {
          name: 'Ногтевой сервис',
          price: 0,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Уход за ногтями.',
        },
      ],
    },
    {
      title: 'СПА уход для ног',
      list: [
        {
          name: 'Удаление вросшего ногтя',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Процедура удаления вросшего ногтя.',
        },
        {
          name: 'Маникюр классический',
          price: 700,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Классический маникюр.',
        },
        {
          name: 'Стрижка ногтей рук',
          price: 300,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Стрижка ногтей на руках.',
        },
        {
          name: 'Стрижка ногтей ног',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Стрижка ногтей на ногах.',
        },
        {
          name: 'Обработка пальчиков',
          price: 650,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Обработка кожи вокруг ногтей.',
        },
        {
          name: 'Парафинотерапия рук',
          price: 500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Парафинотерапия для рук.',
        },
        {
          name: 'Парафинотерапия ног',
          price: 600,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Парафинотерапия для ног.',
        },
        {
          name: 'Кератолик (жидкость для обработки пяток)',
          price: 250,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Жидкость для обработки пяток.',
        },
        {
          name: 'Педикюр классический',
          price: 1500,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Классический педикюр.',
        },
        {
          name: 'Обработка пяток',
          price: 650,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Обработка пяток.',
        },
        {
          name: 'Покрытие лаком',
          price: 100,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'Покрытие ногтей лаком.',
        },
        {
          name: 'СПА уход для рук',
          price: 400,
          image: 'https://goosi-lebedi.ru/assets/images/resources/412/123.jpg',
          time: 30,
          description: 'СПА-уход для рук.',
        },
      ],
    },
  ];

  return (
    <div className="w-full h-auto py-10 flex gap-10 flex-col justify-center items-center px-5 sm:px-0 ">
      <div className="flex flex-col justify-center py-[50px] px-[100px] md:px-[50px] sm:px-4 gap-4">
        <p className="text-center uppercase">Наш сервис</p>
        <div className="flew w-full justify-center items-center md:px-5 sm:px-4 gap-5">
          <div className="flex justify-center flex-wrap text-center">
            Релаксирующие процедуры для уюта и здоровья: Погрузитесь в атмосферу
            полного расслабления с нашими релаксирующими процедурами в сауне.
            Наслаждайтесь благоприятным воздействием тепла на ваш организм,
            освежайте кожу и ощущайте прилив энергии. Ознакомьтесь с нашими
            ценами ниже и подарите своему телу заслуженный отдых.
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <p className="text-[20px] uppercase text-center px-3 py-5">
          Услуги для женщин
        </p>

        {womenList.map((category, index) => (
          <Accordion key={index}>
            <AccordionSummary
              className="bg-[#242020] text-[#FAFAFA] uppercase tracking-[1px]"
              expandIcon={<ExpandMoreRounded color="#fafafa" />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              {category.title}
            </AccordionSummary>

            <AccordionDetails>
              <div className="flex flex-wrap w-full h-auto justify-evenly items-center gap-4">
                {category.list.map((procedure, procIndex) => (
                  <div
                    key={procIndex}
                    className="flex justify-between items-center px-3 gap-5 ling"
                  >
                    <ServiceCard procedure={procedure} />
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      <div className="w-full flex flex-col">
        <p className="text-[20px] uppercase text-center px-3 py-5">
          Услуги для мужчин
        </p>

        {menList.map((category, index) => (
          <Accordion key={index}>
            <AccordionSummary
              className="bg-[#242020] text-[#FAFAFA] uppercase tracking-[1px]"
              expandIcon={<ExpandMoreRounded color="#fafafa" />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              {category.title}
            </AccordionSummary>

            <AccordionDetails>
              <div className="flex flex-wrap w-full h-auto justify-evenly items-center gap-4">
                {category.list.map((procedure, procIndex) => (
                  <div
                    key={procIndex}
                    className="flex justify-between items-center px-3 gap-5 ling"
                  >
                    <ServiceCard procedure={procedure} />
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
