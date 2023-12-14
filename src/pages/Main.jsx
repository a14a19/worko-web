import Home from "./Home"
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Changelog from "../components/Changelog/Changelog";
import Integrations from "../components/integration/Integrations";
import IntegrationsLink from "../components/integration/IntegrationLink";
import Dpa from "../components/resources/Dpa";
import PrivacyPolicy from "../components/resources/PrivacyPolicy";
import TermsOfServices from "../components/resources/TermsOfServices";
import ReportVulnerability from "../components/resources/ReportVulnerability";

function Main() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="changelog" element={<Changelog />} />
                <Route exact path="integration" element={<Integrations />} />
                <Route exact path="integration/:intLink" element={<IntegrationsLink />} />
                <Route exact path="legal/dpa" element={<Dpa />} />
                <Route exact path="legal/privacy-policies" element={<PrivacyPolicy />} />
                <Route exact path="legal/terms-of-services" element={<TermsOfServices />} />
                <Route exact path="legal/report-vulnerability" element={<ReportVulnerability />} />
            </Routes>
        </>
    )
}

export default Main;