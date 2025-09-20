import JobZImage from "../../../common/jobz-img";
import SectionRecordsFilter from "../../public-user/sections/common/section-records-filter";
import SectionPagination from "../../public-user/sections/common/section-pagination";
import { useEffect, useState } from "react";
import { loadScript } from "../../../../globals/constants";
import MyServicesModal from "../common/openModal/MyServicesModal";
import "../../../../StyleCss/Myservicecss.css";

// import MyServicesModal from "../common/openModal/MyServicesModal"; // If not using, remove this import

function CanAppliedJobsPage() {
  const _filterConfig = {
    prefix: "My Services",
    // type: "Services",
    // total: "250",
    showRange: false,
    showingUpto: "",
  };
  const services = [
    {
      id: 1,
      date: "2023-06-15",
      serviceName: "Trademark Filing",
      category: "Legal",
      status: "Ongoing",
      startDate: "2023-06-01",
      assignedExpert: { name: "Rahul Mehta", email: "rahul.mehta@example.com" },
      notes: "Hearing scheduled on July 20th.",
      progress: 70,
      caseNo: "TRD/34567/2023",
      court: "Delhi High Court",
      documentLinks: ["poa.pdf", "affidavit.pdf"],
    },
    {
      id: 2,
      date: "2023-07-20",
      serviceName: "Website Development",
      category: "Digital",
      status: "Done",
      startDate: "2023-06-25",
      assignedExpert: { name: "Priya Singh", email: "priya.singh@example.com" },
      notes: "Website handed over. Awaiting client feedback.",
      progress: 100,
      projectLink: "https://clientsite.com",
      designFiles: ["homepage.fig", "logo.png"],
      feedback: "Excellent work!",
    },
    {
      id: 3,
      date: "2023-09-10",
      serviceName: "ISO Certification",
      category: "Certifications",
      status: "Pending",
      startDate: "2023-08-20",
      assignedExpert: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
      },
      notes: "Awaiting final approval.",
      progress: 50,
      certificateType: "ISO 9001",
      documentLinks: ["cert1.pdf"],
    },
    {
      id: 4,
      date: "2023-10-05",
      serviceName: "Company Incorporation",
      category: "Business Setup",
      status: "Ongoing",
      startDate: "2023-09-25",
      assignedExpert: { name: "Arjun Patel", email: "arjun.patel@example.com" },
      notes: "Documents submitted, waiting for approval.",
      progress: 65,
      entityType: "Private Limited",
      state: "Maharashtra",
      registrationDocs: ["incorporation.pdf", "pan.pdf"],
    },
    {
      id: 5,
      date: "2023-08-18",
      serviceName: "FSSAI License",
      category: "Licences",
      status: "Done",
      startDate: "2023-07-28",
      assignedExpert: {
        name: "Megha Kapoor",
        email: "megha.kapoor@example.com",
      },
      notes: "License issued and delivered to client.",
      progress: 100,
      licenseType: "FSSAI Basic",
      applicationNo: "FSS/2023/11002",
      authority: "FSSAI India",
    },
    {
      id: 6,
      date: "2023-11-11",
      serviceName: "Form MGT-7 Filing",
      category: "ROC",
      status: "Pending",
      startDate: "2023-10-28",
      assignedExpert: { name: "Vikram Shah", email: "vikram.shah@example.com" },
      notes: "Client needs to submit signed documents.",
      progress: 30,
      companyName: "StartupX Pvt Ltd",
      formNo: "MGT-7",
      filingDate: "2023-11-05",
    },
    {
      id: 7,
      serviceName: "Trademark Opposition Case",
      category: "Legal",
      status: "Ongoing",
      startDate: "2023-06-01",
      assignedExpert: { name: "Rakesh Mehta", email: "rakesh.adv@example.com" },
      notes: "Waiting for counter-reply from opposite party.",
      progress: 60,
      caseNo: "TRD/2023/00982",
      caseType: "Trademark Opposition",
      court: "Delhi High Court",
      filingDate: "2023-06-01",
      hearingDate: "2023-07-10",
      lawyer: { name: "Adv. Rakesh Mehta", email: "rakesh.adv@example.com" },
      otherParties: ["XYZ Pvt Ltd"],
      filedDocs: ["opposition_form.pdf"],
      clientDocs: ["poa.pdf", "affidavit.pdf"],
      verdictLink: null,
      statusUpdates: [
        { date: "2023-06-01", note: "Filed opposition" },
        { date: "2023-06-10", note: "Court accepted filing" },
        { date: "2023-06-25", note: "Hearing scheduled" },
      ],
    },
    {
      id: 8,
      serviceName: "Website Development",
      category: "Digital",
      status: "Done",
      startDate: "2024-04-01",
      estimatedCompletion: "2024-05-01",
      actualCompletion: "2024-04-28",
      assignedExpert: { name: "Priya Sharma", email: "priya@agency.com" },
      coordinator: { name: "Rahul Taneja" },
      notes: "Project completed early with all revisions.",
      progress: 100,
      projectType: "Website",
      tools: ["React", "TailwindCSS", "Figma"],
      designAssets: ["homepage_design.fig", "logo_pack.zip"],
      clientInputs: ["about_us.txt", "team_images.zip"],
      demoLink: "https://clientsite.example.com",
      revisions: { done: 2, total: 3 },
      feedback: "Excellent UI/UX, minor content edits handled efficiently.",
    },
    {
      id: 9,
      serviceName: "ISO Certification",
      category: "Certifications",
      status: "Approved",
      startDate: "2024-01-15",
      certificateType: "ISO 9001",
      applicationNo: "ISO-2024-00123",
      issuingAuthority: "ISO Registrar Pvt Ltd",
      applicationDate: "2024-01-18",
      approvalDate: "2024-02-10",
      validityFrom: "2024-02-10",
      validityTo: "2027-02-10",
      assignedExpert: { name: "Nikita Verma", email: "nikita@certify.com" },
      documents: ["ID Proof.pdf", "Business Registration.pdf"],
      certificateFile: "/certificates/iso_2024.pdf",
      statusTracker: "Submitted > Under Review > Approved",
      paymentReceipt: "receipt_iso2024.pdf",
      remarks: "Client needs to renew before Feb 2027.",
      progress: 100,
    },
    {
      id: 18,
      serviceName: "Company Incorporation",
      category: "ROC",
      status: "Approved",
      startDate: "2024-07-01",
      rocType: "Private Limited Incorporation",
      companyName: "UNICX TECHNOLOGIES PRIVATE LIMITED",
      cin: "U12345MH2024PTC567890",
      applicationDate: "2024-07-03",
      formType: "SPICe+",
      formStatus: "Approved",
      assignedExpert: { name: "Kunal Shah", email: "kunal.roc@unicx.in" },
      documents: ["MOA.pdf", "AOA.pdf", "PAN.pdf"],
      receiptFile: "/roc/ack_spice.pdf",
      nextDueDate: "2025-07-01",
      filingFee: "5200",
      certificateFile: "/roc/incorporation_cert.pdf",
      remarks: "ROC completed, awaiting GST registration.",
      progress: 100,
    },
    {
      id: 29,
      serviceName: "GST Registration",
      category: "Licences",
      status: "In Review",
      startDate: "2025-05-15",
      licenseType: "GST",
      applicantName: "Rohit Enterprises",
      businessName: "Rohit Enterprises Pvt Ltd",
      applicationDate: "2025-05-16",
      applicationNo: "ARN-241563248790",
      licenseNo: "",
      issuingAuthority: "GSTN",
      assignedExpert: { name: "Suman Verma", email: "suman.licences@unicx.in" },
      documents: ["PAN.pdf", "AddressProof.pdf", "Cheque.pdf"],
      receiptFile: "/licences/gst_acknowledgement.pdf",
      validFrom: "",
      validTo: "",
      feePaid: "2500",
      remarks: "Waiting for GST officer approval",
      progress: 60,
    },
    {
      id: 88,
      serviceName: "Business Setup",
      category: "Business Setup",
      status: "In Progress",
      startDate: "2025-04-15",
      businessType: "Private Limited",
      applicantName: "Rohit Sharma",
      assignedExpert: { name: "Preeti Kaur", email: "preeti@unicx.in" },
      progress: 60,
      notes: "Trademark will start after company reg. finalization",
      includedServices: [
        { name: "Company Registration", status: "Completed" },
        { name: "GST Registration", status: "In Progress" },
        { name: "MSME Certification", status: "Pending" },
        { name: "Logo Design", status: "Completed" },
        { name: "Trademark Filing", status: "Not Started" },
      ],
      documents: ["Incorporation.pdf", "Pan.pdf", "Acknowledgement.pdf"],
    },
  ];
  const tabs = [
    "All",
    "Legal",
    "Digital",
    "Certifications",
    "ROC",
    "Licences",
    "Business Setup",
  ];

  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    loadScript("js/custom.js");

    const handleEscap = (e) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", handleEscap);
    return () => window.removeEventListener("keydown", handleEscap);
  }, []);

  const filteredServices =
    activeTab === "All"
      ? services
      : services.filter((s) => s.category === activeTab);
  const getStatusClassName = (status) =>
    status?.toLowerCase().replace(/\s/g, "-");

  const renderCategoryDetails = (service) => {
    if (!service) return null;
    switch (service.category) {
      case "Legal":
        return (
          <div className="card-section">
            <h4>Legal Details</h4>
            <p>
              <strong>Case No:</strong> {service.caseNo || "-"}
            </p>
            <p>
              <strong>Case Type:</strong> {service.caseType || "-"}
            </p>
            <p>
              <strong>Court:</strong> {service.court || "-"}
            </p>
            <p>
              <strong>Filing Date:</strong> {service.filingDate || "-"}
            </p>
            <p>
              <strong>Next Hearing Date:</strong> {service.hearingDate || "-"}
            </p>
            <p>
              <strong>Lawyer Assigned:</strong> {service.lawyer?.name || "-"} (
              {service.lawyer?.email || "-"})
            </p>
            <p>
              <strong>Additional Parties:</strong>{" "}
              {service.otherParties?.join(", ") || "-"}
            </p>
            <p>
              <strong>Filed Documents:</strong>
            </p>
            <ul>
              {service.filedDocs?.length ? (
                service.filedDocs.map((doc, i) => <li key={i}>{doc}</li>)
              ) : (
                <li>-</li>
              )}
            </ul>
            <p>
              <strong>Client Uploaded Documents:</strong>
            </p>
            <ul>
              {service.clientDocs?.length ? (
                service.clientDocs.map((doc, i) => <li key={i}>{doc}</li>)
              ) : (
                <li>-</li>
              )}
            </ul>
            <p>
              <strong>Verdict / Order Copy:</strong>{" "}
              {service.verdictLink ? (
                <a href={service.verdictLink} target="_blank" rel="noreferrer">
                  View
                </a>
              ) : (
                "-"
              )}
            </p>
            <p>
              <strong>Case Timeline:</strong>
            </p>
            <ul>
              {service.statusUpdates?.length ? (
                service.statusUpdates.map((update, i) => (
                  <li key={i}>
                    {update.date}: {update.note}
                  </li>
                ))
              ) : (
                <li>-</li>
              )}
            </ul>
          </div>
        );
      case "Digital":
        return (
          <div className="card-section">
            <h4>Digital Service Details</h4>
            <p>
              <strong>Project Type:</strong> {service.projectType || "-"}
            </p>
            <p>
              <strong>Platform / Tools Used:</strong>{" "}
              {service.tools?.join(", ") || "-"}
            </p>
            <p>
              <strong>Estimated Completion:</strong>{" "}
              {service.estimatedCompletion || "-"}
            </p>
            <p>
              <strong>Actual Completion:</strong>{" "}
              {service.actualCompletion || "-"}
            </p>
            <p>
              <strong>Assigned Coordinator:</strong>{" "}
              {service.coordinator?.name || "-"}
            </p>
            <p>
              <strong>Design Files / Assets:</strong>
            </p>
            <ul>
              {service.designAssets?.length ? (
                service.designAssets.map((doc, i) => <li key={i}>{doc}</li>)
              ) : (
                <li>-</li>
              )}
            </ul>
            <p>
              <strong>Client Inputs Received:</strong>
            </p>
            <ul>
              {service.clientInputs?.length ? (
                service.clientInputs.map((input, i) => <li key={i}>{input}</li>)
              ) : (
                <li>-</li>
              )}
            </ul>
            <p>
              <strong>Live Link / Demo:</strong>{" "}
              {service.demoLink ? (
                <a href={service.demoLink} target="_blank" rel="noreferrer">
                  {service.demoLink}
                </a>
              ) : (
                "-"
              )}
            </p>
            <p>
              <strong>Revision Rounds:</strong> {service.revisions?.done || 0} /{" "}
              {service.revisions?.total || 0}
            </p>
            <p>
              <strong>Feedback Notes:</strong> {service.feedback || "-"}
            </p>
          </div>
        );
      case "Certifications":
        return (
          <div className="card-section">
            <h4>Certification Details</h4>
            <p>
              <strong>Certification Type:</strong>{" "}
              {service.certificateType || "-"}
            </p>
            <p>
              <strong>Application No.:</strong> {service.applicationNo || "-"}
            </p>
            <p>
              <strong>Authority:</strong> {service.issuingAuthority || "-"}
            </p>
            <p>
              <strong>Application Date:</strong>{" "}
              {service.applicationDate || "-"}
            </p>
            <p>
              <strong>Approval Date:</strong> {service.approvalDate || "-"}
            </p>
            <p>
              <strong>Validity Period:</strong> {service.validityFrom || "-"} to{" "}
              {service.validityTo || "-"}
            </p>
            <p>
              <strong>Supporting Documents:</strong>
            </p>
            <ul>
              {service.documents?.length ? (
                service.documents.map((doc, i) => <li key={i}>{doc}</li>)
              ) : (
                <li>-</li>
              )}
            </ul>
            <p>
              <strong>Download Certificate:</strong>{" "}
              {service.certificateFile ? (
                <a href={service.certificateFile} download>
                  Download
                </a>
              ) : (
                "-"
              )}
            </p>
            <p>
              <strong>Status Tracker:</strong> {service.statusTracker || "-"}
            </p>
            <p>
              <strong>Payment Receipt:</strong> {service.paymentReceipt || "-"}
            </p>
            <p>
              <strong>Remarks:</strong> {service.remarks || "-"}
            </p>
          </div>
        );
      case "ROC":
        return (
          <div className="card-section">
            <h4>ROC Filing Details</h4>
            <p>
              <strong>Service Type:</strong> {service.rocType || "-"}
            </p>
            <p>
              <strong>Company Name:</strong> {service.companyName || "-"}
            </p>
            <p>
              <strong>CIN:</strong> {service.cin || "-"}
            </p>
            <p>
              <strong>Application Date:</strong>{" "}
              {service.applicationDate || "-"}
            </p>
            <p>
              <strong>Filing Form:</strong> {service.formType || "-"}
            </p>
            <p>
              <strong>Form Status:</strong> {service.formStatus || "-"}
            </p>
            <p>
              <strong>Document Uploads:</strong>
            </p>
            <ul>
              {service.documents?.length ? (
                service.documents.map((doc, i) => <li key={i}>{doc}</li>)
              ) : (
                <li>-</li>
              )}
            </ul>
            <p>
              <strong>Acknowledgement Receipt:</strong>{" "}
              {service.receiptFile ? (
                <a href={service.receiptFile} download>
                  Download
                </a>
              ) : (
                "-"
              )}
            </p>
            <p>
              <strong>Next Due Date:</strong> {service.nextDueDate || "-"}
            </p>
            <p>
              <strong>Filing Fee Paid:</strong> ₹{service.filingFee || "-"}
            </p>
            <p>
              <strong>Issued Certificate:</strong>{" "}
              {service.certificateFile ? (
                <a href={service.certificateFile} download>
                  Download
                </a>
              ) : (
                "-"
              )}
            </p>
            <p>
              <strong>Remarks:</strong> {service.remarks || "-"}
            </p>
          </div>
        );
      case "Licences":
        return (
          <div className="card-section">
            <h4>License Details</h4>
            <p>
              <strong>License Type:</strong> {service.licenseType || "-"}
            </p>
            <p>
              <strong>Applicant Name:</strong> {service.applicantName || "-"}
            </p>
            <p>
              <strong>Business Name:</strong> {service.businessName || "-"}
            </p>
            <p>
              <strong>Application Date:</strong>{" "}
              {service.applicationDate || "-"}
            </p>
            <p>
              <strong>Application No.:</strong> {service.applicationNo || "-"}
            </p>
            <p>
              <strong>License No.:</strong> {service.licenseNo || "-"}
            </p>
            <p>
              <strong>Issuing Authority:</strong>{" "}
              {service.issuingAuthority || "-"}
            </p>
            <p>
              <strong>Document Uploads:</strong>
            </p>
            <ul>
              {service.documents?.length ? (
                service.documents.map((doc, i) => <li key={i}>{doc}</li>)
              ) : (
                <li>-</li>
              )}
            </ul>
            <p>
              <strong>Acknowledgement Receipt:</strong>{" "}
              {service.receiptFile ? (
                <a href={service.receiptFile} download>
                  Download
                </a>
              ) : (
                "-"
              )}
            </p>
            <p>
              <strong>License Validity:</strong> {service.validFrom || "-"} to{" "}
              {service.validTo || "-"}
            </p>
            <p>
              <strong>Fee Paid:</strong> ₹{service.feePaid || "-"}
            </p>
            <p>
              <strong>Status:</strong> {service.status || "-"}
            </p>
            <p>
              <strong>Remarks:</strong> {service.remarks || "-"}
            </p>
          </div>
        );
      case "Business Setup":
        return (
          <div className="card-section">
            <h4>Business Setup Overview</h4>
            <p>
              <strong>Business Type:</strong> {service.businessType || "-"}
            </p>
            <p>
              <strong>Applicant Name:</strong> {service.applicantName || "-"}
            </p>
            <p>
              <strong>Start Date:</strong> {service.startDate || "-"}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`status-tag ${getStatusClassName(service.status)}`}
              >
                {service.status}
              </span>
            </p>
            <p>
              <strong>Progress:</strong> {service.progress || 0}%
            </p>
            <p>
              <strong>Assigned Expert:</strong>{" "}
              {service.assignedExpert?.name || "-"} (
              <a href={`mailto:${service.assignedExpert?.email || ""}`}>
                {service.assignedExpert?.email || "-"}
              </a>
              )
            </p>
            <div>
              <h4>Included Services</h4>
              <ul>
                {service.includedServices?.length ? (
                  service.includedServices.map((item, i) => (
                    <li key={i}>
                      <strong>{item.name}</strong> -{" "}
                      <span
                        className={`status-tag ${getStatusClassName(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </li>
                  ))
                ) : (
                  <li>-</li>
                )}
              </ul>
            </div>
            <div>
              <h4>Notes</h4>
              <p>{service.notes || "-"}</p>
            </div>
            <div>
              <h4>Documents</h4>
              <ul>
                {service.documents?.length ? (
                  service.documents.map((doc, i) => (
                    <li key={i}>
                      <a href={`/docs/${doc}`} download>
                        {doc}
                      </a>
                    </li>
                  ))
                ) : (
                  <li>-</li>
                )}
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className="twm-right-section-panels candidate-save-jobs site-bg-grays"
        style={{ padding: "0 10px" }}
      >
        {/*Filter Short By*/}
        <SectionRecordsFilter _config={_filterConfig} />

        <div className="overflow-auto hide-scrollbar  bg-light rounded-3 mb-3 shadow-sm w-100 mx-auto">
          <div
            className="d-flex flex-nowrap"
            style={{ minWidth: "fit-content" }}
          >
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`panel-${tab}`}
                id={`tab-${tab}`}
                tabIndex={activeTab === tab ? 0 : -1}
                className={`flex-grow-1 py-2  text-center border-start  border-2  transition-all duration-300 ease-in-out
          ${
            activeTab === tab
              ? "bg-white text-primary tabActive"
              : "bg-light text-dark tabaction"
          }`}
                style={{ minWidth: "120px" }}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        <div className="twm-jobs-list-wraps">
          <ul className="list-unstyleds">
            {filteredServices.map((service) => (
              <li key={service.id}>
                <div className="twm-jobs-list-style1s mb-5 cursor-pointer">
                  <div className="twm-medias">
                    <JobZImage
                      src={`/images/icons/${service.category.toLowerCase()}.png`}
                      alt={service.category}
                    />
                  </div>
                  <div
                    className="twm-mid-contents"
                    style={{
                      lineHeight: "1",
                      marginLeft: "50px",
                    }}
                  >
                    <h4
                      className="twm-job-titles "
                      style={{ fontSize: "15px", color: "#17171D" }}
                    >
                      {service.serviceName}{" "}
                      <span className="twm-job-post-durations">
                        /{service.date}
                      </span>
                    </h4>
                    <p className="twm-job-addresss">
                      Assigned Expert: {service.assignedExpert?.name || "-"}
                    </p>
                    <p className="twm-job-websitess site-text-primarys">
                      Category: {service.category}
                    </p>
                  </div>
                  <div className="twm-right-contents">
                    <div className="twm-jobs-categorys green">
                      <span className={`twm-bg-green`}>{service.status}</span>
                    </div>
                    <div className="twm-jobs-amounts">
                      {service.progress}% <span>Progress</span>
                    </div>
                    <span
                      className="twm-jobs-browses site-text-primarys"
                      role="button"
                      onClick={() => {
                        setSelectedService(service);
                        setOpenModal(true);
                      }}
                      aria-label={`View details of ${service.serviceName}`}
                    >
                      View
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <MyServicesModal
            open={openModal}
            onClose={() => {
              setOpenModal(false);
              setSelectedService(null);
            }}
            selectedService={selectedService}
            renderCategoryDetails={renderCategoryDetails}
          />
        </div>
      </div>
    </>
  );
}
export default CanAppliedJobsPage;
