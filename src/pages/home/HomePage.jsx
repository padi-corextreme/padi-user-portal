
import React from 'react';
import Navbar from '../../components/navbar/navbar';

// Shared Tailwind CSS class strings
const titleClass = 'text-lg font-semibold text-zinc-700 dark:text-zinc-300';
const gridClass = 'flex grid-cols-2 gap-4 mt-2';
const cardClass = 'bg-white dark:bg-zinc-700 p-2 rounded-lg';

// Smaller components to avoid repetition
const ImageCard = ({ src, alt }) => (
  <div className={cardClass}>
    <img src={src} alt={alt} className="rounded-lg" />
  </div>
);

const Section = ({ title, children }) => (
  <div className="mt-4">
    <h2 className={titleClass}>{title}</h2>
    {children}
  </div>
);

// Main HomePage component
const HomePage = () => {
  // Assuming username might be dynamic in a real-world scenario
  const username = "Julie";

  return (
    <body className="bg-zinc-100 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold text-zinc-800 dark:text-white pt-6">
          Hello, <span>{username}</span>
        </h1>
        
        <Section title="Choisir par point de vente">
          <div className="flex mt-2 space-x-2 overflow-x-auto">
            <img src="https://placehold.co/80x80" alt="Store" className="rounded-lg" />
            <img src="https://placehold.co/80x80" alt="Store" className="rounded-lg" />
            <img src="https://placehold.co/80x80" alt="Store" className="rounded-lg" />
            <img src="https://placehold.co/80x80" alt="Store" className="rounded-lg" />
            <img src="https://placehold.co/80x80" alt="Store" className="rounded-lg" />
          </div>
        </Section>

        <Section title="Meilleurs Deals pour vous !">
          <div className={gridClass}>
            <ImageCard src="https://placehold.co/160x160" alt="Deal" />
            <ImageCard src="https://placehold.co/160x160" alt="Deal" />
            <ImageCard src="https://placehold.co/160x160" alt="Deal" />
          </div>
        </Section>

        <Section title="Toutes les catégories">
          <div className="flex mt-2 space-x-2 overflow-x-auto">
            <img src="https://placehold.co/100x100" alt="Category" className="rounded-lg" />
            <img src="https://placehold.co/100x100" alt="Category" className="rounded-lg" />
            <img src="https://placehold.co/100x100" alt="Category" className="rounded-lg" />
            <img src="https://placehold.co/100x100" alt="Category" className="rounded-lg" />
            <img src="https://placehold.co/100x100" alt="Category" className="rounded-lg" />
          </div>
        </Section>

        <Section title="Obtenez jusqu'à 70% de réduction !">
          <div className={gridClass}>
            <ImageCard src="https://placehold.co/160x160" alt="Discount" />
            <ImageCard src="https://placehold.co/160x160" alt="Discount" />
            <ImageCard src="https://placehold.co/160x160" alt="Discount" />
          </div>
        </Section>

        <Section title="Mes intérêts">
          <div className={gridClass}>
            <ImageCard src="https://placehold.co/160x160" alt="Interest" />
            <ImageCard src="https://placehold.co/160x160" alt="Interest" />
            <ImageCard src="https://placehold.co/160x160" alt="Interest" />
          </div>
        </Section>
      <Navbar />
      </div>
    </body>
  );
};

export default HomePage;

