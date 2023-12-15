import OrganizeWithEaseCard from "./OrganizeWithEaseCard";
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

function SubSectionWithCardHome({ title, heading, description, left }) {
    return (
        <div className={left === "true" ? "w-full flex items-center gap-16 lg:flex-row flex-col" : "w-full flex items-center gap-16 lg:flex-row-reverse flex-col"}>

            <OrganizeWithEaseCard title={title} />

            <div className="lg:w-6/12 w-full">

                {title === "Organize with Ease" && <h4 className="bg-clip-text mb-1" style={{ backgroundImage: "linear-gradient(0deg, rgb(179, 83, 9) 0%, rgb(250, 190, 36) 76.5625%)", WebkitTextFillColor: "transparent" }}>{title}</h4>}

                {title === "Visual Task Progression" && <h4 className="bg-clip-text mb-1" style={{ backgroundImage: "linear-gradient(0deg, rgb(197, 48, 48) -33.3333%, rgb(252, 129, 129) 76.5625%)", WebkitTextFillColor: "transparent" }}>{title}</h4>}

                {title === "Team Task Simplification" && <h4 className="bg-clip-text mb-1" style={{ backgroundImage: "linear-gradient(0deg, rgb(134, 36, 255) 0%, rgb(233, 115, 187) 76.5625%)", WebkitTextFillColor: "transparent" }}>{title}</h4>}

                <h2 className="text-4xl bg-clip-text font-semibold mt-3 mb-6" style={{ backgroundImage: "linear-gradient(0deg, rgb(97, 100, 107) 0%, rgb(255, 255, 255) 100%)", WebkitTextFillColor: "transparent" }}>{heading}</h2>

                <p className="text-start text-base text-gray-400">{description}</p>

                <button className="my-8 bg-[#1b1b21] px-8 py-3 rounded-3xl text-lg font-semibold flex items-center shadow-[inset_0px_1px_0px_0px_rgba(225,225,225,0.1)] hover:bg-[#1b1b21]" >Get Free Trail <ArrowRightCircleIcon className='h-6 text-inherit ms-2' /></button>
            </div>
        </div>
    )
}

export default SubSectionWithCardHome;