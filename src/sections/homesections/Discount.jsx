
import React from 'react';
import chairlogo from "../../assets/images/3d-rendering-minimalist-interior-with-copy-space.png"
import TV from "../../assets/images/landscape-nature-scene-tv-appliance-generative-ai.png"
import Baby from "../../assets/images/baby-elementson-light-blue-background.png"

const sharedClasses = {
  container: 'max-w-sm  my-10',
  card: 'bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-lg',
  textTitle: 'text-2xl font-bold text-zinc-800 dark:text-white',
  textAmount: 'text-4xl font-bold text-red-500 my-2',
  textDescription: 'text-zinc-600 dark:text-zinc-300 text-sm',
};

const DiscountCard = () => {
  return (
    <>
    <div className={sharedClasses.container}>
      <div className={sharedClasses.card}>
        <div className="p-5">
          <h2 className={sharedClasses.textTitle}>Économisez</h2>
          <p className={sharedClasses.textAmount}>23 700 FCFA</p>
          <p className={sharedClasses.textDescription}>Pulvinar sed morbi tempor ullamcorper id nisl.</p>
        </div>
        <img className="w-full h-44" src={chairlogo} alt="Discounted Product" />
      </div>
    </div>
    <div className={sharedClasses.container}>
      <div className={sharedClasses.card}>
        <div className="p-5">
          <h2 className={sharedClasses.textTitle}>Économisez</h2>
          <p className={sharedClasses.textAmount}>72 000 FCFA</p>
          <p className={sharedClasses.textDescription}>Pulvinar sed morbi tempor ullamcorper id nisl.</p>
        </div>
        <img className="w-full h-44" src={TV} alt="Discounted Product" />
      </div>
    </div>
    <div className={sharedClasses.container}>
      <div className={sharedClasses.card}>
        <div className="p-5">
          <h2 className={sharedClasses.textTitle}>Économisez</h2>
          <p className={sharedClasses.textAmount}>19 500 FCFA</p>
          <p className={sharedClasses.textDescription}>Pulvinar sed morbi tempor ullamcorper id nisl.</p>
        </div>
        <img className="w-full h-44" src={Baby} alt="Discounted Product" />
      </div>
    </div>
    
    </>
  );
};

export default DiscountCard;
