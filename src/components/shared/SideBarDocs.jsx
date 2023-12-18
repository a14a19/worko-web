import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';

function SideBarDocs() {
    return (
        <div className="w-[288px] bg-[#121218] rounded-lg ms-1 p-6 border border-gray-800 h-screen overflow-y-scroll">
            <div className='flex justify-start items-center gap-4'>
                <Link to="/" className='flex items-center pe-4 border-e-2 border-gray-800'>
                    <img src="https://ugc.production.linktr.ee/83ebb150-33fc-4639-8f2b-0bd315a84a1b_Worko.jpeg?io=true&size=avatar-v1_0" alt="" className="h-8 w-auto rounded-full me-2" />
                    Worko
                </Link>
                <Link to="/docs">
                    Docs
                </Link>
            </div>
            <div>
                <input type="text" className='rounded-lg border border-gray-800 py-2 px-3 my-6' placeholder='Search...' />
            </div>
            <div className="mx-auto w-full max-w-md rounded-2xl p-2 flex flex-col gap-4">
                <div className='text-base text-gray-200 flex flex-col gap-4 my-2'>
                    Getting Started
                    <Link className='text-gray-400 hover:text-[#b17af5]' to="worko-account">Worko Account</Link>
                    <Link className='text-gray-400 hover:text-[#b17af5]' to="worko-dashboard">Worko Dashboard</Link>
                    <Link className='text-gray-400 hover:text-[#b17af5]' to="managing-task">Managing tasks</Link>
                </div>
                <div className='text-base text-gray-200 flex flex-col gap-4 my-2'>
                    Integrations
                    <Link className='text-gray-400 hover:text-[#b17af5]' to="worko-integration" >Worko Integrations</Link>
                    <Link className='text-gray-400 hover:text-[#b17af5]' to="set-up-int">Set Up Integrations</Link>
                    <Link className='text-gray-400 hover:text-[#b17af5]' to="third-party-plateform">Third-party Platforms</Link>
                </div>
                <div className='text-base text-gray-200 flex flex-col gap-4 my-2'>
                    Collabration
                    <Link className='text-gray-400 hover:text-[#b17af5]' to="invite-team-member" >Inviting Team Members</Link>
                    <Link className='text-gray-400 hover:text-[#b17af5]' to="task-and-deadline">Tasks and Deadlines</Link>
                    <Link className='text-gray-400 hover:text-[#b17af5]' to="discussion">Discussions</Link>
                </div>
                <div className='text-base text-gray-200 flex flex-col gap-4 my-2'>
                    Advanced features
                    <Link className='text-gray-400 hover:text-[#b17af5]' to="task-auto" >Task Automation</Link>
                    <Link className='text-gray-400 hover:text-[#b17af5]' to="report-analytics">Reporting and Analytics</Link>
                    <Link className='text-gray-400 hover:text-[#b17af5]' to="customizing-worko">Customizing Worko</Link>
                </div>
            </div>
        </div>
    )
}

export default SideBarDocs;