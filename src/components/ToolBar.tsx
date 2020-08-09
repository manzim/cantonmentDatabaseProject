import React from 'react';

export function ToolBar(props: { styles: any }) {
    return (
        <>
            <nav className="bp3-navbar bp3-dark" style={{position: "fixed"}}>
                <div > 
                    <div className="bp3-navbar-group bp3-align-left">
                        <div className="bp3-navbar-heading">logo to be placed here</div>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <button className="bp3-button bp3-minimal bp3-icon-person">Officer</button>
                        <button className="bp3-button bp3-minimal bp3-icon-person">JCO</button>
                        <button className="bp3-button bp3-minimal bp3-icon-person">OR</button>
                        <button className="bp3-button bp3-minimal bp3-icon-person">CIVIL</button>
                        <span className="bp3-navbar-divider"></span>
                        {/* <button className="bp3-button bp3-minimal bp3-icon-user"></button> */}
                        <button className="bp3-button bp3-minimal bp3-icon-manual">Biodata Form</button>
                        <button className="bp3-button bp3-minimal bp3-icon-log-out">Sign Out</button>
                    </div>
                </div>
            </nav>
        </>
    )
}