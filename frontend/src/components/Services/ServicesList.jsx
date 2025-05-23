import React from 'react';

import {services} from "./../../assets/data/services";
import ServiceCard from "./ServicesCard";

const ServicesList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {services.map((item,index) =>(
            <ServiceCard item={item} index={index} key={index} />
        ))}
    </div>
  );
};

export default ServicesList;
