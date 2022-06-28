import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

type Props = {
  products: Array<{
    id: string;
    title: string;
    price: number;
    images: {
      url: string;
      alt_text: string;
    }[];
  }>;
};

export const ProductsContainer: React.FC<Props> = ({ products }) => {
  return (
    <section className="w-11/12  p-15 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
      {products.length ? (

        products.map((product) => (
          <ProductCard
            title={product.title}
            price={product.price}
            images={product.images}
            key={product.id}
          />
        ))
      ) : (
        <p>Erro ao carregar produtos...</p>
      )}
    </section>
  );
};
