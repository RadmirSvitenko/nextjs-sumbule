import { AddRounded, RemoveRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

const ServiceCard = ({ service, setOpenModal, toggleModalService }) => {
  return (
    <div className="w-[350px] shadow-lg rounded-[20px] border-[1px] border-[#F1F1F1] flex flex-col justify-between items-center">
      <img
        src={service?.image}
        alt={service?.name}
        className="rounded-[20px] hover:transition-[0.6s] transition-[0.6s]"
      />
      <div className="flex py-4 w-full flex-col justify-between items-center tracking-[1px] text-[#444] bg-[#fafafa]">
        <p>{service?.name}</p>
        <div className="flex gap-4">
          <IconButton>
            <AddRounded />
          </IconButton>
          Время: {service?.time} час
          <IconButton>
            <RemoveRounded />
          </IconButton>
        </div>
        <p>Цена: {service?.price * service?.time} сом</p>
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
