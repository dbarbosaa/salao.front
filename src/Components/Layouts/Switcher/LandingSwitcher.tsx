import React, { useEffect } from 'react';
import * as SwitcherData from './Data/SwitcherData';
import { connect } from "react-redux"
import { Row } from 'react-bootstrap';
import { SwitcherAction } from '../../CommonFileComponents/redux/action';


const LandingSwitcher = ({ SwitcherAction }) => {

    useEffect(() => {
        SwitcherData.localStorageBackUp();

    })

    return (

        <div>
            {/* <!-- Switcher --> */}
            <div className="switcher-wrapper">
                <div className="demo_changer">
                    <div className="form_holder sidebar-right1">
                        <Row>
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
                                <div className="swichermainleft">
                                    <h4>Theme Style</h4>
                                    <div className="skin-body">
                                        <div className="switch_section">
                                            <div className="switch-toggle d-flex">
                                                <span className="me-auto">Light Theme</span>
                                                <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch1" id="myonoffswitch1" className="onoffswitch2-checkbox" onClick={() => SwitcherAction('LightTheme')} defaultChecked />
                                                    <label htmlFor="myonoffswitch1" className="onoffswitch2-label"></label>
                                                </p>
                                            </div>
                                            <div className="switch-toggle d-flex mt-2">
                                                <span className="me-auto">Dark Theme</span>
                                                <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch1" id="myonoffswitch2" className="onoffswitch2-checkbox" onClick={() => { SwitcherAction('DarkTheme') }} />
                                                    <label htmlFor="myonoffswitch2" className="onoffswitch2-label"></label>
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
                        </Row>
                    </div>
                </div>
            </div>
            {/* <!-- End Switcher --> */}
        </div>
    )
}

LandingSwitcher.defaultProps = {};

const mapStateToProps = (state) => ({
    local_varaiable: state
})

export default connect(mapStateToProps, { SwitcherAction })(LandingSwitcher);