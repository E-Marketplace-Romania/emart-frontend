import { FC } from "react";
import Image from "next/image";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";

interface ProductCardProps {
    title: string;
    price: number;
    description: string;
    image: string;
    link: string;
    platform: string;
    favorite: boolean;
}

const ProductCard: FC<ProductCardProps> = ({ title, price, description, image, link, platform, favorite }) => {
    return (
        <a href={link} className="block bg-white rounded-lg shadow-lg p-6 transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-md font-semibold">{title}</h2>
                <button className="text-gray-600">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                </button>
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
            <p className="text-gray-600 mb-4">{price}</p>
            <p className="text-gray-800">{description}</p>
            <div className="flex justify-between mt-10">
                <button className="text-red-500 rounded-full p-2 text-2xl hover:bg-gray-100">
                    {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>
                <p className="text-gray-600">{platform}</p>
            </div>
        </a>
    );
};

export default ProductCard;
