import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

const Header = () => {
    const [show, setShow] = useState(false);
    const navRef = useRef();

    const select = (el, all = false) => {
        el = el.trim()
        if (process.browser) {
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }

    }

    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    let navbarlinks = select('.primary-nav a', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY;
            if (scrollCheck > 400) {
                navRef.current.classList.add('scrolled')
            } else {
                navRef.current.classList.remove('scrolled')
                // document.querySelector(".navbar").className = "navbar navbar-expand-lg fixed-top";
            }
        })
        window.addEventListener('load', navbarlinksActive, { passive: true })
        onscroll(document, navbarlinksActive)
    }, [])

    const toggleNav = () => {
        navRef.current.classList.toggle('active')
        setShow(!show)

    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top" ref={navRef}>
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <i className="fas fa-seedling"></i>
                        <span className="ml-3 font-weight-bold">Navya</span>
                    </a>

                    <div className="collapse navbar-collapse justify-content-around" id="navbar4">
                        <ul className="navbar-nav mr-auto pl-lg-4">
                            <NavItem onClick={()=>setShow(false)} link='/' title='Home' />
                            <NavItem onClick={()=>setShow(false)} link='/rooms' title='Rooms' />
                            <NavItem onClick={()=>setShow(false)} link='/about' title='About' />
                            <NavItem onClick={()=>setShow(false)} link='/contact' title='Contact' />
                        </ul>
                        <div className="navbar-social ml-auto my-3 my-lg-0">
                            <a className="px-2" href="#">
                                <i className="text-primary fab fa-twitter"></i>
                            </a>
                            <a className="px-2" href="#">
                                <i className="text-primary fab fa-facebook"></i>
                            </a>
                            <a className="px-2" href="#">
                                <i className="text-danger fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div className={show ? 'mobile-nav is-active d-block d-lg-none' : 'd-none'}>
                        <div className="bg-cover"></div>
                        <div className="nav-content">
                            <div className="row">
                                <div className="col-8 mx-auto">
                                    <ul className="navbar-nav mr-auto">
                                        <NavItem onClick={() => setShow(false)} link='/' title='Home' />
                                        <NavItem onClick={() => setShow(false)} link='/rooms' title='Rooms' />
                                        <NavItem onClick={() => setShow(false)} link='/about' title='About' />
                                        <NavItem onClick={() => setShow(false)} link='/contact' title='Contact' />
                                    </ul>
                                    <div className="navbar-social ml-auto my-3">
                                        <a className="px-2" href="#">
                                            <i className="text-primary fab fa-twitter"></i>
                                        </a>
                                        <a className="px-2" href="#">
                                            <i className="text-primary fab fa-facebook"></i>
                                        </a>
                                        <a className="px-2" href="#">
                                            <i className="text-danger fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={show ? 'mobile-nav is-active d-lg-none d-flex  align-items-center' : "mobile-nav d-lg-none d-flex  align-items-center"}>
                        <button className='hamburger-menu' onClick={toggleNav}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </button>
                    </div>

                </div>

                
            </nav>
            
            


        </header>
    )
}

function NavItem(props) {
    const router = useRouter();

    return (
        <li className="nav-item px-2" onClick={props.onClick}>
            <Link href={props.link} passHref >
                <a className={router.pathname === props.link ? "active nav-link" : "nav-link "} >
                    {props.title}
                </a>
            </Link>
        </li>
    )
}

export default Header;
