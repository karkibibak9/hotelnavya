import React, { useState, useEffect, useRef } from 'react';


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
            if (scrollCheck > 450) {
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
        console.log(navRef.current.classList)
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
                    {/* <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar4">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className={show ? 'menuIcon toggle ' : 'menuIcon'} onClick={toggleNav}>
                        <span className="icon icon-bars" ></span>
                        <span className="icon icon-bars overlay"></span>
                    </div>



                    <div className={show ? "collapse show navbar-collapse justify-content-around" : "collapse navbar-collapse justify-content-around"} id="navbar4">
                        <ul className="navbar-nav mr-auto pl-lg-4">
                            <li className="nav-item px-lg-2 active">
                                <a className="nav-link" href="#">
                                    <span className="d-inline-block d-lg-none icon-width"><i className="fas fa-home"></i>
                                    </span>Home
                                </a>
                            </li>
                            <li className="nav-item px-lg-2"> <a className="nav-link" href="#"><span className="d-inline-block d-lg-none icon-width"><i className="fas fa-spa"></i></span>Services</a>
                            </li>
                            <li className="nav-item px-lg-2">
                                <a className="nav-link" href="#">
                                    <span className="d-inline-block d-lg-none icon-width">
                                        <i className="far fa-user"></i>
                                    </span>About</a>
                            </li>

                            <li className="nav-item px-lg-2"> <a className="nav-link" href="#"><span className="d-inline-block d-lg-none icon-width"><i className="far fa-envelope"></i></span>Contact</a>
                            </li>
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
                        {/* <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="text-primary fab fa-twitter"></i>
                                </a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">
                                <i className="text-primary fab fa-facebook"></i>
                            </a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">
                                <i className="text-danger fab fa-instagram"></i>
                            </a> </li>

                        </ul> */}
                    </div>

                </div>

                {/* {show &&
                <div className="overlay-menu">
                    <ul id="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            } */}
            </nav>




        </header>
    )
}

export default Header;
