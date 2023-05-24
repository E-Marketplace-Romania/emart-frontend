"use client";
import { Popover } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { FC } from "react";
import { RadioGroup } from "@headlessui/react";

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
                    className="group inline-flex items-center rounded-md bg-blue-200 px-20 py-1 my-5 hover:bg-blue-300"
                >Tip componenta <BsChevronDown className="mx-3"/></Popover.Button>

                <Popover.Panel className="absolute mt-3 w-1/6 rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-lg">
                    <div className="grid grid-cols-1">
                        <RadioGroup value={selected} onChange={onChange} className="w-full">
                            {selectList.map((componentType) => (
                                <RadioGroup.Option key={componentType.name} value={componentType.category}>
                                    {({ checked }) => (
                                        <span className={`${checked ? 'underline font-bold' : ''} hover:cursor-pointer hover:font-bold`}>{componentType.name}</span>
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
