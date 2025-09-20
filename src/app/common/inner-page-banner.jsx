import { publicUrlFor } from "../../globals/constants";
import { NavLink } from "react-router-dom";
import "../../StyleCss/InnerPageBanner.css";
import { useEffect, useState } from "react";
function InnerPageBanner({ _data }) {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 400);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 400);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isLarge ? (
        <>
          <div
            className="wt-bnr-inr overlay-wraper  bg-center "
            style={{
              backgroundImage: isLarge
                ? `url(${publicUrlFor("images/banner/PlanInvestGrow1.gif")})`
                : "none",
            }}
          >
            <div className="overlay-main site-bg-white opacity-01" />
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="wt-title">{_data.title}</h2>
                  </div>
                </div>

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>{_data.crumb}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default InnerPageBanner;
