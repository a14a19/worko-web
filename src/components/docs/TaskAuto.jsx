import React from 'react'

function TaskAuto() {
    return (
        <div  style={{ padding: "revert", margin: "revert", fontSize: "revert",  }}>
            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Advanced features</p>
            <h1 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Task Automation</h1>
            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Task automation can help you save time and increase productivity by streamlining routine tasks. In this section, we'll explore how to set up <br /> task automation in Worko.</p>
            <br />

            <hr></hr>

            <br />

            <h2 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Automating a Task</h2>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>To automate a specific task in Worko, you can create task automation rules. These rules enable you to define conditions under which a task should be automatically triggered. Follow these steps: <br />



                Step 1: Log in to your Worko Management account. <br />

                Step 2: Navigate to the "Automation" or "Rules" section in your Worko dashboard. <br />

                Step 3: Click the "Create New Rule" or similar button to set up a new task automation rule. <br />

                Step 4: Define the trigger conditions for the rule. For example, you can specify that a task should be created or updated when certain criteria are met. <br />

                Step 5: Configure the actions that should be taken when the trigger conditions are met. This might include creating a new task, updating an existing task, or sending notifications. <br />

                Step 6: Save the automation rule. </p>

            <h3 style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>Using the Code Block</h3>
            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>
                To programmatically set up task automation using the Worko API, you can use the following code example:</p>

            <p style={{ padding: "revert", margin: "revert", fontSize: "revert",}}>This code sends a request to the Taskify API to create a task automation rule that triggers the creation of a meeting reminder task when the meeting date matches the current day. <br />

                <br />


                By following these steps or using the provided code block, you can automate specific tasks to simplify your task management process in Worko.</p>

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

export default TaskAuto