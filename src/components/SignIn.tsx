import React from 'react';
import { FormGroup, InputGroup, Button } from '@blueprintjs/core';

export function SignIn() {
    return (
        <>
            <div className="container center flex justify-center">
                <div className="bp3-card">
                    <FormGroup
                        inline={true}
                        intent="success"
                        labelInfo="required"
                    >
                        <label >BA Number</label>
                        <InputGroup fill={true} placeholder="Enter your BA Number" />
                        <label >Password</label>
                        <InputGroup fill={true} placeholder="password" type="password" />
                    </FormGroup>
                    <Button
                        //disabled={isEqual(loading, false) && isEqual(option, true) ? false : true}
                        className="pointer fl fl-ns w-80 w-25-ns f4 f4-ns no-underline bg-lightest-blue black  
                                bg-animate hover-bg-blue hover-white inline-flex items-center pa3 br3 ba border-box b"
                        large={true}
                        type="submit"
                        intent="primary"
                        text="Submit"
                        style={{

                            // backgroundColor: "red",
                            color: "white",
                            // height: "55px",
                            borderRadius: "8px",
                            fontSize: "1.25rem",
                            fontWeight: 700,

                        }}
                    />
                </div>
            </div>
        </>
    )
}