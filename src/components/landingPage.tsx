import React from 'react';
import { Button } from '@blueprintjs/core'
import { useHistory } from "react-router-dom";

export function ProjectLandingPage() {

    let history = useHistory();
    return (
        <>
            <div className="container">
                <div
                    className="cover bg-left bg-center-l"
                    style={{ backgroundImage: `url(https://wallpaperaccess.com/full/5695.jpg)` }}
                >
                    <div className="vh-100 dt w-100 bg-black-70">
                        <div className="dtc v-mid tc white ph3 ph4-l">
                            <div className="white ph3 ph4-l">
                                <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Welcome to BANBAT-7 Database  </h1>
                                <h2 className="fw1 f3 white-80 mt3 mb4">Welcome to join our family</h2>
                                {/* <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Sign in</a> */}
                                <Button intent="success" large={true} onClick={() => history.push('/signin')} >Sign In</Button>
                                <span className="dib v-mid ph3 white-70 mb3">or</span>
                                {/* <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="/">Sign Up</a> */}
                                <Button intent="primary" large={true} onClick={() => history.push('/signup')} >Sign Up</Button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}