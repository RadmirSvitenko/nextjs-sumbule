'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();

  const toChangePage = (page) => {
    router.push(page);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Если прокрутка больше 0, то меняем состояние на true
      setIsScrolled(scrollTop > 0);
    };

    // Добавляем слушателя события прокрутки при монтировании компонента
    window.addEventListener('scroll', handleScroll);

    // Удаляем слушателя события прокрутки при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex  ${
        isScrolled ? 'fixed' : 'static'
      } z-[100] w-full justify-evenly items-center gap-4 bg-[#fff] bg-opacity-${
        isScrolled ? '70' : '0'
      } py-5 px-3`}
    >
      <a
        onClick={() => toChangePage('/')}
        className="text-[#242022] uppercase font-[700] tracking-[1px] cursor-pointer transition-[1s] hover:text-[#3f3f3f] hover:py-3 hover:border-b-[1px] hover:border-b-[#3f3f3f]"
      >
        Гланая
      </a>
      <a
        onClick={() => toChangePage('/our-services')}
        className="text-[#242022] uppercase font-[700] tracking-[1px] cursor-pointer transition-[1s] hover:text-[#3f3f3f] hover:py-3 hover:border-b-[1px] hover:border-b-[#3f3f3f]"
      >
        Наш сервис
      </a>
      <img
        src="/sambule-logo.jpg"
        alt="logo"
        width={'80px'}
        className=" rounded-[50%]"
      />
      <a
        onClick={() => toChangePage('/our-products')}
        className="text-[#242022] uppercase font-[700] tracking-[1px] cursor-pointer transition-[1s] hover:text-[#3f3f3f] hover:py-3 hover:border-b-[1px] hover:border-b-[#3f3f3f]"
      >
        Наши товары
      </a>
      <a
        onClick={() => toChangePage('/about-us')}
        className="text-[#242022] uppercase font-[700] tracking-[1px] cursor-pointer transition-[1s] hover:text-[#3f3f3f] hover:py-3 hover:border-b-[1px] hover:border-b-[#3f3f3f]"
      >
        О нас
      </a>
    </div>
  );
};

export default Header;
