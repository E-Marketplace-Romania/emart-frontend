import { FC, useEffect, useState } from "react";
import Image from "next/image";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";

interface ProductCardProps {
    id: string;
    name: string;
    price: string;
    location: string;
    category: string;
    description: null;
    url: string;
    image: string;
    platform: string;
    createdAt: string;
    postedAt: string;
    memory: string;
    storage: string;
    make: string;
    model: string;
    powerSpec: string;
    otherSpec: string;
    memoryType: string; 
}

const ProductCard: FC<ProductCardProps> = (
    { 
        id, name, price, location, category, description, url, image, 
        platform, createdAt, postedAt, memory, storage, make, model, 
        powerSpec, otherSpec, memoryType 
    }) => {
    const [productId, setProductId] = useState<string>(id);
    const [favoriteProduct, setFavoriteProduct] = useState<boolean>(false);

    const saveToFavoritesLocalStorage = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        favorites.push(productId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    const removeFromFavoritesLocalStorage = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        favorites = favorites.filter((item: string) => item !== productId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    const isProductFavourite = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavoriteProduct(favorites.includes(productId));
    };

    useEffect(() => {
        isProductFavourite();
    }, []);

    return (
        <a href={url} className="flex flex-col justify-between bg-secondary text-white rounded-lg shadow-lg p-6 transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-md font-semibold">{name.slice(0, 35)}...</h2>
            </div>
            <Image 
                src={`${image ? image : '/600x400?text=No+image+found'}`}
                loader={({ src }) => `${src}`}
                alt="Product Image" 
                className="w-full h-40 object-cover mb-4"
                width={400}
                height={600}
                onError={e => {
                    e.currentTarget.src = '/600x400?text=No+image+found';
                }}
            ></Image>
            {/* replace all non numeric characters */}
            <p className="text-gray-600 mb-4">{price.replace(/lei(?!\s)/gi, 'lei ')}</p>
            <p className="text-gray-600">{location}</p>
            <div className="flex flex-row align-middle items-center justify-between mt-10">
                <button onClick={(e) => {
                    if (favoriteProduct) {
                        removeFromFavoritesLocalStorage(); 
                    } else { 
                        saveToFavoritesLocalStorage();
                    }
                    isProductFavourite();
                    e.preventDefault();
                }} className="text-red-500 rounded-full p-2 text-2xl hover:bg-primary">
                    {favoriteProduct ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>
                <p className="text-gray-600">{platform}</p>
            </div>
        </a>
    );
};

export default ProductCard;
