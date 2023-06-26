import { useEffect, useState } from "react";
import Filters from "../filters";
import ProductCard from "../product-card";
import { HttpClient } from "../../util/Http";
import axios from "axios";
import PaginationButtons from "../pagination-buttons";

const componentTypes = [
    { name: "Toate", category: "toate" },
    { name: "Placa de baza", category: "placa-baza" },
    { name: "Procesor", category: "procesor" },
    { name: "Memorie", category: "memorie-ram" },
    { name: "Placa video", category: "placa-video" },
    { name: "Hard disk", category: "hard-disk" },
    { name: "SSD", category: "ssd" },
    { name: "Sursa", category: "surse" },
    { name: "Carcase", category: "carcase" },
    { name: "Cooler / Ventilatoare", category: "coolere-ventilatoare" },
];

const DePeNet = () => {
    const [selected, setSelected] = useState("toate");
    const [products, setProducts] = useState<any[]>([]);

    const changeFilter = async (selected: string) => {
        const data = await HttpClient.get('/scraper', { category: selected });
        setSelected(selected);
        console.log(data);
        setProducts(data.items);
    }

    useEffect(() => {
        const getProducts = async () => {
            const data = await HttpClient.get('/scraper');
            setProducts(data.items);
        };
        getProducts();
    }, []);

    return (
        <div className="h-full w-full flex flex-col items-center">
            <Filters selected={selected} onChange={changeFilter} selectList={componentTypes}/>
            <div className="grid grid-cols-4 gap-4 w-full">
                {products.map((product) => (
                    <ProductCard {...product} key={product.title} />
                ))}
            </div>
            <div className="mt-5">
                <PaginationButtons onPageChange={() => console.log('page change')} totalPages={25}/>
            </div>
        </div>
    );
}

export default DePeNet;
