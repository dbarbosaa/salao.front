

//TRANSPARENT BG-IMAGE STYLE END******************

export function checkHoriMenu() {
  let menuWidth:any = document.querySelector(".horizontal-main");
  let menuItems:any = document.querySelector(".side-menu");
  let mainSidemenuWidth:any = document.querySelector(".main-sidemenu");
  let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
  let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0]));
  let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0]));
  let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;
  if (document.querySelector(".main-body")?.classList.contains("ltr")) {
    menuItems.style.marginRight = 0;
  }
  else {
    menuItems.style.marginLeft = 0;
  }

  if (menuItems.scrollWidth - 2 < menuWidth?.offsetWidth - menuContainerWidth) {
    document.querySelector(".slide-left")?.classList.add("d-none");
    document.querySelector(".slide-right")?.classList.add("d-none");
    document.querySelector(".slide-leftRTL")?.classList.add("d-none");
    document.querySelector(".slide-rightRTL")?.classList.add("d-none");
  } else if (marginLeftValue !== 0 || marginRightValue !== 0) {
    document.querySelector(".slide-right")?.classList.remove("d-none");
    document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
  } else if (marginLeftValue !== -check || marginRightValue !== -check) {
    document.querySelector(".slide-left")?.classList.remove("d-none");
    document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
  }
  if (menuItems.scrollWidth - 2 > menuWidth?.offsetWidth - menuContainerWidth) {
    document.querySelector(".slide-left")?.classList.remove("d-none");
    document.querySelector(".slide-right")?.classList.remove("d-none");
    document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
    document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
  }
  if (marginLeftValue === 0 || marginRightValue === 0) {
    document.querySelector(".slide-left")?.classList.add("d-none");
    document.querySelector(".slide-leftRTL")?.classList.add("d-none");
  }
  if (marginLeftValue !== 0 || marginRightValue !== 0) {
    document.querySelector(".slide-left")?.classList.remove("d-none");
    document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
  }
}

export function handleThemeUpdate(cssVars) {
  const root:any = document.querySelector(":root");
  const keys = Object.keys(cssVars);

  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
// to check the value is hexa or not
const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st, chunkSize) =>
  st.match(new RegExp(`.{${chunkSize}}`, "g"));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a, alpha) => {
  if (typeof a !== "undefined") {
    return a / 255;
  }
  if (typeof alpha != "number" || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
// convertion of hex code to rgba code
export function hexToRgba(hexValue, alpha = 1) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
}

export function dynamicLightPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color, 0.9),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicDarkPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicTransparentPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicBgTransparentBackground(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName1 = `--transparent-${item.getAttribute("data-id5")}`;
    handleThemeUpdate({
      [cssPropName1]: hexToRgba(color),
    });
  });
}
export function dynamicBgImgTransparentPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;

    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}

function transparentStyle() {
  document.querySelector(".app")?.classList.remove("light-menu");
  document.querySelector(".app")?.classList.remove("dark-menu");
  document.querySelector(".app")?.classList.remove("color-menu");
  document.querySelector(".app")?.classList.remove("gradient-menu");
  document.querySelector(".app")?.classList.remove("light-header");
  document.querySelector(".app")?.classList.remove("color-header");
  document.querySelector(".app")?.classList.remove("dark-header");
  document.querySelector(".app")?.classList.remove("gradient-header");
}


export function name() {
  let primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue("--primary-bg-color").trim();

  //get variable
  let myVarVal =
    localStorage.getItem("valexprimaryColor") ||
    localStorage.getItem("valexdarkPrimaryColor") ||
    localStorage.getItem("valextransparentPrimaryColor") ||
    localStorage.getItem("valextransparentBgColor") ||
    localStorage.getItem("valextransparent-bgImgPrimaryColor") ||
    primaryColorVal;

  let colorData = hexToRgba(myVarVal || "#15A7A0", 0.1);
  document.querySelector("html")?.style.setProperty("--primary-1", colorData);

  let colorData1 = hexToRgba(myVarVal || "#15A7A0", 0.2);
  document.querySelector("html")?.style.setProperty("--primary-2", colorData1);

  let colorData2 = hexToRgba(myVarVal || "#15A7A0", 0.3);
  document.querySelector("html")?.style.setProperty("--primary-3", colorData2);

  let colorData3 = hexToRgba(myVarVal || "#15A7A0", 0.5);
  document.querySelector("html")?.style.setProperty("--primary-5", colorData3);

  let colorData4 = hexToRgba(myVarVal || "#15A7A0", 0.8);
  document.querySelector("html")?.style.setProperty("--primary-8", colorData4);
}
name();

export function localStorageBackUp() {
  let html = document.querySelector("html")?.style;
  let body = document.querySelector("body");

  

  if (localStorage.getItem('valexhorizontal')!=null) {
    document.querySelector(".main-header")?.classList.add("hor-header");
    document.querySelector(".app")?.classList.remove("sidebar-mini");
    document.querySelector(".main-header")?.classList.remove("side-header");
    document.querySelector(".main-content")?.classList.remove("app-content");
    document.querySelector(".main-container")?.classList.remove("container-fluid");
    document.querySelector(".app")?.classList.remove("sidenav-toggled");
    document.querySelector(".app")?.classList.remove("horizontal-hover");
    document.querySelector(".app")?.classList.add("horizontal");
    document.querySelector(".main-container")?.classList.add("container");
    document.querySelector(".main-sidemenu")?.classList.add("container");
    document.querySelector(".main-content")?.classList.add("horizontal-content");
    document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
    document.querySelector(".side-app")?.classList.add("container");

    // $('#slide-left').remove('d-none');
    // $('#slide-right').remove('d-none');
    if (document.querySelector(".horizontal .side-menu") != null){
      let nowrapp:any = document.querySelector(".horizontal .side-menu")
      nowrapp.style.flexWrap = 'nowrap';
      let myonoffswitch35:any = document.querySelector("#myonoffswitch35")
      myonoffswitch35.checked = true;  
    }
    checkHoriMenu();
    Horizontalmenudefultclose();
    switcherArrowFn();

  }

  if (localStorage.getItem('valexhorizontalHover')!=null) {
    document.querySelector(".app")?.classList.add("horizontal-hover");
    document.querySelector(".app")?.classList.add("horizontal");
    document.querySelector(".main-content")?.classList.add("horizontal-content");
    document.querySelector(".main-container")?.classList.add("container");
    document.querySelector(".main-header")?.classList.add("hor-header");
    document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
    document.querySelector(".main-sidemenu")?.classList.add("container");
    document.querySelector(".side-app")?.classList.add("container");

    document.querySelector("#slide-left")?.classList.remove("d-none");
    document.querySelector("#slide-right")?.classList.remove("d-none");
    document.querySelector(".main-content")?.classList.remove("app-content");
    document.querySelector(".main-container")?.classList.remove("container-fluid");
    document.querySelector(".app")?.classList.remove("sidebar-mini");
    document.querySelector(".app")?.classList.remove("sidenav-toggled");
    if (document.querySelector("#myonoffswitch111") !=null) {
      let myonoffswitch111:any = document.querySelector("#myonoffswitch111")
      myonoffswitch111.checked = true;
  }
    document.querySelector(".horizontal-hover")?.classList.add("flex-nowrap");
    document.querySelector(".side-menu")?.classList.add("flex-nowrap");
    let li = document.querySelectorAll(".side-menu li");
    li.forEach((e, i) => {
      if (e.classList.contains("is-expaned")) {
        let ele = [...e.children];
        ele.forEach((el:any, i) => {
          el.classList.remove("active");
          if (el.classList.contains("slide-menu")) {
            el.style = "";
            el.style.display = "none";
          }
        });
        e.classList.remove("is-expaned");
      }
    });
    checkHoriMenu();
    Horizontalmenudefultclose();
    switcherArrowFn();
  }
  if (localStorage.getItem('valexdark')!=null) {
    if(document.querySelector("#myonoffswitch2") != null){
      let myonoffswitch2:any = document.querySelector("#myonoffswitch2")
      myonoffswitch2.checked=true
      body?.classList.add("dark-theme");
      
      let myonoffswitch8:any = document.querySelector("#myonoffswitch8")
      myonoffswitch8.checked = true;
      let myonoffswitch5:any = document.querySelector("#myonoffswitch5")
      myonoffswitch5.checked = true;

      body?.classList.remove("transparent-theme");
      body?.classList.remove("light-theme");
      body?.classList.remove("light-header");
      body?.classList.remove("color-header");
      body?.classList.remove("gradient-header");
      body?.classList.remove("light-menu");
      body?.classList.remove("color-menu");
      body?.classList.remove("gradient-menu");
      // dark()
    }
  }
  if (localStorage.getItem("valextransparent") != null) {
    const app = document.querySelector(".app")
    const body = document.querySelector("body")
    if (document.querySelector("#myonoffswitchTransparent") != null){
      let myonoffswitchTransparent:any = document.querySelector("#myonoffswitchTransparent")
      myonoffswitchTransparent.checked = true
    }
    app?.classList.add("transparent-theme");
    app?.classList.remove("light-theme");

    app?.classList.remove("dark-theme");
    body?.classList.remove('bg-img1');
    app?.classList.remove("bg-img2");
    app?.classList.remove("bg-img3");
    app?.classList.remove("bg-img4");
    app?.classList.remove("light-menu");

    app?.classList.remove("color-menu");
    app?.classList.remove("dark-menu");
    app?.classList.remove("gradient-menu");
    app?.classList.remove("color-header");

    app?.classList.remove("gradient-header");
    app?.classList.remove("light-header");
    app?.classList.remove("dark-header");
    if (document.querySelector("#myonoffswitch3") != null){
      let myonoffswitch3:any = document.querySelector("#myonoffswitch3")
      myonoffswitch3.checked = false;

      let myonoffswitch6:any = document.querySelector("#myonoffswitch6")
      myonoffswitch6.checked = false;

      let myonoffswitch8:any = document.querySelector("#myonoffswitch8")
      myonoffswitch8.checked = false;

      let myonoffswitch5:any = document.querySelector("#myonoffswitch5")
      myonoffswitch5.checked = false;
    }
  }
  if (localStorage.getItem("valexBgImage")!== null){
    let body : any =  document.body.classList
    body.add(localStorage.getItem("valexBgImage"))
    document.body.classList.add("transparent-theme")
    localStorage.removeItem("valexlighttheme")
    localStorage.removeItem("valexdark")
    localStorage.removeItem("valextransparent")
  }

  if (localStorage.getItem('ColorMenu')){
    document.querySelector(".app")?.classList.remove("light-menu");
    document.querySelector(".app")?.classList.remove("dark-menu");
    document.querySelector(".app")?.classList.remove("gradient-menu");
    document.querySelector(".app")?.classList.add("color-menu");
  }

  if (localStorage.getItem('LightMenu')){
    document.querySelector(".app")?.classList.remove("color-menu");
    document.querySelector(".app")?.classList.remove("dark-menu");
    document.querySelector(".app")?.classList.remove("gradient-menu");
    document.querySelector(".app")?.classList.add("light-menu");
  }

  if (localStorage.getItem('DarkMenu')){
    document.querySelector(".app")?.classList.remove("color-menu");
    document.querySelector(".app")?.classList.remove("light-menu");
    document.querySelector(".app")?.classList.remove("gradient-menu");
    document.querySelector(".app")?.classList.add("dark-menu");
  }

  if (localStorage.getItem('GradientMenu')){
    document.querySelector(".app")?.classList.remove("color-menu");
    document.querySelector(".app")?.classList.remove("light-menu");
    document.querySelector(".app")?.classList.remove("dark-menu");
    document.querySelector(".app")?.classList.add("gradient-menu");
  }

  if (localStorage.getItem('Colorheader')){
    document.querySelector(".app")?.classList.remove("light-header");
    document.querySelector(".app")?.classList.remove("dark-header");
    document.querySelector(".app")?.classList.remove("gradient-header");
    document.querySelector(".app")?.classList.add("color-header");
  }

  if (localStorage.getItem('Lightheader')){
    document.querySelector(".app")?.classList.remove("color-header");
    document.querySelector(".app")?.classList.remove("dark-header");
    document.querySelector(".app")?.classList.remove("gradient-header");
    document.querySelector(".app")?.classList.add("light-header");
  }

  if (localStorage.getItem('Darkheader')){
    document.querySelector(".app")?.classList.remove("color-header");
    document.querySelector(".app")?.classList.remove("light-header");
    document.querySelector(".app")?.classList.remove("gradient-header");
    document.querySelector(".app")?.classList.add("dark-header");
  }

  if (localStorage.getItem('gradientheader')){
    document.querySelector(".app")?.classList.remove("color-header");
    document.querySelector(".app")?.classList.remove("light-header");
    document.querySelector(".app")?.classList.remove("dark-header");
    document.querySelector(".app")?.classList.add("gradient-header");
  }

  if (localStorage.getItem("valexprimaryColor") !== null) {
    body?.classList.add("light-theme");
    if (document.getElementById("myonoffswitch1") != null){
    let myonoffswitch1:any = document.getElementById("myonoffswitch1")
    myonoffswitch1.checked = true;
    }
    body?.classList.remove("dark-theme");
    body?.classList.remove("transparent-theme");
    
    html?.setProperty(
      "--primary-bg-color",
      localStorage.getItem("valexprimaryColor")
    );
    html?.setProperty(
      "--primary-bg-hover",
      localStorage.getItem("valexprimaryColor")
    );
    html?.setProperty(
      "--primary-bg-border",
      localStorage.getItem("valexprimaryColor")
    );

    
  }
  if (localStorage.getItem("valexdarkPrimaryColor") !== null) {
    body?.classList.add("dark-theme");

    if(document.getElementById("myonoffswitch2") != null){
      let myonoffswitch2:any = document.getElementById("myonoffswitch2")
      myonoffswitch2.checked = true;
    }

    body?.classList.remove("light-theme");
    body?.classList.remove("transparent-theme");

    html?.setProperty(
      "--primary-bg-color",
      localStorage.getItem("valexdarkPrimaryColor")
    );
    html?.setProperty(
      "--primary-bg-hover",
      localStorage.getItem("valexdarkPrimaryColor")
    );
    html?.setProperty(
      "--primary-bg-border",
      localStorage.getItem("valexdarkPrimaryColor")
    );
  }
  if (localStorage.getItem("valextransparentPrimaryColor") !== null) {
    body?.classList.add("transparent-theme");
    let myonoffswitchTransparent:any = document.getElementById("myonoffswitchTransparent")
    myonoffswitchTransparent.checked = true;

    body?.classList.remove("light-theme");
    body?.classList.remove("dark-theme");
    html?.setProperty(
      "--primary-bg-color",
      localStorage.getItem("valextransparentPrimaryColor")
    );
  }
  if (localStorage.getItem("valextransparentBgColor") !== null) {
    body?.classList.add("transparent-theme");
    document.getElementById("myonoffswitchTransparent");

    body?.classList.remove("light-theme");
    body?.classList.remove("dark-theme");
    html?.setProperty(
      "--transparent-body",
      localStorage.getItem("valextransparentBgColor")
    );
  }
  if (
    localStorage.getItem("valextransparent-bgImgPrimaryColor") !== null ||
    localStorage.getItem("valexBgImage") !== null
  ) {
    body?.classList.add("transparent-theme");
    document.getElementById("myonoffswitchTransparent");

    body?.classList.remove("light-theme");
    body?.classList.remove("dark-theme");
    let img:any = localStorage.getItem("valexBgImage");
    html?.setProperty(
      "--primary-bg-color",
      localStorage.getItem("valextransparent-bgImgPrimaryColor")
    );
    body?.classList.add(img);
  }
  if (localStorage.getItem('valexrtl')!=null) {
    document.querySelector("body")?.classList.add("rtl");
    document.querySelector("html[lang=en]")?.setAttribute("dir", "rtl");
    document.getElementById("bootstrapLink")?.setAttribute("href", `${import.meta.env.BASE_URL === 'production' ? "/" : "/src/assets"}/plugins/bootstrap/css/bootstrap.rtl.min.css`)
    document.querySelector("body")?.classList.remove("ltr");
    if(document.querySelector("#myonoffswitch55") != null){
      let myonoffswitch55:any =  document.querySelector("#myonoffswitch55")
      myonoffswitch55.checked = true;  
    }
  }

  if(localStorage.getItem("BodyStyle1") != null){
    document.querySelector(".app")?.classList.add("body-style1");
    if (document.querySelector("#myonoffswitch06") != null){
      let myonoffswitch06:any = document.querySelector("#myonoffswitch06")
      myonoffswitch06.checked =  true
    }
  }

  if(localStorage.getItem("sidebar-img")!= null){
    let body : any = document.body.classList
    body.add(localStorage.getItem("sidebar-img"))
  }
  if (localStorage.valexlighttheme) {
    if (document.getElementById("myonoffswitch1") != null){
      let myonoffswitch1:any = document.getElementById("myonoffswitch1")
      myonoffswitch1.checked = true
    }


    // LightTheme()
  }
}

export function switcherArrowFn() {
  let slideLeft:any = document.querySelector(".slide-left");
  let slideRight:any = document.querySelector(".slide-right");
  // used to remove is-expanded class and remove class on clicking arrow buttons
  function slideClick() {
    let slide = document.querySelectorAll(".slide");
    let sideMenuitem = document.querySelectorAll(".slide-menu__item");
    let slideMenu = document.querySelectorAll(".slide-menu");
    slide.forEach((element, _index) => {
      if (element.classList.contains("is-expanded") === true) {
        element.classList.remove("is-expanded");
      }
    });
    sideMenuitem.forEach((element, _index) => {
      if (element.classList.contains("active") === true) {
        element.classList.remove("active");
      }
    });
    slideMenu.forEach((element:any, _index) => {
      if (element) {
        element.style.display = "none";
      }
    });
  }
  // horizontal arrows
  window.addEventListener("resize", () => {
    let menuWidth:any = document.querySelector(".horizontal-main");
    let menuItems:any = document.querySelector(".side-menu");
    let mainSidemenuWidth:any = document.querySelector(".main-sidemenu");
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0]));
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0]));
    let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

    if (menuWidth?.offsetWidth - menuContainerWidth > menuItems.scrollWidth) {
      document.querySelector(".slide-left")?.classList.add("d-none");
      document.querySelector(".slide-right")?.classList.add("d-none");
      menuItems.style.marginRight = 0;
      menuItems.style.marginLeft = 0;

    }
    else {
      document.querySelector(".slide-right")?.classList.remove("d-none");
    }

    if (document.querySelector("html")?.getAttribute("dir") === "rtl") {
      if ((Math.abs(marginRightValue) < Math.abs(check)) === false && (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth)
      ) {
        menuItems.style.marginRight = -check + 'px';
        document.querySelector(".slide-left")?.classList.remove("d-none");
      } else {
        menuItems.style.marginRight = 0;
      }
    } else {
      if (
        (Math.abs(marginLeftValue) < Math.abs(check)) === false &&
        (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth)
      ) {
        menuItems.style.marginLeft = -check + 'px';
        document.querySelector(".slide-right")?.classList.add("d-none");
      } else {
        menuItems.style.marginLeft = 0;
      }
    }
  });

  if (
    !document.querySelector("body")?.classList.contains("login-img") &&
    !document.querySelector("body")?.classList.contains("error-bg")
  ) {
    checkHoriMenu();
  }

  slideLeft.addEventListener("click", () => {
    slideClick();
    let menuWidth:any = document.querySelector(".horizontal-main");
    let menuItems:any = document.querySelector(".side-menu");
    let mainSidemenuWidth :any= document.querySelector(".main-sidemenu");
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) + 100;
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) + 100;

    if (document.querySelector('html')?.getAttribute('dir') === "rtl") {
      if (marginRightValue < 0) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = Number(menuItems.style.marginRight.split("px")[0]) + 100 + "px";
        document.querySelector(".slide-right")?.classList.remove("d-none");
        document.querySelector(".slide-left")?.classList.remove("d-none");
      } else {
        document.querySelector(".slide-left")?.classList.add("d-none");
      }

      if (marginRightValue >= 0) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = "0px";
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e:any) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e:any) => {
        e.style.display = "";
      });
    }
    else {
      if (marginLeftValue < 0) {
        menuItems.style.marginLeft = Number(menuItems.style.marginLeft.split("px")[0]) + 100 + "px";
        if (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth) {
          document.querySelector(".slide-left")?.classList.remove("d-none");
          document.querySelector(".slide-right")?.classList.remove("d-none");
        }
      }
      else {
        document.querySelector(".slide-left")?.classList.add("d-none");
      }

      if (marginLeftValue >= 0) {
        menuItems.style.marginLeft = "0px";
        if (menuWidth?.offsetWidth < menuItems.scrollWidth) {
          document.querySelector(".slide-left")?.classList.add("d-none");
        }
      }

      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e:any) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e:any) => {
        e.style.display = "";
      });
    }
  });
  slideRight.addEventListener("click", () => {
    slideClick();
    let menuWidth:any = document.querySelector(".horizontal-main");
    let menuItems:any = document.querySelector(".side-menu");
    let mainSidemenuWidth:any = document.querySelector(".main-sidemenu");
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) - 100;
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) - 100;
    let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

    if (document.querySelector('html')?.getAttribute('dir') === "rtl") {
      if (marginRightValue > -check) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight =
          Number(menuItems.style.marginRight.split("px")[0]) - 100 + "px";
      } else {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = -check + "px";
        document.querySelector(".slide-right")?.classList.add("d-none");
        document.querySelector(".slide-left")?.classList.remove("d-none");
      }

      if (marginRightValue !== 0) {
        document.querySelector(".slide-left")?.classList.remove("d-none");
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e:any) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e:any) => {
        e.style.display = "";
      });
    }
    else {
      if (marginLeftValue > -check) {
        // menuItems.style.marginRight = 0;
        menuItems.style.marginLeft =
          Number(menuItems.style.marginLeft.split("px")[0]) - 100 + "px";
      } else {
        // menuItems.style.marginRight = 0;
        menuItems.style.marginLeft = -check + "px";
        document.querySelector(".slide-right")?.classList.add("d-none");
      }
      if (marginLeftValue !== 0) {
        document.querySelector(".slide-left")?.classList.remove("d-none");
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e:any) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e:any) => {
        e.style.display = "";
      });
      //
    }
  });
}

export const responsiveSidebarclose = () => {
  //leftsidemenu
  document.querySelector(".app")?.classList.remove("sidenav-toggled");
  //rightsidebar
  document.querySelector(".sidebar-right")?.classList.remove("sidebar-open");
  //swichermainright
  document.querySelector(".demo_changer")?.classList.remove("active");
  let demoChanger1:any = document.querySelector(".demo_changer")
  demoChanger1.style.right = "-270px";
};


window.addEventListener("load", () => {
  localStorageBackUp();
});


export function Horizontalmenudefultclose() {
  if (document.querySelector(".horizontal")) {
    let slide = document.querySelectorAll(".slide");
    let sideMenuitem = document.querySelectorAll(".slide-menu__item");
    let slideMenu = document.querySelectorAll(".slide-menu");
    slide.forEach((element) => {
      if (element.classList.contains("is-expanded") === true) {
        element.classList.remove("is-expanded");
      }
    });
    sideMenuitem.forEach((element) => {
      if (element.classList.contains("active") === true) {
        element.classList.remove("active");
      }
    });
    slideMenu.forEach((element:any) => {
      if (element) {
        element.style.display = "none";
      }
    });
  }
}


export function leftsideBGImg1(img) {
  switch (img) {
    case "leftbgimage1":
      document.body.classList.add("leftbgimage1")
      document.body.classList.remove("leftbgimage2","leftbgimage3","leftbgimage4","leftbgimage5")
      break;
      
    case "leftbgimage2":
      document.body.classList.add("leftbgimage2")
      document.body.classList.remove("leftbgimage1","leftbgimage3","leftbgimage4","leftbgimage5")
      break;

    case "leftbgimage3":
      document.body.classList.add("leftbgimage3")
      document.body.classList.remove("leftbgimage2","leftbgimage1","leftbgimage4","leftbgimage5")
      break;

    case "leftbgimage4":
      document.body.classList.add("leftbgimage4")
      document.body.classList.remove("leftbgimage2","leftbgimage3","leftbgimage1","leftbgimage5")
      break;

    case "leftbgimage5":
      document.body.classList.add("leftbgimage5")
      document.body.classList.remove("leftbgimage2","leftbgimage3","leftbgimage4","leftbgimage1")
      break;

    default:
      document.body.classList.add("leftbgimage1")
      document.body.classList.remove("leftbgimage2","leftbgimage3","leftbgimage4","leftbgimage5");
      break;
  }
}