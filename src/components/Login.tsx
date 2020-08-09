import React, { useState } from 'react';
import { InputGroup, Divider, Button } from '@blueprintjs/core';

export function Login() {

    const [loading, setLoading] = useState<boolean>(false)

    return (
        <>
            <div className="container">
                <div className="cover bg-left bg-center-l">
                    <div className="vh-100 dt w-100 bg-black-70">
                        <div className="dtc v-mid tc  ph3 ph4-l">
                            <div className="bp3-card center bg-white-30 w-500-ns w-50 vh-50-ns vh-50 pa3-ns pa2" >
                                <h3 className="f3-ns f3 tc blue"> Sign In </h3>
                                <Divider />
                                <div className="dt w-100-ns w-100 pa3-ns pa2">
                                    <div className="dtc w-30-ns v-mid black">BA Number </div>
                                    <div className="dtc w-70-ns  v-mid">
                                        <InputGroup
                                            id={"BA Number"}
                                            placeholder="BA Number"
                                            fill={false}
                                            className="w-70-ns w-50"
                                        />
                                    </div>
                                </div>
                                <div className="dt w-100-ns w-100 pa3-ns pa2">
                                    <div className="dtc w-30-ns v-mid black">password </div>
                                    <div className="dtc w-70-ns  v-mid">
                                        <InputGroup
                                            id={"password"}
                                            placeholder="password"
                                            fill={false}
                                            type="password"
                                            className="w-70-ns w-50"
                                        />
                                    </div>
                                </div>
                                <Button
                                    text="sign in"
                                    intent="primary"
                                    className="center tc w-40-ns w-40 pa3-ns pa3 br4"
                                    loading={loading}
                                    onClick={ (e:any) => setLoading(true)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}