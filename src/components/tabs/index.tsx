"use client";
import { Tab } from "@headlessui/react";
import EmartTab from "./EmartTab";
import DePeNet from "./DePeNet";

const PartsTabs = () => {
    const tabBaseClasses = "ui-not-selected:bg-gray-200 outline-none px-20 py-2 ui-selected:bg-gray-300";

    return (
        <div className="flex flex-col justify-center items-center p-10 w-full h-full">
            <Tab.Group>
                <Tab.List className="border-2 border-gray-300 rounded-md">
                    <Tab className={tabBaseClasses}>
                        Emart 
                    </Tab>
                    <Tab className={tabBaseClasses}>
                        De pe net
                    </Tab>
                </Tab.List>
                <Tab.Panels className="w-full">
                    <Tab.Panel>
                        <EmartTab />
                    </Tab.Panel>
                    <Tab.Panel>
                        <DePeNet />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default PartsTabs;
