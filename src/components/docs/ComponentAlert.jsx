import React from 'react'

function ComponentAlert() {
    return (
        <div style={{ padding: "revert", margin: "revert", fontSize: "revert", }}>Integrations
            <h1 style={{ padding: "revert", margin: "revert", fontSize: "revert", }}>Worko Integrations</h1>
            <p style={{ padding: "revert", margin: "revert", fontSize: "revert", }}>Worko Management provides the flexibility to integrate with various external tools and services, allowing you <br /> to streamline your workflow and enhance your task management experience. In this section, we'll explore how <br /> to set up and manage integrations with Worko.</p>

            <h2 style={{ padding: "revert", margin: "revert", fontSize: "revert", }}>Available Integrations</h2>
            <p style={{ padding: "revert", margin: "revert", fontSize: "revert", }}>Worko offers integrations with a wide range of tools and services, including but not limited to:</p>
            <ul style={{ listStyle: "revert", padding: "revert", margin: "revert"}}>
                <li>Slack: Streamline communication by connecting Worko with your Slack workspace.</li>
                <li>Google Calendar: Sync your tasks and due dates with Google Calendar for better time management.</li>
                <li>Trello: Bridge the gap between Worko and Trello to manage tasks seamlessly.</li>
            </ul>

            <h3 style={{ padding: "revert", margin: "revert", fontSize: "revert", }}>Setting Up an Integration</h3>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert", }}>To set up an integration with an external service, you'll typically need to generate API tokens or access keys. Below is an <br /> example of how to set up a Slack integration with Worko:</p>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert", }}>Step 1: Log in to your Worko account. <br />

                Step 2: Navigate to the "Integrations" or "Settings" section, and choose "Slack Integration." <br />

                Step 3: Click on the "Connect to Slack" button to start the integration process. <br />

                Step 4: Follow the on-screen instructions to log in to your Slack workspace and authorize Worko's access. <br />

                Step 5: Once authorized, you will receive an API token that you can use to connect Worko and Slack.</p>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert", }}>By following these steps, you can easily set up and manage integrations with external services to enhance your task <br /> management capabilities in Worko.</p>

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

export default ComponentAlert