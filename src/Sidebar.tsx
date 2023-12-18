'use client'

import React, { useState } from 'react';
import { cn } from './utils/util';
import { DiAtom } from "react-icons/di";
import { LiaHomeSolid } from "react-icons/lia";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

type props = {}

interface SideNavItemsType{
    icons?:{
        icon: React.ReactNode;
        fillIcon: React.ReactNode;
    };
    label: string;
    href: string;
}

export default function Sidebar(){
    const [isSidebarOpen, setSidebarOpen] = useState(true)

    return(
        <div>
            <div className={cn(
                "min-h-screen max-h-screen overflow-y-auto w-fit md:pr-10 pr-3 pt-2 flex flex-col gap-3 border-r-[2px] pl-[50px]")}>
                <HoverContainer>
                    <div className="p-2 pb-4 flex justify-between items-center">
                        <button>
                            <DiAtom className='text-7xl' /> 
                        </button>
                    </div>
                </HoverContainer>
                <HoverContainer>
                    <SideNavItems icons={{
                        fillIcon: <LiaHomeSolid />,
                        icon: <LiaHomeSolid />
                    }}
                    href="/"
                    label="Home" 
                    isSidebarOpen={isSidebarOpen}/>
                </HoverContainer>  
                 {/* toggle button */}
                <HoverContainer>
                    <RiArrowLeftDoubleLine
                    onClick={()=>setSidebarOpen(!isSidebarOpen)}
                    className={cn(
                        'text-gray-400 transition-all text-4xl items-center', !isSidebarOpen && 'rotate-180'
                        )} 
                    />
                </HoverContainer>             
            </div>
           
        </div>
    )
}

function SideNavItems({href, isSidebarOpen, icons, label}: SideNavItemsType & {isSidebarOpen: boolean}){
    return (
        <Link to={href} className='flex gap-2 items-center cursor-pointer'>

            {/* icon */}
            <div className='w-[35px] h-[35px] text-3xl'>
                {icons?.icon}
                
            </div>
            {/* lebel */}
            {isSidebarOpen && (
            <p className='text-xl hidden md:block transition-all'>
                {label}</p>
            )}
            
        </Link>
    );
}

function HoverContainer({
        children, 
        className
    }: {
        children: React.ReactNode; 
        className?: string;
    }){
        return <div className={
            "p-3 transition-all rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-900 group-hover:dark:bg-zinc-900 group-hover:bg-gray-200"}>
                {children}</div>;
    }