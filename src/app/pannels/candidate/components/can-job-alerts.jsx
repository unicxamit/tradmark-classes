import { useCallback, useEffect, useRef, useState } from "react";
import JobViewPopup from "../../../common/popups/popup-job-view";
import { loadScript } from "../../../../globals/constants";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import "../condidateCss/applied-jobs.css";
import "../../../../StyleCss/Notification.css";
function CanJobAlertsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] =
    useState("Select Description");
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [filter, setFilter] = useState("Last 2 Months");

  const [notification, setNotification] = useState([
    {
      id: 1,
      title: "Source",
      description: "A strategic approach to website design..",
      date: "12/06/2025",
      read: false,
    },
    {
      id: 2,
      title: "Progress",
      description: "Providing the best SEO practices.",
      date: "22/07/2025",
      read: true,
    },
    {
      id: 3,
      title: "Requirements",
      description:
        "Custom web design solutions websites, focusing on user experience and modern aesthetics.",
      date: "10/08/2025",
      read: false,
    },
    {
      id: 4,
      title: "Source",
      description: "Analyzing data trends and insights.",
      date: "8/08/2025",
      read: true,
    },
    {
      id: 5,
      title: "Progress",
      description: "Managing project timelines and deliverables.",
      date: "20/07/2025",
      read: false,
    },
  ]);
  console.log(notification, "notification");
  const [filterNotification, setFilterNotification] = useState(notification);
  console.log(filterNotification, "filterNotification");
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);
  useEffect(() => {
    loadScript("js/custom.js");
  }, []);

  const getDateThreshold = useCallback((filterType) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    switch (filterType) {
      case "Today":
        return today;
      case "Yesterday":
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        return yesterday;
      case "Weekly":
        const oneWeekAgo = new Date(today);
        oneWeekAgo.setDate(today.getDate() - 7);
        return oneWeekAgo;
      case "15 days ago":
        const fifteenDaysAgo = new Date(today);
        fifteenDaysAgo.setDate(today.getDate() - 15);
        return fifteenDaysAgo;
      case "Last 1 Months":
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);
        console.log(oneMonthAgo, "yesterday");
        return oneMonthAgo;

      case "Last 2 Months":
        const twoMonthsAgo = new Date(today);
        twoMonthsAgo.setMonth(today.getMonth() - 2);
        return twoMonthsAgo;
      default:
        return new Date(0);
    }
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const thresholdDate = getDateThreshold(filter);

      const filtered = notification.filter((job) => {
        const [day, month, year] = job.date.split("/").map(Number);
        const jobDate = new Date(year, month - 1, day);
        jobDate.setHours(0, 0, 0, 0);
        return jobDate >= thresholdDate;
      });
      // console.log(filtered,"filtered data")
      setFilterNotification(filtered);
    };

    applyFilters();
  }, [filter, notification, getDateThreshold]);

  useEffect(() => {
    let filtered = [...notification];
    console.log(filtered, "value filtered");
    // Filter by tab (title)
    if (activeTab !== "All") {
      filtered = filtered.filter((n) => n.title === activeTab);
    }

    // Set unique descriptions for dropdown
    const descriptions = filtered.map((n) => n.description);
    const uniqueDescriptions = [...new Set(descriptions)];

    setDropdownOptions(uniqueDescriptions);

    // Reset dropdown if selected not in filtered list
    if (
      !uniqueDescriptions.includes(selectedDropdown) &&
      selectedDropdown !== "Select Description"
    ) {
      setSelectedDropdown("Select Description");
    }

    // Filter by selected dropdown
    if (selectedDropdown !== "Select Description") {
      filtered = filtered.filter((n) => n.description === selectedDropdown);
      // console.log(filtered,"filtered data")
    }

    // Filter by date again
    const thresholdDate = getDateThreshold(filter);
    console.log(thresholdDate, "thresholdDate");
    const finalFiltered = filtered.filter((job) => {
      const [day, month, year] = job.date.split("/").map(Number);
      const jobDate = new Date(year, month - 1, day);

      jobDate.setHours(0, 0, 0, 0);
      return jobDate >= thresholdDate;
    });
    console.log(finalFiltered, "finalfiltered");

    setFilterNotification(finalFiltered);
  }, [activeTab, selectedDropdown, notification, filter, getDateThreshold]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDropdownSelect = (option) => {
    setSelectedDropdown(option);
    setDropdownOpen(false);
  };

  return (
    <>
      <div className="twm-right-section-panels candidate-save-jobs site-bg-gray">
        {/*Filter Short By*/}
        <div className="product-filter-wraps d-flex justify-content-between align-items-center">
          <span className="woocommerce-result-count-lefts">Notification</span>
          <form
            className="woocommerce-ordering twm-filter-selects"
            method="get"
          >
            <span className="woocommerce-result-counts">Short By</span>
            <select
              className="wt-select-bar-2s selectpicker"
              data-live-search="true"
              data-bv-field="size"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="Last 2 Months">Last 2 Months</option>
              <option value="Last 1 Months">Last 1 Months</option>
              <option value="15 days ago">15 days ago</option>
              <option value="Weekly">Weekly</option>
              <option value="Yesterday">Yesterday</option>
              <option value="Today">Today</option>
            </select>
          </form>
        </div>

        <div className="d-flex flex-column flex-xl-row justify-content-between align-items-xl-center">
          <div
            className="d-flex justify-content-between align-items-center border-bottom border-2  bg-light rounded-3 overflow-hidden w-100 max-w-xl mb-2 shadow-sm"
            role="tablist"
            aria-label="Notification categories"
          >
            {["All", "Source", "Progress", "Requirements"].map((tab) => (
              <button
                key={tab}
                className={`flex-fill py-3 text-center cursor-pointer fw-semibold  transition-all duration-300 ease-in-out user-select-auto bg-light border-end border-gray-300 last:border-end-0 ${
                  activeTab === tab
                    ? "bg-white text-primary fw-semibold tabActive"
                    : "tabaction"
                }`}
                onClick={() => setActiveTab(tab)}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`panel-${tab}`}
                id={`tab-${tab}`}
                tabIndex={activeTab === tab ? 0 : -1}
              >
                {tab}
              </button>
            ))}
          </div>
          <div
            className="position-relative flex-xl-grow-1 d-flex justify-content-end text-start w-100 max-w-auto"
            ref={dropdownRef}
          >
            <button
              className="btn btn-light max-w-fit mb-2 border border-gray-300 shadow-sm px-4 py-3 fw-medium"
              style={{ color: "#374151" }}
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-controls="dropdown-menu"
              type="button"
            >
              Select description
              {dropdownOpen ? (
                <ChevronUp className="ms-2" size={20} />
              ) : (
                <ChevronDown className="ms-2" size={20} />
              )}
            </button>

            {dropdownOpen && (
              <div
                className="show position-absolute top-100 mt-2 rounded-3 shadow-lg border-0 bg-white"
                style={{
                  width: "14rem",
                  transformOrigin: "top right",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                }}
                id="dropdown-menu"
                role="menu"
                aria-orientation="vertical"
                tabIndex="-1"
              >
                {dropdownOptions.length === 0 ? (
                  <button
                    className="text-secondary disabled"
                    role="menuitem"
                    disabled
                    tabIndex="-1"
                    style={{ color: "#999", cursor: "default" }}
                  >
                    No descriptions
                  </button>
                ) : (
                  dropdownOptions.map((desc, index) => (
                    <button
                      className="dropdown-menu-items w-100 text-start px-3 py-2 border-0 bg-white"
                      key={index}
                      role="menuitem"
                      onClick={() => handleDropdownSelect(desc)}
                    >
                      {desc}
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
        <div className="table-responsive">
          <table
            className="table table-striped table-borderless "
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            <thead>
              <tr className="">
                <th className="py-4 px-3" style={{ fontWeight: "450" }}>
                  Title
                </th>
                <th
                  className="d-flex justify-content-center align-items-center py-4 px-3"
                  style={{ fontWeight: "450" }}
                >
                  {" "}
                  Description
                </th>
                <th className="py-4 px-3" style={{ fontWeight: "450" }}>
                  Date
                </th>
                <th className="py-4 px-3" style={{ fontWeight: "450" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="">
              {filterNotification.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-5 text-secondary fs-6"
                  >
                    No notifications found.
                  </td>
                </tr>
              ) : (
                filterNotification.map((notify) => (
                  <tr key={notify.id}>
                    <td
                      className="pt-3 px-3 "
                      style={{ fontSize: "14.5px", color: "#17171D" }}
                    >
                      {notify.title}
                    </td>
                    <td
                      className="pt-3 px-3"
                      style={{ fontSize: "14.5px", color: "#17171D" }}
                    >
                      {notify.description.substring(0, 50) + "..."}
                    </td>
                    <td
                      className="pt-3 px-3"
                      style={{ fontSize: "14.5px", color: "#17171D" }}
                    >
                      {notify.date}
                    </td>
                    <td
                      className="pt-3 px-3"
                      style={{ fontSize: "14.5px", color: "#17171D" }}
                    >
                      <a
                        data-bs-toggle="modal"
                        href="#saved-jobs-view"
                        role="button"
                        className="text-decoration-none custom-tooltip"
                      >
                        <span className="fa fa-eye" />
                        {/* <span className="custom-tooltip-block">View</span> */}
                      </a>
                      <button
                        title="Delete"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        className="btn btn-link text-primary "
                      >
                        <i className="fa fa-trash-alt" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <JobViewPopup />
    </>
  );
}

export default CanJobAlertsPage;
