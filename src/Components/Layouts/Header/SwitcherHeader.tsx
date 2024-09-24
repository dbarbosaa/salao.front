import React, { useEffect, useState } from 'react';
import { Dropdown, InputGroup, Nav, Navbar } from 'react-bootstrap';
import Scrollbars from 'react-custom-scrollbars';
import { MENUITEMS } from "../Sidebar/SideBarMenu"

// pictures

import logo from '../../../assets/img/brand/logo.png';
import logoWhite from '../../../assets/img/brand/logo-white.png';

// flag images

import us from '../../../assets/img/flag-imgs/us_flag.jpg';
import french from '../../../assets/img/flag-imgs/french_flag.jpg';
import germany from '../../../assets/img/flag-imgs/germany_flag.jpg';
import italy from '../../../assets/img/flag-imgs/italy_flag.jpg';
import russia from '../../../assets/img/flag-imgs/russia_flag.jpg';
import spain from '../../../assets/img/flag-imgs/spain_flag.jpg';


// message images

import faces3 from '../../../assets/img/users/3.jpg';
import faces2 from '../../../assets/img/users/2.jpg';
import faces9 from '../../../assets/img/users/9.jpg';
import faces12 from '../../../assets/img/users/12.jpg';
import faces5 from '../../../assets/img/users/5.jpg';


// profile images

import Image from '../../../assets/img/users/6.jpg';
import { Link, useLocation } from 'react-router-dom';

import Storage from '../../../utils/StorageUtils';
import ProfileService from '../../CommonFileComponents/service/profile';
import EditProfileService from '../../CommonFileComponents/service/edit-profile';
import IUsuarioAutenticacao from '../../../Interfaces/IUsuarioAutenticacao';


//leftsidemenu
const SideMenuIcon = () => {
	document.querySelector(".app")?.classList.toggle("sidenav-toggled");
}

// Darkmode
const DarkMode = () => {
	if(document.querySelector(".app")?.classList.contains('dark-theme')){
	  document.querySelector(".app")?.classList.remove('dark-theme');
	  let DarkMenu1:any = document.querySelector("#myonoffswitch2") //dark -theme
	  DarkMenu1.checked = true;
	  let DarkMenu2:any = document.querySelector("#myonoffswitch5") //dark -menu
	  DarkMenu2.checked = true;
	  let DarkMenu3:any = document.querySelector("#myonoffswitch8") //dark -header
	  DarkMenu3.checked = true;
	}
	else{
	  document.querySelector(".app")?.classList.add('dark-theme');
	  let DarkMenu1:any = document.querySelector("#myonoffswitch2") //dark -theme
	  DarkMenu1.checked = true;
	  let DarkMenu2:any = document.querySelector("#myonoffswitch5") //dark -menu
	  DarkMenu2.checked = true;
	  let DarkMenu3:any = document.querySelector("#myonoffswitch8") //dark -header
	  DarkMenu3.checked = true;
	}
  }

// FullScreen
var elem: any = document.documentElement;
var i = true
const Fullscreen: any = (vale: any) => {
  switch (vale) {
    case true:
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
      i = false
      break;
    case false:
      document.exitFullscreen()
      i = true
      break;
  }
}

//rightsidebar
const RightSideBar = () => {
	document.querySelector(".sidebar-right")?.classList.toggle("sidebar-open");
}


//Header collapse search_bar
const Searchbar = () => {
	document.querySelector(".navbar-form")?.classList.toggle('active');
}



const SwitcherHeader = () => {
	let location = useLocation();

	const [faces6, setImage] = useState(Image);
	const [outPut, setoutPut] = useState(EditProfileService.returnId());
	const [show1, setShow1] = useState(false);
	const [InputValue, setInputValue] = useState("");
	const [show2, setShow2] = useState(false);
	const [searchcolor, setsearchcolor] = useState("text-dark");
	const [searchval, setsearchval] = useState("Type something");
	const [NavData, setNavData] = useState([]);

	const [user, setUser] = useState<IUsuarioAutenticacao>({
		email: "",
		id: 0,
		nome: "",
		perfilId: 1,
		ativo: true
	});

	const User = async () => setUser(await Storage.getUser() || user);

	useEffect(() => {
		User();
	}, []);

	console.log(user)

	let myfunction = (inputvalue) => {
		
		document.querySelector(".search-result")?.classList.remove("d-none")
		
		let i:any = []
		let allElement2:any = [];

		MENUITEMS.map(mainlevel => {
			if (mainlevel.Items) {
				setShow1(true)
				mainlevel.Items.map(sublevel => {
					
					if (sublevel.children) {
						sublevel.children.map(sublevel1 => {
							
							i.push(sublevel1)
							if (sublevel1.children) {
								sublevel1.children.map(sublevel2 => {
									
									i.push(sublevel2)
									return sublevel2;
								})
							}
							return sublevel1;
						})
					}
					return sublevel;
				})
			}
			return mainlevel;
		}
		)
		for (let allElement of i) {
			if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
				if (allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())) {
					setShow2(true)
					allElement2.push(allElement)
				}
			}
		}
		if (!allElement2.length || inputvalue === "") {
			if (inputvalue === "") {
				setShow2(false);
				setsearchval("Type something")
				setsearchcolor('text-dark')
			}
			if (!allElement2.length) {
				setShow2(false);
				setsearchcolor('text-danger')
				setsearchval("There is no component with this name")
			}
		}
		setNavData(allElement2)

	}

	useEffect(() => {
		
		if (ProfileService.returnImage() != undefined) {
			setImage(ProfileService.returnImage())
		}
		setoutPut(EditProfileService.returnId())
	}, [location])

	return (
		<div>
			<Navbar className="main-header side-header sticky nav nav-item">
				<div className="container-fluid main-container ">
					<div className="main-header-left ">
						<div className="responsive-logo">
							<Link to={`${import.meta.env.BASE_URL}indexpage`} className="header-logo">
								<img src={logo} className="logo-1" alt="logo" />
								<img src={logoWhite} className="dark-logo-1" alt="logo" />
							</Link>
						</div>
						<div className="app-sidebar__toggle" data-bs-toggle="sidebar" onClick={() => SideMenuIcon()}>
							<a className="open-toggle" href="#"><i className="header-icon fe fe-align-left" ></i></a>
							<a className="close-toggle" href="#"><i className="header-icons fe fe-x"></i></a>
						</div>
						<div className="main-header-center ms-3 d-sm-none d-md-none d-lg-block">
							<input className="form-control" placeholder="Search for anything..." type="search" value={InputValue} onChange={(ele => { myfunction(ele.target.value); setInputValue(ele.target.value) })} /> <button className="btn"><i className="fas fa-search d-none d-md-block"></i></button>
						</div>
						{show1 ?
							<div className="card search-result p-absolute w-40 search-fix  border mt-1">
								<div className="card-header">
									<h4 className="card-title me-2 text-break">Search result of {InputValue}</h4>
								</div>
								<ul className='mt-2'>
									{show2 ?
										NavData.map((e:any) =>
											<li key={Math.random()} className="">
												<Link to={`${e.path}/`} className='search-result-item' onClick={() => { setShow1(false), setInputValue("") }}>{e.title}</Link>
											</li>
										)
										: <b className={`${searchcolor} `}>{searchval}</b>}
								</ul>

							</div>
							: ""}

					</div>

					<div className="main-header-right">
						<Navbar.Toggle className="navresponsive-toggler d-lg-none ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon fe fe-more-vertical "></span>
						</Navbar.Toggle>
						<div className="mb-0 navbar navbar-expand-lg navbar-nav-right responsive-navbar navbar-dark p-0">
							<Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent-4">
								<Nav className="nav-item navbar-nav-right ms-auto">
									<Dropdown className="nav-item flag_content">
										<Dropdown.Toggle as='a' variant='' className="d-flex nav-link nav-item country-flag1">
											<span className="avatar country-Flag me-0 align-self-center bg-transparent"><img src={us} alt="img" /></span>
											<div className="my-auto">
												<strong className="me-2 ms-2 my-auto">English</strong>
											</div>
										</Dropdown.Toggle>
										<Dropdown.Menu className="dropdown-menu-start dropdown-menu-arrow">
											<Dropdown.Item href="#" className="dropdown-item d-flex ">
												<span className="avatar  me-3 align-self-center bg-transparent"><img src={french} alt="img" /></span>
												<div className="d-flex">
													<span className="mt-2">French</span>
												</div>
											</Dropdown.Item>
											<Dropdown.Item href="#" className="dropdown-item d-flex">
												<span className="avatar  me-3 align-self-center bg-transparent"><img src={germany} alt="img" /></span>
												<div className="d-flex">
													<span className="mt-2">Germany</span>
												</div>
											</Dropdown.Item>
											<Dropdown.Item href="#" className="dropdown-item d-flex">
												<span className="avatar me-3 align-self-center bg-transparent"><img src={italy} alt="img" /></span>
												<div className="d-flex">
													<span className="mt-2">Italy</span>
												</div>
											</Dropdown.Item>
											<Dropdown.Item href="#" className="dropdown-item d-flex">
												<span className="avatar me-3 align-self-center bg-transparent"><img src={russia} alt="img" /></span>
												<div className="d-flex">
													<span className="mt-2">Russia</span>
												</div>
											</Dropdown.Item>
											<Dropdown.Item href="#" className="dropdown-item d-flex">
												<span className="avatar  me-3 align-self-center bg-transparent"><img src={spain} alt="img" /></span>
												<div className="d-flex">
													<span className="mt-2">spain</span>
												</div>
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
									<Nav.Item className="dropdown nav-item main-layout" onClick={() => DarkMode()}>
										<Nav.Link className="new nav-link theme-layout nav-link-bg layout-setting" >
											<span className="dark-layout"><svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" width="24" height="24" viewBox="0 0 24 24"><path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z" /></svg></span>
											<span className="light-layout"><svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" width="24" height="24" viewBox="0 0 24 24"><path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" /></svg></span>
										</Nav.Link>
									</Nav.Item>
									<li className="nav-link search-icon d-lg-none d-block">
										<form className="navbar-form" role="search" onClick={() => Searchbar()}>
											<InputGroup>
												<input type="text" className="form-control" placeholder="Search" />
												<span className="input-group-btn">
													<button type="reset" className="btn btn-default">
														<i className="fas fa-times"></i>
													</button>
													<button type="submit" className="btn btn-default nav-link resp-btn">
														<svg xmlns="http://www.w3.org/2000/svg" height="24px" className="header-icon-svgs" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
													</button>
												</span>
											</InputGroup>
										</form>
									</li>
									<Dropdown className="nav-item main-header-message ">

										<Dropdown.Toggle
											className="new nav-link" variant=''
										>
											<svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs feather feather-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
											<span className=" pulse-danger"></span></Dropdown.Toggle>

										<Dropdown.Menu style={{margin: '0px'}} >
											<Scrollbars style={{ height: 400 }}>
												<div className="menu-header-content bg-primary text-start">
													<div className="d-flex">
														<h6 className="dropdown-title mb-1 tx-15 text-white fw-semibold">Messages</h6>
														<span className="badge rounded-pill bg-warning ms-auto my-auto float-end">Mark All Read</span>
													</div>
													<p className="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">You have 4 unread messages</p>
												</div>
												<div className="main-message-list chat-scroll">

													<Dropdown.Item href={`${import.meta.env.BASE_URL}pages/mail/chat`} className="p-3 d-flex border-bottom">
														<img className="drop-img cover-image" src={faces3} />
														<span className="avatar-status bg-teal petey"></span>

														<div className="wd-90p">
															<div className="d-flex">
																<h5 className="mb-1 name">Petey Cruiser</h5>
															</div>
															<p className="mb-0 desc">I'm sorry but i'm not sure how to help you with that......</p>
															<p className="time mb-0 text-start float-start ms-2 mt-2">Mar 15 3:55 PM</p>
														</div>
													</Dropdown.Item>
													<Dropdown.Item href={`${import.meta.env.BASE_URL}pages/mail/chat`} className="p-3 d-flex border-bottom">
														<img className="drop-img cover-image" src={faces2} />
														<span className="avatar-status bg-teal jimmy"></span>

														<div className="wd-90p">
															<div className="d-flex">
																<h5 className="mb-1 name">Jimmy Changa</h5>
															</div>
															<p className="mb-0 desc">All set ! Now, time to get to you now......</p>
															<p className="time mb-0 text-start float-start ms-2 mt-2">Mar 06 01:12 AM</p>
														</div>
													</Dropdown.Item>
													<Dropdown.Item href={`${import.meta.env.BASE_URL}pages/mail/chat`} className="p-3 d-flex border-bottom">
														<img className="drop-img cover-image" src={faces9} />
														<span className="avatar-status bg-teal graham"></span>

														<div className="wd-90p">
															<div className="d-flex">
																<h5 className="mb-1 name">Graham Cracker</h5>
															</div>
															<p className="mb-0 desc">Are you ready to pickup your Delivery...</p>
															<p className="time mb-0 text-start float-start ms-2 mt-2">Feb 25 10:35 AM</p>
														</div>
													</Dropdown.Item>
													<Dropdown.Item href={`${import.meta.env.BASE_URL}pages/mail/chat`} className="p-3 d-flex border-bottom">
														<img className="drop-img cover-image" src={faces12} />
														<span className="avatar-status bg-teal nobita"></span>

														<div className="wd-90p">
															<div className="d-flex">
																<h5 className="mb-1 name">Donatella Nobatti</h5>
															</div>
															<p className="mb-0 desc">Here are some products ...</p>
															<p className="time mb-0 text-start float-start ms-2 mt-2">Feb 12 05:12 PM</p>
														</div>
													</Dropdown.Item>
													<Dropdown.Item href={`${import.meta.env.BASE_URL}pages/mail/chat`} className="p-3 d-flex border-bottom">
														<img className="drop-img cover-image" src={faces5} />
														<span className="avatar-status bg-teal anne"></span>

														<div className="wd-90p">
															<div className="d-flex">
																<h5 className="mb-1 name">Anne Fibbiyon</h5>
															</div>
															<p className="mb-0 desc">I'm sorry but i'm not sure how...</p>
															<p className="time mb-0 text-start float-start ms-2 mt-2">Jan 29 03:16 PM</p>
														</div>
													</Dropdown.Item>

												</div>
											</Scrollbars>
											<div className="text-center dropdown-footer">
												<Link to={`${import.meta.env.BASE_URL}indexpage`} className="text-center">VIEW ALL</Link>
											</div>

										</Dropdown.Menu>

									</Dropdown>
									<Dropdown className="nav-item main-header-notification">
										<Dropdown.Toggle as='a' className="new nav-link" >
											<svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs feather feather-bell" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
											<span className=" pulse"></span></Dropdown.Toggle>
										<Dropdown.Menu style={{margin: '0px'}} >
											<Scrollbars style={{ height: 400 }}>
												<div className="menu-header-content bg-primary text-start">
													<div className="d-flex">
														<h6 className="dropdown-title mb-1 tx-15 text-white fw-semibold">Notifications</h6>
														<span className="badge rounded-pill bg-warning ms-auto my-auto float-end">Mark All Read</span>
													</div>
													<p className="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">You have 4 unread Notifications</p>
												</div>
												<div className="main-notification-list Notification-scroll">
													<Dropdown.Item className="d-flex p-3 border-bottom" href="#">
														<div className="notifyimg bg-pink">
															<i className="la la-file-alt text-white"></i>
														</div>
														<div className="ms-3">
															<h5 className="notification-label mb-1">New files available</h5>
															<div className="notification-subtext">10 hour ago</div>
														</div>
														<div className="ms-auto" >
															<i className="las la-angle-right text-end text-muted"></i>
														</div>
													</Dropdown.Item>
													<Dropdown.Item className="d-flex p-3 border-bottom" href="#">
														<div className="notifyimg bg-purple">
															<i className="la la-gem text-white"></i>
														</div>
														<div className="ms-3">
															<h5 className="notification-label mb-1">Updates Available</h5>
															<div className="notification-subtext">2 days ago</div>
														</div>
														<div className="ms-auto" >
															<i className="las la-angle-right text-end text-muted"></i>
														</div>
													</Dropdown.Item>
													<Dropdown.Item className="d-flex p-3 border-bottom" href="#">
														<div className="notifyimg bg-success">
															<i className="la la-shopping-basket text-white"></i>
														</div>
														<div className="ms-3">
															<h5 className="notification-label mb-1">New Order Received</h5>
															<div className="notification-subtext">1 hour ago</div>
														</div>
														<div className="ms-auto" >
															<i className="las la-angle-right text-end text-muted"></i>
														</div>
													</Dropdown.Item>
													<Dropdown.Item className="d-flex p-3 border-bottom" href="#">
														<div className="notifyimg bg-warning">
															<i className="la la-envelope-open text-white"></i>
														</div>
														<div className="ms-3">
															<h5 className="notification-label mb-1">New review received</h5>
															<div className="notification-subtext">1 day ago</div>
														</div>
														<div className="ms-auto" >
															<i className="las la-angle-right text-end text-muted"></i>
														</div>
													</Dropdown.Item>
													<Dropdown.Item className="d-flex p-3 border-bottom" href="#">
														<div className="notifyimg bg-danger">
															<i className="la la-user-check text-white"></i>
														</div>
														<div className="ms-3">
															<h5 className="notification-label mb-1">22 verified registrations</h5>
															<div className="notification-subtext">2 hour ago</div>
														</div>
														<div className="ms-auto" >
															<i className="las la-angle-right text-end text-muted"></i>
														</div>
													</Dropdown.Item>
													<Dropdown.Item className="d-flex p-3 border-bottom" href="#">
														<div className="notifyimg bg-primary">
															<i className="la la-check-circle text-white"></i>
														</div>
														<div className="ms-3">
															<h5 className="notification-label mb-1">Project has been approved</h5>
															<div className="notification-subtext">4 hour ago</div>
														</div>
														<div className="ms-auto" >
															<i className="las la-angle-right text-end text-muted"></i>
														</div>
													</Dropdown.Item>
												</div>
											</Scrollbars>
											<div className="dropdown-footer">
												<Link to={`${import.meta.env.BASE_URL}indexpage`}>VIEW ALL</Link>
											</div>
										</Dropdown.Menu>
									</Dropdown>
									<Nav.Item className="nav-item full-screen fullscreen-button">
										<Nav.Link className="new nav-link full-screen-link" onClick={() => Fullscreen()}>
											<svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs feather feather-maximize" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
										</Nav.Link>
									</Nav.Item>
									<Dropdown className="main-profile-menu nav nav-item nav-link">
										<Dropdown.Toggle as='a' className="profile-user d-flex" variant='' ><img src={faces6} alt="" /> </Dropdown.Toggle>
										<Dropdown.Menu style={{margin: '0px'}} >
											<div className="main-header-profile bg-primary p-3">
												<div className="d-flex wd-100p">
													<div className="main-img-user"><img src={faces6} className="" alt="" /></div>
													<div className="ms-3 my-auto">
														<h6>{user?.nome}</h6>
														<span>Premium Member</span>
													</div>
												</div>
											</div>
											<Dropdown.Item className="dropdown-item" href={`${import.meta.env.BASE_URL}pages/profile`}><i className="bx bx-user-circle"></i>Profile</Dropdown.Item>
											<Dropdown.Item className="dropdown-item" href={`${import.meta.env.BASE_URL}pages/editprofile`}><i className="bx bx-cog"></i> Edit Profile</Dropdown.Item>
											<Dropdown.Item className="dropdown-item" href={`${import.meta.env.BASE_URL}pages/mail/mail`}><i className="bx bxs-inbox"></i>Inbox</Dropdown.Item>
											<Dropdown.Item className="dropdown-item" href={`${import.meta.env.BASE_URL}pages/mail/chat`}><i className="bx bx-envelope"></i>Messages</Dropdown.Item>
											<Dropdown.Item className="dropdown-item" href={`${import.meta.env.BASE_URL}pages/settings`}><i className="bx bx-slider-alt"></i> Account Settings</Dropdown.Item>
											<Dropdown.Item className="dropdown-item" href={`${import.meta.env.BASE_URL}`}><i className="bx bx-log-out"></i> Sign Out</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
									<li className="dropdown main-header-message right-toggle" onClick={() => RightSideBar()}>
										<a className="nav-link pe-0" data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right">
											<svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs feather feather-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
										</a>
									</li>
								</Nav>
							</Navbar.Collapse>
						</div>
					</div>
				</div>
			</Navbar>
		</div>)
}

export default SwitcherHeader;
