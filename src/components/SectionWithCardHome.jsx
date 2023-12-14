import SubSectionWithCardHome from "./sub-components/SubSectionWithCardHome";

function SectionWithCardHome() {

    const organizeWithEaseData = {
        title: "Organize with Ease",
        heading: "Streamlined Task Management for Better Organization.",
        description: "Simplify task management and delegation. Lists help teams quickly understand their tasks, determine priorities, and track deadlines.",
    }
    const visualTaskProgressionData = {
        title: "Visual Task Progression",
        heading: "Work Progression and Task Visualization",
        description: "Visualize Work Progression Over Time. Effectively handle dependent, overlapping, and unscheduled tasks to create dependable team plans.",
    }
    const taskTeamSimplificationData = {
        title: "Team Task Simplification",
        heading: "Boards simplify your team's task management",
        description: "By defining each work stage, you can easily identify priorities and pinpoint any obstacles in progress.",
    }

    return (
        <section className="max-w-[1140px] mx-auto mt-[10rem] flex flex-col gap-28">
            <SubSectionWithCardHome title={organizeWithEaseData.title} heading={organizeWithEaseData.heading} description={organizeWithEaseData.description} left="true" />
            <SubSectionWithCardHome title={visualTaskProgressionData.title} heading={visualTaskProgressionData.heading} description={visualTaskProgressionData.description} left="false" />
            <SubSectionWithCardHome title={taskTeamSimplificationData.title} heading={taskTeamSimplificationData.heading} description={taskTeamSimplificationData.description} left="true" />
        </section>
    )
}

export default SectionWithCardHome;