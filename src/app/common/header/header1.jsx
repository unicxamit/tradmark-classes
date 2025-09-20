import JobZImage from "../jobz-img";
import { NavLink, useNavigate } from "react-router-dom";
import { publicUser } from "../../../globals/route-names";
import { useState, useEffect, useRef } from "react";
import {
  getCategories,
  getSubCategories,
  getSubSubCategories,
} from "../../../api";
import TrademarkSearch from "../../pannels/public-user/components/pages/TrademarkSearch";
import { FcCallback } from "react-icons/fc";
import { RiArrowDropDownLine } from "react-icons/ri";

function Header1({ _config }) {
  const [menuActive, setMenuActive] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [active, setActive] = useState(false);

  const [subSubCategories, setSubSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleActive = () => {
    setActive((prev) => !prev);
  };

  const closeActive = () => {
    setActive(false);
  };

  // Detect outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActive(false);
      }
    };
    //  onMouseEnter={() => setActive(true)}

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const [cats, subs, subsubs] = await Promise.all([
          getCategories(),
          getSubCategories(),
          getSubSubCategories(),
        ]);
        setCategories(cats);
        setSubCategories(subs);
        setSubSubCategories(subsubs);
      } catch (error) {
        console.error("Error fetching navigation data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // This single function handles both opening and closing the menu
  const handleNavigationClick = () => {
    setMenuActive(!menuActive);
  };

  const getSubsForCategory = (categoryId) =>
    subCategories.filter((sub) => sub.category_id === categoryId);

  const getSubSubsForSubCategory = (subCategoryId) =>
    subSubCategories.filter(
      (subsub) => subsub.subcategory_id === subCategoryId
    );

  return (
    <>
      <header
        className={`site-header ${_config.style} mobile-sider-drawer-menu ${
          menuActive ? "active" : ""
        }`}
      >
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar" style={{ maxWidth: "100%" }}>
            <div className="container-fluid clearfix">
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <NavLink to={publicUser.HOME1}>
                    <JobZImage src="images/UniCX-logo.gif" alt="" />
                  </NavLink>
                </div>
              </div>

              {/* Mobile Menu Toggle Button (Hamburger) */}
              <button
                id="mobile-side-drawer"
                data-target=".header-nav"
                data-toggle="collapse"
                type="button"
                className="navbar-toggler collapsed"
                onClick={handleNavigationClick}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar icon-bar-first" />
                <span className="icon-bar icon-bar-two" />
                <span className="icon-bar icon-bar-three" />
              </button>

              {!loading && (
                <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
                  <button
                    type="button"
                    className="close-menu-btn"
                    onClick={handleNavigationClick}
                  >
                    &times; {/* This creates a simple 'X' icon */}
                  </button>

                  <ul className="nav navbar-nav">
                    {/* Dynamic Categories Menu */}
                    {categories.map((category) => {
                      const categorySubs = getSubsForCategory(category.id);
                      return (
                        <li
                          key={`cat-${category.id}`}
                          className={categorySubs.length > 0 ? "has-child" : ""}
                        >
                          <a>{category.name}</a>
                          {categorySubs.length > 0 && (
                            <ul className="sub-menu">
                              {categorySubs.map((sub) => {
                                const subSubs = getSubSubsForSubCategory(
                                  sub.id
                                );
                                return (
                                  <li
                                    key={`sub-${sub.id}`}
                                    className={
                                      subSubs.length > 0 ? "has-child" : ""
                                    }
                                  >
                                    <NavLink
                                      to={`/category/${category.id}/subcategory/${sub.id}`}
                                    >
                                      {sub.name}
                                    </NavLink>
                                    {subSubs.length > 0 && (
                                      <ul className="sub-menu">
                                        {subSubs.map((subsub) => (
                                          <li key={`subsub-${subsub.id}`}>
                                            <NavLink
                                              to={`/subsubcategory/${subsub.id}`}
                                            >
                                              {subsub.name}
                                            </NavLink>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}

                    {/* MORE Dropdown Menu */}

                    <li
                      className="dropdown"
                      // onMouseLeave={() => setActive(false)}/
                    >
                      <a>
                        <RiArrowDropDownLine style={{ fontSize: "2rem" }} />
                      </a>

                      <ul ref={dropdownRef} className="dropdown-menu">
                        {/* Left menu */}
                        <li>
                          <NavLink
                            to={publicUser.pages.ABOUT}
                            onClick={closeActive}
                          >
                            About
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={publicUser.pages.CONTACT}
                            onClick={closeActive}
                          >
                            Contact Us
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={publicUser.pages.BLOG}
                            onClick={closeActive}
                          >
                            Blog
                          </NavLink>
                        </li>

                        {/* Calculators with hover dropdown */}
                        <li
                          className="calculator-wrapper d-flex"
                          onMouseEnter={() => setActive(true)}
                          onMouseLeave={() => setActive(false)}
                        >
                          <NavLink
                            style={{ cursor: "pointer" }}
                            // to={publicUser.calculator.CALCULATOR_ALL}
                          >
                            Calculators
                          </NavLink>

                          <div
                            className={`calculator-panel ${
                              active ? "open" : ""
                            } linksPaddingStyle calculator-scroll right-menu`}
                          >
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.CALCULATOR_ALL}
                                onClick={closeActive}
                              >
                                All Calculators
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.ITRCalculator}
                              >
                                Income Tax Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.HRACalculator}
                              >
                                HRA Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.GSTCalculator}
                              >
                                GST Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.EMICalculator}
                              >
                                EMI Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.HomeEMICalculator}
                              >
                                Home Loan EMI Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={
                                  publicUser.calculator.MutualFundCalculator
                                }
                              >
                                Mutual Fund Returns Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={
                                  publicUser.calculator.RetirementCalculator
                                }
                              >
                                Retirement Planning Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.EPFCalculator}
                              >
                                EPF Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.PPFCalculator}
                              >
                                PPF Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.NPSCalculator}
                              >
                                NPS Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.GratuityCalculator}
                              >
                                Gratuity Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={
                                  publicUser.calculator.SimpleInterestCalculator
                                }
                              >
                                Simple Compound Interest Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.FDCalculator}
                              >
                                FD Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.LumpsumCalculator}
                              >
                                Lumpsum Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.TDSCalculator}
                              >
                                TDS Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.RDCalculator}
                              >
                                RD Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.SIPCalculator}
                              >
                                SIP Calculator
                              </a>
                            </p>
                            <p className="linkStyle">
                              <a
                                rel="noopener noreferrer"
                                href={publicUser.calculator.BusinessCalculator}
                              >
                                Business Setup Calculator
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              )}

              {/* Right Nav */}
              <div className="extra-nav header-2-nav">
                <div className="extra-cell">
                  <div className="header-search">
                    <a
                      href="#"
                      className="header-search-icon"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/trademark-search");
                      }}
                    >
                      <i className="feather-search" />
                    </a>
                  </div>
                </div>
                <div className="extra-cell">
                  <div className="header-nav-btn-section">
                    <div className="twm-nav-btn-left">
                      <div className="twm-nav-sign-up">
                        <FcCallback className="font-icon-contact" />{" "}
                        <NavLink
                          style={{ textDecoration: "none" }}
                          to={publicUser.pages.CONTACT}
                        >
                          Contact-us
                        </NavLink>
                      </div>
                    </div>
                    <div className="twm-nav-btn-right">
                      <a
                        className="twm-nav-post-a-job"
                        data-bs-toggle="modal"
                        href="#sign_up_popup2"
                        role="button"
                      >
                        <i className="feather-log-in" /> Sign In
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Site Search */}
          <div id="search">
            <span className="close" />
            <TrademarkSearch />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header1;
