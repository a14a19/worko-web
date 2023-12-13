import SubSectionWithCardHome from "./sub-components/SubSectionWithCardHome";

function SectionWithCardHome() {

    const organizeWithEaseData = {
        title: "Organize with Ease",
        heading: "Streamlined Task Management for Better Organization.",
        description: "Simplify task management and delegation. Lists help teams quickly understand their tasks, determine priorities, and track deadlines.",
    }

    return (
        <section className="max-w-[1140px] mx-auto mt-[10rem] flex flex-col gap-28">
            <SubSectionWithCardHome title={organizeWithEaseData.title} heading={organizeWithEaseData.heading} description={organizeWithEaseData.description} left="true" />
            <SubSectionWithCardHome title={organizeWithEaseData.title} heading={organizeWithEaseData.heading} description={organizeWithEaseData.description} left="false" />
            <SubSectionWithCardHome title={organizeWithEaseData.title} heading={organizeWithEaseData.heading} description={organizeWithEaseData.description} left="true" />
        </section>
    )
}

export default SectionWithCardHome;