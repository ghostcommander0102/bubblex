import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    return (
        <div className={"header " + (showMobileSidebar ? "mobileShow" : "")}>
            <div className="header_logo">
                <img src="/image/header_logo.png" alt="" />
            </div>
            <div class="modal-backdrop mobileSidebarBack"></div>
            <div className="mobileSidebar">
                <div className="header_group">
                    <div className="mobileHeader">
                        <img src="/image/header_logo.png" alt="" />
                        <img src="/image/close1.png" alt="" onClick={() => setShowMobileSidebar(!showMobileSidebar)}/>
                    </div>
                    <div className="header_menu">
                        <div className="menuGroup">
                            <Link to="/" className={props.selected == "Home" ? "selected" : ""}>Home</Link>
                            <img src="/image/down1.png" alt="" />
                        </div>
                        <div className="menuGroup">
                            <Link to="/Marketplace" className={props.selected == "Marketplace" ? "selected" : ""}
                            >Marketplace</Link>
                            <img src="/image/down1.png" alt="" />
                        </div>
                        <div className="menuGroup">
                            <Link to="Presale" className={props.selected == "Presale" ? "selected" : ""}>Presale</Link>
                            <img src="/image/down1.png" alt="" />
                        </div>
                    </div>
                    <div className="header_buttonGroup">
                        <div className="connectWallet">Connect wallet</div>
                        <div className="connectSlamWallet">Connect SlamWallet</div>
                    </div>
                </div>
            </div>
            <img src="image/menu.png" alt="" onClick={() => setShowMobileSidebar(true)}/>
        </div>
    )
}