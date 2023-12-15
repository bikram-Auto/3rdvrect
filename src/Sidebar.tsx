import React from 'react';
import { cn } from './utils/util';
import { DiAtom } from "react-icons/di";

export default function Sidebar(){
    return(
        <aside className="h-screen">
            <nav className={cn(
                "min-h-screen max-h-screen overflow-y-auto w-fit md:pr-10 pr-3 pt-2 flex flex-col gap-3 border-r-[2px] pl-[50px]")}>
                <div className="p-2 pb-4 flex justify-between items-center">
                    <button>
                        <link rel="/" href="Home" />
                        <DiAtom className='text-7xl' /> 
                    </button>
                </div>
                <div>

                </div>
            </nav>
        </aside>
    )
}

function HoverContainer({
        Children, className
    }: {
        Children: React.ReactNode; 
        className?: string}
){}