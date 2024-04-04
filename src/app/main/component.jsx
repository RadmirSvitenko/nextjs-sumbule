'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { useState } from 'react';

import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

export default function App() {
  const imageList = ['/sauna_bg-1.jpg', '/sauna_bg-2.jpg', '/sauna_bg-3.jpg'];

  const serviceList = [
    {
      name: 'Янтарная ванна',
      image:
        'https://gallery.forum-grad.ru/files/5/7/8/4/modern-lakefront-residence-texas-05.jpg',
      time: 1,
      price: 1700,
    },

    {
      name: 'Янтарная ванна1',
      image:
        'https://gallery.forum-grad.ru/files/5/7/8/4/modern-lakefront-residence-texas-05.jpg',
      time: 1,
      price: 1700,
    },

    {
      name: 'Янтарная ванна2',
      image:
        'https://gallery.forum-grad.ru/files/5/7/8/4/modern-lakefront-residence-texas-05.jpg',
      time: 1,
      price: 1700,
    },

    {
      name: 'Янтарная ванна3',
      image:
        'https://gallery.forum-grad.ru/files/5/7/8/4/modern-lakefront-residence-texas-05.jpg',
      time: 1,
      price: 1700,
    },

    {
      name: 'Янтарная ванна4',
      image:
        'https://gallery.forum-grad.ru/files/5/7/8/4/modern-lakefront-residence-texas-05.jpg',
      time: 1,
      price: 1700,
    },

    {
      name: 'Янтарная ванна5',
      image:
        'https://gallery.forum-grad.ru/files/5/7/8/4/modern-lakefront-residence-texas-05.jpg',
      time: 1,
      price: 3300,
    },

    {
      name: 'Янтарная ванна6',
      image:
        'https://gallery.forum-grad.ru/files/5/7/8/4/modern-lakefront-residence-texas-05.jpg',
      time: 1,
      price: 2200,
    },

    {
      name: 'Янтарная ванна7',
      image:
        'https://gallery.forum-grad.ru/files/5/7/8/4/modern-lakefront-residence-texas-05.jpg',
      time: 1,
      price: 1700,
    },

    {
      name: 'Янтарная ванна8',
      image:
        'https://gallery.forum-grad.ru/files/5/7/8/4/modern-lakefront-residence-texas-05.jpg',
      time: 1,
      price: 1700,
    },
  ];

  return (
    <div className="w-full min-h-screen h-auto flex flex-col">
      <Swiper
        id="main"
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        speed={1200}
        grabCursor={true}
        effect={'fade'}
        navigation={true}
        modules={[Navigation, Autoplay, EffectFade]}
        className="mySwiper6"
      >
        {imageList?.map((image, index) => (
          <SwiperSlide key={index} className="z-10">
            <div
              className="w-full h-screen flex"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        id="our_services"
        className="w-full min-h-screen h-auto flex justify-evenly gap-8 flex-wrap bg-[#D1D2CE]"
      >
        <div className="flex flex-col gap-5 w-full justify-center items-center px-[100px] py-[50px]">
          <p className="uppercase tracking-[3px]">Наши услуги</p>

          <span className="tracking-[2px] xl:w-[700px] text-center">
            Наслаждайтесь аутентичным финским опытом в нашей деревянной сауне.
            Высокие температуры и низкая влажность помогут вам расслабиться,
            очистить кожу и улучшить кровообращение.
          </span>
        </div>

        <div className="relative lg:gap-0 gap-5 py-5 flex justify-between w-full h-[500px] flex-wrap">
          {/* 1 */}

          <div className="lg:w-4/12 w-full h-[500px] transition-all duration-700 ease-in-out relative overflow-hidden">
            <div className="absolute bottom-0 left-0 p-3 text-white uppercase opacity-100 hover:opacity-100 transition-opacity duration-500 z-10">
              <p className="tracking-[1px] hover:underline hover:cursor-pointer">
                Камни для тела
              </p>
            </div>
            <img
              src="https://respace.su/local/templates/respace-en/assets/images/services-first.jpg"
              alt="Камни для тела"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
              style={{ position: 'relative', zIndex: '1' }}
            />
          </div>

          {/* 2 */}

          <div className="lg:w-4/12 w-full h-[500px] transition-all duration-700 ease-in-out relative overflow-hidden">
            <div className="absolute bottom-0 left-0 p-3 text-white uppercase opacity-100 hover:opacity-100 transition-opacity duration-500 z-10">
              <p className="tracking-[1px] hover:underline hover:cursor-pointer">
                Камни для тела
              </p>
            </div>
            <img
              src="https://respace.su/local/templates/respace-en/assets/images/services-first.jpg"
              alt="Камни для тела"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
              style={{ position: 'relative', zIndex: '1' }}
            />
          </div>

          {/* 3 */}

          <div className="lg:w-4/12 w-full h-[500px] transition-all duration-700 ease-in-out relative overflow-hidden">
            <div className="absolute bottom-0 left-0 p-3 text-white uppercase opacity-100 hover:opacity-100 transition-opacity duration-500 z-10">
              <p className="tracking-[1px] hover:underline hover:cursor-pointer">
                Камни для тела
              </p>
            </div>
            <img
              src="https://respace.su/local/templates/respace-en/assets/images/services-first.jpg"
              alt="Камни для тела"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
              style={{ position: 'relative', zIndex: '1' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
