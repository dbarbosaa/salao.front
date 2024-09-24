import { useEffect } from 'preact/hooks';
import React from 'react';
import { Nav } from 'react-bootstrap';

// Navbar side item Data

const Navigationdata: any = [
    {
        id: 1,
        text: 'Home',
        url: '#home',
    },
    {
        id: 2,
        text: 'Features',
        url: '#features',
    },
    {
        id: 3,
        text: 'About',
        url: '#about',
    },
    {
        id: 4,
        text: 'Highlights',
        url: '#highlights',
    },
    {
        id: 5,
        text: `Faq's`,
        url: '#faqs',
    },
    {
        id: 6,
        text: 'Clients',
        url: '#clients',
    },
    {
        id: 7,
        text: 'Contact',
        url: '#contact',
    },
]


export const Navdata = () => {
    const handleClick = (e: any) => {
        e.preventDefault()
        const target = e.currentTarget.getAttribute('href')
        const location = document.querySelector(target)?.offsetTop
        window.scrollTo({
            left: 0,
            top: location - 64,

        })
    }
    // Pagesactive while scrolling
    const pageLink = document.querySelectorAll(".side-menu__item");
    pageLink.forEach((Element) => {
        Element.addEventListener("click", (_event) => {
            _event.preventDefault();
            let hrefdata: any = Element.getAttribute("href");
            let elementview: any = document.querySelector(hrefdata);
            elementview.scrollIntoView({
                behavior: "smooth",
                offsetTop: 1 - 60,
            });
        });
    });



    return (

        <ul className="side-menu">
            {Navigationdata.map((link: any, i: any) => (
                <li className="slide" key={Math.random()}>
                    <Nav.Link href={link.url} onClick={handleClick} className="side-menu__item ">
                        <span className='side-menu__label'
                        >{link.text}</span></Nav.Link>
                </li>
            ))}
        </ul>

    )
}