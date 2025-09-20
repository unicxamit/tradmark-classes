import SectionFaqGeneral from "../../sections/faq/section-faq-general";
import SectionFaqTrademark from "../../sections/faq/section-faq-Trademark";
import SectionFaqCompany from "../../sections/faq/section-faq-Company";
import SectionFaqDigital from "../../sections/faq/section-faq-Digital";
import SectionFaqGST from "../../sections/faq/section-faq-GST";
import SectionFaqStartup from "../../sections/faq/section-faq-Startup";

function FaqPage() {
    return (
        <>
            <div className="section-full p-t120  p-b90 site-bg-white">
                <div className="container">
                    <div className="section-content">
                        <div className="twm-tabs-style-1 center">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#General" type="button" role="tab">General</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#Trademark" type="button" role="tab" aria-controls="Trademark">Trademark</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#Company" type="button" role="tab" aria-controls="Company">Company</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#Digital" type="button" role="tab" aria-controls="Digital">Digital</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#Startup" type="button" role="tab" aria-controls="Startup">Startup</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#GST" type="button" role="tab" aria-controls="GST">GST</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                {/*Tabs content one*/}
                                <div className="tab-pane fade show active" id="General" role="tabpanel">
                                    <SectionFaqGeneral />
                                </div>
                                {/*Tabs content two*/}
                                <div className="tab-pane fade" id="Trademark" role="tabpanel">
                                    <SectionFaqTrademark />
                                </div>
                                {/*Tabs content three*/}
                                <div className="tab-pane fade" id="Company" role="tabpanel">
                                    <SectionFaqCompany />
                                </div>
                                {/*Tabs content Four*/}
                                <div className="tab-pane fade" id="Digital" role="tabpanel">
                                    <SectionFaqDigital />
                                </div>
                                <div className="tab-pane fade" id="Startup" role="tabpanel">
                                    <SectionFaqStartup />
                                </div>
                                <div className="tab-pane fade" id="GST" role="tabpanel">
                                    <SectionFaqGST />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FaqPage;