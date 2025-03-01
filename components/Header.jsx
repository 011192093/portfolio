import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white ">
            <div className="container mx-auto flex justify-between flex-center">
                <Link href="/">
                    <h1 className="txt-4xl font-semibold">AAlina <span className="text-accent">.</span></h1>
                </Link>
                <div className="hidden xl:flex item-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>
                            Contact
                        </Button>
                    </Link>
                   
                </div>
                <div className="xl:hidden">
                        <MobileNav/>
                    </div>

            </div>

        </header>
    )
}

export default Header
