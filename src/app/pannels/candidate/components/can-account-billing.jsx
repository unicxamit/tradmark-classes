import { useCallback, useEffect, useState } from "react";
import JobViewPopup from "../../../common/popups/popup-job-view";
import { loadScript } from "../../../../globals/constants";
import "../../../../StyleCss/Account_billing.css";
function CanAccountBilling() {
  const mockNotifications = [
    {
      id: 1,
      date: "2025-08-02",
      service: "Web Hosting",
      amount: "₹120.00",
      status: "Paid",
      paymentMethod: "Credit Card",
      invoiceNo: "INV-001",
      discount: "10% OFF",
    },
    {
      id: 2,
      date: "2025-07-04",
      service: "Domain Registration",
      amount: "₹15.00",
      status: "Failed",
      paymentMethod: "PayPal",
      invoiceNo: "INV-002",
      discount: "N/A",
    },
    {
      id: 3,
      date: "2025-07-12",
      service: "SSL Certificate",
      amount: "₹50.00",
      status: "Pending",
      paymentMethod: "Bank Transfer",
      invoiceNo: "INV-003",
      discount: "5% OFF",
    },
    {
      id: 4,
      date: "2025-07-10",
      service: "SSL Certificate",
      amount: "₹50.00",
      status: "Paid",
      paymentMethod: "Bank Transfer",
      invoiceNo: "INV-004",
      discount: "5% OFF",
    },
    {
      id: 5,
      date: "2025-08-03",
      service: "SSL Certificate",
      amount: "₹50.00",
      status: "Pending",
      paymentMethod: "Bank Transfer",
      invoiceNo: "INV-005",
      discount: "5% OFF",
    },
  ];

  const badgeColors = {
    Paid: "#28a745",
    Failed: "#dc3545",
    Pending: "#ffc107",
  };

  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("Last 2 Months");

  const handleDownloadInvoice = (invoiceNo) => {
    alert(`Downloading PDF for invoice: ${invoiceNo}`);
  };

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
      const filtered = mockNotifications.filter((job) => {
        const jobDate = new Date(job.date);
        jobDate.setHours(0, 0, 0, 0);
        return jobDate >= thresholdDate;
      });
      setNotifications(filtered);
    };

    applyFilters();
  }, [filter, getDateThreshold]);

  useEffect(() => {
    loadScript("js/custom.js");
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div className="twm-right-section-panels candidate-save-jobs site-bg-gray">
        <div className="product-filter-wraps d-flex justify-content-between align-items-center">
          <span className="woocommerce-result-count-lefts">
            Account & Billing
          </span>
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

        <div className="table-responsive mt-3">
          <table
            className="table twm-tables table-striped table-borderless"
            role="tabpanel"
          >
            <thead>
              <tr>
                <th>Date</th>
                <th>Invoice No.</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Due</th>
                <th>Discount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {notifications.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-8 text-gray-500 text-lg"
                  >
                    No notifications found.
                  </td>
                </tr>
              ) : (
                notifications.map((notify) => (
                  <tr key={notify.id}>
                    <td>{notify.date}</td>
                    <td>{notify.invoiceNo}</td>
                    <td>
                      <span
                        style={{
                          color: badgeColors[notify.status] || "#6c757d",
                        }}
                        aria-label={`Status: ${notify.status}`}
                      >
                        {notify.status}
                      </span>
                    </td>
                    <td>{notify.amount}</td>
                    <td>₹1000.00</td> {/* Static due, update if needed */}
                    <td>{notify.discount}</td>
                    <td>
                      <a
                        data-bs-toggle="modal"
                        href="#saved-jobs-view"
                        role="button"
                        className="custom-toltips"
                      >
                        <span className="fa fa-eye" />
                        <span className="custom-toltip-blocks">View</span>
                      </a>
                      <a
                        className="custom-toltips"
                        onClick={() => handleDownloadInvoice(notify.invoiceNo)}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="fa fa-download" />
                        <span className="custom-toltip-blocks">Download</span>
                      </a>
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

export default CanAccountBilling;
