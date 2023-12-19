import Home from "./Home"
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Changelog from "../components/Changelog/Changelog";
import Integrations from "../components/integration/Integrations";
import IntegrationsLink from "../components/integration/IntegrationsLink";
import Dpa from "../components/resources/Dpa";
import PrivacyPolicy from "../components/resources/PrivacyPolicy";
import TermsOfServices from "../components/resources/TermsOfServices";
import ReportVulnerability from "../components/resources/ReportVulnerability";
import Footer from "../components/footer/Footer";
import PricingPage from "./PricingPage";
import About from "../components/company/about/About";
import Blog from "../components/company/blog/Blog";
import Contact from "../components/company/contact/Contact";

function Main() {
    return (
        <main className="px-5">
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="changelog" element={<Changelog />} />
                <Route exact path="integration" element={<Integrations />} />
                <Route exact path="pricing" element={<PricingPage />} />
                {/* <Route exact path="about" element={<About />} />
                <Route exact path="blog" element={<Blog />} />
                <Route exact path="contact" element={<Contact />} /> */}
                <Route exact path="integrations/:intLink" element={<IntegrationsLink />} />
                <Route exact path="legal/dpa" element={<Dpa />} />
                <Route exact path="legal/privacy-policies" element={<PrivacyPolicy />} />
                <Route exact path="legal/terms-of-services" element={<TermsOfServices />} />
                <Route exact path="legal/report-vulnerability" element={<ReportVulnerability />} />
            </Routes>
            <Footer />
        </main>
    )
}

export default Main;