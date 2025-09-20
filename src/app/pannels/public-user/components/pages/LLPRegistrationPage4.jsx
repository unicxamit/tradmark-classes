import JobZImage from "../../../../common/jobz-img";
import { useEffect } from "react";
import { loadScript } from "../../../../../globals/constants";
import Footer1 from "../../../../common/footer/footer1";
import { loadScript, publicUrlFor } from "../../../../../globals/constants";
import { NavLink } from "react-router-dom";
function JobDetail2Page() {

    const sidebarConfig = {
        showJobInfo: false
    }

    useEffect(() => {
        loadScript("js/custom.js");
    })

    return (
        <>
            {/* Job Detail V.2 START */}
            <div className="section-full  p-t50 p-b90 bg-white">
                <div className="container">
                    {/* BLOG SECTION START */}
                    <div className="section-content">
                        <div className="twm-job-self-wrap twm-job-detail-v2">
                            <div className="twm-job-self-info">
                                <div className="twm-job-self-top">
                                    <div className="twm-media-bg">
                                        <JobZImage src="images/job-detail-bg-2.jpg" alt="#" />
                                        <div className="twm-jobs-category green"><span className="twm-bg-green">New</span></div>
                                        <div className="twm-job-self-bottom">
                                            <a className="site-button" data-bs-toggle="modal" href="#apply_job_popup" role="button">
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                    <div className="twm-mid-content">
                                        <div className="twm-media">
                                            <JobZImage src="images/jobs-company/pic1.jpg" alt="#" />
                                        </div>
                                        <h4 className="twm-job-title">Senior Web Designer , Developer <span className="twm-job-post-duration">/ 1 days ago</span></h4>
                                        <p className="twm-job-address"><i className="feather-map-pin" />1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                        <div className="twm-job-self-mid">
                                            <div className="twm-job-self-mid-left">
                                                <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                <div className="twm-jobs-amount">$2000 - $2500 <span>/ Month</span></div>
                                            </div>
                                            <div className="twm-job-apllication-area">Application ends:
                                                <span className="twm-job-apllication-date">October 1, 2025</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="twm-job-detail-2-wrap">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-4 col-md-12 rightSidebar">
                                    {/* <SectionJobsSidebar2 _config={sidebarConfig} /> */}

                                    <div className="side-bar mb-4">
                                        <div className="twm-s-info2-wrap mb-5">
                                            <div className="twm-s-info2">
                                                <h4 className="section-head-small mb-4">Job Information</h4>
                                                <ul className="twm-job-hilites">
                                                    <li>
                                                        <i className="fas fa-calendar-alt" />
                                                        <span className="twm-title">Date Posted</span>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-eye" />
                                                        <span className="twm-title">8160 Views</span>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-file-signature" />
                                                        <span className="twm-title">6 Applicants</span>
                                                    </li>
                                                </ul>
                                                <ul className="twm-job-hilites2">
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-calendar-alt" />
                                                            <span className="twm-title">Date Posted</span>
                                                            <div className="twm-s-info-discription">April 22, 2023</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-map-marker-alt" />
                                                            <span className="twm-title">Location</span>
                                                            <div className="twm-s-info-discription">Munchen, Germany</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-user-tie" />
                                                            <span className="twm-title">Job Title</span>
                                                            <div className="twm-s-info-discription">Web Developer</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-clock" />
                                                            <span className="twm-title">Experience</span>
                                                            <div className="twm-s-info-discription">3 Year</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-suitcase" />
                                                            <span className="twm-title">Qualification</span>
                                                            <div className="twm-s-info-discription">Bachelor Degree </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-venus-mars" />
                                                            <span className="twm-title">Gender</span>
                                                            <div className="twm-s-info-discription">Both</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-money-bill-wave" />
                                                            <span className="twm-title">Offered Salary</span>
                                                            <div className="twm-s-info-discription">$2000-$2500 / Month</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="widget tw-sidebar-tags-wrap">
                                            <h4 className="section-head-small mb-4">Job Skills</h4>
                                            <div className="tagcloud">
                                                <a href="#">Html</a>
                                                <a href="#">Python</a>
                                                <a href="#">WordPress</a>
                                                <a href="#">JavaScript</a>
                                                <a href="#">Figma</a>
                                                <a href="#">Angular</a>
                                                <a href="#">Reactjs</a>
                                                <a href="#">Drupal</a>
                                                <a href="#">Joomla</a>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        _config.showJobInfo &&
                                        <div className="twm-s-info3-wrap mb-5">
                                            <div className="twm-s-info3">
                                                <div className="twm-s-info-logo-section">
                                                    <div className="twm-media">
                                                        <JobZImage src="images/jobs-company/pic1.jpg" alt="#" />
                                                    </div>
                                                    <h4 className="twm-title">Senior Web Designer , Developer</h4>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-building" />
                                                            <span className="twm-title">Company</span>
                                                            <div className="twm-s-info-discription">Software Development</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-mobile-alt" />
                                                            <span className="twm-title">Phone</span>
                                                            <div className="twm-s-info-discription">+291  560 56456</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-at" />
                                                            <span className="twm-title">Email</span>
                                                            <div className="twm-s-info-discription">thewebmaxdemo@gmail.com</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-desktop" />
                                                            <span className="twm-title">Website</span>
                                                            <div className="twm-s-info-discription">https://themeforest.net</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-map-marker-alt" />
                                                            <span className="twm-title">Address</span>
                                                            <div className="twm-s-info-discription">1363-1385 Sunset Blvd Angeles, CA
                                                                90026 ,USA</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <NavLink to={publicUser.pages.ABOUT} className=" site-button">Vew Profile</NavLink>
                                            </div>
                                        </div>
                                    }

                                    {/* <SectionSideAdvert /> */}

                                    <div className="twm-advertisment" style={{ backgroundImage: `url(${publicUrlFor("images/add-bg.jpg")})` }}>
                                        <div className="overlay" />
                                        <h4 className="twm-title">Recruiting?</h4>
                                        <p>Get Best Matched Jobs On your <br />
                                            Email. Add Resume NOW!</p>
                                        <NavLink to={publicUser.pages.ABOUT} className="site-button white">Read More</NavLink>
                                    </div>


                                </div>
                                <div className="col-lg-8 col-md-12">
                                    {/* Candidate detail START */}
                                    <div className="cabdidate-de-info">
                                        <h4 className="twm-s-title m-t0">Company Description:</h4>
                                        <p>
                                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                        </p>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
                                        <h4>Job Overview</h4>
                                        <p>
                                            Our development team focuses on unit testing, TDD, CI, design patterns and refactoring. Internal and external training is encouraged through mentoring, guided self-learning, conferences, user groups and training courses. We maintain and improve existing codebases, and create new systems, exposing developers to constant variety.
                                        </p>
                                        <p>
                                            Our team understands the performance implications of serving more than 25,000 page requests per-hour, crafting awesome user experiences. While we leverage existing tech, we also research new technologies to overcome technical and business challenges, to maintain our industry-leading status.
                                        </p>
                                        <h4 className="twm-s-title">Requirments:</h4>
                                        <ul className="description-list-2">
                                            <li>
                                                <i className="feather-check" />
                                                Must be able to communicate with others to convey information effectively.
                                            </li>
                                            <li>
                                                <i className="feather-check" />
                                                Personally passionate and up to date with current trends and technologies, committed to quality and comfortable working with adult media.
                                            </li>
                                            <li>
                                                <i className="feather-check" />
                                                Rachelor or Master degree level educational background.
                                            </li>
                                            <li>
                                                <i className="feather-check" />
                                                4 years relevant PHP dev experience.
                                            </li>
                                            <li>
                                                <i className="feather-check" />
                                                Troubleshooting, testing and maintaining the core product software and databases.
                                            </li>
                                        </ul>
                                        <h4 className="twm-s-title">Responsabilities:</h4>
                                        <ul className="description-list-2">
                                            <li>
                                                <i className="feather-check" />
                                                Establish and promote design guidelines, best practices and standards.
                                            </li>
                                            <li>
                                                <i className="feather-check" />
                                                Accurately estimate design tickets during planning sessions.
                                            </li>
                                            <li>
                                                <i className="feather-check" />
                                                Partnering with product and engineering to translate business and user goals into elegant and practical designs. that can deliver on key business and user metrics.
                                            </li>
                                            <li>
                                                <i className="feather-check" />
                                                Create wireframes, storyboards, user flows, process flows and site maps to communicate interaction and design.
                                            </li>
                                            <li>
                                                <i className="feather-check" />
                                                Present and defend designs and key deliverables to peers and executive level stakeholders.
                                            </li>
                                            <li>
                                                <i className="feather-check" />
                                                Execute all visual design stages from concept to final hand-off to engineering.
                                            </li>
                                        </ul>

                                        {/* <SectionShareProfile />
                                        <SectionJobLocation />
                                        <SectionOfficePhotos2 />
                                        <SectionOfficeVideo2 /> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Job Detail V.2 END */}

            {/* Related Jobs START */}
            {/* <div className="section-full p-t120 p-b90 site-bg-light-purple twm-related-jobs-carousel-wrap">
                <SectionRelatedJobs />
            </div> */}
            {/* Related Jobs END */}

            {/* <ApplyJobPopup /> */}

            <div className="modal fade" id="apply_job_popup" aria-hidden="true" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="sign_up_popupLabel">Apply For This Job</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="apl-job-inpopup">
                                {/*Basic Information*/}
                                <div className="panel panel-default">
                                    <div className="panel-body wt-panel-body p-a20 ">
                                        {/* <SectionApplyJob /> */}

                                        <div className="twm-tabs-style-1">
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Your Name</label>
                                                        <div className="ls-inputicon-box">
                                                            <input className="form-control" name="company_name" type="text" placeholder="Devid Smith" />
                                                            <i className="fs-input-icon fa fa-user " />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Email Address</label>
                                                        <div className="ls-inputicon-box">
                                                            <input className="form-control" name="company_Email" type="email" placeholder="Devid@example.com" />
                                                            <i className="fs-input-icon fas fa-at" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Message</label>
                                                        <textarea className="form-control" rows={3} placeholder="Message sent to the employer" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Upload Resume</label>
                                                        <DropzoneComponent config={componentConfig} />
                                                        <small>If you do not have a resume document, you may write your brief professional profile
                                                            <NavLink to={publicUser.pages.CONTACT} className="site-text-primary"> here</NavLink>
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="text-left">
                                                        <button type="submit" className="site-button">Send Application</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <Footer1/>

        </>
    )
}

export default JobDetail2Page;

