import { ChartBarIcon, CodeBracketIcon, CheckCircleIcon, UserCircleIcon, RocketLaunchIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";
import DoughnutChart from "../charts/DoughnutChart";
import BarChart from "../charts/BarChart";

function MarketingTeamsRightSide({ tab }) {
    if (tab === "marketingTeams") {
        return (
            <div className="bg-[#0c0c12] rounded-t-lg w-[570px] h-full border-t-2 border-s-2 border-e-2 lg:border-e-0 border-gray-900">
                <div className="flex items-center px-6 py-4">
                    <div className="bg-[#000] p-2 rounded-lg">
                        <ChartBarIcon className='h-4 text-gray-200' />
                    </div>
                    <div className="font-bold ms-4 whitespace-nowrap">
                        Marketing Campaign Launch
                    </div>
                </div>
                <div className="border-b-2 border-gray-900 flex ps-3">
                    <div className="text-xs text-gray-500 pb-3 mx-2 max-w-min">List</div>
                    <div className="text-xs text-gray-500 pb-3 mx-2 max-w-min">Board</div>
                    <div className="text-xs text-gray-300 pb-3 mx-2 border-b-2 border-gray-400 max-w-min">Timeline</div>
                </div>
                <div>
                    <div className="ms-[144px] text-[0.6rem] text-gray-500 border-s-2 border-gray-900 max-w-min ps-2">
                        February
                    </div>
                    <div className="flex ms-[144px] py-2 items-center border-b-2 border-gray-900">
                        <div className="text-xs px-5">1</div>
                        <div className="text-xs px-5">2</div>
                        <div className="text-xs px-5">3</div>
                        <div className="text-xs px-5">4</div>
                        <div className="text-xs px-5">5</div>
                        <div className="text-xs px-5">6</div>
                        <div className="text-xs px-5">7</div>
                        <div className="text-xs px-5">8</div>
                        <div className="text-xs px-5">9</div>
                    </div>
                </div>
                <div className="border border-gray-900 flex items-center">
                    <div className="pe-[80px] text-[0.75rem] h-[115px] text-gray-500 border-e-2 border-gray-900 ps-5 pt-4">
                        February
                    </div>
                    <div className="flex py-2 items-start justify-start relative w-full">
                        <div className="flex gap-4 items-center absolute -top-7 left-4 h-[27px] w-full">
                            <div className="w-1 h-full rounded-sm bg-[#a2e435]"></div>
                            <img src="https://framerusercontent.com/images/H8hcvVEBapY8RrScL76c1JgKY.png?scale-down-to=512" alt="" className="h-6 aspect-square rounded-full" />
                            <div className="flex flex-col items-start max-w-min justify-start h-full">
                                <div className="text-[0.6rem] whitespace-nowrap text-gray-500">Final edit endorsement</div>
                                <div className="text-[0.6rem] whitespace-nowrap text-gray-500">Due Feb 1</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-2 absolute top-2 left-1/2 h-[31px] w-[192px] bg-[#24242a]">
                            <img src="https://framerusercontent.com/images/zfqFn8UXaNwg9uQ8MHYFDZIJW8.png?scale-down-to=512" alt="" className="h-6 aspect-square rounded-full ms-2" />
                            <div className="text-[0.7rem] whitespace-nowrap text-gray-300">Design wireframes</div>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-900 flex items-center">
                    <div className="pe-[125.8px] text-[0.6rem] h-[115px] text-gray-500 border-e-2 border-gray-900 ps-5 pt-4">
                    </div>
                    <div className="flex py-2 items-center relative w-full">
                        <div className="flex items-center justify-start gap-2 absolute top-2 left-8 h-[31px] w-[192px] bg-[#24242a]">
                            <img src="https://framerusercontent.com/images/iTLjczQGRrbn8igTC8WGlsKrzDk.png?scale-down-to=512" alt="" className="h-6 aspect-square rounded-full ms-2" />
                            <div className="text-[0.7rem] whitespace-nowrap text-gray-300">Final edit endorsement</div>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-900 flex items-center">
                    <div className="pe-[125.8px] text-[0.6rem] h-[115px] text-gray-500 border-e-2 border-gray-900 ps-5 pt-4">
                    </div>
                    <div className="flex py-2 items-center border-b-2 border-gray-900">
                    </div>
                </div>
            </div>
        )
    } else if (tab === "itTeams") {
        return (
            <div className="bg-[#0c0c12] rounded-t-lg w-[570px] h-full border-t-2 border-s-2 border-e-2 lg:border-e-0 border-gray-900">
                <div className="flex items-center px-6 py-4">
                    <div className="bg-[#7808ff] p-2 rounded-lg">
                        <CodeBracketIcon className='h-4 text-gray-200' />
                    </div>
                    <div className="font-bold ms-4 whitespace-nowrap">
                        Software Group
                    </div>
                </div>
                <div className="border-b-2 border-gray-900 flex ps-3">
                    <div className="text-xs text-gray-300 pb-3 mx-2 border-b-2 border-gray-400 max-w-min">List</div>
                    <div className="text-xs text-gray-500 pb-3 mx-2 max-w-min">Board</div>
                    <div className="text-xs text-gray-500 pb-3 mx-2 max-w-min">Timeline</div>
                </div>
                <div className="flex items-start justify-start  border-b-2 border-gray-900">
                    <div className="w-[308px] text-[0.6rem] text-gray-500 py-2 text-start ps-4">Task Name</div>
                    <div className="text-[0.6rem] text-gray-500 p-2 text-start border-x-2 border-gray-900 w-[114px]">Asignee</div>
                    <div className="text-[0.6rem] text-gray-500 p-2 text-start">Software</div>
                </div>
                <div className="pb-2 pt-4 ps-4 text-[0.7rem] text-gray-400 text-start">
                    Ingest
                </div>
                <div className="bg-[#ffffff0f] rounded-lg border border-gray-800 px-2 ms-4 me-2 flex gap-2 justify-start items-center">
                    <CheckCircleIcon className="h-4 text-gray-500" />
                    <div className="text-[0.7rem] text-gray-400 text-start w-[253px]">
                        Final edit approval
                    </div>
                    <div className="text-[0.7rem] text-gray-400 text-start flex items-center h-[32px] justify-start border-x-2 border-gray-800 px-2 w-[115px]">
                        <UserCircleIcon className="h-4 text-gray-500 me-2" />
                        Unassigned
                    </div>
                    <div className="flex items-center">
                        <button className="rounded-2xl border text-[0.5rem] py-1 px-2 border-[#a68af83d] text-[#a68af8] bg-[#4b1d9229]">Worko</button>
                    </div>
                </div>
                <div className="pb-2 pt-4 ps-4 text-[0.7rem] text-gray-500 text-start">
                    Access granted
                </div>
                <div className="flex flex-col gap-3">
                    <div className="bg-[#ffffff0f] rounded-lg border border-gray-800 px-2 ms-4 me-2 flex gap-2 justify-start items-center">
                        <CheckCircleIcon className="h-4 text-gray-500" />
                        <div className="text-[0.7rem] text-gray-400 text-start w-[253px]">
                            Allow Entry: Coral Meijer
                        </div>
                        <div className="text-[0.7rem] text-gray-400 text-start flex items-center h-[32px] justify-start border-x-2 border-gray-800 px-2 w-[115px]">
                            <img src="https://framerusercontent.com/images/H8hcvVEBapY8RrScL76c1JgKY.png?scale-down-to=512" alt="" className="h-4 rounded-full aspect-square me-2" />
                            Dave Jung
                        </div>
                        <div className="flex items-center">
                            <button className="rounded-2xl border text-[0.5rem] py-1 px-2 border-[#fd9b283d] text-[#fd9b28] bg-[#af2f0529]">Okta</button>
                        </div>
                    </div>
                    <div className="bg-[#ffffff0f] rounded-lg border border-gray-800 px-2 ms-4 me-2 flex gap-2 justify-start items-center">
                        <CheckCircleIcon className="h-4 text-gray-500" />
                        <div className="text-[0.7rem] text-gray-400 text-start w-[253px]">
                            Permit Access: Joan Kirk
                        </div>
                        <div className="text-[0.7rem] text-gray-400 text-start flex items-center h-[32px] justify-start border-x-2 border-gray-800 px-2 w-[115px] whitespace-nowrap">
                            <img src="https://framerusercontent.com/images/MERjg8hlRV3juxAX1aCaOgI9KHo.png?scale-down-to=512" alt="" className="h-4 rounded-full aspect-square me-2" />
                            Daniela Vargas
                        </div>
                        <div className="flex items-center">
                            <button className="rounded-2xl border text-[0.5rem] py-1 px-2 border-[#fc81813d] text-[#fc8181] bg-[#82272729]">Dropbox</button>
                        </div>
                    </div>
                    <div className="bg-[#ffffff0f] rounded-lg border border-gray-800 px-2 ms-4 me-2 flex gap-2 justify-start items-center">
                        <CheckCircleIcon className="h-4 text-gray-500" />
                        <div className="text-[0.7rem] text-gray-400 text-start w-[253px]">
                            Allow Entry: Zoe Wong
                        </div>
                        <div className="text-[0.7rem] text-gray-400 text-start flex items-center h-[32px] justify-start border-x-2 border-gray-800 px-2 w-[115px]">
                            <img src="https://framerusercontent.com/images/iTLjczQGRrbn8igTC8WGlsKrzDk.png?scale-down-to=512" alt="" className="h-4 rounded-full aspect-square me-2" />
                            Ajeet Cyrus
                        </div>
                        <div className="flex items-center">
                            <button className="rounded-2xl border text-[0.5rem] py-1 px-2 border-[#a68af83d] text-[#a68af8] bg-[#4b1d9229]">Framer</button>
                        </div>
                    </div>
                    <div className="bg-[#ffffff0f] rounded-lg border border-gray-800 px-2 ms-4 me-2 flex gap-2 justify-start items-center">
                        <CheckCircleIcon className="h-4 text-gray-500" />
                        <div className="text-[0.7rem] text-gray-400 text-start w-[253px]">
                            Permit Access: Coral Meijer
                        </div>
                        <div className="text-[0.7rem] text-gray-400 text-start flex items-center h-[32px] justify-start border-x-2 border-gray-800 px-2 w-[115px]">
                            <img src="https://framerusercontent.com/images/zfqFn8UXaNwg9uQ8MHYFDZIJW8.png?scale-down-to=512" alt="" className="h-4 rounded-full aspect-square me-2" />
                            Dave Juñg
                        </div>
                        <div className="flex items-center">
                            <button className="rounded-2xl border text-[0.5rem] py-1 px-2 border-[#60a5f93d] text-[#60a5f9] bg-[#1e3a8a29]">Figma</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (tab === "operations") {
        return (
            <div className="bg-[#0c0c12] rounded-t-lg w-[570px] h-full border-t-2 border-s-2 border-e-2 lg:border-e-0 border-gray-900">
                <div className="flex items-center px-6 py-4 border-b-2 border-gray-900">
                    <div className="bg-[#fc8181] p-2 rounded-lg">
                        <BuildingOffice2Icon className='h-4 text-black' />
                    </div>
                    <div className="font-bold ms-4 whitespace-nowrap">
                        Business stategy planning
                    </div>
                </div>
                <div className="flex justify-start items-start gap-2 flex-nowrap p-4">
                    <div className="w-[226px] h-[144px] bg-[#121218] p-2 border border-gray-900 rounded-md flex flex-col">
                        <div className="text-[0.75rem] text-start">Objective by condition</div>
                        <div className="max-w-[90px] max-h-[90px] mx-auto mt-3">
                            <DoughnutChart />
                        </div>
                    </div>
                    <div className="w-[280px] h-[144px] bg-[#121218] p-2 border border-gray-900 rounded-md flex flex-col">
                        <div className="text-[0.75rem] text-start">Team tasks by priority</div>
                        <div className="mx-auto mt-3 w-full h-full">
                            <BarChart />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (tab === "project") {
        return (
            <div className="bg-[#0c0c12] rounded-t-lg w-[570px] h-full border-t-2 border-s-2 border-e-2 lg:border-e-0 border-gray-900">
                <div className="flex items-center px-6 py-4">
                    <div className="bg-[#4d7b0f] p-2 rounded-lg">
                        <RocketLaunchIcon className='h-4 text-gray-200' />
                    </div>
                    <div className="font-bold ms-4 whitespace-nowrap">
                        Marketing roadmap
                    </div>
                </div>
                <div className="border-b-2 border-gray-900 flex ps-3">
                    <div className="text-xs text-gray-300 pb-3 mx-2 border-b-2 border-gray-400 max-w-min">Overview</div>
                    <div className="text-xs text-gray-500 pb-3 mx-2 max-w-min">List</div>
                    <div className="text-xs text-gray-500 pb-3 mx-2 max-w-min">Board</div>
                    <div className="text-xs text-gray-500 pb-3 mx-2 max-w-min">Timeline</div>
                </div>
                <div className="pb-2 pt-6 ps-4 text-[0.75rem] text-gray-300 text-start">
                    Landmarks
                </div>
                <div className="w-full p-2 gap-3">
                    <div className="border-t-2 border-gray-900 flex justify-between items-center p-2 min-w-[375px]">
                        <div className="flex items-center gap-2">
                            <CheckCircleIcon className="h-4 text-[#4d7b0f]" />
                            <div className="text-gray-500 text-[0.7rem]">
                                Determine project leads
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-gray-500 text-[0.7rem]">
                                Nov 15
                            </div>
                            <img src="https://framerusercontent.com/images/H8hcvVEBapY8RrScL76c1JgKY.png?scale-down-to=512" alt="" className="h-4 aspect-square rounded-full" />
                        </div>
                    </div>
                    <div className="border-t-2 border-gray-900 flex justify-between items-center p-2">
                        <div className="flex items-center gap-2">
                            <CheckCircleIcon className="h-4 text-[#4d7b0f]" />
                            <div className="text-gray-500 text-[0.7rem]">
                                Make key hires in business operations
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-gray-500 text-[0.7rem]">
                                Dec 8
                            </div>
                            <img src="https://framerusercontent.com/images/zfqFn8UXaNwg9uQ8MHYFDZIJW8.png?scale-down-to=512" alt="" className="h-4 aspect-square rounded-full" />
                        </div>
                    </div>
                    <div className="border-t-2 border-gray-900 flex justify-between items-center p-2">
                        <div className="flex items-center gap-2">
                            <div className="w-[0.8rem] h-[0.8rem] border border-gray-400 rounded-full ms-[1.8px]">
                            </div>
                            <div className="text-gray-400 text-[0.7rem]">
                                Q1 check-in with executive team
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-gray-500 text-[0.7rem]">
                                Jan 13
                            </div>
                            <img src="https://framerusercontent.com/images/iTLjczQGRrbn8igTC8WGlsKrzDk.png?scale-down-to=512" alt="" className="h-4 aspect-square rounded-full" />
                        </div>
                    </div>
                    <div className="border-t-2 border-gray-900 flex justify-between items-center p-2">
                        <div className="flex items-center gap-2">
                            <div className="w-[0.8rem] h-[0.8rem] border border-gray-400 rounded-full ms-[1.8px]">
                            </div>
                            <div className="text-gray-400 text-[0.7rem]">
                                Update projections
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-gray-500 text-[0.7rem]">
                                Feb 13
                            </div>
                            <img src="https://framerusercontent.com/images/dd62dYQNyyynWEmy6n61i7CltYc.jpg?scale-down-to=512" alt="" className="h-4 aspect-square rounded-full" />
                        </div>
                    </div>
                    <div className="border-t-2 border-gray-900 flex justify-between items-center p-2">
                        <div className="flex items-center gap-2">
                            <div className="w-[0.8rem] h-[0.8rem] border border-gray-400 rounded-full ms-[1.8px]">
                            </div>
                            <div className="text-gray-400 text-[0.7rem]">
                                Manage performance
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-gray-500 text-[0.7rem]">
                                Mar 19
                            </div>
                            <img src="https://framerusercontent.com/images/5AR5WjJxyvJ43labZsGKHxyRNaw.jpg?scale-down-to=512" alt="" className="h-4 aspect-square rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MarketingTeamsRightSide;
// <div className="bg-[#0c0c12] rounded-ss-lg w-full h-full border-t-2 border-s-2 border-gray-900">MarketingTeamsRightSide</div>