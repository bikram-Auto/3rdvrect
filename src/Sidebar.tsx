'use client'

import React, {useState } from 'react';
import { cn } from './utils/util';
import { IoMdSnow } from "react-icons/io";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { GoHomeFill, GoHome } from "react-icons/go";
import { useLocation } from 'react-router-dom';
import { FcDataConfiguration } from "react-icons/fc";
import { IoLockClosedOutline, IoLockClosed } from "react-icons/io5";
import { useAutoAnimate } from '@formkit/auto-animate/react'

import './assets/logo.svg'

// const logo= require("./assets/logo.svg")
type props = {}

interface SideNavItemsType{
    icons?:{
        icon: React.ReactNode;
        fillIcon: React.ReactNode;
    };
    label: string;
    href: string;
}

const sidebarItems: SideNavItemsType[] = [
    {
        href: "/",
        label: "Home",
        icons: {
            fillIcon: <GoHomeFill />,
            icon: <GoHome />
        }
    },
    {
        href: "/configuration",
        label: "Configuration",
        icons: {
            fillIcon: <FcDataConfiguration />,
            icon: <FcDataConfiguration />
        }
    },
    {
        href: "/authorization",
        label: "Autorization",
        icons: {
            fillIcon: <IoLockClosed />,
            icon: <IoLockClosedOutline />
        }
    }

]

export default function Sidebar(){
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    return(
        <div className="items-center">
            <div className={cn(
                "min-h-screen max-h-screen overflow-y-auto w-fit md:pr-2 pr-3 pt-2 flex flex-col gap-3 border-r-[3px] pl-[20px]",
                isSidebarOpen && "md:w-[300px]"
                )}>
                <HoverContainer>
                    <div className="p-1 pb-2 flex justify-between ">
                        <button>                           
                            <IoMdSnow className='text-7xl ' /> 
                        </button>
                    </div>
                </HoverContainer>
                {/* Side Nav Itemes */}
                {sidebarItems.map((d, i) => (
                    <HoverContainer key={i}>
                        <SideNavItems 
                            icons= {d.icons}
                            href= {d.href}
                            label= {d.label} 
                            isSidebarOpen={isSidebarOpen}/>
                    </HoverContainer>
                    ))}
                 {/* toggle button */}
                 <section className={cn(
                    "flex w-full justify-end",
                    !isSidebarOpen && "justify-start"
                 )}>
                    <HoverContainer>
                        <RiArrowLeftDoubleLine
                        onClick={()=>setSidebarOpen(!isSidebarOpen)}
                        className={cn(
                            'text-gray-400 transition-all text-4xl items-center', !isSidebarOpen && 'rotate-180'
                            )} 
                        />
                    </HoverContainer> 
                </section>            
            </div>
           
        </div>
    )
}

function SideNavItems({
    href, 
    isSidebarOpen, 
    icons, 
    label
}: SideNavItemsType & {isSidebarOpen: boolean}){
    const [animationParent] = useAutoAnimate()
    const pathName = useLocation().pathname; 
    const isActivePage = pathName == href;
    return (
        <Link ref={animationParent} to={href} className='flex gap-2 items-center cursor-pointer'>
            {/* icon */}
            <div className='w-[35px] h-[35px] text-3xl'>           
                {isActivePage ? icons?.fillIcon : icons?.icon}           
            </div>
            {/* lebel */}
            {isSidebarOpen && (
            <p className={cn("text-xl hidden md:block transition-all",
            isActivePage&& "font-bold"
            )}>
                { label}
            </p>
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