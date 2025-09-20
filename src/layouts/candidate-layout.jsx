import React from "react";
import Header1 from "../app/common/header/header1";
import CandidateRoutes from "../routing/candidate-routes";
import SignUpPopup from "../app/common/popups/popup-signup";
import SignInPopup from "../app/common/popups/popup-signin";
import CanSidebarSection from "../app/pannels/candidate/sections/common/can-sidebar";
import InnerPageBanner from "../app/common/inner-page-banner";
import Footer1 from "../app/common/footer/footer1";
import { banner, setBanner } from "../globals/banner-data";
import { NavLink, useLocation } from "react-router-dom";
import { getHeaderConfig } from "../globals/layout-config";
import { RiDashboardFill } from "react-icons/ri";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { useEffect, useRef, useState, useMemo } from "react";
import { candidate, canRoute, publicUser } from "../globals/route-names";
import { publicUrlFor, setMenuActive } from "../globals/constants";
import JobZImage from "../app/common/jobz-img";
import "../StyleCss/condidate-layout.css";
function CandidateLayout() {
  const currentpath = useLocation().pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 400);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 400);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // Agar click menu ke andar ya icon pe hua to ignore karo
      if (
        menuRef.current?.contains(event.target) ||
        iconRef.current?.contains(event.target)
      ) {
        return;
      }
      // Baki sab case me close kar do
      setMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="page-wraper">
        <Header1 _config={getHeaderConfig(currentpath)} />

        {/* <InnerPageBanner _data={setBanner(currentpath)} /> */}

        <div className="page-content">
          <div className="section-fulls  site-bg-white">
            <div className="">
              <div className="row">
                {isLarge ? (
                  <>
                    {" "}
                    <div className="col-xl-3 col-lg-4 col-md-12 rightSidebar m-b30">
                      <div className="side-bar-st-1 ">
                        <CanSidebarSection />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      ref={iconRef}
                      className="menu-container"
                      style={{
                        fontSize: "40px",
                        // backgroundColor: "#000",

                        cursor: "pointer",
                      }}
                    >
                      {!menuOpen && (
                        <BsArrowRightSquareFill
                          onClick={() => setMenuOpen(!menuOpen)}
                          // className="bg-black "
                        />
                      )}
                    </div>
                    <div
                      // ref={menuRef}
                      className={`mobile-menu ${menuOpen ? "open" : "close"}`}
                    >
                      <div
                        onClick={() => setMenuOpen(false)}
                        style={{
                          marginBottom: "20px",
                          cursor: "pointer",
                          marginLeft: "19.5rem",
                          // fontSize: "40px",
                          position: "fixed",
                        }}
                      >
                        <BsArrowLeftSquareFill size={30} />
                      </div>
                      <div className="twm-candidate-profile-pic">
                        <JobZImage src="images/user-avtar/pic4.jpg" alt="" />
                        <div className="upload-btn-wrappers">
                          <div id="upload-image-grids" />
                          <button className="site-button button-sm">
                            Upload Photo
                          </button>
                          <input
                            type="file"
                            name="myfile"
                            id="file-uploader"
                            accept=".jpg, .jpeg, .png"
                          />
                        </div>
                      </div>

                      <div className="twm-mid-content text-center">
                        <NavLink
                          to={canRoute(publicUser.candidate.DETAIL1)}
                          className="twm-job-title"
                        >
                          <h4>Randall Henderson</h4>
                        </NavLink>
                        <p>IT Contractor</p>
                      </div>
                      <div className="twm-nav-list-1">
                        <ul>
                          <li
                            className={setMenuActive(
                              currentpath,
                              canRoute(candidate.DASHBOARD)
                            )}
                          >
                            <NavLink to={canRoute(candidate.DASHBOARD)}>
                              Dashboard
                            </NavLink>
                          </li>
                          <li
                            className={setMenuActive(
                              currentpath,
                              canRoute(candidate.PROFILE)
                            )}
                          >
                            <NavLink to={canRoute(candidate.PROFILE)}>
                              My Profile
                            </NavLink>
                          </li>
                          <li
                            className={setMenuActive(
                              currentpath,
                              canRoute(candidate.APPLIED_JOBS)
                            )}
                          >
                            <NavLink to={canRoute(candidate.APPLIED_JOBS)}>
                              My Services
                            </NavLink>
                          </li>
                          <li
                            className={setMenuActive(
                              currentpath,
                              canRoute(candidate.CV_MANAGER)
                            )}
                          >
                            <NavLink to={canRoute(candidate.CV_MANAGER)}>
                              Upgrade Plan
                            </NavLink>
                          </li>
                          <li
                            className={setMenuActive(
                              currentpath,
                              canRoute(candidate.ACCOUNT_BILLING)
                            )}
                          >
                            <NavLink to={canRoute(candidate.ACCOUNT_BILLING)}>
                              Accounts & Billing
                            </NavLink>
                          </li>
                          <li
                            className={setMenuActive(
                              currentpath,
                              canRoute(candidate.ALERTS)
                            )}
                          >
                            <NavLink to={canRoute(candidate.ALERTS)}>
                              Notifications
                            </NavLink>
                          </li>
                          <li
                            className={setMenuActive(
                              currentpath,
                              canRoute(candidate.CHAT)
                            )}
                          >
                            <NavLink to={canRoute(candidate.CHAT)}>
                              Chat
                            </NavLink>
                          </li>
                          <li
                            className={setMenuActive(
                              currentpath,
                              canRoute(candidate.CHANGE_PASSWORD)
                            )}
                          >
                            <NavLink to={canRoute(candidate.CHANGE_PASSWORD)}>
                              Change Password
                            </NavLink>
                          </li>
                          <li
                            className={setMenuActive(
                              currentpath,
                              canRoute(candidate.CHAT)
                            )}
                          >
                            <NavLink to={canRoute(candidate.CHAT)}>
                              Sign Out
                            </NavLink>
                          </li>
                          <li
                            className={setMenuActive(
                              currentpath,
                              canRoute(candidate.SAVED_JOBS)
                            )}
                          >
                            <NavLink to={canRoute(candidate.SAVED_JOBS)}>
                              Uploads
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <style>
                      {`
  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    z-index: 999;
  }

  .mobile-menu {
    position: fixed;
    top: 65px;
    border-top:3px solid red;
    left: -120%;
    width: 100%;
    height: 100vh;
    background: white;
    border-right: 1px solid #ddd;
    padding: 15px;
    transition: left 0.3s ease-in-out;
    z-index: 1000;
    overflow-y: auto;
    // display:none;
    // text-decoration:none;
  }

  .mobile-menu.open {
    left: 0;
  }

  .mobile-menu.close {
    left: -120%;
  }
`}
                    </style>
                  </>
                )}

                <div
                  className="col-xl-9 col-lg-8 col-md-12 m-b30"
                  //   style={{ position: "relative" }}
                >
                  <CandidateRoutes />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer1 />

        {/* BUTTON TOP START */}
        <button className="scroltops">
          <span className="fa fa-angle-up  relative" id="btn-vibrate" />
        </button>

        <SignUpPopup />
        <SignInPopup />
      </div>
    </>
  );
}

export default CandidateLayout;
