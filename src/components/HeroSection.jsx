import { SparklesIcon, HomeIcon, ChartBarIcon, CubeIcon, UserGroupIcon, DocumentIcon, SwatchIcon, TagIcon } from '@heroicons/react/24/outline';
import { LockClosedIcon } from '@heroicons/react/24/solid';

function HeroSection() {
    return (
        <aside className='max-w-[1140px] min-h-min mx-auto'>
            <div className="h-[486px] flex items-center justify-between flex-col py-20" style={{ backgroundImage: "radial-gradient(45.6% 68.2% at 50% 100%,#7808ff 0%,rgba(3,6,13,0) 100%)" }}>
                <div className="flex items-center justify-between flex-col gap-y-8">
                    <button className="flex items-center bg-[#121218] text-xs py-2 px-4 rounded-full shadow-[inset_0px_0px_5px_rgba(225,225,225,0.1)]">
                        <SparklesIcon className='h-4 me-3' />
                        Made By Vite + React
                    </button>
                    <h1 className="text-center md:text-5xl sm:text-2xl text-xl font-medium text-slate-200">
                        The best platform for cross-<br /> <span className='text-gray-500'>functional work.</span>
                    </h1>
                    <p className='max-w-[640px] text-center sm:text-base text-sm font-light'>
                        Want better results in your organization? Worko helps teams get clarity, achieve greater impact, and scale to meet company goals.
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='me-2 text-base font-semibold bg-[#7808ff] text-white rounded-full px-5 py-3'>Get started</button>
                    <button className='ms-2 text-base font-semibold hover:bg-[#933aff20] text-white rounded-full px-5 py-3'>See how it works</button>
                </div>
            </div>
            <div className='w-full h-[640px]'>
                <div className='bg-[##09090f] flex justify-between items-center w-full py-2 px-4 border border-1 border-gray-900 rounded-t-lg'>
                    <div className='flex'>
                        <div className='w-3 aspect-square bg-[#ee6a5f] rounded-full mx-1'></div>
                        <div className='w-3 aspect-square bg-[#f4be4f] rounded-full mx-1'></div>
                        <div className='w-3 aspect-square bg-[#62c555] rounded-full mx-1'></div>
                    </div>
                    <div className='hidden md:flex'>
                        <button className="flex items-center bg-[#121218] text-xs py-1 px-10 rounded-md shadow-[inset_0px_0px_5px_rgba(225,225,225,0.1)] cursor-default">
                            <LockClosedIcon className='h-4 me-3 text-gray-600' />
                            <span className='cursor-text text-xs text-gray-600 font-semibold'>https://www.worko.io/workspace</span>
                        </button>
                    </div>
                    <div></div>
                </div>
                <div className='border border-1 border-gray-900 h-[598px] rounded-b-lg overflow-hidden flex'>
                    <div className='w-[72px] h-full hidden md:flex justify-between items-center flex-col border border-gray-900'>
                        <div className='flex justify-between items-center flex-col w-full'>
                            <div className='mt-6 mb-8'>
                                <img src="https://framerusercontent.com/images/6roiDdrqmas4HzNCgAEhhoNknA.png" alt="Worko" width={"24"} />
                            </div>
                            <div className=''>
                                <span className='uppercase text-[11px] text-gray-400'>MENU</span>
                            </div>
                            <div className='flex flex-col gap-y-5 mt-4'>
                                <HomeIcon className='h-4 text-gray-500' />
                                <ChartBarIcon className='h-4 text-gray-500' />
                                <CubeIcon className='h-4 text-gray-500' />
                                <UserGroupIcon className='h-4 text-gray-500' />
                                <DocumentIcon className='h-4 text-gray-500' />
                                <div className='bg-[#ffffff10] p-2 rounded-md'>
                                    <SwatchIcon className='h-4 text-slate-300' />
                                </div>
                                <TagIcon className='h-4 text-gray-500' />
                            </div>
                        </div>
                        <div className='border-t-2 border-gray-900 w-full flex justify-center items-center flex-col'>
                            <div className='mt-4 text-center'>
                                <span className='text-[11px] text-gray-400'>Labels</span>
                            </div>
                            <div className='bg-[#b17af5] w-[6px] aspect-square rounded-full my-5'></div>
                            <div className='bg-[#a2e435] w-[6px] aspect-square rounded-full my-3'></div>
                            <div className='bg-[#fc8181] w-[6px] aspect-square rounded-full my-5'></div>
                        </div>
                    </div>
                    <div className='w-full h-full bg-[#121218]'>

                    </div>
                </div>
            </div>
        </aside>
    )
}

export default HeroSection