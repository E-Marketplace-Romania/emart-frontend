import { useState } from "react";
import Filters from "../filters";
import ProductCard from "../product-card";

const componentTypes = [
    { name: "Toate", category: "toate" },
    { name: "Placa de baza", category: "placa-baza" },
    { name: "Procesor", category: "processor" },
    { name: "Memorie", category: "memorie-ram" },
    { name: "Placa video", category: "placa-video" },
    { name: "Hard disk", category: "hard-disk" },
    { name: "SSD", category: "ssd" },
    { name: "Sursa", category: "surse" },
    { name: "Carcase", category: "carcase" },
    { name: "Cooler / Ventilatoare", category: "coolere-ventilatoare" },
];

const products = [
  {
    title: "Product 1",
    price: 9.99,
    description: "Description of Product 1",
    image: "https://placehold.co/600x400?text=No+image+found",
    link: "product1.html",
    platform: "Platform A",
    favorite: true
  },
  {
    title: "Product 2",
    price: 19.99,
    description: "Description of Product 2",
    image: "https://placehold.co/600x400?text=No+image+found",
    link: "product2.html",
    platform: "Platform B",
    favorite: false
  },
  // Add more objects for the remaining 11 products...
  {
    title: "Product 3",
    price: 29.99,
    description: "Description of Product 3",
    image: "https://placehold.co/600x400?text=No+image+found",
    link: "product3.html",
    platform: "Platform C",
    favorite: true
  },
  {
    title: "Product 4",
    price: 9.99,
    description: "Description of Product 4",
    image: "https://placehold.co/600x400?text=No+image+found",
    link: "product4.html",
    platform: "Platform A",
    favorite: true
  },
  {
    title: "Product 13",
    price: 29.99,
    description: "Description of Product 13",
    image: "https://placehold.co/600x400?text=No+image+found",
    link: "product13.html",
    platform: "Platform C",
    favorite: true
  }
];

const DePeNet = () => {
    const [selected, setSelected] = useState("toate");
    return (
        <div className="h-full w-full flex flex-col items-center">
            <Filters selected={selected} onChange={setSelected} selectList={componentTypes}/>
            <div className="grid grid-cols-4 gap-4 w-full">
                {products.map((product) => (
                    <ProductCard {...product} key={product.title} />
                ))}
            </div>
        </div>
    );
}

export default DePeNet;
