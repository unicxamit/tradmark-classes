import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import { loadScript } from "../../../../../globals/constants";
import { publicUser } from "../../../../../globals/route-names";
import JobZImage from "../../../../common/jobz-img";
import SectionBlogsSidebar from "../../sections/blogs/sidebar/section-blogs-sidebar";
import SectionPagination from "../../sections/common/section-pagination";
import { getBlogs } from "../../../../../api";

function BlogListPage() {
    const [allBlogs, setAllBlogs] = useState([]); // To store all blogs fetched from API
    const [filteredBlogs, setFilteredBlogs] = useState([]); // To store blogs after applying filters
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation(); // Hook to access URL query parameters

    const BASE_URL = 'https://unicx.in'; // Define BASE_URL for image paths

    useEffect(() => {
        loadScript("js/custom.js");

        const fetchAllBlogs = async () => {
            try {
                const data = await getBlogs();
                setAllBlogs(data);
                console.log("Fetched All Blogs:", data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError("Failed to load blogs. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchAllBlogs();
    }, []); // Fetch all blogs only once on mount

    useEffect(() => {
        // This effect runs when allBlogs or location.search changes
        const filterBlogs = () => {
            const params = new URLSearchParams(location.search);
            const categoryFilter = params.get('category');
            const tagFilter = params.get('tag');

            let currentBlogs = [...allBlogs]; // Start with all blogs

            if (categoryFilter) {
                currentBlogs = currentBlogs.filter(blog => 
                    blog.category_name && blog.category_name.toLowerCase() === categoryFilter.toLowerCase()
                );
            }

            if (tagFilter) {
                currentBlogs = currentBlogs.filter(blog => 
                    blog.tags && blog.tags.split(',').some(tag => 
                        tag.trim().toLowerCase() === tagFilter.toLowerCase()
                    )
                );
            }
            setFilteredBlogs(currentBlogs);
        };

        filterBlogs();
    }, [allBlogs, location.search]); // Re-filter when allBlogs or URL search params change

    if (loading) {
        return (
            <div className="section-full p-t120 p-b90 bg-white text-center">
                <div className="container">
                    Loading blogs...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="section-full p-t120 p-b90 bg-white text-center">
                <div className="container">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="section-full p-t120 p-b90 site-bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            {filteredBlogs.length > 0 ? (
                                filteredBlogs.map((blog) => (
                                    <div className="blog-post twm-blog-post-1-outer twm-blog-list-style" key={blog.id}>
                                        <div className="wt-post-media">
                                            <NavLink to={`${publicUser.blog.DETAILS}/${blog.id}`}>
                                                <img 
                                                    src={
                                                        blog.image_url 
                                                        ? `${BASE_URL}${blog.image_url}` 
                                                        : `${BASE_URL}/images/blog/latest/bg1.jpg` // Placeholder if no image
                                                    } 
                                                    alt={blog.title} 
                                                />
                                            </NavLink>
                                        </div>
                                        <div className="wt-post-info">
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-date">
                                                        {new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                    </li>
                                                    <li className="post-author">
                                                        By <NavLink to={publicUser.candidate.DETAIL1}>{blog.author || "Unicx Team"}</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="wt-post-title ">
                                                <h4 className="post-title">
                                                    <NavLink to={`${publicUser.blog.DETAILS}/${blog.id}`}>
                                                        {blog.title}
                                                    </NavLink>
                                                </h4>
                                            </div>
                                            <div className="wt-post-text ">
                                                <p>
                                                    {blog.short_description || (blog.content ? blog.content.substring(0, 150) + '...' : 'No description available.')}
                                                </p>
                                            </div>
                                            <div className="wt-post-readmore ">
                                                <NavLink to={`${publicUser.blog.DETAILS}/${blog.id}`} className="site-button-link site-text-primary">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center">
                                    <p>No blogs found matching your criteria.</p>
                                </div>
                            )}
                            <SectionPagination /> {/* Keep pagination for now, though it would need dynamic data based on filteredBlogs */}
                        </div>
                        <div className="col-lg-4 col-md-12 rightSidebar">
                            <SectionBlogsSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogListPage;
