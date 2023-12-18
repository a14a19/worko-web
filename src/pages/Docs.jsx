import SideBarDocs from '../components/shared/SideBarDocs'
import { Route, Routes } from "react-router-dom";
import DocHome from '../components/docs/DocHome';
import WorkoAccount from '../components/docs/WorkoAccount';
import WorkoDashboard from '../components/docs/WorkoDashboard';
import ManagingTask from '../components/docs/ManagingTask';
import ComponentAlert from '../components/docs/ComponentAlert';
import SetUpIntegrations from '../components/docs/SetUpIntegrations';
import ThirdPartyPlateforms from '../components/docs/ThirdPartyPlateforms';
import InviteTeamMember from '../components/docs/InviteTeamMember';
import TaskAndDeadline from '../components/docs/TaskAndDeadline';
import Discusion from '../components/docs/Discusion';
import TaskAuto from '../components/docs/TaskAuto';
import ReportAnalytics from '../components/docs/ReportAnalytics';
import CustomizingWorko from '../components/docs/CustomizingWorko';

function Docs() {
    return (
        <section className='flex max-h-screen'>
            <SideBarDocs />
            <div className='max-w-[840px] m-auto px-5' style={{ width: "calc(100vw - 288px)" }}>
                <Routes>
                    <Route exact path="/" element={<DocHome />} />
                    <Route exact path="worko-account" element={<WorkoAccount />} />
                    <Route exact path="worko-dashboard" element={<WorkoDashboard />} />
                    <Route exact path="managing-task" element={<ManagingTask />} />
                    <Route exact path="worko-integration" element={<ComponentAlert />} />
                    <Route exact path="set-up-int" element={<SetUpIntegrations />} />
                    <Route exact path="third-party-plateform" element={<ThirdPartyPlateforms />} />
                    <Route exact path="invite-team-member" element={<InviteTeamMember />} />
                    <Route exact path="task-and-deadline" element={<TaskAndDeadline />} />
                    <Route exact path="discussion" element={<Discusion />} />
                    <Route exact path="task-auto" element={<TaskAuto />} />
                    <Route exact path="report-analytics" element={<ReportAnalytics />} />
                    <Route exact path="customizing-worko" element={<CustomizingWorko />} />
                </Routes>
            </div>
        </section>
    )
}

export default Docs