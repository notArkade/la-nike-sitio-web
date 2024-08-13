import React from 'react';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href='/'>
                <img src={headerLogo} alt="Logo" 
                width={130} height={29}/>
            </a>
            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((props) => (
                    <li key={props.label}>
                        <a href={props.href} 
                        className='font-montserrat leading-normal text-lg text-slate-500'>
                            {props.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="hamburger" width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav
