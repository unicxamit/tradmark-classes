import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { loadScript } from "../../../../../globals/constants";
import { publicUser } from "../../../../../globals/route-names";
import JobZImage from "../../../../common/jobz-img";
import SectionBlogsSidebar from "../../sections/blogs/sidebar/section-blogs-sidebar";
import SectionPagination from "../../sections/common/section-pagination";

function BlogGrid2Page() {

    useEffect(()=>{
        loadScript("js/custom.js");
    })

    return (
        <>
            <div className="section-full p-t120  p-b90 site-bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="masonry-wrap row d-flex">
                                {/*Block one*/}
                                <div className="masonry-item col-lg-6 col-md-12">
                                    <div className="blog-post twm-blog-post-1-outer">
                                        <div className="wt-post-media">
                                            <NavLink to={publicUser.blog.DETAIL}><JobZImage src="images/blog/latest/bg1.jpg" alt="" /></NavLink>
                                        </div>
                                        <div className="wt-post-info">
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-date">March 05, 2023</li>
                                                    <li className="post-author">By <NavLink to={publicUser.candidate.DETAIL1}>Mark Petter</NavLink></li>
                                                </ul>
                                            </div>
                                            <div className="wt-post-title ">
                                                <h4 className="post-title">
                                                    <NavLink to={publicUser.blog.DETAIL}>How to convince recruiters and get your dream job</NavLink>
                                                </h4>
                                            </div>
                                            <div className="wt-post-text ">
                                                <p>
                                                    New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                                </p>
                                            </div>
                                            <div className="wt-post-readmore ">
                                                <NavLink to={publicUser.blog.DETAIL} className="site-button-link site-text-primary">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Block two*/}
                                <div className="masonry-item col-lg-6 col-md-12">
                                    <div className="blog-post twm-blog-post-1-outer">
                                        <div className="wt-post-media">
                                            <NavLink to={publicUser.blog.DETAIL}><JobZImage src="images/blog/latest/bg2.jpg" alt="" /></NavLink>
                                        </div>
                                        <div className="wt-post-info">
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-date">March 05, 2023</li>
                                                    <li className="post-author">By <NavLink to={publicUser.candidate.DETAIL1}>David Wish</NavLink></li>
                                                </ul>
                                            </div>
                                            <div className="wt-post-title ">
                                                <h4 className="post-title">
                                                    <NavLink to={publicUser.blog.DETAIL}>5 things to know about the March
                                                        2023 jobs report</NavLink>
                                                </h4>
                                            </div>
                                            <div className="wt-post-text ">
                                                <p>
                                                    New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                                </p>
                                            </div>
                                            <div className="wt-post-readmore ">
                                                <NavLink to={publicUser.blog.DETAIL} className="site-button-link site-text-primary">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Block three*/}
                                <div className="masonry-item col-lg-6 col-md-12">
                                    <div className="blog-post twm-blog-post-1-outer">
                                        <div className="wt-post-media">
                                            <NavLink to={publicUser.blog.DETAIL}><JobZImage src="images/blog/latest/bg3.jpg" alt="" /></NavLink>
                                        </div>
                                        <div className="wt-post-info">
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-date">March 05, 2023</li>
                                                    <li className="post-author">By <NavLink to={publicUser.candidate.DETAIL1}>Mike Doe</NavLink></li>
                                                </ul>
                                            </div>
                                            <div className="wt-post-title ">
                                                <h4 className="post-title">
                                                    <NavLink to={publicUser.blog.DETAIL}>Job Board is the most important
                                                        sector in the world</NavLink>
                                                </h4>
                                            </div>
                                            <div className="wt-post-text ">
                                                <p>
                                                    New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                                </p>
                                            </div>
                                            <div className="wt-post-readmore ">
                                                <NavLink to={publicUser.blog.DETAIL} className="site-button-link site-text-primary">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Block Four*/}
                                <div className="masonry-item col-lg-6 col-md-12">
                                    <div className="blog-post twm-blog-post-1-outer">
                                        <div className="wt-post-media">
                                            <NavLink to={publicUser.blog.DETAIL}><JobZImage src="images/blog/latest/bg4.jpg" alt="" /></NavLink>
                                        </div>
                                        <div className="wt-post-info">
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-date">March 05, 2023</li>
                                                    <li className="post-author">By <NavLink to={publicUser.candidate.DETAIL1}>Mark Petter</NavLink></li>
                                                </ul>
                                            </div>
                                            <div className="wt-post-title ">
                                                <h4 className="post-title">
                                                    <NavLink to={publicUser.blog.DETAIL}>How to convince recruiters and get your dream job</NavLink>
                                                </h4>
                                            </div>
                                            <div className="wt-post-text ">
                                                <p>
                                                    New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                                </p>
                                            </div>
                                            <div className="wt-post-readmore ">
                                                <NavLink to={publicUser.blog.DETAIL} className="site-button-link site-text-primary">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Block Five*/}
                                <div className="masonry-item col-lg-6 col-md-12">
                                    <div className="blog-post twm-blog-post-1-outer">
                                        <div className="wt-post-media">
                                            <NavLink to={publicUser.blog.DETAIL}><JobZImage src="images/blog/latest/bg5.jpg" alt="" /></NavLink>
                                        </div>
                                        <div className="wt-post-info">
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-date">March 05, 2023</li>
                                                    <li className="post-author">By <NavLink to={publicUser.candidate.DETAIL1}>David Wish</NavLink></li>
                                                </ul>
                                            </div>
                                            <div className="wt-post-title ">
                                                <h4 className="post-title">
                                                    <NavLink to={publicUser.blog.DETAIL}>5 things to know about the March
                                                        2023 jobs report</NavLink>
                                                </h4>
                                            </div>
                                            <div className="wt-post-text ">
                                                <p>
                                                    New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                                </p>
                                            </div>
                                            <div className="wt-post-readmore ">
                                                <NavLink to={publicUser.blog.DETAIL} className="site-button-link site-text-primary">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Block Six*/}
                                <div className="masonry-item col-lg-6 col-md-12">
                                    <div className="blog-post twm-blog-post-1-outer">
                                        <div className="wt-post-media">
                                            <NavLink to={publicUser.blog.DETAIL}><JobZImage src="images/blog/latest/bg6.jpg" alt="" /></NavLink>
                                        </div>
                                        <div className="wt-post-info">
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-date">March 05, 2023</li>
                                                    <li className="post-author">By <NavLink to={publicUser.candidate.DETAIL1}>Mike Doe</NavLink></li>
                                                </ul>
                                            </div>
                                            <div className="wt-post-title ">
                                                <h4 className="post-title">
                                                    <NavLink to={publicUser.blog.DETAIL}>Job Board is the most important
                                                        sector in the world</NavLink>
                                                </h4>
                                            </div>
                                            <div className="wt-post-text ">
                                                <p>
                                                    New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.
                                                </p>
                                            </div>
                                            <div className="wt-post-readmore ">
                                                <NavLink to={publicUser.blog.DETAIL} className="site-button-link site-text-primary">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <SectionPagination />
                        </div>
                        <div className="col-lg-4 col-md-12 rightSidebar">
                            <SectionBlogsSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogGrid2Page;