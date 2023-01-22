import { useState } from 'react'
import logo from '../assets/logo.svg'
import close from '../assets/close.svg'
import menu from '../assets/menu.svg'

const Navbar = () => {

    const navItems = [
        {
            id: "home",
            title: "Home",
        },
        {
            id: "features",
            title: "Features",
        },
        {
            id: "product",
            title: "Product",
        },
        {
            id: "clients",
            title: "Clients",
        },
    ];


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="hoobank" className="w-[126px] h-[32px]" />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {
                    navItems.map((el, index) => (
                        <li key={el.id} className={`${index == navItems.length - 1 ? 'mr-0' : 'mr-10'} font-poppins font-normal cursor-pointer text-[16px] text-white`}>
                            <a href={`#${el.id}`}>{el.title}</a>
                        </li>
                    ))
                }
            </ul>


            <ul className="sm:hidden flex flex-1 justify-end items-center">
                <img src={isMenuOpen ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                />

                <div className={`${isMenuOpen ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {
                            navItems.map((el, index) => (
                                <li key={el.id} className={`${index == navItems.length - 1 ? 'mb-0' : 'mb-4'} font-poppins font-normal cursor-pointer text-[16px] text-white`}>
                                    <a href={`#${el.id}`}>{el.title}</a>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </ul >
        </nav >
    )
}

export default Navbar
