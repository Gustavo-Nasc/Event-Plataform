import { Logo } from "./Logo"
import { MenuBurger } from "./MenuBurger"

export function Header() {
    return (
        <header className="w-full p-5 flex items-center justify-between lg:justify-center bg-gray-700 border-b border-gray-600">
            <Logo />
            <div className="lg:hidden items-center gap-2 cursor-pointer">
                <MenuBurger />
            </div>
        </header>
    )
}