import OrganizeWithEaseCard from "./OrganizeWithEaseCard";

function SubSectionWithCardHome({ title, heading, description, left }) {
    return (
        <div className={left === "true" ? "w-full flex items-center gap-16 flex-row" : "w-full flex items-center gap-16 flex-row-reverse"}>
            <OrganizeWithEaseCard />
            <div className="w-6/12">
                <h4 className="bg-clip-text mb-1" style={{ backgroundImage: "linear-gradient(0deg, rgb(179, 83, 9) 0%, rgb(250, 190, 36) 76.5625%)", WebkitTextFillColor: "transparent" }}>{title}</h4>
                <h2>{heading}</h2>
                <p>{description}</p>
                <button>Get Free Trail</button>
            </div>
        </div>
    )
}

export default SubSectionWithCardHome;