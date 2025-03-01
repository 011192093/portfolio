"use client"
import { Sheet, SheetContent, SheetTrigger,SheetTitle } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from 'react-icons/ci'

const links = [
   
    {
        name: "publications",
        path: "/publications"
    },
    {
        name: "projects",
        path: "/projects"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "awards",
        path: "/awards"
    },
    {
        name: "contact",
        path: "/contact"
    },

]
const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"></CiMenuFries>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
            <SheetTitle><Link href="/">
                        <h1 className="text-2xl font-semiBold text-white">AAlina <span className="text-accent">.</span></h1>
                    </Link></SheetTitle>
                <div className="mt-16 text-center text-4xl">
                    
                    <nav className="flex flex-col justify-center items-center gap-8 mt-16">
                        {links.map((links, index) => {
                            return (
                                <Link href= {links.path} key={index} className={`${links.path===pathname && 'text-accent border-b-2 border-accent'} text-xl capitalize font-medium hover:text-accent transition-all flex `}> 
                                {links.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
