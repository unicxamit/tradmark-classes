import React, { useEffect } from "react";

function MyServicesModal({
  open,
  onClose,
  selectedService,
  renderCategoryDetails,
}) {
  console.log(open, "category modal open details");
  // Handle body scroll and navbar visibility
  useEffect(() => {
    if (open) {
      // Prevent body scroll and hide navbar
      document.body.style.overflow = "hidden";
      // Add a class to handle navbar z-index
      document.body.classList.add("modal-open");
    } else {
      // Restore body scroll and navbar
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    }

    return () => {
      // Cleanup
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  // Don't render anything if modal is not open
  if (!open) return null;

  return (
    <>
      {/* Backdrop - with fade transition */}
      <div
        className={`position-fixed top-0 start-0 w-100 h-100 bg-dark`}
        style={{
          opacity: open ? 0.5 : 0,
          transition: "opacity 300ms ease-in-out",
          zIndex: 1000,
          pointerEvents: open ? "auto" : "none",
        }}
        onClick={onClose}
      />

      <div
        className="position-fixed top-0 end-0 h-100 bg-white shadow-lg drawer-panel"
        style={{
          width: "100%",
          maxWidth: "40rem",
          zIndex: 1001,
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="d-flex flex-column h-100">
          {/* Header */}
          <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom">
            <h2 className="h5 mb-0 fw-semibold text-dark">Service Details</h2>
            <button
              onClick={onClose}
              className="btn btn-link text-secondary p-0"
              style={{ boxShadow: "none" }}
            >
              <span className="visually-hidden">Close panel</span>
              <svg
                className="bi"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-grow-1 overflow-auto">
            <div className="px-4 py-3">
              {selectedService && (
                <div className="mb-4">
                  <h3 className="h6 fw-medium text-dark mb-3">
                    {selectedService.serviceName}
                  </h3>
                  <dl className="row">
                    <div className="col-6">
                      <dt className="small text-muted">Category</dt>
                      <dd className="mb-2 small text-dark">
                        {selectedService.category}
                      </dd>
                    </div>
                    <div className="col-6">
                      <dt className="small text-muted">Status</dt>
                      <dd className="mb-2 small text-dark">
                        {selectedService.status}
                      </dd>
                    </div>
                    <div className="col-6">
                      <dt className="small text-muted">Start Date</dt>
                      <dd className="mb-2 small text-dark">
                        {selectedService.startDate}
                      </dd>
                    </div>
                    <div className="col-6">
                      <dt className="small text-muted">Progress</dt>
                      <dd className="mb-2 small text-dark">
                        {selectedService.progress}%
                      </dd>
                    </div>
                  </dl>
                </div>
              )}

              {/* Expert Info */}
              <div className="border-top pt-3">
                <dt className="small text-muted">Assigned Expert</dt>
                <dd className="small text-dark">
                  {selectedService.assignedExpert?.name}
                  <span className="text-muted ms-2">
                    ({selectedService.assignedExpert?.email})
                  </span>
                </dd>
              </div>

              {/* Notes */}
              {selectedService.notes && (
                <div className="border-top pt-3">
                  <dt className="small text-muted">Notes</dt>
                  <dd className="small text-dark">{selectedService.notes}</dd>
                </div>
              )}

              {/* Category Specific Details */}
              <div className="border-top pt-3">
                {renderCategoryDetails &&
                  renderCategoryDetails(selectedService)}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-top px-4 py-3">
            <button onClick={onClose} className="btn btn-primary w-100">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyServicesModal;
