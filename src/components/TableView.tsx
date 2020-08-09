import React from 'react';

export function TableView() {
    const array = [0,1,2,3]
    return (
        <>
            <div className="vh-100 dt w-100 ">
                <div className="dtc w-80-ns w-100 pa3-ns pa3 ">
                    <ul className="list center pl0 ma0 mt5-ns mt5">
                        <li className="b--black-70 ba br1 bg-white ph0-l pointer shadow-4">
                            <div className="w-100 cf">
                                <div className="fl w-third-ns w-100 pa1 black">
                                    name
                                </div>
                                <div className="fl w-third-ns w-100 pa1">
                                    BA Number
                                </div>
                                <div className="fl w-third-ns w-100 pa1">
                                    Rank
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}