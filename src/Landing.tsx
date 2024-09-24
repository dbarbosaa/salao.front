import React, { Fragment, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import BacktoTop from './Components/Layouts/BacktoTop/BacktoTop';
import { Provider } from 'react-redux';
import store from './Components/CommonFileComponents/redux/store';
import LandingSwitcher from './Components/Layouts/Switcher/LandingSwitcher';

const Landing = () => {

    //custom Landing page-layout  custom-classes adding 

    useEffect(() => {
        document.querySelector("body")?.classList.add("app", "sidebar-mini", "ltr", "landing-page", "horizontalmenu");
        document.querySelector("body")?.classList.remove("bg-light", "main-body");
    }, []);

    return (
        <Fragment>

            <Provider store={store}>
                    <LandingSwitcher />
                    <Outlet />
                    <BacktoTop />
            </Provider>
        </Fragment>
    )
}

export default Landing;
