import React from "react";
import ValueCard from "./ValueCard";
import { TbTruckDelivery } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";

import { CiLock } from "react-icons/ci";
import { LiaMoneyBillSolid } from "react-icons/lia";
const Values = () => {
  const valuesData = [
    {
      icon: <TbTruckDelivery />,
      title: "Free Shipping",
      description: "Order above $200",
    },
    {
      icon: <LiaMoneyBillSolid />,
      title: "Money-back",
      description: "30 days guarantee",
    },
    {
      icon: <CiLock />,
      title: "Secure Payments",
      description: "Secured by Stripe",
    },
    {
      icon: <BsTelephone />,
      title: "24/7 Support",
      description: "Phone and Email support",
    },
  ];
  return (
    <section className="w-full h-auto lg:h-80 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {valuesData.map((value, i) => (
        <ValueCard
          key={i}
          icon={value.icon}
          title={value.title}
          description={value.description}
        />
      ))}
    </section>
  );
};

export default Values;
