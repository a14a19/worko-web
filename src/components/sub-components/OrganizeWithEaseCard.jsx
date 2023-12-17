import PlanningContentDevCard from "../shared/PlanningContentDevCard"
import { imageOverlappingWithText } from "../../data/heroBannerData.js";
import HeroBannerCodeAreaSmallSubHeading from '../shared/HeroBannerCodeAreaSmallSubHeading.jsx';
import HeroBannerCodeAreaCard from '../shared/HeroBannerCodeAreaCard.jsx';
import { CheckCircleIcon } from "@heroicons/react/24/outline";

function OrganizeWithEaseCard({ title }) {
    return (
        <div className="lg:w-6/12 w-full h-[448px] flex-[1_0_0%] flex items-center md-small:justify-center justify-start overflow-hidden bg-[#121218] rounded-2xl lg:p-0 p-20">
            <div className="text-xs w-[426px] h-[272px] flex justify-between items-start flex-col">

                {title === "Organize with Ease" && <PlanningContentDevCard />}

                {title === "Visual Task Progression" &&
                    <div className="flex justify-start items-start w-full max-w-[398px] flex-col gap-3 overflow-hidden relative">
                        <div className="flex w-full">
                            <div className="w-6/12 min-w-[200px]">March</div>
                            <div className="w-6/12 min-w-[200px]">April</div>
                        </div>
                        <div className="flex h-[500px] border-t-2 border-gray-900 ">
                            <div className="w-[90px] border-e-2 border-gray-900"></div>
                            <div className="w-[90px] border-e-2 border-gray-900"></div>
                            <div className="w-[90px] border-e-2 border-gray-900"></div>
                            <div className="w-[90px] border-e-2 border-gray-900"></div>
                            <div className="w-[90px] border-e-2 border-gray-900"></div>
                            <div className="w-[90px] border-e-2 border-gray-900"></div>
                            <div className="flex items-center absolute top-10 left-0 bg-[#fc8181] rounded-md px-2 py-1 gap-1">
                                <CheckCircleIcon className="h-4 text-black" />
                                <div className="text-black text-[0.75rem]">
                                    Write campaign brief
                                </div>
                            </div>
                            <div className="flex items-center absolute top-24 left-0 bg-[#a68af8] rounded-md px-2 py-1 gap-1">
                                <CheckCircleIcon className="h-4 text-black" />
                                <div className="text-black text-[0.75rem]">
                                    Develop messaging framerwork
                                </div>
                            </div>
                            <div className="flex items-center absolute top-48 left-0 bg-[#fabe24] rounded-md px-2 py-1 gap-1">
                                <CheckCircleIcon className="h-4 text-black" />
                                <div className="text-black text-[0.75rem]">
                                    Develop messaging framerwork
                                </div>
                            </div>
                            <div className="flex items-center absolute top-16 left-60 bg-[#60a5f9] rounded-md px-2 py-1 gap-1">
                                <CheckCircleIcon className="h-4 text-black" />
                                <div className="text-black text-[0.75rem]">
                                    Write campaign brief
                                </div>
                            </div>
                            <div className="flex items-center absolute top-36 left-52 bg-[#e973bb] rounded-md px-2 py-1 gap-1">
                                <CheckCircleIcon className="h-4 text-black" />
                                <div className="text-black text-[0.75rem]">
                                    Create marketing materials
                                </div>
                            </div>
                            <div className="flex items-center absolute top-60 left-56 bg-[#a2e435] rounded-md px-2 py-1 gap-1">
                                <CheckCircleIcon className="h-4 text-black" />
                                <div className="text-black text-[0.75rem]">
                                    Review campaign assets
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {title === "Team Task Simplification" &&
                    <div className='flex justify-start items-start w-full gap-5'>
                        <div className='w-full flex justify-start items-center flex-col gap-2.5'>
                            <HeroBannerCodeAreaSmallSubHeading mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] px-3 py-1 rounded-lg border border-gray-800" circleClasses="w-4 h-4 aspect-square flex justify-center items-center ms-2  bg-[#fabe24] text-[0.5rem] rounded-full text-black" title="Doing" addBtn="true" />

                            <HeroBannerCodeAreaSmallSubHeading mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] px-3 py-1 rounded-lg border border-gray-800" circleClasses="w-4 h-4 aspect-square flex justify-center items-center ms-2  bg-[#fabe24] text-[0.5rem] rounded-full text-black" title="Doing" addBtn="false" />

                            <HeroBannerCodeAreaCard mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] p-3 rounded-lg gap-3 flex-col" tags={{ tag1: "Wire frame", tag2: "UI Design" }} tag1Class="text-[0.6rem] py-1 px-2 border border-gray-600 rounded-2xl bg-gray-800 flex items-center me-2 min-h-min whitespace-nowrap" tag2Class="text-[0.6rem] py-1 px-2 border border-[#60A5F950] rounded-2xl bg-[#1e3a8a29] flex items-center text-[#60A5F9] whitespace-nowrap" dot1Class="me-2 w-1 h-1 rounded-full bg-gray-300" dot2Class="me-2 w-1 h-1 rounded-full bg-[#60A5F9]" title="UI Design" para="This page showing user list for this product" subTask={{ value: 2, total: 10, color: "bg-[#fabe24]" }} imageData={imageOverlappingWithText} />
                        </div>
                        <div className='w-full flex justify-start items-center flex-col gap-2.5'>
                            <HeroBannerCodeAreaSmallSubHeading mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] px-3 py-1 rounded-lg border border-gray-800" circleClasses="w-4 h-4 aspect-square flex justify-center items-center ms-2  bg-[#a68af8] text-[0.5rem] rounded-full text-black" title="In Review" addBtn="true" />

                            <HeroBannerCodeAreaSmallSubHeading mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] px-3 py-1 rounded-lg border border-gray-800" circleClasses="w-4 h-4 aspect-square flex justify-center items-center ms-2  bg-[#a68af8] text-[0.5rem] rounded-full text-black" title="In Review" addBtn="false" />

                            <HeroBannerCodeAreaCard mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] p-3 rounded-lg gap-3 flex-col" tags={{ tag1: "Wire frame", tag2: "UI Design" }} tag1Class="text-[0.6rem] py-1 px-2 border border-[#a68af850] rounded-2xl bg-[#4b1d9229] flex items-center me-2 text-[#a68af8] min-h-min whitespace-nowrap" tag2Class="text-[0.6rem] py-1 px-2 border border-[#60A5F950] rounded-2xl bg-[#1e3a8a29] flex items-center text-[#60A5F9] whitespace-nowrap" dot1Class="me-2 w-1 h-1 rounded-full bg-gray-300" dot2Class="me-2 w-1 h-1 rounded-full bg-[#60A5F9]" title="FAQ list" para="This page showing FAQ for this product" subTask={{ value: 2, total: 10, color: "bg-[#a68af8]" }} imageData={imageOverlappingWithText} />

                            <HeroBannerCodeAreaCard mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] p-3 rounded-lg gap-3 flex-col" tags={{ tag1: "Wire frame", tag2: "UI Design" }} tag1Class="text-[0.6rem] py-1 px-2 border border-[#a68af850] rounded-2xl bg-[#4b1d9229] flex items-center me-2 text-[#a68af8] whitespace-nowrap" tag2Class="text-[0.6rem] py-1 px-2 border border-[#60A5F950] rounded-2xl bg-[#1e3a8a29] flex items-center text-[#60A5F9] whitespace-nowrap" dot1Class="me-2 w-1 h-1 rounded-full bg-gray-300" dot2Class="me-2 w-1 h-1 rounded-full bg-[#60A5F9]" title="Help center" para="This page showing help center for this product" subTask={{ value: 2, total: 10, color: "bg-[#a68af8]" }} imageData={imageOverlappingWithText} />
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default OrganizeWithEaseCard