import React from 'react'

function InviteTeamMember() {
    return (
        <div style={{  }}>
            <h3 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Collaboration</h3>
            <h1 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Inviting Team Members</h1>
            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Collaboration is at the heart of Worko, and inviting team members to join your workspace is an essential part of <br /> the process. In this section, we'll guide you through the steps to invite and onboard team members to your <br /> Worko organization.</p>

            <h2 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Supported Third-Party Platforms</h2>
            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Worko supports integration with a variety of third-party platforms, enabling you to streamline your workflows and <br /> collaborate more efficiently. Some of our supported third-party platforms include:</p>
            <ul style={{ listStyle: "revert", padding: "revert", margin: "revert" }}>
                <li>Google Drive: Integrate Worko with Google Drive to easily attach documents and files to your tasks.</li>
                <li>GitHub: Connect Worko with GitHub to link tasks to your repositories and track software development projects.</li>
                <li>Zapier: Use Zapier to create custom automation workflows connecting Worko with thousands of other apps and services.</li>
            </ul>

            <h2 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Integrating with a Third-Party Platform</h2>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>To set up an integration with an external service, you'll typically need to generate API tokens or access keys. Below is an <br /> example of how to set up a Slack integration with Worko:</p>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Step 1: Log in to your Worko account. <br />

                Step 2: Navigate to the "Integrations" or "Settings" section, and choose "Slack Integration." <br />

                Step 3: Click on the "Connect to Slack" button to start the integration process. <br />

                Step 4: Follow the on-screen instructions to log in to your Slack workspace and authorize Worko's access. <br />

                Step 5: Once authorized, you will receive an API token that you can use to connect Worko and Slack. <br />

                Step 6: Once you've entered the necessary information, click "Save" or "Connect" to establish the integration.
            </p>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>By following these steps, you can easily set up and manage integrations with external services to enhance your task <br /> management capabilities in Worko.</p>
            <h2 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Team Member Onboarding</h2>
            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>When team members receive the invitation, they will typically receive an email with a link to join your Worko organization. <br /> Here's what they need to do:</p>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Step 1: Check their email for the invitation from Worko. <br />

                Step 2: Click on the invitation link to join the organization. <br />

                Step 3: Complete the onboarding process, which may include setting up their profiles and customizing their preferences.
            </p>

            <h2 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Using the Code Block</h2>
            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>To programmatically invite team members using the Worko API, you can use the following code example:</p>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>This code sends an invitation to the specified email address and assigns the "user" role to the new team member.

                <br />


                By following these steps or using the provided code block, you can efficiently invite and onboard team members to your Worko organization, promoting collaboration and productivity.
            </p>

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

export default InviteTeamMember