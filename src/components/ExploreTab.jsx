import { useState, Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { CheckCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { exploreTabdata } from '../data/heroBannerData';
import MarketingTeamsRightSide from './sub-components/MarketingTeamsRightSide';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ExploreTab() {

    let [categories] = useState(exploreTabdata)

    return (
        <section className="max-w-[1140px] mx-auto mt-[10rem] flex flex-col text-center">
            <h2 className="text-4xl bg-clip-text font-semibold mt-3 mb-6 text-center" style={{ backgroundImage: "linear-gradient(0deg, rgb(97, 100, 107) 0%, rgb(255, 255, 255) 100%)", WebkitTextFillColor: "transparent" }}>Explore how teams are leveraging Worko.</h2>
            <p className="text-base text-center text-gray-400 mt-2">
                Spanning innovative startups to established enterprises.
            </p>
            <div className="w-full px-2 py-16 sm:px-0">
                <Tab.Group>
                    <Tab.List className="md:max-w-2xl max-w-[343px] flex mx-auto space-x-1 rounded-3xl bg-[#121218] p-1 md:overflow-auto overflow-x-scroll mb-9">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-3xl py-2.5 px-3 text-gray-200 text-base leading-5 focus:bg-[#09090f] focus:text-gray-200 focus:outline-none whitespace-nowrap',
                                        selected
                                            ? 'text-gray-200 shadow bg-[#09090f]'
                                            : 'text-gray-500'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'rounded-xl bg-[#121218] p-3'
                                )}
                            >
                                <div className='flex lg:flex-row flex-col'>
                                    {posts.map((post) => (
                                        <Fragment key={post.id}>
                                            <div
                                                className="md:px-10 md:py-12 p-4 lg:w-6/12 w-full text-start"
                                            >
                                                <h3 className="md:text-[2.5rem] text-[1.5rem] font-medium md:leading-[4rem] leading-[2rem] bg-clip-text text-start" style={{ backgroundImage: "linear-gradient(0deg, rgb(97, 100, 107) 0%, rgb(255, 255, 255) 100%)", WebkitTextFillColor: "transparent" }}>
                                                    {post.title}
                                                </h3>
                                                <div className='flex items-center text-gray-400 text-lg my-2'>
                                                    <CheckCircleIcon className='h-6 mx-2' />
                                                    <span>{post.list[0]}</span>
                                                </div>
                                                <div className='flex items-center text-gray-400 text-lg my-2'>
                                                    <CheckCircleIcon className='h-6 mx-2' />
                                                    <span>{post.list[1]}</span>
                                                </div>
                                                <div className='flex items-center text-gray-400 text-lg my-2'>
                                                    <CheckCircleIcon className='h-6 mx-2' />
                                                    <span>{post.list[2]}</span>
                                                </div>
                                                <button className="my-8 bg-[#1b1b21] px-8 py-3 rounded-3xl text-lg font-semibold flex items-center shadow-[inset_0px_1px_0px_0px_rgba(225,225,225,0.1)] hover:bg-[#1b1b21]" >Get Free Trail <ArrowRightCircleIcon className='h-6 text-inherit ms-2' /></button>
                                            </div>
                                            <div className='lg:w-6/12 w-full flex md-lg-card:justify-center justify-start bg-[#09090f] max-h-[448px] rounded-lg ps-7 pt-7 overflow-hidden'>
                                                {post.tab === "marketingTeams" && <MarketingTeamsRightSide tab={post.tab} />}
                                                {post.tab === "itTeams" && <MarketingTeamsRightSide tab={post.tab} />}
                                                {post.tab === "operations" && <MarketingTeamsRightSide tab={post.tab} />}
                                                {post.tab === "project" && <MarketingTeamsRightSide tab={post.tab} />}
                                            </div>
                                        </Fragment>
                                    ))}
                                </div>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </section>
    )
}

export default ExploreTab;