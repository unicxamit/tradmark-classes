import React, { useEffect, useState } from "react";
import { loadScript, publicUrlFor } from "../../../../../globals/constants";
import JobZImage from "../../../../common/jobz-img";
import CountUp from "react-countup";
import { useLocation } from "react-router-dom";
import { publicUser } from "../../../../../globals/route-names";
import { NavLink } from "react-router-dom";
import GlobalSearchBar from "../pages/GlobalSearchBar";
import SectionFaqGeneral from "../../sections/faq/section-faq-general";
import { getCaseStudies, getCategories, getFAQs } from "../../../../../api";

function Home1Page() {
    const [caseStudies, setCaseStudies] = useState([]); 
    const [categories, setCategories] = useState([]); 
    const [faqs, setFAQs] = useState([]); 
    const [activeTab, setActiveTab] = useState('General'); 
    const words = ['Brand', 'Company Name', 'Website', 'Certification', 'Licence'];
    const [index, setIndex] = useState(0);
    const { pathname } = useLocation()

    const BASE_URL = 'https://unicx.in';
    useEffect(() => {
        // 1. Fetch Data
        const fetchCaseStudiesData = async () => {
            try {
                const data = await getCaseStudies();
                setCaseStudies(data);
                console.log("Fetched Case Studies for Home Page:", data);
            } catch (error) {
                console.error("Error fetching case studies:", error);
            }
        };

        const fetchFAQData = async () => {
            try {
                const categoriesData = await getCategories();
                setCategories(categoriesData);

                const faqsData = await getFAQs();
                setFAQs(faqsData);
            } catch (error) {
                console.error("Error fetching FAQ data:", error);
            }
        };

        fetchCaseStudiesData();
        fetchFAQData();

        // 2. Word rotation
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % words.length);
        }, 2500);

        // 3. Mousemove animation
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            document.querySelectorAll('.anm').forEach((el) => {
                const speedX = parseFloat(el.dataset.speedX) || 0;
                const speedY = parseFloat(el.dataset.speedY) || 0;
                const speedScale = parseFloat(el.dataset.speedScale) || 0;

                const offsetX = ((clientX - centerX) / centerX) * speedX * 10;
                const offsetY = ((clientY - centerY) / centerY) * speedY * 10;
                const scale = 1 + (speedScale / 1000);

                el.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

    }, []);
    


    // Helper function to render accordion items
    const renderFaqAccordion = (faqsToRender, tabId) => {
        return (
            <div className="tw-faq-section">
                <div className="accordion tw-faq" id={`sf-faq-accordion-${tabId}`}>
                    {faqsToRender.length > 0 ? (
                        faqsToRender.map((faq, index) => (
                            <div className="accordion-item" key={faq.id || index}>
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#FAQ${faq.id || index}-${tabId}`}
                                    aria-expanded="false"
                                >
                                    {faq.question}
                                </button>
                                <div
                                    id={`FAQ${faq.id || index}-${tabId}`}
                                    className="accordion-collapse collapse"
                                    data-bs-parent={`#sf-faq-accordion-${tabId}`}
                                >
                                    <div className="accordion-body">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No FAQs available for this category.</p>
                    )}
                </div>
            </div>
        );
    };


    return (
        <>
            {/*Banner Start*/}
            <div className="twm-home1-banner-section site-bg-gray" style={{backgroundImage: `url(${publicUrlFor("images/bg2_Final.webp")})`}}>
                <div className="row">
                    {/*Left Section*/}
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="twm-bnr-left-section">
                            {/* <div className="twm-bnr-title-small">We Have <span className="site-text-primary">208,000+</span> Live Jobs</div> */}
                            <div className="twm-bnr-title-sml">Unicx is having <span className="site-text-primary">1200+</span> services for you...</div>
                            <div className="twm-bnr-title-large">It’s Easy to Choose & get <br /> a perfect <span className="site-text-primary slide-up" key={index}>{words[index]}</span> <br /> for Your buisness</div>
                            <div className="twm-bnr-discription">All-in-one Solution for every Business professional needs - From Start to success.</div>
                            <div className="twm-bnr-search-bar">
                                <GlobalSearchBar />
                                {/* <button type="button" className="site-button">Search</button> */}
                            </div>
                            <div className="twm-bnr-category">
                                <ul>
                                    <li>
                                        <a href="#" className="twm-bnr-category-item">Trademark</a>
                                    </li>
                                    <li>
                                        <a href="#" className="twm-bnr-category-item">GST Registration</a>
                                    </li>
                                    <li>
                                        <a href="#" className="twm-bnr-category-item">ROC</a>
                                    </li>
                                    <li>
                                        <a href="#" className="twm-bnr-category-item">ISO Certificate</a>
                                    </li>
                                    <li>
                                        <a href="#" className="twm-bnr-category-item">FSSAI</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/*right Section*/}
                    <div className="col-xl-6 col-lg-6 col-md-12 twm-bnr-right-section">
                        <div className="twm-bnr-right-content">
                            <div className="twm-img-bg-circle-area">
                                <div className="twm-img-bg-circle1 rotate-center"><span /></div>
                                <div className="twm-img-bg-circle2 rotate-center-reverse"><span /></div>
                                <div className="twm-img-bg-circle3"><span /></div>
                            </div>

                            <div className="twm-bnr-right-carousel">
                                <div className="owl-carousel twm-h1-bnr-carousal">
                                    <div className="item">
                                        <div className="slide-img">
                                                <JobZImage src="images/homeImage/main1.webp" alt="home-image" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slide-img">
                                                <JobZImage src="images/homeImage/main2.webp" alt="home-image" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slide-img">
                                                <JobZImage src="images/homeImage/main3.webp" alt="home-image" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slide-img">
                                                <JobZImage src="images/homeImage/main4.webp" alt="home-image" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slide-img">
                                                <JobZImage src="images/homeImage/main5.webp" alt="home-image" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slide-img">
                                                <JobZImage src="images/homeImage/main6.webp" alt="home-image" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slide-img">
                                                <JobZImage src="images/homeImage/main7.webp" alt="home-image" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slide-img">
                                                <JobZImage src="images/homeImage/main8.webp" alt="home-image" />
                                        </div>
                                    </div>
                                </div>


                                <div className="twm-bnr-blocks-position-wrap">
                                    {/* icon-block-1 */}
                                    <div className="twm-bnr-blocks twm-bnr-blocks-position-1 anm" data-speed-x="1" data-speed-y="1" data-speed-scale="5">
                                        <div className="twm-icon">
                                            <JobZImage src="images/main-slider/slider1/icon-1.png" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <div className="tw-count-number text-clr-sky">
                                                <span className="counter">
                                                    <CountUp end={4} duration={10} />
                                                </span>K+
                                            </div>
                                            <p className="icon-content-info">Companies Faith</p>
                                        </div>
                                    </div>

                                    {/* icon-block-2 */}
                                    <div className="twm-bnr-blocks twm-bnr-blocks-position-2 anm" data-speed-x="-1.5" data-speed-y="1.2" data-speed-scale="-4">
                                        <div className="twm-icon twm-icon-new">
                                            <JobZImage src="images/main-slider/slider1/professional2.png" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <div className="tw-count-number text-clr-pink">
                                                <span className="counter">
                                                    <CountUp end={250} duration={10} />
                                                </span>
                                                <span className="counter-plus">+</span>
                                            </div>
                                            <p className="icon-content-info">Professionals</p>
                                        </div>
                                    </div>

                                    {/* icon-block-3 */}
                                    <div className="twm-bnr-blocks-3 twm-bnr-blocks-position-3 anm" data-speed-x="2" data-speed-y="-1.5" data-speed-scale="3">
                                        <div className="twm-pics">
                                            <span><JobZImage src="images/main-slider/slider1/brand.png" alt="" /></span>
                                        </div>
                                        <div className="twm-content">
                                            <div className="tw-count-number text-clr-green">
                                                <span className="counter">
                                                    <CountUp end={7} duration={10} />
                                                </span>K+
                                            </div>
                                            <p className="icon-content-info">Brands Served</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                            {/*Samll Ring Left*/}
                            <div className="twm-small-ring-l slide-top-animation" />
                            <div className="twm-small-ring-2 slide-top-animation" />
                        </div>
                    </div>

                    
                </div>
                <div className="twm-gradient-text">
                    UNICX
                </div>
            </div>


            {/*Banner End*/}
            {/* Jobs Category START */}
            <div className="section-full p-t120 p-b90 site-bg-white job-categories-home-5-wrap twm-bdr-bottom-1">
                <div className="container">
                    {/* title="" START*/}
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>In-Demand Services</div>
                        </div>
                        <h2 className="wt-title">Valuable services delivered with dedication—at a price you can afford! </h2>
                    </div>
                    {/* title="" END*/}
                </div>
                <div className="section-content twm-jobs-grid-h5-section-outer">
                    <div className="twm-jobs-grid-h5-section overlay-wraper" style={{
                        backgroundImage: `url(${publicUrlFor("images/home-5/Services_BG.svg")})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'scroll',
                        backgroundColor: '#ffffff'
                    }}>
                        <div className="overlay-main site-bg-primary opacity-09" />
                        <div className="swiper-container category-5-slider">
                            <div className="swiper-wrapper">
                                {/*1*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-2">
                                            <JobZImage src="images/demand_services_icons/new_service/1.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Trademark <br /> Registration</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*2*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-4">
                                            <JobZImage src="images/demand_services_icons/new_service/2.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Copyright <br /> Registration</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*3*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-2">
                                            <JobZImage src="images/demand_services_icons/new_service/3.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Company <br /> Registration</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*4*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-1">
                                            <JobZImage src="images/demand_services_icons/new_service/4.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Trust/NGO <br /> Registration</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*5*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-2">
                                            <JobZImage src="images/demand_services_icons/new_service/6.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>GST <br />Registration</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*6*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-1">
                                            <JobZImage src="images/demand_services_icons/new_service/11.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>BIS <br /> Registration</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*7*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-2">
                                            <JobZImage src="images/demand_services_icons/new_service/13.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Cosmetics <br /> License</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*8*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-4">
                                            <JobZImage src="images/demand_services_icons/new_service/15.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Organic <br />License</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*9*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-3">
                                            <JobZImage src="images/demand_services_icons/new_service/17.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Drug <br /> License</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*10*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-2">
                                            <JobZImage src="images/demand_services_icons/new_service/19.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Website <br /> Design</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*11*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-4">
                                            <JobZImage src="images/demand_services_icons/new_service/21.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Logo <br /> Design</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*12*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-1">
                                            <JobZImage src="images/demand_services_icons/new_service/22.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Graphics <br /> Design</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*13*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-3">
                                            <JobZImage src="images/demand_services_icons/new_service/7.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>MSME <br /> Registration</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*14*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-2">
                                            <JobZImage src="images/demand_services_icons/new_service/8.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Start-up <br /> India Registration</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*15*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-4">
                                            <JobZImage src="images/demand_services_icons/new_service/9.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Import/Export <br /> Registration</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*16*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-1">
                                            <JobZImage src="images/demand_services_icons/new_service/10.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>FSSAI <br /> Registration</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*17*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-3">
                                            <JobZImage src="images/demand_services_icons/new_service/5.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>GST <br /> Filing</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*18*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-2">
                                            <JobZImage src="images/demand_services_icons/new_service/12.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Annual <br /> Compliances</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*19*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-4">
                                            <JobZImage src="images/demand_services_icons/new_service/14.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>ISO <br /> Registration</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*20*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-1">
                                            <JobZImage src="images/demand_services_icons/new_service/16.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Trademark <br /> Objection</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*21*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-3">
                                            <JobZImage src="images/demand_services_icons/new_service/18.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Trademark <br /> Opposition</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*22*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-2">
                                            <JobZImage src="images/demand_services_icons/new_service/20.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Trademark  Infringement</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/*23*/}
                                <div className="swiper-slide">
                                    <div className="job-categories-home-5">
                                        <div className="twm-media cat-bg-clr-4">
                                            <JobZImage src="images/demand_services_icons/new_service/23.gif" alt="" />
                                        </div>
                                        <div className="twm-content">
                                            <NavLink to={publicUser.jobs.DETAIL1}>Sope  Act <br /> Registration</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add Pagination */}
                            <div className="swiper-button-prev" />
                            <div className="swiper-button-next" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Recruiters END */}
            {/* How It Work START */}
            <div className="section-full site-bg-primary twm-how-it-work-1-area">
                <div className="container">
                    <div className="section-content">
                        <div className="twm-how-it-work-1-content">
                            <div className="row">
                                <div className="col-xl-5 col-lg-12 col-md-12">
                                    <div className="twm-how-it-work-1-left">
                                        <div className="twm-how-it-work-1-section">
                                            {/* title="" START*/}
                                            <div className="section-head left wt-small-separator-outer">
                                                <div className="wt-small-separator">
                                                    <div>How it Works</div>
                                                </div>
                                                <h2 className="wt-text-1">Simple Steps, Complete Support</h2>
                                                <h6 className="wt-text">Just Follow our Steps - We'll handle the rest</h6>
                                            </div>
                                            {/* title="" END*/}
                                            <div className="twm-step-section-4">
                                                <ul>
                                                    <li>
                                                        <div className="twm-step-count bg-clr-sky-light">01</div>
                                                        <div className="twm-step-content">
                                                            <h4 className="twm-title">Get in Touch</h4>
                                                            <p>Sign up or contact us directly for a free expert consultation.</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-step-count bg-clr-yellow-light">02</div>
                                                        <div className="twm-step-content">
                                                            <h4 className="twm-title">Talk to Experts</h4>
                                                            <p>Our specialists will call you to understand your business goals.</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-step-count bg-clr-pink-light">03</div>
                                                        <div className="twm-step-content">
                                                            <h4 className="twm-title">Make Smart Investments</h4>
                                                            <p>Get clear guidance on where to invest for maximum impact.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-step-count bg-clr-green-light">04</div>
                                                        <div className="twm-step-content">
                                                            <h4 className="twm-title">Grow Effortlessly</h4>
                                                            <p>Sit back and watch your business thrive with our expert support.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-12 col-md-12">
                                    <div className="twm-how-it-right-section">
                                        <div className="twm-media">
                                            <div className="twm-bg-circle"><JobZImage src="images/home-4/how-it-work/bg-circle-large.png" alt="" /></div>
                                            <div className="twm-block-left anm" data-speed-x={-4} data-speed-scale={-25}>
                                                <JobZImage src="images/home-4/how-it-work/block-left.png" alt="" />
                                            </div>
                                            <div className="twm-block-right anm" data-speed-x={-4} data-speed-scale={-25}>
                                                <JobZImage src="images/home-4/how-it-work/block-right.png" alt="" />
                                            </div>
                                            <div className="twm-main-bg anm" data-wow-delay="1000ms" data-speed-x={2} data-speed-y={2}>
                                                <JobZImage src="images/home-4/how-it-work/main-bg.png" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* How It Work END */}
            {/* ABOUT SECTION START */}
            <div className="section-full p-t120 p-b90 site-bg-gray twm-about-1-area">
                <div className="container">
                    <div className="twm-about-1-section-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="twm-about-1-section">
                                    <div className="twm-media">
                                        <JobZImage src="images/home-4/about/about-img.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="twm-about-1-section-right">
                                    {/* title="" START*/}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div>Choose Your Expert </div>
                                        </div>
                                        <h2 className="wt-title">Get a dedicated business expert aligned with your vision—offering tailored strategies, proactive support, and end-to-end guidance to help you grow with confidence.</h2>
                                    </div>
                                    {/* title="" END*/}
                                    <ul className="description-list">
                                        <li>
                                            <i className="feather-check" />
                                            Tradmark & Copyright Expert - IPR
                                        </li>
                                        <li>
                                            <i className="feather-check" />
                                            Company Registration & Compliances Expert - ROC
                                        </li>
                                        <li>
                                            <i className="feather-check" />
                                            Certification & Licenses Expert
                                        </li>
                                        <li>
                                            <i className="feather-check" />
                                            Finance & Accounts Expert
                                        </li>
                                        <li>
                                            <i className="feather-check" />
                                            Web & Graphics Expert - Digital
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="twm-about-1-bottom-wrap">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                {/*icon-block-1*/}
                                <div className="twm-card-blocks">
                                    <div className="twm-icon pink">
                                        <JobZImage src="images/main-slider/slider2/20+new.png" alt="" />
                                    </div>
                                    <div className="twm-content">
                                        <div className="tw-count-number text-clr-pink">
                                            <span className="counter">
                                                <CountUp end={20} duration={8} />
                                            </span> +
                                        </div>
                                        <p className="icon-content-info">Years Experienced Experts </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                {/*icon-block-2*/}
                                <div className="twm-card-blocks-2">
                                    <div className="twm-pics">
                                        <span><JobZImage src="images/main-slider/slider1/user/2.svg" alt="" /></span>
                                        <span><JobZImage src="images/main-slider/slider1/user/3.svg" alt="" /></span>
                                        <span><JobZImage src="images/main-slider/slider1/user/4.svg" alt="" /></span>
                                        <span><JobZImage src="images/main-slider/slider1/user/5.svg" alt="" /></span>
                                        <span><JobZImage src="images/main-slider/slider1/user/6.svg" alt="" /></span>
                                        <span><JobZImage src="images/main-slider/slider1/user/1.svg" alt="" /></span>
                                    </div>
                                    <div className="twm-content">
                                        <div className="tw-count-number text-clr-green">
                                            <span className="counter">
                                                <CountUp end={4} duration={10} />
                                            </span>K+
                                        </div>
                                        <p className="icon-content-info">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                {/*icon-block-3*/}
                                <div className="twm-card-blocks">
                                    <div className="twm-icon twm-icon-top">
                                        <JobZImage className='twm-icon-image' src="images/main-slider/slider2/top-icon.png" alt="" />
                                    </div>
                                    <div className="twm-content">
                                        <div className="tw-count-number text-clr-sky">
                                            <span className="counter">
                                                <CountUp end={100} duration={10} />
                                            </span>+
                                        </div>
                                        <p className="icon-content-info">Top Brands Trusting Unicx</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                {/*icon-block-3*/}
                                <div className="twm-card-blocks">
                                    <div className="twm-icon">
                                        <JobZImage src="images/main-slider/slider2/success1.png" alt="" />
                                    </div>
                                    <div className="twm-content">
                                        <div className="tw-count-number text-clr-sky">
                                            <span className="counter">
                                                <CountUp end={99} duration={10} />
                                            </span>%
                                        </div>
                                        <p className="icon-content-info">Positive Success Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ABOUT SECTION END */}
            {/* EXPLORE NEW LIFE START */}
            <div className="section-full site-bg-light-purple twm-for-employee-4">
                <div className="container">
                    <div className="section-content">
                        <div className="twm-for-employee-content">
                            <div className="row">
                                <div className="col-xl-5 col-lg-12 col-md-12">
                                    <div className="twm-explore-content-outer2">
                                        <div className="twm-explore-top-section">
                                            {/* title="" START*/}
                                            <div className="section-head left wt-small-separator-outer">
                                                {/* <div className="wt-small-separator site-text-primary">
                                                                <div>About</div>
                                                            </div> */}
                                                <h2>Why Choose UniCX  </h2>
                                                <p>At UniCX, we are dedicated to helping you with the best of our services, backed by the right practices and a strategic approach. Our mission is to simplify complex processes and deliver reliable, results-driven solutions tailored to your business needs.</p>
                                            </div>
                                            {/* title="" END*/}
                                            <div className="twm-title-large">
                                                <div className="twm-title-small">1) Personalized Attention</div>
                                                <p className='para-text'>One-on-One Expert support tailored to your unique needs.</p>
                                            </div>
                                            <div className="twm-title-large">
                                                <div className="twm-title-small">2) Strategic Guidance</div>
                                                <p className='para-text'>Tailored advice and smart solutions for your desired Goals.</p>
                                            </div>
                                            <div className="twm-title-large">
                                                <div className="twm-title-small">3) Hands-On Support</div>
                                                <p className='para-text'>Expert guidance every step, ensuring clarity and confidence.</p>
                                            </div>
                                            <div className="twm-title-large">
                                                <div className="twm-title-small">4) Goal-Focused Approach</div>
                                                <p className='para-text'>We don’t just advise—we help you achieve real, measurable outcomes.</p>
                                            </div>
                                            <div className="twm-title-large">
                                                <div className="twm-title-small">5) Problem-Solving Expertise</div>
                                                <p className='para-text'>Proven strategies from experts to solve challenges.</p>
                                            </div>
                                            <div className="twm-title-large">
                                                <div className="twm-title-small">6) Direct Access</div>
                                                <p className='para-text'>Direct access to expert ensures faster communication.</p>
                                            </div>
                                            <div className="twm-title-large">
                                                <div className="twm-title-small">7) Accelerated Results</div>
                                                <p className='para-text'>Save time with Expert-led solutions, eliminate guesswork.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-12 col-md-12">
                                    <div className="twm-explore-right-section">
                                        <div className="twm-media">
                                            <div className="twm-bg-circle"><JobZImage src="images/home-4/bg-circle.png" alt="" /></div>
                                            <div className="twm-employee-pic"><JobZImage src="images/Why_Choose_UniCX/Final_WCU.png" alt="" /></div>
                                            <div className="twm-shot-pic1 anm" data-speed-x={-4} data-speed-scale={-25}>
                                                <JobZImage src="images/home-4/sq-1.png" alt="" />
                                            </div>
                                            <div className="twm-shot-pic2 anm" data-wow-delay="1000ms" data-speed-x={2} data-speed-y={2}>
                                                <JobZImage src="images/home-4/triangle.png" alt="" />
                                            </div>
                                            <div className="twm-shot-pic3 anm" data-speed-x={-4} data-speed-scale={-25}>
                                                <JobZImage src="images/home-4/circle.png" alt="" />
                                            </div>
                                        </div>

                                        {/*block 1*/}
                                        <div className="counter-outer-two one anm" data-speed-y={-2} data-speed-scale={15} data-speed-opacity={1}>
                                            <div className="icon-content">
                                                <div className="tw-count-number text-clr-yellow-2">
                                                    <span className="counter">
                                                        <CountUp end={5} duration={10} />
                                                    </span>M+</div>
                                                <p className="icon-content-info">Million daily active users</p>
                                            </div>
                                        </div>
                                        {/*block 2*/}
                                        <div className="counter-outer-two two anm" data-speed-y={2} data-speed-scale={15} data-speed-opacity={5}>
                                            <div className="icon-content">
                                                <div className="tw-count-number text-clr-green">
                                                    <span className="counter">
                                                        <CountUp end={9} duration={10} />
                                                    </span>K+</div>
                                                <p className="icon-content-info">Open job positions</p>
                                            </div>
                                        </div>
                                        {/*block 3*/}
                                        <div className="counter-outer-two three anm" data-speed-x={-4} data-speed-scale={-25}>
                                            <div className="icon-content">
                                                <div className="tw-count-number text-clr-pink">
                                                    <span className="counter">
                                                        <CountUp end={2} duration={10} />
                                                    </span>M+</div>
                                                <p className="icon-content-info">Million stories shared</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* EXPLORE NEW LIFE END */}

            {/* TOP COMPANIES START */}
            <div className="section-full p-t120 p-b90 site-bg-white twm-companies-wrap">
                {/* title="" START*/}
                <div className="section-head center wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                        <div>Top Companies</div>
                    </div>
                    <h2 className="wt-title">Our Valued customers</h2>
                </div>
                {/* title="" END*/}
                <div className="container">
                    <div className="section-content">
                        <div className="owl-carousel home-client-carousel3 owl-btn-vertical-center">
                            {Array.from({ length: 50 }, (_, i) => (
                                <div className="item" key={i}>
                                    <div className="ow-client-logo">
                                        <div className="client-logo client-logo-media">
                                            <NavLink to={publicUser.employer.LIST}>
                                                <JobZImage src={`images/company-final/${i + 1}.webp`} alt="" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* TOP COMPANIES END */}

            {/* OUR BLOG START */}
            <div className="section-full p-t120 p-b90 site-bg-gray bg-cover overlay-wraper" style={{ backgroundImage: `url(${publicUrlFor("images/blog/blog-single/case.svg")})` }}>
                <div className="overlay-main site-bg-primary opacity-01" />
                <div className="container">
                    {/* title="" START*/}
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>Our Blogs</div>
                        </div>
                        <h2 className="wt-title site-text-white">CASE STUDIES & ACHIEVEMENTS</h2>
                    </div>
                    {/* title="" END*/}
                    <div className="section-content">
                        <div className="row d-flex justify-content-center">
                            {caseStudies.length > 0 ? (
                                <>
                                    {/* Block one (Left Column - with image) */}
                                    <div className="col-lg-5 col-md-12 m-b30">
                                        <div className="blog-post twm-blog-post-2-outer">
                                            <div className="wt-post-media">
                                                <NavLink to={`${publicUser.blog.DETAIL}/${caseStudies[0].id}`}>
                                                    {/* Using caseStudies[0].image_url if available, otherwise a placeholder */}
                                                    {/* <JobZImage src={caseStudies[0].image_url || "images/main-slider/slider1/user/top10.jpg"} alt={caseStudies[0].title} /> */}
                                                     <img
                                                        src={
                                                            caseStudies[0].image_url
                                                            ? `https://unicx.in${caseStudies[0].image_url}`
                                                            : `https://unicx.in/images/main-slider/slider1/user/top10.jpg`
                                                        }
                                                        alt={caseStudies[0].title}
                                                        className="img-fluid" // Optional: add styling class if needed
                                                        />

                                                </NavLink>
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="wt-post-meta ">
                                                    <ul>
                                                        <li className="post-date">{new Date(caseStudies[0].created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</li>
                                                    </ul>
                                                </div>
                                                <div className="wt-post-title ">
                                                    <h4 className="post-title">
                                                        <NavLink to={`${publicUser.blog.DETAIL}/${caseStudies[0].id}`}>
                                                            {caseStudies[0].title}
                                                        </NavLink>
                                                    </h4>
                                                </div>
                                                <div className="wt-post-readmore ">
                                                    <NavLink to={`${publicUser.blog.DETAIL}/${caseStudies[0].id}`} className="site-button-link site-text-secondry">Read More</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column - Contains multiple blocks without images */}
                                    <div className="col-lg-7 col-md-12">
                                        <div className="twm-blog-post-wrap-right">
                                            {/* Map over the remaining case studies (e.g., from index 1 up to 3 more items) */}
                                            {caseStudies.slice(1, 4).map((caseStudy, idx) => (
                                                <div className="blog-post twm-blog-post-1-outer shadow-none m-b30" key={caseStudy.id}>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-meta ">
                                                            <ul>
                                                                <li className="post-date">{new Date(caseStudy.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</li>
                                                                {/* Assuming caseStudy has an author property, otherwise keep placeholder or remove */}
                                                                <li className="post-author">By <NavLink to={publicUser.candidate.DETAIL1}>{caseStudy.author || 'Unicx Team'}</NavLink></li>
                                                            </ul>
                                                        </div>
                                                        <div className="wt-post-title ">
                                                            <h4 className="post-title">
                                                                <NavLink to={`${publicUser.blog.DETAIL}/${caseStudy.id}`}>
                                                                    {caseStudy.title}
                                                                </NavLink>
                                                            </h4>
                                                        </div>
                                                        <div className="wt-post-text ">
                                                            {/* Assuming caseStudy has a short_description or similar property */}
                                                            <p>
                                                                {caseStudy.short_description || caseStudy.description ? (caseStudy.short_description || caseStudy.description).substring(0, 150) + '...' : 'Description not available.'}
                                                            </p>
                                                        </div>
                                                        <div className="wt-post-readmore ">
                                                            <NavLink to={`${publicUser.blog.DETAIL}/${caseStudy.id}`} className="site-button-link site-text-primary">Read More</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="col-12 text-center">
                                    <p>No case studies found.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* OUR BLOG END */}

            {/* TESTIMONIAL SECTION START */}
            <div className="section-full p-t120 p-b90 site-bg-white twm-testimonial-v-area">
                <div className="container">
                    <div className="section-content">
                        <div className="twm-testimonial-v-section">
                            <div className="row">
                                <div className="col-xl-5 col-lg-12 col-md-12">
                                    <div className="twm-explore-content-outer2">
                                        <div className="twm-explore-top-section">
                                            {/* title="" START*/}
                                            <div className="section-head left wt-small-separator-outer">
                                                <div className="wt-small-separator site-text-primary">
                                                    <div>Testimonials </div>
                                                </div>
                                                <h2>Quotes from our
                                                    customer about us</h2>
                                                <p>Hear directly from the businesses and innovators we've helped protect their
                                                    intellectual property and navigate the complexities
                                                    of patents and trademarks. Their success stories speak volumes about&nbsp;our&nbsp;dedication.</p>
                                            </div>
                                            {/* title="" END*/}
                                            <div className="twm-read-more">
                                                <NavLink to={publicUser.pages.ABOUT} className="site-button">Show All Quotes</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-12 col-md-12">
                                    <div className="v-testimonial-wrap">
                                        <div className="v-testi-dotted-pic">
                                            <JobZImage src="images/home-6/testimonial/dotted-block.png" alt="#" />
                                        </div>
                                        {/* Swiper */}
                                        <div className="swiper-container v-testimonial-slider">
                                            <div className="swiper-wrapper">
                                                {/*block 1*/}
                                                <div className="swiper-slide">
                                                    <div className="testimonials-v">
                                                        <div className="twm-testi-media">
                                                            <JobZImage src="images/main-slider/slider1/user/1.svg" alt="#" />
                                                        </div>
                                                        <div className="testimonial-v-content">
                                                            <div className="t-testimonial-top">
                                                                <div className="t-quote"><i className="fa fa-quote-left" /></div>
                                                                <div className="t-rating">
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                </div>
                                                            </div>
                                                            <div className="t-discription">UniConsultX transformed my startup journey. From selecting a legally sound brand name to
                                                                handling all compliance and digital needs, their team provided seamless support.
                                                                Their integrated approach saved me time and ensured my business was built on a solid foundation.
                                                            </div>
                                                            <div className="twm-testi-detail">
                                                                <div className="twm-testi-name">Anjali Mehta</div>
                                                                <div className="twm-testi-position">Founder - GreenLeaf Organics</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*block 2*/}
                                                <div className="swiper-slide">
                                                    <div className="testimonials-v">
                                                        <div className="twm-testi-media">
                                                            <JobZImage src="images/main-slider/slider1/user/5.svg" alt="#" />
                                                        </div>
                                                        <div className="testimonial-v-content">
                                                            <div className="t-testimonial-top">
                                                                <div className="t-quote"><i className="fa fa-quote-left" /></div>
                                                                <div className="t-rating">
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                </div>
                                                            </div>
                                                            <div className="t-discription">Navigating the complexities of business compliance was daunting
                                                                until I partnered with UniCX. Their in-house experts managed everything from GST registration to
                                                                trademark filing with utmost professionalism. Their prompt responses and clear guidance were invaluable.
                                                            </div>
                                                            <div className="twm-testi-detail">
                                                                <div className="twm-testi-name">Rahul Sharma</div>
                                                                <div className="twm-testi-position">Director - TechNova Solutions</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*block 3*/}
                                                <div className="swiper-slide">
                                                    <div className="testimonials-v">
                                                        <div className="twm-testi-media">
                                                            <JobZImage src="images/main-slider/slider1/user/6.svg" alt="#" />
                                                        </div>
                                                        <div className="testimonial-v-content">
                                                            <div className="t-testimonial-top">
                                                                <div className="t-quote"><i className="fa fa-quote-left" /></div>
                                                                <div className="t-rating">
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                </div>
                                                            </div>
                                                            <div className="t-discription">UniConsultX's digital team revamped our online presence with a
                                                                stunning website and cohesive branding. Their attention to detail and understanding
                                                                of our vision resulted in a significant boost in our online engagement. Truly a game-changer for our business.
                                                            </div>
                                                            <div className="twm-testi-detail">
                                                                <div className="twm-testi-name">Priya Desai</div>
                                                                <div className="twm-testi-position">Marketing Head - Urban Threads</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*block 4*/}
                                                <div className="swiper-slide">
                                                    <div className="testimonials-v">
                                                        <div className="twm-testi-media">
                                                            <JobZImage src="images/main-slider/slider1/user/4.svg" alt="#" />
                                                        </div>
                                                        <div className="testimonial-v-content">
                                                            <div className="t-testimonial-top">
                                                                <div className="t-quote"><i className="fa fa-quote-left" /></div>
                                                                <div className="t-rating">
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                </div>
                                                            </div>
                                                            <div className="t-discription">Obtaining necessary certifications
                                                                seemed overwhelming, but UniCX made it straightforward. They handled our ISO certification process
                                                                efficiently, ensuring compliance without any hassle. Their expertise is unmatched.
                                                            </div>
                                                            <div className="twm-testi-detail">
                                                                <div className="twm-testi-name">Vikram Patel</div>
                                                                <div className="twm-testi-position">CEO - SafeBuild Constructions</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*block 5*/}
                                                <div className="swiper-slide">
                                                    <div className="testimonials-v">
                                                        <div className="twm-testi-media">
                                                            <JobZImage src="images/main-slider/slider1/user/2.svg" alt="#" />
                                                        </div>
                                                        <div className="testimonial-v-content">
                                                            <div className="t-testimonial-top">
                                                                <div className="t-quote"><i className="fa fa-quote-left" /></div>
                                                                <div className="t-rating">
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                    <span><i className="fa fa-star" /></span>
                                                                </div>
                                                            </div>
                                                            <div className="t-discription">What sets UniConsultX apart is their personalized approach.
                                                                They assigned a dedicated expert who understood our unique needs and provided tailored solutions.
                                                                Their proactive communication kept us informed at every step.
                                                            </div>
                                                            <div className="twm-testi-detail">
                                                                <div className="twm-testi-name">Sneha Kapoor</div>
                                                                <div className="twm-testi-position">Co-founder - EduBridge Learning</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Add Pagination */}
                                            {/* <div className="swiper-pagination" /> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* TESTIMONIAL SECTION END */}
            {/* OUR BLOG START */}
            <div className="section-full p-t120 p-b90 site-bg-gray bg-cover overlay-wraper" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-4.svg")})` }}>
                <div className="overlay-main site-bg-primary opacity-01" />
                <div className="container">
                    {/* title="" START*/}
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>Our Blogs</div>
                        </div>
                        <h2 className="wt-title site-text-white">Latest Article</h2>
                    </div>
                    {/* title="" END*/}
                    <div className="section-content">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4 col-md-6 m-b30">
                                {/*Block one*/}
                                <div className="blog-post twm-blog-post-2-outer">
                                    <div className="wt-post-media">
                                        <NavLink to={publicUser.blog.DETAIL}><JobZImage src="images/blog/blog-single/blog1.png" alt="" /></NavLink>
                                    </div>
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-date">April 12, 2024</li>
                                            </ul>
                                        </div>
                                        <div className="wt-post-title ">
                                            <h4 className="post-title">
                                                <NavLink to={publicUser.blog.DETAIL}>
                                                    The Indian Trademark Registration Process: A Step-by-Step Guide by UNICONSULTX SOLUTIONS...
                                                </NavLink>
                                            </h4>
                                        </div>
                                        <div className="wt-post-readmore ">
                                            <NavLink to={publicUser.blog.DETAIL} className="site-button-link site-text-secondry">Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 m-b30">
                                {/*Block Two*/}
                                <div className="blog-post twm-blog-post-2-outer">
                                    <div className="wt-post-media">
                                        <NavLink to={publicUser.blog.DETAIL}><JobZImage src="images/blog/blog-single/blog2.png" alt="" /></NavLink>
                                    </div>
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-date">April 14, 2024</li>
                                            </ul>
                                        </div>
                                        <div className="wt-post-title ">
                                            <h4 className="post-title">
                                                <NavLink to={publicUser.blog.DETAIL}>
                                                    Avoiding Costly Mistakes: Common Trademark Filing Errors to Beware Of by UNICONSULTX SOLUTIONS...
                                                </NavLink>
                                            </h4>
                                        </div>
                                        <div className="wt-post-readmore ">
                                            <NavLink to={publicUser.blog.DETAIL} className="site-button-link site-text-secondry">Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 m-b30">
                                {/*Block Three*/}
                                <div className="blog-post twm-blog-post-2-outer">
                                    <div className="wt-post-media">
                                        <NavLink to={publicUser.blog.DETAIL}><JobZImage src="images/blog/blog-single/blog3.png" alt="" /></NavLink>
                                    </div>
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-date">April 18, 2024</li>
                                            </ul>
                                        </div>
                                        <div className="wt-post-title ">
                                            <h4 className="post-title">
                                                <NavLink to={publicUser.blog.DETAIL}>
                                                    Protectiong Your Innovations: A Simple Guide to Patents for Indian Startups & SMEs by  UNICONSULTX...
                                                </NavLink>
                                            </h4>
                                        </div>
                                        <div className="wt-post-readmore ">
                                            <NavLink to={publicUser.blog.DETAIL} className="site-button-link site-text-secondry">Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* OUR BLOG END */}
            {/* FAQ SECTION START */}

            <div className="section-full p-t120  p-b90 site-bg-white FAQ">
                <div className="container">
                    <div className="section-content">
                        <div className="twm-tabs-style-1 center">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeTab === 'General' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('General')}
                                        type="button"
                                        role="tab"
                                        aria-controls="General"
                                    >
                                        General
                                    </button>
                                </li>
                                {/* Dynamically generated tabs */}
                                {categories.map((category) => (
                                    <li className="nav-item" role="presentation" key={category.id}>
                                        <button
                                            className={`nav-link ${activeTab === category.name ? 'active' : ''}`}
                                            onClick={() => setActiveTab(category.name)}
                                            type="button"
                                            role="tab"
                                            aria-controls={category.name}
                                        >
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                {/*Tabs content one - General FAQs (still present) */}
                                <div
                                    className={`tab-pane fade ${activeTab === 'General' ? 'show active' : ''}`}
                                    id="General"
                                    role="tabpanel"
                                >
                                    <SectionFaqGeneral />
                                </div>
                                {/* Dynamically generated tab content */}
                                {categories.map((category) => (
                                    <div
                                        className={`tab-pane fade ${activeTab === category.name ? 'show active' : ''}`}
                                        id={category.name}
                                        role="tabpanel"
                                        key={category.id}
                                    >
                                        {renderFaqAccordion(faqs.filter(faq => faq.category_id === category.id), category.name)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home1Page;
