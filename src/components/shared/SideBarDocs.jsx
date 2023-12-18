import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';

function SideBarDocs() {
    return (
        <div className="w-[288px] bg-[#121218] rounded-lg ms-1 py-4 px-6 border border-gray-800">
            <div className='flex justify-start items-center'>
                <img src="https://ugc.production.linktr.ee/83ebb150-33fc-4639-8f2b-0bd315a84a1b_Worko.jpeg?io=true&size=avatar-v1_0" alt="" className="h-8 w-auto rounded-full" />
                <div>
                    Worko
                </div>
                <div>
                    Docs
                </div>
            </div>
            <div>
                <input type="text" className='rounded-lg border border-gray-800 py-2 px-3 my-6' placeholder='Search...' />
            </div>
            <div className="mx-auto w-full max-w-md rounded-2xl p-2 flex flex-col gap-4 overflow-y-scroll">
                <div className='text-base text-gray-200 flex flex-col gap-4 my-2'>
                    Getting Started
                    <Link className='text-gray-400'>Worko Account</Link>
                    <Link className='text-gray-400'>Worko Dashboard</Link>
                    <Link className='text-gray-400'>Managing tasks</Link>
                </div>
                <div className='text-base text-gray-200 flex flex-col gap-4 my-2'>
                    Getting Started
                    <Link className='text-gray-400'>Worko Account</Link>
                    <Link className='text-gray-400'>Worko Dashboard</Link>
                    <Link className='text-gray-400'>Managing tasks</Link>
                </div>
                <div className='text-base text-gray-200 flex flex-col gap-4 my-2'>
                    Getting Started
                    <Link className='text-gray-400'>Worko Account</Link>
                    <Link className='text-gray-400'>Worko Dashboard</Link>
                    <Link className='text-gray-400'>Managing tasks</Link>
                </div>
                <div className='text-base text-gray-200 flex flex-col gap-4 my-2'>
                    Getting Started
                    <Link className='text-gray-400'>Worko Account</Link>
                    <Link className='text-gray-400'>Worko Dashboard</Link>
                    <Link className='text-gray-400'>Managing tasks</Link>
                </div>
            </div>
        </div>
    )
}

export default SideBarDocs;