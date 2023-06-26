"use client";
import { Popover } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { FC } from "react";
import { RadioGroup } from "@headlessui/react";
import { AiFillCheckCircle } from "react-icons/ai";

// Tip componenta placa de baza, procesor, memorie, etc.
// Brand: Intel, AMD, etc. incarca brand cand se schimba componenta.



interface FiltersProps {
    selected: string;
    onChange: (selected: string) => void;
    selectList: any[]
}

const Filters: FC<FiltersProps> = ({ selected, onChange, selectList }) => {
    return (
        <div>
            <Popover>
                <Popover.Button
                    className="group border-2 inline-flex border-tertiary text-white bg-secondary items-center rounded-md bg-blue-200 px-20 py-1 my-5 hover:bg-secondary-light"
                >Tip componenta <BsChevronDown className="mx-3"/></Popover.Button>

                <Popover.Panel className="absolute mt-3 z-10 w-1/6 rounded-lg bg-primary text-white p-4 shadow-2xl transition-shadow duration-300 hover:shadow-lg">
                    <div className="grid grid-cols-1">
                        <RadioGroup value={selected} onChange={onChange} className="w-full">
                            {selectList.map((componentType) => (
                                <RadioGroup.Option key={componentType.name} value={componentType.category} defaultChecked={componentType.name === 'toate'}>
                                    {({ checked }) => (
                                        <span className={`hover:cursor-pointer hover:font-bold`}>
                                            {componentType.name}
                                            {checked && (<AiFillCheckCircle className="inline ml-2"/>)}
                                        </span>
                                    )}
                                </RadioGroup.Option>
                            ))}
                        </RadioGroup> 
                    </div>
                </Popover.Panel>
            </Popover>
        </div>
    );
}

export default Filters;
