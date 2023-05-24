import { useState } from "react";
import Filters from "../filters";

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

const EmartTab = () => {
    const [selected, setSelected] = useState("toate");
    return (
        <div className="h-full flex flex-col items-center">
            {/* Filter component at top that saves filters state */}
            <Filters selected={selected} onChange={setSelected} selectList={componentTypes}/>
            {/* Listings in a grid cards display with maximum 3 cards per row */}
            <h1>Nici un anunt...</h1>
        </div>
    );
}

export default EmartTab;
