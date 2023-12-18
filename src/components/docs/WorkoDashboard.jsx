import React from 'react'

function WorkoDashboard() {
    return (
        <div style={{ padding: "revert", margin: "revert", fontSize: "revert",  }}>
            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Getting Started</p>
            <h1 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Worko  Dashboard</h1>
            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>The Worko dashboard is your central hub for managing tasks, teams, and projects. In this section, we'll provide an overview of the Worko dashboard and explain how to perform key actions.</p>


            <hr></hr>
            <br />

            <h2 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Dashboard Overview</h2>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>When you log in to Worko Management, you'll land on your dashboard, which is divided into several sections:</p>
            <ul style={{ listStyle: "revert", padding: "revert", margin: "revert" }}>
                <li>Task List: This section displays your tasks, including their names, due dates, and priority levels.</li>

                <li>Teams: Here, you can see your team members and access team-specific features.</li>

                <li>Analytics: View reports and analytics to track your productivity and task completion.</li>
            </ul>

            <h2 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Loading Tasks</h2>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>To load and view your tasks on the dashboard, you can use the following code example if you're integrating Worko <br /> Management into your application:</p>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Make a GET request to the /api/dashboard/tasks endpoint, and the API will return a list of tasks associated with your <br /> account. You can then use this data to display tasks on the dashboard in your application.</p>

            <h2 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Navigating the Dashboard</h2>
            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>To navigate the dashboard effectively, use the following tips:</p>
            <ul>
                <li>Click on a task to view its details and make updates.</li>

                <li>Use the search bar to find specific tasks or projects quickly.</li>

                <li>Filter tasks based on priority, due date, or team.</li>

            </ul >

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>By using these features and code examples, you can make the most of your Worko dashboard and stay organized <br /> and productive.</p>

            <br />

            <br />

            <hr style={{ border: "1px solid grey" }} />


            <div>
                <footer>

                    <br />
                    © Copyright 2023. All rights reserved.

                </footer>
            </div>
        </div >
    )
}

export default WorkoDashboard