import React, { useState, useEffect } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import styles from './Switcher.module.scss';
import * as SwitcherData from './Data/SwitcherData';
import { connect } from "react-redux"
import { SwitcherAction, changePrimaryColor, darkPrimaryColor, transparentPrimaryColor, transparentBackground, BGImagePrimaryColor } from '../../CommonFileComponents/redux/action';




const Switcher = ({ SwitcherAction, changePrimaryColor, transparentBackground }) => {

  useEffect(() => {
    SwitcherData.localStorageBackUp();

  })


  return (
    <div className={styles.Switcher}>
      {/* <!-- Switcher --> */}
      <div className="switcher-wrapper">
        <div className="demo_changer">
          <div className="form_holder sidebar-right1">
            <Scrollbars
              className="hor-scroll"
            >
              <div className="row">
                <div className="predefined_styles">
                  <div className="swichermainleft text-center">
                    <h4>LTR AND RTL VERSIONS</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">LTR</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch25" id="myonoffswitch54" className="onoffswitch2-checkbox" onClick={() => SwitcherAction("LTR")} defaultChecked />
                            <label htmlFor="myonoffswitch54" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">RTL</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch25" id="myonoffswitch55" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction("RTL") }} />
                            <label htmlFor="myonoffswitch55" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft switcher-nav">
                    <h4>Navigation Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Vertical Menu</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch15" id="myonoffswitch34" className="onoffswitch2-checkbox" onClick={() => SwitcherAction("Verticalmenu")} defaultChecked />
                            <label htmlFor="myonoffswitch34" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Horizantal Click Menu</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch15" id="myonoffswitch35" className="onoffswitch2-checkbox" onClick={() => SwitcherAction('horizontalclickmenu')} />
                            <label htmlFor="myonoffswitch35" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Horizantal Hover Menu</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch15" id="myonoffswitch111" className="onoffswitch2-checkbox" onClick={() => SwitcherAction('Horizontalhovermenu')} />
                            <label htmlFor="myonoffswitch111" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Theme Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Light Theme</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch1" id="myonoffswitch1" onClick={() => SwitcherAction('LightTheme')} className="onoffswitch2-checkbox" defaultChecked />
                            <label htmlFor="myonoffswitch1" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Theme</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch1" id="myonoffswitch2" onClick={() => { SwitcherAction('DarkTheme') }} className="onoffswitch2-checkbox" />
                            <label htmlFor="myonoffswitch2" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>THEME COLOR</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Primary Color</span>
                          <div className="">
                            <input className="input-color-picker color-primary-light" defaultValue="#15A7A0" id="colorID" type="color" data-id="bg-color" data-id1="bg-hover" data-id2="bg-border" data-id7="transparentcolor" name="lightPrimary" onChange={(ele) => { changePrimaryColor(ele.target.value) }} />
                          </div>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Background Color</span>
                          <div className="">
                            <input className="input-transparent-color-picker color-bg-transparent" defaultValue="#141B2D" id="transparentBgColorID" type="color" data-id5="body" data-id6="theme" data-id9="transparentcolor" name="transparentBackground" onChange={(ele) => { transparentBackground(ele.target.value) }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft leftmenu-styles">
                    <h4>Menu Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Light Menu</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch2" id="myonoffswitch3" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('LightMenu') }} defaultChecked />
                            <label htmlFor="myonoffswitch3" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Color Menu</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch2" id="myonoffswitch4" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('ColorMenu') }} />
                            <label htmlFor="myonoffswitch4" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Menu</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch2" id="myonoffswitch5" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('DarkMenu') }} />
                            <label htmlFor="myonoffswitch5" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Gradient Menu</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch2" id="myonoffswitch25" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('GradientMenu') }} />
                            <label htmlFor="myonoffswitch25" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft header-styles">
                    <h4>Header Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Light Header</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch3" id="myonoffswitch6" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('Lightheader') }} defaultChecked />
                            <label htmlFor="myonoffswitch6" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Color Header</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch3" id="myonoffswitch7" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('Colorheader') }} />
                            <label htmlFor="myonoffswitch7" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Header</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch3" id="myonoffswitch8" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('Darkheader') }} />
                            <label htmlFor="myonoffswitch8" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Gradient Header</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch3" id="myonoffswitch26" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('gradientheader') }} />
                            <label htmlFor="myonoffswitch26" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Skin Modes</h4>
                    <div className="switch_section">
                      <div className="switch-toggle d-flex">
                        <span className="me-auto">Default Body</span>
                        <div className="onoffswitch2"><input type="radio" name="onoffswitchBody" id="myonoffswitch07" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('DefaultBody') }} defaultChecked />
                          <label htmlFor="myonoffswitch07" className="onoffswitch2-label"></label>
                        </div>
                      </div>
                      <div className="switch-toggle d-flex">
                        <span className="me-auto">Body Style1</span>
                        <div className="onoffswitch2"><input type="radio" name="onoffswitchBody" id="myonoffswitch06" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('BodyStyle1'); localStorage.setItem("BodyStyle1", "true") }} />
                          <label htmlFor="myonoffswitch06" className="onoffswitch2-label"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft vertical-images">
                    <h4>Leftmenu Bg-Image</h4>
                    <div className="skin-body light-pattern">
                      <button type="button" id="leftmenuimage1" onClick={() => { SwitcherData.leftsideBGImg1('leftbgimage1'), localStorage.setItem("sidebar-img", "leftbgimage1") }} className="bg1 wscolorcode1 blackborder"></button>
                      <button type="button" id="leftmenuimage2" onClick={() => { SwitcherData.leftsideBGImg1('leftbgimage2'), localStorage.setItem("sidebar-img", "leftbgimage2") }} className="bg2 wscolorcode1 blackborder"></button>
                      <button type="button" id="leftmenuimage3" onClick={() => { SwitcherData.leftsideBGImg1('leftbgimage3'), localStorage.setItem("sidebar-img", "leftbgimage3") }} className="bg3 wscolorcode1 blackborder"></button>
                      <button type="button" id="leftmenuimage4" onClick={() => { SwitcherData.leftsideBGImg1('leftbgimage4'), localStorage.setItem("sidebar-img", "leftbgimage4") }} className="bg4 wscolorcode1 blackborder"></button>
                      <button type="button" id="leftmenuimage5" onClick={() => { SwitcherData.leftsideBGImg1('leftbgimage5'), localStorage.setItem("sidebar-img", "leftbgimage5") }} className="bg5 wscolorcode1 blackborder"></button>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Layout Width Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Full Width</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch4" id="myonoffswitch9" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('FullWidth') }} defaultChecked />
                            <label htmlFor="myonoffswitch9" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Boxed</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch4" id="myonoffswitch10" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('Boxed') }} />
                            <label htmlFor="myonoffswitch10" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft switcher-layout">
                    <h4>Layout Positions</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Fixed</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch5" id="myonoffswitch11" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('Fixed') }} defaultChecked />
                            <label htmlFor="myonoffswitch11" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Scrollable</span>
                          <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch5" id="myonoffswitch12" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('Scrollable') }} />
                            <label htmlFor="myonoffswitch12" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Reset All Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section my-4">
                        <button className="btn btn-danger btn-block"
                          onClick={() => { SwitcherAction('ResetAll') }}
                          type="button">Reset All
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Scrollbars>
          </div>
        </div>
      </div>
      {/* <!-- End Switcher --> */}
    </div>
  )
};


Switcher.defaultProps = {};

const mapStateToProps = (state) => ({
  local_varaiable: state
})

export default connect(mapStateToProps, { SwitcherAction, changePrimaryColor, darkPrimaryColor, transparentPrimaryColor, transparentBackground, BGImagePrimaryColor })(Switcher);
