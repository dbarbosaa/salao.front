import React from 'react';
import styles from './FormSize.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Select from 'react-select';


const formData = [
	{ value: "One", label: "One" },
	{ value: "Two", label: "Two" },
	{ value: "Three", label: "Three" },
]


const FormSize = () => {

	return (
		<div className={styles.FormSize}>
			<Pageheader titles="Forms" active="Form-Sizes" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col md={12}>
					<Card>
						<Card.Header>
							<Card.Title as='h3' className="mb-0">Form Element Sizes</Card.Title>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col xl={12}>
									<p>Form control small Size add className <code className="highlighter-rouge">.form-control-sm</code> to <code className="highlighter-rouge">.form-control</code></p>
									<Form.Group>
										<Form.Control type="text" className="form-control-sm mb-3" name="input" />
									</Form.Group>
								</Col>
								<Col xl={12}>
									<Form.Group>
										<Form.Label>Form Control Medium Size <code className="highlighter-rouge">.form-control</code></Form.Label>
										<Form.Control type="text" className="mb-3" name="input" />
									</Form.Group>
								</Col>
								<Col xl={12}>
									<Form.Group>
										<p>Form control small Size add className <code className="highlighter-rouge">.form-control-lg</code> to <code className="highlighter-rouge">.form-control</code></p>
										<Form.Control type="text" className="form-control-lg mb-3" name="input" />
									</Form.Group>
								</Col>
							</Row>
						</Card.Body>
					</Card>
					<Card>
						<Card.Header>
							<Card.Title as='h3' className="mb-0 ">Checkbox Sizes</Card.Title>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col xl={4}>
									<Form.Group className=" m-0">
										<Form.Label className=" mb-4">Checkboxes</Form.Label>
										<div className="custom-controls-stacked">

											<Form.Check type="checkbox" label="Option 1" defaultChecked />

											<Form.Check type="checkbox" label="Option 2" />

											<Form.Check type="checkbox" label="Option Disabled" disabled />

											<Form.Check type="checkbox" label="Option Disabled" disabled defaultChecked />
										</div>
									</Form.Group>
								</Col>
								<Col xl={4} className="mt-4 mt-xl-0">
									<Form.Group className=" m-0">
										<Form.Label className=" mb-4">Checkboxes Medium Sizes</Form.Label>
										<div className="custom-controls-stacked">
											<label className="custom-control form-checkbox custom-control-md">
												<input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" defaultChecked />
												<span className="custom-control-label custom-control-label-md  tx-17">Option 1</span>
											</label>
											<label className="custom-control form-checkbox custom-control-md">
												<input type="checkbox" className="custom-control-input" name="example-checkbox2" value="option2" />
												<span className="custom-control-label custom-control-label-md  tx-17">Option 2</span>
											</label>
											<label className="custom-control form-checkbox custom-control-md">
												<input type="checkbox" className="custom-control-input" name="example-checkbox3" value="option3" disabled />
												<span className="custom-control-label custom-control-label-md  tx-17">Option Disabled</span>
											</label>
											<label className="custom-control form-checkbox custom-control-md">
												<input type="checkbox" className="custom-control-input" name="example-checkbox4" value="option4" defaultChecked disabled />
												<span className="custom-control-label custom-control-label-md  tx-17">Option Disabled Checked</span>
											</label>
										</div>
									</Form.Group>
								</Col>
								<Col xl={4} className="mt-4 mt-xl-0">
									<Form.Group className=" m-0">
										<Form.Label className=" mb-4">Checkboxes Large Size</Form.Label>
										<div className="custom-controls-stacked">
											<label className="custom-control form-checkbox custom-control-lg">
												<input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" defaultChecked />
												<span className="custom-control-label custom-control-label-lg  tx-20">Option 1</span>
											</label>
											<label className="custom-control form-checkbox custom-control-lg">
												<input type="checkbox" className="custom-control-input" name="example-checkbox2" value="option2" />
												<span className="custom-control-label custom-control-label-lg  tx-20">Option 2</span>
											</label>
											<label className="custom-control form-checkbox custom-control-lg">
												<input type="checkbox" className="custom-control-input" name="example-checkbox3" value="option3" disabled />
												<span className="custom-control-label custom-control-label-lg  tx-20">Option Disabled</span>
											</label>
											<label className="custom-control form-checkbox custom-control-lg">
												<input type="checkbox" className="custom-control-input" name="example-checkbox4" value="option4" defaultChecked disabled />
												<span className="custom-control-label custom-control-label-lg  tx-20">Option Disabled Checked</span>
											</label>
										</div>
									</Form.Group>
								</Col>
							</Row>
						</Card.Body>
					</Card>
					<Card>
						<Card.Header>
							<Card.Title as='h3' className="mb-0 ">Radio Sizes</Card.Title>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col xl={4}>
									<Form.Group className=" ">
										<Form.Label className="">Radios</Form.Label>
										{['radio'].map((type:any) => (
											<div key={`inline-${type}`} className="mb-3">
												<Form.Check defaultChecked label="Option 1" name="group1" type={type} id={`inline-${type}-1`} />
												<Form.Check label="Option 2" name="group1" type={type} id={`inline-${type}-2`} />
												<Form.Check disabled label="Option disabled" type={type} id={`inline-${type}-3`} />
												<Form.Check disabled defaultChecked label="Option Disabled Checked" type={type} id={`inline-${type}-3`} />
											</div>
										))}

									</Form.Group>
								</Col>
								<Col xl={4} className="mt-4 mt-xl-0">
									<Form.Group className=" ">
										<Form.Label className="">Medium Radios</Form.Label>
										<div className="custom-controls-stacked">
											<label className="custom-control form-radio custom-control-md">
												<input type="radio" className="custom-control-input" name="example-radios9" value="option1" defaultChecked />
												<span className="custom-control-label custom-control-label-md  tx-17">Option 1</span>
											</label>
											<label className="custom-control form-radio custom-control-md">
												<input type="radio" className="custom-control-input" name="example-radios9" value="option2" />
												<span className="custom-control-label custom-control-label-md  tx-17">Option 2</span>
											</label>
											<label className="custom-control form-radio custom-control-md">
												<input type="radio" className="custom-control-input" name="example-radios9" value="option3" disabled />
												<span className="custom-control-label custom-control-label-md  tx-17">Option Disabled</span>
											</label>
											<label className="custom-control form-radio custom-control-md">
												<input type="radio" className="custom-control-input" name="example-radios92" value="option4" disabled defaultChecked />
												<span className="custom-control-label custom-control-label-md  tx-17">Option Disabled Checked</span>
											</label>
										</div>
									</Form.Group>
								</Col>
								<Col xl={4} className="mt-4 mt-xl-0">
									<Form.Group className=" ">
										<Form.Label className="">Large Radios</Form.Label>
										<div className="custom-controls-stacked">
											<label className="custom-control form-radio custom-control-lg">
												<input type="radio" className="custom-control-input" name="example-radios2" value="option1" defaultChecked />
												<span className="custom-control-label custom-control-label-lg  tx-20">Option 1</span>
											</label>
											<label className="custom-control form-radio custom-control-lg">
												<input type="radio" className="custom-control-input" name="example-radios2" value="option2" />
												<span className="custom-control-label custom-control-label-lg tx-20">Option 2</span>
											</label>
											<label className="custom-control form-radio custom-control-lg">
												<input type="radio" className="custom-control-input" name="example-radios2" value="option3" disabled />
												<span className="custom-control-label custom-control-label-lg  tx-20">Option Disabled</span>
											</label>
											<label className="custom-control form-radio custom-control-lg">
												<input type="radio" className="custom-control-input" name="example-radios22" value="option4" disabled defaultChecked />
												<span className="custom-control-label custom-control-label-lg  tx-20">Option Disabled Checked</span>
											</label>
										</div>
									</Form.Group>
								</Col>
							</Row>
						</Card.Body>
					</Card>
					<Card>
						<Card.Header>
							<Card.Title as='h3' className="mb-0 ">Check Box Sizes Switches</Card.Title>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col xl={4}>
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description me-2">Check Box</span>
											<input type="checkbox" name="form-switch-checkbox1" className="form-switch-input" />
											<span className="form-switch-indicator"></span>
										</label>
									</Form.Group>
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description tx-17 me-2">Check Box</span>
											<input type="checkbox" name="form-switch-checkbox1" className="form-switch-input" defaultChecked />
											<span className="form-switch-indicator form-switch-indicator-lg"></span>
										</label>
									</Form.Group>
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description  tx-20 me-2">Check Box</span>
											<input type="checkbox" name="form-switch-checkbox1" className="form-switch-input" />
											<span className="form-switch-indicator form-switch-indicator-xl"></span>
										</label>
									</Form.Group>
								</Col>
								<Col xl={4} className="mt-4 mt-xl-0">
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description me-2">Check Box</span>
											<input type="checkbox" name="form-switch-checkbox2" className="form-switch-input" />
											<span className="form-switch-indicator custom-square"></span>
										</label>
									</Form.Group>
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description  tx-17 me-2">Check Box</span>
											<input type="checkbox" name="form-switch-checkbox2" className="form-switch-input" />
											<span className="form-switch-indicator form-switch-indicator-lg custom-square"></span>
										</label>
									</Form.Group>
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description tx-20 me-2">Check Box</span>
											<input type="checkbox" name="form-switch-checkbox2" className="form-switch-input" defaultChecked />
											<span className="form-switch-indicator form-switch-indicator-xl custom-square"></span>
										</label>
									</Form.Group>
								</Col>
								<Col xl={4} className="mt-4 mt-xl-0">
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description me-2">Check Box</span>
											<input type="checkbox" name="form-switch-checkbox3" className="form-switch-input" defaultChecked />
											<span className="form-switch-indicator custom-radius"></span>
										</label>
									</Form.Group>
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description  tx-17 me-2">Check Box</span>
											<input type="checkbox" name="form-switch-checkbox3" className="form-switch-input" />
											<span className="form-switch-indicator form-switch-indicator-lg custom-radius"></span>
										</label>
									</Form.Group>
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description tx-20 me-2">Check Box</span>
											<input type="checkbox" name="form-switch-checkbox3" className="form-switch-input" />
											<span className="form-switch-indicator form-switch-indicator-xl custom-radius"></span>
										</label>
									</Form.Group>
								</Col>
							</Row>
						</Card.Body>
					</Card>
					<Card>
						<Card.Header>
							<Card.Title as='h3' className="mb-0 ">Radio Button Sizes Switches</Card.Title>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col xl={4}>
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description me-2">Radio Buttons</span>
											<input type="radio" name="form-switch-radio" className="form-switch-input" />
											<span className="form-switch-indicator"></span>
										</label>
									</Form.Group>
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description  tx-17 me-2">Radio Buttons</span>
											<input type="radio" name="form-switch-radio" className="form-switch-input" />
											<span className="form-switch-indicator form-switch-indicator-lg"></span>
										</label>
									</Form.Group>
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description  tx-20 me-2">Radio Buttons</span>
											<input type="radio" name="form-switch-radio" className="form-switch-input" defaultChecked />
											<span className="form-switch-indicator form-switch-indicator-xl"></span>
										</label>
									</Form.Group>
								</Col>
								<Col xl={4} className="mt-4 mt-xl-0">
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description me-2">Radio Buttons</span>
											<input type="radio" name="form-switch-radio1" className="form-switch-input" />
											<span className="form-switch-indicator custom-square"></span>
										</label>
									</Form.Group>
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description tx-17 me-2">Radio Buttons</span>
											<input type="radio" name="form-switch-radio1" className="form-switch-input" />
											<span className="form-switch-indicator form-switch-indicator-lg custom-square"></span>
										</label>
									</Form.Group>
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description tx-20 me-2">Radio Buttons</span>
											<input type="radio" name="form-switch-radio1" className="form-switch-input" defaultChecked />
											<span className="form-switch-indicator form-switch-indicator-xl custom-square"></span>
										</label>
									</Form.Group>
								</Col>
								<Col xl={4} className="mt-4 mt-xl-0">
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description me-2">Radio Buttons</span>
											<input type="radio" name="form-switch-radio2" className="form-switch-input" defaultChecked />
											<span className="form-switch-indicator custom-radius"></span>
										</label>
									</Form.Group>
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description tx-17 me-2">Radio Buttons</span>
											<input type="radio" name="form-switch-radio2" className="form-switch-input" />
											<span className="form-switch-indicator form-switch-indicator-lg custom-radius"></span>
										</label>
									</Form.Group>
									<Form.Group>
										<label className="form-switch">
											<span className="form-switch-description tx-20 me-2">Radio Buttons</span>
											<input type="radio" name="form-switch-radio2" className="form-switch-input" />
											<span className="form-switch-indicator form-switch-indicator-xl custom-radius"></span>
										</label>
									</Form.Group>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed --> */}
			{/* <!--Row--> */}
			<Row>
				<Col xl={12} md={12}>
					<Card>
						<Card.Header>
							<Card.Title as='h3' className="">Form Elements With Sizes</Card.Title>
						</Card.Header>
						<Card.Body>
							<Row className="p-0 m-0">
								<Col xl={12} className="p-0">
									<Form.Label className=" mb-2 p-0">Form-control small sizes</Form.Label>
								</Col>
								<Col xl={2}>
									<Form.Group className="mb-2">
										<button className="btn btn-sm btn-primary btn-block">Small</button>
									</Form.Group>
								</Col>
								<Col xl={2}>
									<Form.Group className="mb-2">
										<input className="form-control form-control-sm" placeholder="from-control-sm" type="text" />
									</Form.Group>
								</Col>
								<Col xl={2} className="mb-2">
									<Form.Group className=" select2-sm">

										<Select classNamePrefix="Select-sm" options={formData} placeholder='One' />
									</Form.Group>
								</Col>
								<Col xl={2} className="ps-1 pe-1 mb-2">
									<div className="custom-control form-radio mb-0 mt-1 p-0">
										<label className="custom-control form-radio custom-control">
											<input type="radio" className="custom-control-input" name="example-radios1" value="option1" defaultChecked />
											<span className="custom-control-label custom-control-label  tx-17">Radio example</span>
										</label>
									</div>
								</Col>
								<Col xl={2} className="ps-1 pe-1 mb-2">
									<label className="custom-control form-checkbox">
										<input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" defaultChecked />
										<span className="custom-control-label">checkbox example</span>
									</label>
								</Col>
								<Col xl={2} className="ps-1 pe-1 mb-2">
									<label className="form-switch form-switch mb-0  p-0">
										<input type="checkbox" name="form-switch-radio" className="form-switch-input" />
										<span className="form-switch-indicator"></span>
										<span className="form-switch-description">Toggle example</span>
									</label>
								</Col>
							</Row>
							<Row className="p-0 m-0">
								<Col xl={12} className="p-0 mb-2">
									<Form.Label className=" mb-2 p-0">Form-control Medium sizes</Form.Label>
								</Col>
								<Col xl={2} className="mb-2">
									<Form.Group>
										<button className="btn btn-primary btn-block">Medium</button>
									</Form.Group>
								</Col>
								<Col xl={2} className="mb-2">
									<Form.Group>
										<input className="form-control" placeholder="from-control" type="text" />
									</Form.Group>
								</Col>
								<Col xl={2} className="mb-2">
									<Form.Group>

										<Select classNamePrefix="Select-sm" options={formData} placeholder='One' />
									</Form.Group>
								</Col>
								<Col xl={2} className="ps-1 pe-1 mb-2">
									<Form.Group>
										<div className="custom-control form-radio-md mb-0 mt-1  p-0">
											<label className="custom-control form-radio custom-control-md">
												<input type="radio" className="custom-control-input" name="example-radios1" value="option1" defaultChecked />
												<span className="custom-control-label custom-control-label-md  tx-17">Radio example</span>
											</label>
										</div>
									</Form.Group>
								</Col>
								<Col xl={2} className="ps-1 pe-1 mb-2">
									<Form.Group>
										<label className="custom-control form-checkbox custom-control-md">
											<input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" defaultChecked />
											<span className="custom-control-label custom-control-label-md  tx-17">checkbox example</span>
										</label>
									</Form.Group>
								</Col>
								<Col xl={2} className="ps-1 pe-1 mb-2">
									<Form.Group>
										<label className="form-switch form-switch mb-0  p-0">
											<input type="checkbox" name="form-switch-radio" className="form-switch-input" />
											<span className="form-switch-indicator form-switch-indicator-lg"></span>
											<span className="form-switch-description">Toggle example</span>
										</label>
									</Form.Group>
								</Col>
							</Row>
							<div className="row p-0 m-0">
								<Col xl={12} className=" p-0 mb-2">
									<Form.Label className=" mb-2 p-0">Form-control Large sizes</Form.Label>
								</Col>
								<Col xl={2} className="mb-2">
									<Form.Group>
										<button className="btn btn-lg btn-primary btn-block">Large</button>
									</Form.Group>
								</Col>
								<Col xl={2} className="mb-2">
									<Form.Group>
										<input className="form-control form-control-lg" placeholder="from-control-lg" type="text" />
									</Form.Group>
								</Col>
								<Col xl={2} className="mb-2">
									<Form.Group className=" select2-lg">

										<Select classNamePrefix="Select-sm" options={formData} placeholder='One' />
									</Form.Group>
								</Col>
								<Col xl={2} className="ps-1 pe-1 mb-2">
									<Form.Group>
										<div className="custom-control form-radio-lg mb-0 mt-1  p-0">
											<label className="custom-control form-radio custom-control-lg">
												<input type="radio" className="custom-control-input" name="example-radios1" value="option1" defaultChecked />
												<span className="custom-control-label custom-control-label-lg  tx-17">Radio example</span>
											</label>
										</div>
									</Form.Group>
								</Col>
								<Col xl={2} className="ps-1 pe-1 mb-2">
									<Form.Group>
										<label className="custom-control form-checkbox custom-control-lg">
											<input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" defaultChecked />
											<span className="custom-control-label custom-control-label-lg  tx-20">checkbox example</span>
										</label>
									</Form.Group>
								</Col>
								<Col xl={2} className="ps-1 pe-1 mb-2">
									<Form.Group>
										<label className="form-switch form-switch mb-0  p-0">
											<input type="checkbox" name="form-switch-radio" className="form-switch-input" />
											<span className="form-switch-indicator form-switch-indicator-xl"></span>
											<span className="form-switch-description">Toggle example</span>
										</label>
									</Form.Group>
								</Col>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- End Row --> */}
			{/* <!-- Container closed --> */}
		</div>
	)
};

FormSize.propTypes = {};

FormSize.defaultProps = {};

export default FormSize;
