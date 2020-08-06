import React, { useState } from 'react';
import { Divider, TextArea, Button } from '@blueprintjs/core';

export function BiodataForm() {

    const [name, setName] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <>
            <div className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                <h1 className="mt0 center tc">Biodaa Form</h1>
                <Divider />
                <div className="container cf bp3-card">
                    <form className="pa2" onSubmit={(e: any) => { e.preventDefault(); }}>
                        <div className="flex flex-column w-80-ns w-80">
                            <div className="dt flex">
                                <div className="fl w-40 w-40-ns pa2 dtc dtc-ns v-mid-ns">
                                    <label >BA Number</label>
                                </div>
                                <div className="fl w-60 w-60-ns pa2 dtc dtc-ns v-mid-ns">
                                    <input
                                        className="pl3 br3 pa2  w-100-ns"
                                        type="text"
                                        placeholder="BA Number"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="dt flex">
                                <div className="fl w-40 w-40-ns pa2 dtc dtc-ns v-mid-ns">
                                    <label >Name</label>
                                </div>
                                <div className="fl w-60 w-60-ns pa2 dtc dtc-ns v-mid-ns">
                                    <input
                                        className="pl3 br3 pa2  w-100-ns"
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="dt flex">
                                <div className="fl w-40 w-40-ns pa2 dtc dtc-ns v-mid-ns">
                                    <label >Rank</label>
                                </div>
                                <div className="fl w-60 w-60-ns pa2 dtc dtc-ns v-mid-ns">
                                    <input
                                        className="pl3 br3 pa2  w-100-ns"
                                        type="text"
                                        placeholder="Rank"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="dt flex">
                                <div className="fl w-40 w-40-ns pa2 dtc dtc-ns v-mid-ns">
                                    <label >Father's Name</label>
                                </div>
                                <div className="fl w-60 w-60-ns pa2 dtc dtc-ns v-mid-ns">
                                    <input
                                        className="pl3 br3 pa2  w-100-ns"
                                        type="text"
                                        placeholder="father's name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="dt flex">
                                <div className="fl w-40 w-40-ns pa2 dtc dtc-ns v-mid-ns">
                                    <label >mother's name</label>
                                </div>
                                <div className="fl w-60 w-60-ns pa2 dtc dtc-ns v-mid-ns">
                                    <input
                                        className="pl3 br3 pa2  w-100-ns"
                                        type="text"
                                        placeholder="mother's name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="dt flex">
                                <div className="fl w-40 w-40-ns pa2 dtc dtc-ns v-mid-ns">
                                    <label >Present Address</label>
                                </div>
                                <div className="fl w-60 w-60-ns pa2 dtc dtc-ns v-mid-ns">
                                    <TextArea
                                        className="mt2 w-100-ns w-90  center"
                                        title="Any special notes for doctors?"
                                        growVertically={true}
                                    // onChange={()=> ()}
                                    // value={}
                                    />
                                </div>
                            </div>
                            <div className="dt flex">
                                <div className="fl w-40 w-40-ns pa2 dtc dtc-ns v-mid-ns">
                                    <label >Permanent Address</label>
                                </div>
                                <div className="fl w-60 w-60-ns pa2 dtc dtc-ns v-mid-ns">
                                    <TextArea
                                        className="mt2 w-100-ns w-90  center"
                                        title="Any special notes for doctors?"
                                        growVertically={true}
                                    // onChange={()=> ()}
                                    // value={}
                                    />
                                </div>
                            </div>
                            <div className="dt flex">
                                <div className="fl w-40 w-40-ns pa2 dtc dtc-ns v-mid-ns">
                                    <label >Mobile Number</label>
                                </div>
                                <div className="fl w-60 w-60-ns pa2 dtc dtc-ns v-mid-ns">
                                    <input
                                        className="pl3 br3 pa2  w-100-ns"
                                        type="text"
                                        placeholder="mobile number"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="dt flex">
                                <div className="fl w-40 w-40-ns pa2 dtc dtc-ns v-mid-ns">
                                    <label >email</label>
                                </div>
                                <div className="fl w-60 w-60-ns pa2 dtc dtc-ns v-mid-ns">
                                    <input
                                        className="pl3 br3 pa2  w-100-ns w-100-ns"
                                        type="text"
                                        placeholder="email"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="dt flex center">
                                <div className="center w-80 w-100-ns pa2 dtc dtc-ns v-mid-ns">
                                    <label className="bp3-file-input mt3 modifier center w-100-ns w-90">
                                        <input
                                            type="file"
                                            //multiple
                                            className="center w-100-ns w-90"
                                        />
                                        <span className="bp3-file-upload-input">Choose image...</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <Button
                            className="center w-80 w-60-ns f4 f4-ns no-underline bg-lightest-blue black 
                                    bg-animate inline-flex items-center ba border-box b mt1 "
                            text={'Submit!'}
                            style={{
                                //width: "35%",
                                color: "white",
                                borderRadius: "8px",
                                fontSize: "1.25rem",
                                fontWeight: 700,
                                //position: "sticky"
                            }}
                            loading={loading}
                            // fill={true}
                            disabled={true}
                            large={true}
                            type="submit"
                            intent={"success"}
                            onClick={(e: any) => {
                                e.preventDefault();
                                setLoading(true);
                            }}
                        />
                    </form>
                </div>
            </div>
        </>
    )
}