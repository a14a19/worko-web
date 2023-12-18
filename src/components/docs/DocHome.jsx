import React from 'react'
import { RiRocketLine } from "react-icons/ri";
import { MdLibraryBooks } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import { RiBox3Fill } from "react-icons/ri";

function DocHome() {
    return (
        <div style={{ padding: "revert", margin: "revert", fontSize: "revert", listStyle: "revert" }}>
            <h5 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Documentation</h5>

            <h1 style={{ padding: "revert", margin: "revert", fontSize: "revert",}} >Welcome to Worko Docs</h1>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Welcome to the Worko Overview. In this section, you'll get a high-level understanding of Worko's key features <br />and how it can help you manage tasks and projects more efficiently.
            </p>

            <div>
                <div style={{ display: "flex", width: "100%", gap: "10px" }}>
                    <button className='flex justify-center items-center' style={{ height: "40px", width: "300px", }}><span style={{ padding: "15px", fontSize: "18px", marginRight: "50px" }}><RiRocketLine /></span>  Getting Started</button>
                    <button className='flex justify-center items-center' style={{ height: "40px", width: "300px" }}><span style={{ padding: "15px", fontSize: "18px", marginRight: "50px" }}><MdLibraryBooks /></span>Integrations</button>
                </div>
            </div>

            <div style={{ marginTop: "10px" }}>
                <div style={{ display: "flex", width: "100%", gap: "10px", marginTop: "10px" }}>
                    <button className='flex justify-center items-center' style={{ height: "40px", width: "300px", }}><span style={{ padding: "0px", fontSize: "18px", marginRight: "73px" }}><FaRegPlayCircle /></span>Collabration</button>
                    <button className='flex justify-center items-center' style={{ height: "40px", width: "300px" }}><span style={{ padding: "48px", fontSize: "18px", marginRight: "6px" }}><RiBox3Fill /></span> Advanced Features</button>
                </div>
            </div>


            <br />

            <br />


            <h1 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>What is Worko?</h1>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Worko is a powerful task management and project collaboration platform designed to simplify your workflow. Whether you're <br /> an individual managing personal tasks or part of a team working on complex projects, Worko is here to streamline your work.</p>

            <br />

            <h1 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Task Management</h1>

            <ul style={{ listStyle: "revert", padding: "revert", margin: "revert" }}>
                <li>Create tasks with due dates and descriptions.</li>
                <li>Organize tasks into projects.</li>
                <li>Prioritize tasks based on urgency and importance.</li>
            </ul>


            <br />

            <h1 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Team Collaboration</h1>

            <ul>
                <li>Invite team members to collaborate on tasks and projects.</li>
                <li>Assign tasks to team members.</li>
                <li>Leave comments and have discussions within tasks.</li>
            </ul>

            <br />

            <br />


            <hr style={{ border: "1px solid grey" }} />


            <div>
                <footer>

                    <br />
                    © Copyright 2023. All rights reserved.

                </footer>
            </div>



        </div>
    )
}

export default DocHome