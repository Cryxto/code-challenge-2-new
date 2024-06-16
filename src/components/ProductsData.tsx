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
      title: "Simple Product",
      type: "product",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor odio, molestie quis nibh non, vestibulum semper dui. Sed sit amet urna ut leo congue dictum. Nulla facilisi. Pellentesque non vestibulum mi, eu sodales diam. Vestibulum ut erat sed est facilisis suscipit. Cras nec accumsan turpis. Mauris congue feugiat sapien a accumsan. Vivamus nec erat tortor. Integer sodales arcu ipsum, id accumsan odio lacinia vitae. Aenean porttitor urna eget tincidunt semper. Nullam bibendum dui sit amet purus tempus vehicula. Vestibulum sed luctus nisi, quis ultricies arcu. Nunc turpis massa, porta ac lorem id, tristique interdum lectus. Vivamus ut elementum elit, id blandit lectus.",
      prices: "Rp 1.000.000,00",
      image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
    },
    {
      title: "Simple Product",
      type: "product",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor odio, molestie quis nibh non, vestibulum semper dui. Sed sit amet urna ut leo congue dictum. Nulla facilisi. Pellentesque non vestibulum mi, eu sodales diam. Vestibulum ut erat sed est facilisis suscipit. Cras nec accumsan turpis. Mauris congue feugiat sapien a accumsan. Vivamus nec erat tortor. Integer sodales arcu ipsum, id accumsan odio lacinia vitae. Aenean porttitor urna eget tincidunt semper. Nullam bibendum dui sit amet purus tempus vehicula. Vestibulum sed luctus nisi, quis ultricies arcu. Nunc turpis massa, porta ac lorem id, tristique interdum lectus. Vivamus ut elementum elit, id blandit lectus.",
      prices: "Rp 1.000.000,00",
      image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
    },
    {
      title: "Simple Product",
      type: "product",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor odio, molestie quis nibh non, vestibulum semper dui. Sed sit amet urna ut leo congue dictum. Nulla facilisi. Pellentesque non vestibulum mi, eu sodales diam. Vestibulum ut erat sed est facilisis suscipit. Cras nec accumsan turpis. Mauris congue feugiat sapien a accumsan. Vivamus nec erat tortor. Integer sodales arcu ipsum, id accumsan odio lacinia vitae. Aenean porttitor urna eget tincidunt semper. Nullam bibendum dui sit amet purus tempus vehicula. Vestibulum sed luctus nisi, quis ultricies arcu. Nunc turpis massa, porta ac lorem id, tristique interdum lectus. Vivamus ut elementum elit, id blandit lectus.",
      prices: "Rp 1.000.000,00",
      image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
    },
    {
      title: "Simple Product",
      type: "product",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor odio, molestie quis nibh non, vestibulum semper dui. Sed sit amet urna ut leo congue dictum. Nulla facilisi. Pellentesque non vestibulum mi, eu sodales diam. Vestibulum ut erat sed est facilisis suscipit. Cras nec accumsan turpis. Mauris congue feugiat sapien a accumsan. Vivamus nec erat tortor. Integer sodales arcu ipsum, id accumsan odio lacinia vitae. Aenean porttitor urna eget tincidunt semper. Nullam bibendum dui sit amet purus tempus vehicula. Vestibulum sed luctus nisi, quis ultricies arcu. Nunc turpis massa, porta ac lorem id, tristique interdum lectus. Vivamus ut elementum elit, id blandit lectus.",
      prices: "Rp 1.000.000,00",
      image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
    },
  ],
  service: [
    {
      title: "Simple Service",
      type: "service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor odio, molestie quis nibh non, vestibulum semper dui. Sed sit amet urna ut leo congue dictum. Nulla facilisi. Pellentesque non vestibulum mi, eu sodales diam. Vestibulum ut erat sed est facilisis suscipit. Cras nec accumsan turpis. Mauris congue feugiat sapien a accumsan. Vivamus nec erat tortor. Integer sodales arcu ipsum, id accumsan odio lacinia vitae. Aenean porttitor urna eget tincidunt semper. Nullam bibendum dui sit amet purus tempus vehicula. Vestibulum sed luctus nisi, quis ultricies arcu. Nunc turpis massa, porta ac lorem id, tristique interdum lectus. Vivamus ut elementum elit, id blandit lectus.",
      prices: "Rp 1.000.000,00",
      image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
    },
    {
      title: "Simple Service",
      type: "service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor odio, molestie quis nibh non, vestibulum semper dui. Sed sit amet urna ut leo congue dictum. Nulla facilisi. Pellentesque non vestibulum mi, eu sodales diam. Vestibulum ut erat sed est facilisis suscipit. Cras nec accumsan turpis. Mauris congue feugiat sapien a accumsan. Vivamus nec erat tortor. Integer sodales arcu ipsum, id accumsan odio lacinia vitae. Aenean porttitor urna eget tincidunt semper. Nullam bibendum dui sit amet purus tempus vehicula. Vestibulum sed luctus nisi, quis ultricies arcu. Nunc turpis massa, porta ac lorem id, tristique interdum lectus. Vivamus ut elementum elit, id blandit lectus.",
      prices: "Rp 1.000.000,00",
      image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
    },
    {
      title: "Simple Service",
      type: "service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor odio, molestie quis nibh non, vestibulum semper dui. Sed sit amet urna ut leo congue dictum. Nulla facilisi. Pellentesque non vestibulum mi, eu sodales diam. Vestibulum ut erat sed est facilisis suscipit. Cras nec accumsan turpis. Mauris congue feugiat sapien a accumsan. Vivamus nec erat tortor. Integer sodales arcu ipsum, id accumsan odio lacinia vitae. Aenean porttitor urna eget tincidunt semper. Nullam bibendum dui sit amet purus tempus vehicula. Vestibulum sed luctus nisi, quis ultricies arcu. Nunc turpis massa, porta ac lorem id, tristique interdum lectus. Vivamus ut elementum elit, id blandit lectus.",
      prices: "Rp 1.000.000,00",
      image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
    },
    {
      title: "Simple Service",
      type: "service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor odio, molestie quis nibh non, vestibulum semper dui. Sed sit amet urna ut leo congue dictum. Nulla facilisi. Pellentesque non vestibulum mi, eu sodales diam. Vestibulum ut erat sed est facilisis suscipit. Cras nec accumsan turpis. Mauris congue feugiat sapien a accumsan. Vivamus nec erat tortor. Integer sodales arcu ipsum, id accumsan odio lacinia vitae. Aenean porttitor urna eget tincidunt semper. Nullam bibendum dui sit amet purus tempus vehicula. Vestibulum sed luctus nisi, quis ultricies arcu. Nunc turpis massa, porta ac lorem id, tristique interdum lectus. Vivamus ut elementum elit, id blandit lectus.",
      prices: "Rp 1.000.000,00",
      image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
    },
    {
      title: "Simple Service",
      type: "service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor odio, molestie quis nibh non, vestibulum semper dui. Sed sit amet urna ut leo congue dictum. Nulla facilisi. Pellentesque non vestibulum mi, eu sodales diam. Vestibulum ut erat sed est facilisis suscipit. Cras nec accumsan turpis. Mauris congue feugiat sapien a accumsan. Vivamus nec erat tortor. Integer sodales arcu ipsum, id accumsan odio lacinia vitae. Aenean porttitor urna eget tincidunt semper. Nullam bibendum dui sit amet purus tempus vehicula. Vestibulum sed luctus nisi, quis ultricies arcu. Nunc turpis massa, porta ac lorem id, tristique interdum lectus. Vivamus ut elementum elit, id blandit lectus.",
      prices: "Rp 1.000.000,00",
      image: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg",
    },
  ],
};

function ProductsData({ productType }: { productType: keyof ProductData }) {
  return (
    <>
      <div className="w-full flex flex-wrap justify-center">
        {productData[productType].map((item, index) => (
          <div
          key={index}
          className="card md:card-side bg-[#f8f8f8] drop-shadow-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_-10px_15px_-3px_rgba(0,0,0,0.1)] m-6 max-w-full md:min-w-[18rem] items-center justify-center"
        >
          <figure className="w-full md:w-1/3">
            <Image
              width={1000}
              height={1000}
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body md:w-2/3 md:p-4 w-full justify-center  text-justify text-xs md:text-sm leading-loose md:leading-loose">
            <h2 className="card-title md:pt-6">{item.title}</h2>
            <p>{item.description}</p>
            <p><b>{item.prices}</b></p>
          </div>
        </div>
        
        
        ))}
      </div>
    </>
  );
}

export default ProductsData;
