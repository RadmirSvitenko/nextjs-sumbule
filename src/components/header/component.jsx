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

      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex ${
        isScrolled ? 'fixed' : 'static'
      } flex-wrap z-50 w-full justify-evenly items-center gap-4 bg-white ${
        isScrolled ? 'bg-opacity-70' : 'bg-opacity-100'
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
        className=" rounded-[50%] w-[80px] sm:w-[50px]"
      />

      <a
        onClick={() => toChangePage('/restaurant')}
        className="text-[#242022] uppercase font-[700] tracking-[1px] cursor-pointer transition-[1s] hover:text-[#3f3f3f] hover:py-3 hover:border-b-[1px] hover:border-b-[#3f3f3f]"
      >
        Ресторан
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
