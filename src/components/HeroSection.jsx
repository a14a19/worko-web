import { SparklesIcon } from '@heroicons/react/24/outline'

function HeroSection() {
    return (
        <aside>
            <div className="h-[486px] flex items-center justify-between flex-col py-20" style={{backgroundImage: "radial-gradient(45.6% 68.2% at 50% 100%,#7808ff 0%,rgba(3,6,13,0) 100%)"}}>
                <div className="flex items-center justify-between flex-col gap-y-8">
                    <button className="flex items-center bg-[#121218] text-xs py-2 px-4 rounded-full shadow-[inset_0px_0px_5px_rgba(225,225,225,0.1)]">
                        <SparklesIcon className='h-4 me-3' />
                        Made By Vite + React
                    </button>
                    <h1 className="text-center text-5xl font-medium text-slate-200">
                        The best platform for cross-<br /> <span className='text-gray-500'>functional work.</span>
                    </h1>
                    <p className='max-w-[640px] text-center text-base font-light'>
                        Want better results in your organization? Worko helps teams get clarity, achieve greater impact, and scale to meet company goals.
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='me-2 text-base font-semibold bg-[#7808ff] text-white rounded-full px-5 py-3'>Get started</button>
                    <button className='ms-2 text-base font-semibold hover:bg-[#933aff20] text-white rounded-full px-5 py-3'>See how it works</button>
                </div>
            </div>
            <div>
            </div>
        </aside>
    )
}

export default HeroSection