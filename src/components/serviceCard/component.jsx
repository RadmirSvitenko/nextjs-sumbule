import React from 'react';

const ServiceCard = ({ procedure }) => {
  return (
    <div className="w-[350px] md:w-[300px] sm:w-[230px] shadow-lg rounded-[20px] border-[1px] border-[#F1F1F1] flex flex-wrap flex-col justify-between items-center">
      <img
        src={procedure?.image}
        alt={procedure?.name}
        className="rounded-[20px] hover:transition-[0.6s] transition-[0.6s]"
      />
      <div className="flex gap-7 py-4 w-full flex-col justify-between items-center tracking-[1px] text-[#444] bg-[#fafafa]">
        <p>{procedure?.name}</p>
        <div className="w-full gap-3 flex justify-around">
          <span>от {procedure?.price} сом</span>
          <span>Время {procedure?.time} минут</span>
        </div>
      </div>
      <button
        className="w-full flex justify-center items-center tracking-[1px] rounded-b-[20px] uppercase bg-[#333] text-[#f5f3f3] py-3 hover:text-[#fff] transition-[0.6s] hover:bg-[#1d1d1d]  hover:transition-[0.6s]"
        onClick={() => toggleModalService()}
      >
        Подробнее
      </button>
    </div>
  );
};

export default ServiceCard;
