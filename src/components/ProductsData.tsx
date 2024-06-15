import Image from "next/image";

interface Product {
  title: string;
  type: string;
  description: string;
  prices: string;
  image: string;
}

interface ProductData {
  product: Product[];
  service: Product[];
}

const productData: ProductData = {
  product: [
    {
      title: 'Simple Product',
      type: 'product',
      description: 'lorem',
      prices: 'Rp 1.000.000,00',
      image: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg'
    },
    {
      title: 'Simple Product',
      type: 'product',
      description: 'lorem',
      prices: 'Rp 1.000.000,00',
      image: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg'
    },
    {
      title: 'Simple Product',
      type: 'product',
      description: 'lorem',
      prices: 'Rp 1.000.000,00',
      image: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg'
    },
    {
      title: 'Simple Product',
      type: 'product',
      description: 'lorem',
      prices: 'Rp 1.000.000,00',
      image: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg'
    },
  ],
  service: [
    {
      title: 'Simple Service',
      type: 'service',
      description: 'lorem',
      prices: 'Rp 1.000.000,00',
      image: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg'
    },
    {
      title: 'Simple Service',
      type: 'service',
      description: 'lorem',
      prices: 'Rp 1.000.000,00',
      image: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg'
    },
    {
      title: 'Simple Service',
      type: 'service',
      description: 'lorem',
      prices: 'Rp 1.000.000,00',
      image: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg'
    },
    {
      title: 'Simple Service',
      type: 'service',
      description: 'lorem',
      prices: 'Rp 1.000.000,00',
      image: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg'
    },
    {
      title: 'Simple Service',
      type: 'service',
      description: 'lorem',
      prices: 'Rp 1.000.000,00',
      image: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg'
    },
  ]
};

function ProductsData({ productType }: { productType: keyof ProductData }) {
  return (
    <>
      {productData[productType].map((item, index) => (
        <div
          key={index}
          className="card md:card-side bg-[#f8f8f8] drop-shadow-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_-10px_15px_-3px_rgba(0,0,0,0.1)] m-6"
        >
          <figure>
            <Image
              width={1000}
              height={1000}
              src={item.image}
              alt={item.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.prices}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductsData;
