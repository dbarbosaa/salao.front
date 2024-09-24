import React from 'react';
import { Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './SimpleLine.module.scss';

const SimpleLine = () => (
	<div className={styles.SimpleLine}>
		<Pageheader titles="Icons" active="Simpleline Icons" />
		{/* <!-- container --> */}

		{/* <!-- row --> */}
		<Row>
			<Col md={12}>
				<Card className="custom-card">
					<Card.Body>
						<Row className="row-sm">
							<Col sm={12} lg={12} className="mb-2">
								<h6 className="main-content-label">Simpleline Icons</h6>
								<p className="mb-2">Simply beautiful open source icons. For more info <a href="https://simplelineicons.github.io/" target="_blank" className="text-dark">click here</a>.</p>
								<p><code>&lt;i className="si si-ICON_NAME"&gt;&lt;/i&gt;</code></p>
							</Col>
							<Col sm={12} lg={12} >
								<div className="icons-list-wrap">
									<ul className="icons-list">
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-user</Tooltip>}>
												<i className="si si-user" title="si-user"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-people</Tooltip>}>
												<i className="si si-people" title="si-people"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-user-female</Tooltip>}>
												<i className="si si-user-female" title="si-user-female"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-user-follow</Tooltip>}>
												<i className="si si-user-follow" title="si-user-follow"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-user-following</Tooltip>}>
												<i className="si si-user-following" title="si-user-following"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-user-unfollow</Tooltip>}>
												<i className="si si-user-unfollow" title="si-user-unfollow"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-login</Tooltip>}>
												<i className="si si-login" title="si-login"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-logout</Tooltip>}>
												<i className="si si-logout" title="si-logout"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-emotsmile</Tooltip>}>
												<i className="si si-emotsmile" title="si-emotsmile"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-phone</Tooltip>}>
												<i className="si si-phone" title="si-phone"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-call-end</Tooltip>}>
												<i className="si si-call-end" title="si-call-end"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-call-in</Tooltip>}>
												<i className="si si-call-in" title="si-call-in"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-call-out</Tooltip>}>
												<i className="si si-call-out" title="si-call-out"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-map</Tooltip>}>
												<i className="si si-map" title="si-map"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-location-pin</Tooltip>}>
												<i className="si si-location-pin" title="si-location-pin"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-direction</Tooltip>}>
												<i className="si si-direction" title="si-direction"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-directions</Tooltip>}>
												<i className="si si-directions" title="si-directions"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-compass</Tooltip>}>
												<i className="si si-compass" title="si-compass"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-layers</Tooltip>}>
												<i className="si si-layers" title="si-layers"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-menu</Tooltip>}>
												<i className="si si-menu" title="si-menu"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-list</Tooltip>}>
												<i className="si si-list" title="si-list"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-options-vertical</Tooltip>}>
												<i className="si si-options-vertical" title="si-options-vertical"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-options</Tooltip>}>
												<i className="si si-options" title="si-options"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-arrow-down</Tooltip>}>
												<i className="si si-arrow-down" title="si-arrow-down"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-arrow-left</Tooltip>}>
												<i className="si si-arrow-left" title="si-arrow-left"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-arrow-right</Tooltip>}>
												<i className="si si-arrow-right" title="si-arrow-right"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-arrow-up</Tooltip>}>
												<i className="si si-arrow-up" title="si-arrow-up"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-arrow-up-circle</Tooltip>}>
												<i className="si si-arrow-up-circle" title="si-arrow-up-circle"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-arrow-left-circle</Tooltip>}>
												<i className="si si-arrow-left-circle" title="si-arrow-left-circle"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-arrow-right-circle</Tooltip>}>
												<i className="si si-arrow-right-circle" title="si-arrow-right-circle"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-arrow-down-circle</Tooltip>}>
												<i className="si si-arrow-down-circle" title="si-arrow-down-circle"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-check</Tooltip>}>
												<i className="si si-check" title="si-check"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-clock</Tooltip>}>
												<i className="si si-clock" title="si-clock"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-plus</Tooltip>}>
												<i className="si si-plus" title="si-plus"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-minus</Tooltip>}>
												<i className="si si-minus" title="si-minus"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-close</Tooltip>}>
												<i className="si si-close" title="si-close"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-event</Tooltip>}>
												<i className="si si-event" title="si-event"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-exclamation</Tooltip>}>
												<i className="si si-exclamation" title="si-exclamation"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-organization</Tooltip>}>
												<i className="si si-organization" title="si-organization"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-trophy</Tooltip>}>
												<i className="si si-trophy" title="si-trophy"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-screen-smartphone</Tooltip>}>
												<i className="si si-screen-smartphone" title="si-screen-smartphone"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-screen-desktop</Tooltip>}>
												<i className="si si-screen-desktop" title="si-screen-desktop"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-plane</Tooltip>}>
												<i className="si si-plane" title="si-plane"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-notebook</Tooltip>}>
												<i className="si si-notebook" title="si-notebook"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-mustache</Tooltip>}>
												<i className="si si-mustache" title="si-mustache"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-mouse</Tooltip>}>
												<i className="si si-mouse" title="si-mouse"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-magnet</Tooltip>}>
												<i className="si si-magnet" title="si-magnet"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-energy</Tooltip>}>
												<i className="si si-energy" title="si-energy"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-disc</Tooltip>}>
												<i className="si si-disc" title="si-disc"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-cursor</Tooltip>}>
												<i className="si si-cursor" title="si-cursor"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-cursor-move</Tooltip>}>
												<i className="si si-cursor-move" title="si-cursor-move"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-crop</Tooltip>}>
												<i className="si si-crop" title="si-crop"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-chemistry</Tooltip>}>
												<i className="si si-chemistry" title="si-chemistry"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-speedometer</Tooltip>}>
												<i className="si si-speedometer" title="si-speedometer"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-shield</Tooltip>}>
												<i className="si si-shield" title="si-shield"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-screen-tablet</Tooltip>}>
												<i className="si si-screen-tablet" title="si-screen-tablet"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-magic-wand</Tooltip>}>
												<i className="si si-magic-wand" title="si-magic-wand"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-hourglass</Tooltip>}>
												<i className="si si-hourglass" title="si-hourglass"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-graduation</Tooltip>}>
												<i className="si si-graduation" title="si-graduation"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-ghost</Tooltip>}>
												<i className="si si-ghost" title="si-ghost"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-game-controller</Tooltip>}>
												<i className="si si-game-controller" title="si-game-controller"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-fire</Tooltip>}>
												<i className="si si-fire" title="si-fire"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-eyeglass</Tooltip>}>
												<i className="si si-eyeglass" title="si-eyeglass"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-envelope-open</Tooltip>}>
												<i className="si si-envelope-open" title="si-envelope-open"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-envelope-letter</Tooltip>}>
												<i className="si si-envelope-letter" title="si-envelope-letter"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-bell</Tooltip>}>
												<i className="si si-bell" title="si-bell"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-badge</Tooltip>}>
												<i className="si si-badge" title="si-badge"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-anchor</Tooltip>}>
												<i className="si si-anchor" title="si-anchor"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-wallet</Tooltip>}>
												<i className="si si-wallet" title="si-wallet"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-vector</Tooltip>}>
												<i className="si si-vector" title="si-vector"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-speech</Tooltip>}>
												<i className="si si-speech" title="si-speech"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-puzzle</Tooltip>}>
												<i className="si si-puzzle" title="si-puzzle"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-printer</Tooltip>}>
												<i className="si si-printer" title="si-printer"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-present</Tooltip>}>
												<i className="si si-present" title="si-present"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-playlist</Tooltip>}>
												<i className="si si-playlist" title="si-playlist"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-pin</Tooltip>}>
												<i className="si si-pin" title="si-pin"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-picture</Tooltip>}>
												<i className="si si-picture" title="si-picture"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-handbag</Tooltip>}>
												<i className="si si-handbag" title="si-handbag"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-globe-alt</Tooltip>}>
												<i className="si si-globe-alt" title="si-globe-alt"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-globe</Tooltip>}>
												<i className="si si-globe" title="si-globe"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-folder-alt</Tooltip>}>
												<i className="si si-folder-alt" title="si-folder-alt"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-folder</Tooltip>}>
												<i className="si si-folder" title="si-folder"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-film</Tooltip>}>
												<i className="si si-film" title="si-film"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-feed</Tooltip>}>
												<i className="si si-feed" title="si-feed"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-drop</Tooltip>}>
												<i className="si si-drop" title="si-drop"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-drawer</Tooltip>}>
												<i className="si si-drawer" title="si-drawer"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-docs</Tooltip>}>
												<i className="si si-docs" title="si-docs"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-doc</Tooltip>}>
												<i className="si si-doc" title="si-doc"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-diamond</Tooltip>}>
												<i className="si si-diamond" title="si-diamond"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-cup</Tooltip>}>
												<i className="si si-cup" title="si-cup"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-calculator</Tooltip>}>
												<i className="si si-calculator" title="si-calculator"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-bubbles</Tooltip>}>
												<i className="si si-bubbles" title="si-bubbles"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-briefcase</Tooltip>}>
												<i className="si si-briefcase" title="si-briefcase"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-book-open</Tooltip>}>
												<i className="si si-book-open" title="si-book-open"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-basket-loaded</Tooltip>}>
												<i className="si si-basket-loaded" title="si-basket-loaded"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-basket</Tooltip>}>
												<i className="si si-basket" title="si-basket"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-bag</Tooltip>}>
												<i className="si si-bag" title="si-bag"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-action-undo</Tooltip>}>
												<i className="si si-action-undo" title="si-action-undo"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-action-redo</Tooltip>}>
												<i className="si si-action-redo" title="si-action-redo"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-wrench</Tooltip>}>
												<i className="si si-wrench" title="si-wrench"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-umbrella</Tooltip>}>
												<i className="si si-umbrella" title="si-umbrella"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-trash</Tooltip>}>
												<i className="si si-trash" title="si-trash"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-tag</Tooltip>}>
												<i className="si si-tag" title="si-tag"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-support</Tooltip>}>
												<i className="si si-support" title="si-support"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-frame</Tooltip>}>
												<i className="si si-frame" title="si-frame"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-size-fullscreen</Tooltip>}>
												<i className="si si-size-fullscreen" title="si-size-fullscreen"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-size-actual</Tooltip>}>
												<i className="si si-size-actual" title="si-size-actual"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-shuffle</Tooltip>}>
												<i className="si si-shuffle" title="si-shuffle"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-share-alt</Tooltip>}>
												<i className="si si-share-alt" title="si-share-alt"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-share</Tooltip>}>
												<i className="si si-share" title="si-share"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-rocket</Tooltip>}>
												<i className="si si-rocket" title="si-rocket"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-question</Tooltip>}>
												<i className="si si-question" title="si-question"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-pie-chart</Tooltip>}>
												<i className="si si-pie-chart" title="si-pie-chart"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-pencil</Tooltip>}>
												<i className="si si-pencil" title="si-pencil"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-note</Tooltip>}>
												<i className="si si-note" title="si-note"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-loop</Tooltip>}>
												<i className="si si-loop" title="si-loop"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-home</Tooltip>}>
												<i className="si si-home" title="si-home"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-grid</Tooltip>}>
												<i className="si si-grid" title="si-grid"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-graph</Tooltip>}>
												<i className="si si-graph" title="si-graph"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-microphone</Tooltip>}>
												<i className="si si-microphone" title="si-microphone"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-music-tone-alt</Tooltip>}>
												<i className="si si-music-tone-alt" title="si-music-tone-alt"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-music-tone</Tooltip>}>
												<i className="si si-music-tone" title="si-music-tone"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-earphones-alt</Tooltip>}>
												<i className="si si-earphones-alt" title="si-earphones-alt"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-earphones</Tooltip>}>
												<i className="si si-earphones" title="si-earphones"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-equalizer</Tooltip>}>
												<i className="si si-equalizer" title="si-equalizer"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-like</Tooltip>}>
												<i className="si si-like" title="si-like"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-dislike</Tooltip>}>
												<i className="si si-dislike" title="si-dislike"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-control-start</Tooltip>}>
												<i className="si si-control-start" title="si-control-start"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-control-rewind</Tooltip>}>
												<i className="si si-control-rewind" title="si-control-rewind"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-control-play</Tooltip>}>
												<i className="si si-control-play" title="si-control-play"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-control-pause</Tooltip>}>
												<i className="si si-control-pause" title="si-control-pause"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-control-forward</Tooltip>}>
												<i className="si si-control-forward" title="si-control-forward"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-control-end</Tooltip>}>
												<i className="si si-control-end" title="si-control-end"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-volume-1</Tooltip>}>
												<i className="si si-volume-1" title="si-volume-1"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-volume-2</Tooltip>}>
												<i className="si si-volume-2" title="si-volume-2"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-volume-off</Tooltip>}>
												<i className="si si-volume-off" title="si-volume-off"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-calendar</Tooltip>}>
												<i className="si si-calendar" title="si-calendar"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-bulb</Tooltip>}>
												<i className="si si-bulb" title="si-bulb"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-chart</Tooltip>}>
												<i className="si si-chart" title="si-chart"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-ban</Tooltip>}>
												<i className="si si-ban" title="si-ban"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-bubble</Tooltip>}>
												<i className="si si-bubble" title="si-bubble"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-camrecorder</Tooltip>}>
												<i className="si si-camrecorder" title="si-camrecorder"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-camera</Tooltip>}>
												<i className="si si-camera" title="si-camera"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-cloud-download</Tooltip>}>
												<i className="si si-cloud-download" title="si-cloud-download"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-cloud-upload</Tooltip>}>
												<i className="si si-cloud-upload" title="si-cloud-upload"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-envelope</Tooltip>}>
												<i className="si si-envelope" title="si-envelope"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-eye</Tooltip>}>
												<i className="si si-eye" title="si-eye"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-flag</Tooltip>}>
												<i className="si si-flag" title="si-flag"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-heart</Tooltip>}>
												<i className="si si-heart" title="si-heart"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-info</Tooltip>}>
												<i className="si si-info" title="si-info"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-key</Tooltip>}>
												<i className="si si-key" title="si-key"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-link</Tooltip>}>
												<i className="si si-link" title="si-link"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-lock</Tooltip>}>
												<i className="si si-lock" title="si-lock"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-lock-open</Tooltip>}>
												<i className="si si-lock-open" title="si-lock-open"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-magnifier</Tooltip>}>
												<i className="si si-magnifier" title="si-magnifier"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-magnifier-add</Tooltip>}>
												<i className="si si-magnifier-add" title="si-magnifier-add"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-magnifier-remove</Tooltip>}>
												<i className="si si-magnifier-remove" title="si-magnifier-remove"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-paper-clip</Tooltip>}>
												<i className="si si-paper-clip" title="si-paper-clip"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-paper-plane</Tooltip>}>
												<i className="si si-paper-plane" title="si-paper-plane"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-power</Tooltip>}>
												<i className="si si-power" title="si-power"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-refresh</Tooltip>}>
												<i className="si si-refresh" title="si-refresh"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-reload</Tooltip>}>
												<i className="si si-reload" title="si-reload"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-settings</Tooltip>}>
												<i className="si si-settings" title="si-settings"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-star</Tooltip>}>
												<i className="si si-star" title="si-star"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-symbol-female</Tooltip>}>
												<i className="si si-symbol-female" title="si-symbol-female"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-symbol-male</Tooltip>}>
												<i className="si si-symbol-male" title="si-symbol-male"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-target</Tooltip>}>
												<i className="si si-target" title="si-target"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-credit-card</Tooltip>}>
												<i className="si si-credit-card" title="si-credit-card"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-paypal</Tooltip>}>
												<i className="si si-paypal" title="si-paypal"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-tumblr</Tooltip>}>
												<i className="si si-social-tumblr" title="si-social-tumblr"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-twitter</Tooltip>}>
												<i className="si si-social-twitter" title="si-social-twitter"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-facebook</Tooltip>}>
												<i className="si si-social-facebook" title="si-social-facebook"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-instagram</Tooltip>}>
												<i className="si si-social-instagram" title="si-social-instagram"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-linkedin</Tooltip>}>
												<i className="si si-social-linkedin" title="si-social-linkedin"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-pinterest</Tooltip>}>
												<i className="si si-social-pinterest" title="si-social-pinterest"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-github</Tooltip>}>
												<i className="si si-social-github" title="si-social-github"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-google</Tooltip>}>
												<i className="si si-social-google" title="si-social-google"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-reddit</Tooltip>}>
												<i className="si si-social-reddit" title="si-social-reddit"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-skype</Tooltip>}>
												<i className="si si-social-skype" title="si-social-skype"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-dribbble</Tooltip>}>
												<i className="si si-social-dribbble" title="si-social-dribbble"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-behance</Tooltip>}>
												<i className="si si-social-behance" title="si-social-behance"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-foursqare</Tooltip>}>
												<i className="si si-social-foursqare" title="si-social-foursqare"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-soundcloud</Tooltip>}>
												<i className="si si-social-soundcloud" title="si-social-soundcloud"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-spotify</Tooltip>}>
												<i className="si si-social-spotify" title="si-social-spotify"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-stumbleupon</Tooltip>}>
												<i className="si si-social-stumbleupon" title="si-social-stumbleupon"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-youtube</Tooltip>}>
												<i className="si si-social-youtube" title="si-social-youtube"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-dropbox</Tooltip>}>
												<i className="si si-social-dropbox" title="si-social-dropbox"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-vkontakte</Tooltip>}>
												<i className="si si-social-vkontakte" title="si-social-vkontakte"></i></OverlayTrigger></li>
										<li className="icons-list-item">
											<OverlayTrigger placement="top" overlay={<Tooltip>
												si-social-steam</Tooltip>}>
												<i className="si si-social-steam" title="si-social-steam"></i></OverlayTrigger></li>
										<li></li>
										<li></li>
										<li></li>
										<li></li>
										<li></li>
										<li></li>
									</ul>
								</div>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		{/* <!-- / row --> */}
		{/* <!-- Container closed --> */}
	</div>
);

SimpleLine.propTypes = {};

SimpleLine.defaultProps = {};

export default SimpleLine;
