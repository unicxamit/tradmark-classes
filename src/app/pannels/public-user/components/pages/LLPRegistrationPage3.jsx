import { useLocation } from "react-router-dom";
import { getHeaderConfig } from "../globals/layout-config";
import Header1 from "../../../../common/header/header1";
import {  publicUrlFor } from "../../../../../globals/constants";
import JobZImage from "../../../../common/jobz-img";
import { NavLink } from "react-router-dom";
function CandidateLayout() {
    const currentpath = useLocation().pathname;
    return (
        <>
            <div className="page-wraper">

                <Header1 _config={getHeaderConfig(currentpath)} />

                <div className="page-content">

                    {/* <InnerPageBanner _data={setBanner(currentpath)} /> */}


                    <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `url(${publicUrlFor("images/contact-us/Header.webp")})` }}>
                        <div className="overlay-main site-bg-white opacity-01" />
                        <div className="container">
                            <div className="wt-bnr-inr-entry">
                                <div className="banner-title-outer">
                                    <div className="banner-title-name">
                                        <h2 className="wt-title">{_data.title}</h2>
                                    </div>
                                </div>
                                {/* BREADCRUMB ROW */}
                                <div>
                                    <ul className="wt-breadcrumb breadcrumb-style-2">
                                        <li><NavLink to="/index">Home</NavLink></li>
                                        <li>{_data.crumb}</li>
                                    </ul>
                                </div>
                                {/* BREADCRUMB ROW END */}
                            </div>
                        </div>
                    </div>

                    <div className="section-full p-t120  p-b90 site-bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-12 rightSidebar m-b30">
                                    <div className="side-bar-st-1">
                                        {/* <CanSidebarSection /> */}

                                        <div className="twm-candidate-profile-pic">
                                            <JobZImage src="images/user-avtar/pic4.jpg" alt="" />
                                            <div className="upload-btn-wrapper">
                                                <div id="upload-image-grid" />
                                                <button className="site-button button-sm">Upload Photo</button>
                                                <input type="file" name="myfile" id="file-uploader" accept=".jpg, .jpeg, .png" />
                                            </div>
                                        </div>
                                        <div className="twm-mid-content text-center">
                                            <NavLink to={canRoute(publicUser.candidate.DETAIL1)} className="twm-job-title">
                                                <h4>Randall Henderson </h4>
                                            </NavLink>
                                            <p>IT Contractor</p>
                                        </div>
                                        <div className="twm-nav-list-1">
                                            <ul>
                                                <li className={setMenuActive(currentpath, canRoute(candidate.DASHBOARD))}>
                                                    <NavLink to={canRoute(candidate.DASHBOARD)}><i className="fa fa-tachometer-alt" />
                                                        Dashboard
                                                    </NavLink>
                                                </li>
                                                <li className={setMenuActive(currentpath, canRoute(candidate.PROFILE))}>
                                                    <NavLink to={canRoute(candidate.PROFILE)}><i className="fa fa-user" />
                                                        My Profile
                                                    </NavLink>
                                                </li>
                                                <li className={setMenuActive(currentpath, canRoute(candidate.APPLIED_JOBS))}>
                                                    <NavLink to={canRoute(candidate.APPLIED_JOBS)}><i className="fa fa-suitcase" />
                                                        Applied Jobs
                                                    </NavLink>
                                                </li>
                                                <li className={setMenuActive(currentpath, canRoute(candidate.RESUME))}>
                                                    <NavLink to={canRoute(candidate.RESUME)}><i className="fa fa-receipt" />
                                                        My Resume
                                                    </NavLink>
                                                </li>
                                                <li className={setMenuActive(currentpath, canRoute(candidate.SAVED_JOBS))}>
                                                    <NavLink to={canRoute(candidate.SAVED_JOBS)}><i className="fa fa-file-download" />
                                                        Saved Jobs
                                                    </NavLink>
                                                </li>
                                                <li className={setMenuActive(currentpath, canRoute(candidate.CV_MANAGER))}>
                                                    <NavLink to={canRoute(candidate.CV_MANAGER)}><i className="fa fa-paperclip" />
                                                        CV Manager
                                                    </NavLink>
                                                </li>
                                                <li className={setMenuActive(currentpath, canRoute(candidate.ALERTS))}>
                                                    <NavLink to={canRoute(candidate.ALERTS)}><i className="fa fa-bell" />
                                                        Job Alerts
                                                    </NavLink>
                                                </li>
                                                <li className={setMenuActive(currentpath, canRoute(candidate.CHANGE_PASSWORD))}>
                                                    <NavLink to={canRoute(candidate.CHANGE_PASSWORD)}><i className="fa fa-fingerprint" />
                                                        Change Passeord
                                                    </NavLink>
                                                </li>
                                                <li className={setMenuActive(currentpath, canRoute(candidate.CHAT))}>
                                                    <NavLink to={canRoute(candidate.CHAT)}><i className="fa fa-comments" />
                                                        Chat
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>


                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-8 col-md-12 m-b30">

                                    {/* <CandidateRoutes /> */}

                                    <Routes>
                                        <Route path={candidate.DASHBOARD} element={<CanDashboardPage />} />
                                        <Route path={candidate.PROFILE} element={<CanProfilePage />} />
                                        <Route path={candidate.APPLIED_JOBS} element={<CanAppliedJobs />} />
                                        <Route path={candidate.RESUME} element={<CanMyResumePage />} />
                                        <Route path={candidate.SAVED_JOBS} element={<CanSavedJobsPage />} />
                                        <Route path={candidate.CV_MANAGER} element={<CanCVManagerPage />} />
                                        <Route path={candidate.ALERTS} element={<CanJobAlertsPage />} />
                                        <Route path={candidate.CHANGE_PASSWORD} element={<CanChangePasswordPage />} />
                                        <Route path={candidate.CHAT} element={<CanChatPage />} />
                                        <Route path="*" element={<Error404Page />} />
                                    </Routes>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer1 />

                {/* BUTTON TOP START */}
                <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate" /></button>

                {/* <SignUpPopup />
                <SignInPopup /> */}

            </div>
        </>
    )
}

export default CandidateLayout;

