'use client';

import { ExpandMoreRounded } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

const OurServices = () => {
  const womenList = [
    { name: 'Парение', price: 0 },
    { name: 'Боярское парение 2', price: 2500 },
    { name: 'В гостях у парильщика', price: 1500 },
    { name: 'Массаж ног для снятие усталости', price: 600 },
    { name: 'Круговое парение', price: 1000 },
    { name: 'Зима-Лето парение', price: 1200 },
    { name: 'Скипидарная ванночка для ног', price: 700 },
    { name: 'Лечебное парение', price: 1500 },
    { name: 'Маска-патчи для глаз ', price: 250 },
    { name: 'Боярское парение', price: 1800 },
    { name: 'Царское парение "Sumbule"', price: 3500 },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center p-5">
      <div className="flex flex-col justify-center py-[50px] px-[100px] gap-4">
        <p className="text-center">Наш сервис</p>

        <div className="flew w-full justify-center items-center md:px-5 sm:px-4 gap-5">
          <div className="flex justify-center w-full flex-wrap text-center">
            Релаксирующие процедуры для уюта и здоровья: Погрузитесь в атмосферу
            полного расслабления с нашими релаксирующими процедурами в сауне.
            Наслаждайтесь благоприятным воздействием тепла на ваш организм,
            освежайте кожу и ощущайте прилив энергии. Ознакомьтесь с нашими
            ценами ниже и подарите своему телу заслуженный отдых.
          </div>
        </div>
      </div>

      <div className="w-full">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreRounded />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Для женщин
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary>Парение</AccordionSummary>

              <AccordionDetails>
                {womenList?.map((service) => (
                  <div className="flex justify-between items-center px-3 gap-5 ling">
                    <span>{service?.name}</span>
                    <span>{service?.price}</span>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreRounded />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Для мужчин
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreRounded />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Общее
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreRounded />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Уход за телом
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreRounded />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Массажи
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default OurServices;
