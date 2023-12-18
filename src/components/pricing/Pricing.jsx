import React from 'react';


const Money = () => {

    return (

        <div className="container mt-20">
            <div className="header">
                <div className="head-list">
                    <h4 style={{ color: "blueviolet", fontFamily: "sans-serif", fontWeight: "lighter" }}>PRICING</h4>
                    <h1 className="list" style={{ fontFfamily: "sans-serif", letterSpacing: "0.1cm", color: "rgb(186, 195, 217)", fontSize: "xx-large" }}>
                        Simple pricing</h1>
                    <h3 className="list-1" style={{ color: "rgb(148, 151, 158)", fontFamily: "sans-serif", fontWeight: "lighter" }}>Upgrade for
                        extra features and collaboration with your team.
                    </h3>
                </div>
            </div>
            <div className="price-details">
                <div className="box">
                    <div className="logo">
                        <div className="circle"><svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: "middle" }}><path d="m56 100v68l72 68v-68h72l-144-136h144v68z" opacity=".2" /><path d="m128.00171 244a7.9983 7.9983 0 0 1 -5.49463-2.18408l-72-68a7.99871 7.99871 0 0 1 -2.50708-5.81592v-68a7.99993 7.99993 0 0 1 8-8h51.87817l-57.37109-54.18408a7.99982 7.99982 0 0 1 5.49292-13.81592h144a7.99993 7.99993 0 0 1 8 8v68a7.99993 7.99993 0 0 1 -8 8h-51.87817l57.37109 54.18408a7.99982 7.99982 0 0 1 -5.49292 13.81592h-64v60a7.9996 7.9996 0 0 1 -7.99829 8zm-64.00171-79.44824 56 52.88867v-49.44043a7.99993 7.99993 0 0 1 8-8h51.87817l-55.05883-52h-60.81934zm67.18066-72.55176h60.81934v-52h-115.87817z" /></svg></div>
                        <div>
                            <p style={{ padding: "20px 0 0 25px", fontFamily: "sans-serif ", color: "rgb(148, 151, 158)" }}>BASIC
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <h1 className='list'>$0<span>/free</span></h1>
                        </div>
                        <div>
                            <h1 className='list'>What's included:</h1>
                        </div>
                        <div>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited tasks</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited projects</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited messages</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited activity log</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;File storage (100MB )</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Custom fields</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;List view projects</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Board view projects</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Calendar view</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Assignee and due dates</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited file viewers</h3>
                            <button className="start">Start for free</button>
                        </div>

                    </div>

                </div>
                <div className="box">
                    <div className="logo">
                        <div className="circle2"><svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: "middle" }}><path d="m56 100v68l72 68v-68h72l-144-136h144v68z" opacity=".2" /><path d="m128.00171 244a7.9983 7.9983 0 0 1 -5.49463-2.18408l-72-68a7.99871 7.99871 0 0 1 -2.50708-5.81592v-68a7.99993 7.99993 0 0 1 8-8h51.87817l-57.37109-54.18408a7.99982 7.99982 0 0 1 5.49292-13.81592h144a7.99993 7.99993 0 0 1 8 8v68a7.99993 7.99993 0 0 1 -8 8h-51.87817l57.37109 54.18408a7.99982 7.99982 0 0 1 -5.49292 13.81592h-64v60a7.9996 7.9996 0 0 1 -7.99829 8zm-64.00171-79.44824 56 52.88867v-49.44043a7.99993 7.99993 0 0 1 8-8h51.87817l-55.05883-52h-60.81934zm67.18066-72.55176h60.81934v-52h-115.87817z" /></svg></div>
                        <div>
                            <p style={{ padding: "20px 0 0 25px", fontFamily: "sans-serif", color: "rgb(148, 151, 158)" }}>PREMIUM
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <h1 className='list'>$9<span>/per user</span></h1>
                        </div>
                        <div>
                            <h1 className='list'>What's included:</h1>
                        </div>
                        <div>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Timeline</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Workflow Builder</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited Dashboards</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited projects</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Advanced search</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Custom fields</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Forms</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Rules</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Task Templates</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Private teams & projects</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited free quests</h3>
                            <button className="start2">Get Premium</button>
                        </div>

                    </div>

                </div>
                <div className="box">
                    <div className="logo">
                        <div className="circle3"><svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: "middle" }}><path d="m56 100v68l72 68v-68h72l-144-136h144v68z" opacity=".2" /><path d="m128.00171 244a7.9983 7.9983 0 0 1 -5.49463-2.18408l-72-68a7.99871 7.99871 0 0 1 -2.50708-5.81592v-68a7.99993 7.99993 0 0 1 8-8h51.87817l-57.37109-54.18408a7.99982 7.99982 0 0 1 5.49292-13.81592h144a7.99993 7.99993 0 0 1 8 8v68a7.99993 7.99993 0 0 1 -8 8h-51.87817l57.37109 54.18408a7.99982 7.99982 0 0 1 -5.49292 13.81592h-64v60a7.9996 7.9996 0 0 1 -7.99829 8zm-64.00171-79.44824 56 52.88867v-49.44043a7.99993 7.99993 0 0 1 8-8h51.87817l-55.05883-52h-60.81934zm67.18066-72.55176h60.81934v-52h-115.87817z" /></svg></div>
                        <div>
                            <p style={{ padding: "20px 0 0 25px", fontFamily: "sans-serif", color: "rgb(148, 151, 158)" }}>
                                BUSINESS</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <h1 className='list'>$19<span>/unlimited</span></h1>
                        </div>
                        <div>
                            <h1 className='list'>What's included:</h1>
                        </div>
                        <div>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Portfolios</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Goals</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Workload</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Custom rules builder</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Forms branching</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Approvals</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Proofing</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Lock custom fields</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Advanced reporting</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Time Tracking</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: "middle" }}
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Advanced integrations</h3>
                            <button className="start3">Get Business</button>
                        </div>

                    </div>

                </div>
            </div>
            <div className="container">
                <div className="head-list">
                    <h1 className='list' style={{ fontFamily: "sans-serif", letterSpacing: "0.1cm", color: "rgb(186, 195, 217)", fontSize: "xx-large" }}>
                        Compare plans & features</h1>
                    <h3 className='list-1' style={{ color: " rgb(148, 151, 158)", fontFamily: "sans-serif", fontWeight: "lighter" }}>
                        Overview of what’s included in our different plans.
                    </h3>
                </div>
                <div>

                    <table className='plan-benefit-table'>
                        <tr>
                            <td className='benefit column-heading'></td>
                            <td className='plan column-heading'>
                                BASIC <br />$0 / free <br /><br />
                                <button className="start">Start for Free</button>
                            </td>
                            <td className='plan highlight column-heading'>
                                PREMIMUM <br />$9/ per user <br /><br />
                                <button className="start2">Get Premium</button>
                            </td>
                            <td className='plan column-heading'>
                                BASIC <br />$19/ unlimited <br /><br />
                                <button className="start3">Get Business</button>
                            </td>
                        </tr>
                    </table>
                    <div className="frame_kit">
                        <div className="frame_kit1">
                            <table className='plan-benefit-table sticky-headers'>
                                <tr>
                                    <td className='benefit category-title' style={{ color: " rgb(186, 195, 217)" }}>USAGE</td>
                                    <td className='plan'></td>
                                    <td className='plan highlight'></td>
                                    <td className='plan'></td>
                                </tr>
                            </table>



                            <table className='plan-benefit-table'>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Unlimited task</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Unlimited project</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Unlimited message</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Activity Log</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                            </table>
                            <table className='plan-benefit-table sticky-headers'>
                                <tr>
                                    <td className='benefit category-title' style={{ color: " rgb(186, 195, 217)" }}>FEATURES</td>
                                    <td className='plan'></td>
                                    <td className='plan highlight'></td>
                                    <td className='plan'></td>
                                </tr>
                            </table>
                            <table className='plan-benefit-table'>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Projects & cycles</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Integrations</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Webhooks</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Import & export</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Private Items</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Guest accounts</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>SLAs</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                            </table>
                            <table className='plan-benefit-table sticky-headers'>
                                <tr>
                                    <td className='benefit category-title' style={{ color: "rgb(186, 195, 217)" }}>ANALYTICS</td>
                                    <td className='plan'></td>
                                    <td className='plan highlight'></td>
                                    <td className='plan'></td>
                                </tr>
                            </table>
                            <table className='plan-benefit-table'>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Progress report</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Insights</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Data warehouse</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                            </table>
                            <table className='plan-benefit-table sticky-headers'>
                                <tr>
                                    <td className='benefit category-title' style={{ color: "rgb(186, 195, 217)" }}>SECURITY</td>
                                    <td className='plan'></td>
                                    <td className='plan highlight'></td>
                                    <td className='plan'></td>
                                </tr>
                            </table>
                            <table className='plan-benefit-table'>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>SSO</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Admin tools</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Advance history</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Authentication</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Audit log</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>App management</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Domain claiming</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                            </table>

                            <table className='plan-benefit-table sticky-headers'>
                                <tr>
                                    <td className='benefit category-title' style={{ color: "rgb(186, 195, 217)" }}>SUPPORT</td>
                                    <td className='plan'></td>
                                    <td className='plan highlight'></td>
                                    <td className='plan'></td>
                                </tr>
                            </table>
                            <table className='plan-benefit-table'>
                                <tr className='table-row'>
                                    <td style={{ color: "rgb(148,151,158)" }} className='benefit'>Priority support</td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(148, 151, 158)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan highlight'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="green">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                    <td className='plan'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(87, 42, 165)">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default Money;