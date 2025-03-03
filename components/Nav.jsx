"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
const links = [
    {
        name: "home",
        path: "/"
    },
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
   
]

const Nav = () => {
    const pathname=usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((links,index)=>
            {
                return (
                <Link href= {links.path} key={index} className={`${links.path===pathname && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all`}> 
                {links.name}
                </Link>
            );
            })}
        </nav>
    )
}

export default Nav
