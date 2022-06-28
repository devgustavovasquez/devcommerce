import { Plus } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  price: number;
  images: {
    url: string;
    alt_text: string;
  }[];
};

export const ProductCard: React.FC<Props> = ({ title, price, images }) => {
  return (
    <div className="relative w-full h-full  max-w-[16.5rem] ">
      <button className="absolute top-3 right-3 border-solid border-2 rounded-md border-neutral-300 hover:bg-zinc-200 transition-colors focus:outline-none ring-0 focus:border-neutral-500 cursor-pointer">
        <Plus weight="bold" size="20px" />
      </button>
      <div className="bg-white rounded-2xl p-12">
        <Link to="">
          <img src={images ? images[0].url : ''} alt={title} />
        </Link>
      </div>
      <div className="p-1 flex flex-col">
        <Link to="">
          <h2 className="sm:text-base md:text-lg text-neutral-500 tracking-wide">{title}</h2>
        </Link>

        <div className="flex gap-4 items-center">
          <p className="text-base md:text-lg whitespace-nowrap tracking-tighter">
            R$ {price.toFixed(2).replace('.', ',')}
          </p>
          <p className="sm:text-base md:text-lg whitespace-nowrap line-through tracking-tighter text-neutral-400">
            R$ {(price + Math.random() * 10).toFixed(2).replace('.', ',')}
          </p>
        </div>
      </div>
    </div>
  );
};
