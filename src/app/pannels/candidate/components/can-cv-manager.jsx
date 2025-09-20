import { NavLink } from "react-router-dom";
import JobZImage from "../../../common/jobz-img";
import { publicUser } from "../../../../globals/route-names";
import { loadScript, publicUrlFor } from "../../../../globals/constants";
import { useEffect } from "react";

function CanCVManagerPage() {
  const recommendedServices = [
    {
      id: 1,
      name: "Trademark Registration",
      category: "Legal",
      priority: "Essential",
      location: "India",
      type: "One-Time",
      downloadLink: "files/sample-trademark.pdf",
    },
    {
      id: 2,
      name: "Website Development",
      category: "Digital",
      priority: "Suggested",
      location: "India",
      type: "Subscription",
      downloadLink: "files/sample-website.pdf",
    },
    {
      id: 3,
      name: "ISO Certification",
      category: "Certifications",
      priority: "Add-on",
      location: "India",
      type: "One-Time",
      downloadLink: "files/sample-iso.pdf",
    },
  ];

  useEffect(() => {
    loadScript("js/custom.js");
  }, []);

  const ribbonClass = (priority) => {
    switch (priority.toLowerCase()) {
      case "essential":
        return "Essential";
      case "suggested":
        return "Suggested";
      case "add-on":
        return "Add-on";
      default:
        return "";
    }
  };

  return (
    <>
      <style>{`
        .twm-right-section-panel {
          background-color: #f9fafb;
          padding-top: 3rem;
          padding-bottom: 3rem;
          font-family: 'Poppins', sans-serif;
          max-width: 1200px;
          margin: auto;
        }
        .product-filter-wrap {
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .woocommerce-result-count-left {
          font-weight: 600;
          font-size: 1.25rem;
          color: #111827;
        }
        select.wt-select-bar-2 {
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          border: 1px solid #d1d5db;
          font-size: 1rem;
          color: #374151;
          cursor: pointer;
          min-width: 160px;
        }
        .twm-cv-manager-list-wrap ul {
          list-style: none;
          padding: 0 1.5rem;
          margin: 1.5rem 0 0 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }
        .twm-cv-manager-list-style1 {
          position: relative;
          background: white;
          padding: 1.5rem 1.5rem 2rem 1.5rem;
          border-radius: 0.75rem;
          box-shadow: 0 1px 4px rgb(0 0 0 / 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 400px;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .twm-cv-manager-list-style1:hover {
          box-shadow: 0 8px 24px rgb(0 0 0 / 0.15);
          transform: translateY(-5px);
        }
        .priority-ribbon {
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
          overflow: hidden;
          pointer-events: none;
          user-select: none;
          z-index: 5;
        }
        .priority-ribbon span {
          position: absolute;
          top: 14px;
          right: -40px;
          width: 140px;
          padding: 8px 0;
          background-color: #e53e3e;
          color: #fff;
          font-weight: 700;
          font-size: 12px;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.06em;
          text-align: center;
          border-radius: 0 0 6px 6px;
          transform: rotate(45deg);
          box-shadow: 0 3px 8px rgba(0,0,0,0.18);
          text-shadow: 0 0 4px rgba(0,0,0,0.25);
        }
        .priority-ribbon.Essential span {
          background-color: #e53e3e;
        }
        .priority-ribbon.Suggested span {
          background-color: #3182ce;
        }
        .priority-ribbon.Add-on span {
          background-color: #d69e2e;
          color: #222;
          text-shadow: none;
        }
        .twm-media-pic {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 1.5rem;
          flex-shrink: 0;
        }
        .twm-mid-content {
          text-align: center;
          width: 100%;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .twm-job-title h4 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          color: #2563eb;
          transition: color 0.3s ease;
          cursor: pointer;
        }
        .twm-job-title h4:hover {
          color: #1d4ed8;
        }
        h2.px-1 {
          font-weight: 600;
          font-size: 1.25rem;
          margin-top: 0.25rem;
          margin-bottom: 0.75rem;
          color: #374151;
        }
        .twm-left-info p {
          margin: 0.25rem 0;
          color: #6b7280;
          font-size: 0.9rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.4rem;
        }
        .twm-fot-content {
          margin-top: 1.25rem;
          display: flex;
          justify-content: center;
          gap: 2rem;
          align-items: center;
          font-size: 1rem;
          color: #4b5563;
        }
        .twm-view-button {
          display: flex;
          gap: 1.25rem;
        }
        .twm-view-button a {
          color: #2563eb;
          font-size: 1.4rem;
          transition: color 0.3s ease;
          cursor: pointer;
        }
        .twm-view-button a:hover {
          color: #1d4ed8;
        }
      `}</style>

      <div className="twm-right-section-panel candidate-save-job site-bg-gray">
        <div className="product-filter-wrap d-flex justify-content-between align-items-center">
          <span className="woocommerce-result-count-left">Upgrade Plan</span>
          <form className="woocommerce-ordering twm-filter-select" method="get">
            <span className="woocommerce-result-count">Short By</span>
            <select className="wt-select-bar-2">
              <option>Last 2 Months</option>
              <option>Last 1 Month</option>
              <option>15 Days Ago</option>
              <option>Weekly</option>
              <option>Yesterday</option>
              <option>Today</option>
            </select>
          </form>
        </div>

        <div className="twm-cv-manager-list-wrap">
          <ul>
            {recommendedServices.map((update) => (
              <li key={update.id}>
                <div className="twm-cv-manager-list-style1 relative">
                  <div
                    className={`priority-ribbon ${ribbonClass(
                      update.priority
                    )}`}
                  >
                    <span>{update.priority}</span>
                  </div>
                  <div className="twm-media">
                    <div className="twm-media-pic">
                      <JobZImage
                        src="images/candidates/pic1.jpg"
                        alt={update.name}
                      />
                    </div>
                  </div>
                  <div className="twm-mid-content">
                    <NavLink
                      to={publicUser.candidate.DETAIL1}
                      className="twm-job-title"
                      title={update.name}
                    >
                      <h4>{update.name}</h4>
                    </NavLink>
                    <h2 className="px-1">{update.category}</h2>
                    <div className="twm-fot-content">
                      <div className="twm-left-info">
                        <p className="twm-candidate-address">
                          <i className="feather-map-pin" />
                          {update.location}
                        </p>
                        <div className="twm-job-post-duration">
                          {update.type}
                        </div>
                      </div>
                      <div className="twm-view-button">
                        <a
                          href={publicUrlFor(update.downloadLink)}
                          title="Download"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-download" />
                        </a>
                        <a
                          href="#"
                          title="Delete"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-trash-alt" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CanCVManagerPage;
