import React from 'react';
import { useHistory } from 'react-router-dom';

export function AboutUs() {
    let history = useHistory();
    return (
        <>
            <div className="vh-100 dt w-100">
                <div className="dtc v-mid tc ph3 ph4-l">
                    <div className="dt-ns dt--fixed-ns w-90-ns w-90 center">
                        <div className="dtc-ns tc pv4 bg-red">
                            <div className="bp3-card pa2-ns">
                                <p className="f2-ns f2 black b pointer" onClick={ () => history.push('/officer')}>Officer</p>
                            </div>
                        </div>
                        <div className="dtc-ns tc pv4 bg-blue">
                            <div className="bp3-card pa2-ns">
                                <p className="f2-ns f2 black b pointer" onClick={ () => history.push('/JCO')}>JCO</p>
                            </div>
                        </div>
                        <div className="dtc-ns tc pv4 bg-green">
                            <div className="bp3-card pa2-ns">
                                <p className="f2-ns f2 black b pointer" onClick={ () => history.push('/OS')}>OS</p>
                            </div>
                        </div>
                        <div className="dtc-ns tc pv4 bg-green">
                            <div className="bp3-card pa2-ns">
                                <p className="f2-ns f2 black b pointer" onClick={ () => history.push('/CIVIL')}>CIVIL</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-60-ns w-90 pa3-ns pa3 ph3 ph4-l center">
                        <p className="f5-ns f5 black tc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </>
    )
}