import React, {useState, useEffect} from 'react';


const Header = () => {
    const [show, setShow] = useState(false);
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
                document.querySelector(".navigation").className = "navigation fixed-nav"
            } else {
                document.querySelector(".navigation").className = "navigation";
            }
        })
        window.addEventListener('load', navbarlinksActive, { passive: true })
        onscroll(document, navbarlinksActive)
    }, [])

    return (
        <header>
            <nav className="navigation" >
                <div className="nav-wrapper">
                    <div className={show ? "logo logo-active" : "logo"}>
                        <a href="/"><i className="fas fa-seedling"></i> NAVYA</a>
                    </div>

                    <ul className="menu d-none d-lg-block">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <div className={show ? 'menuIcon toggle ' : 'menuIcon'} onClick={() => setShow(!show)}>
                <span className="icon icon-bars" ></span>
                <span className="icon icon-bars overlay"></span>
            </div>


            {show &&
                <div className="overlay-menu">
                    <ul id="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            }
        </header>
    )
}

export default Header;
