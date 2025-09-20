import { useLocation } from "react-router-dom";
import SignUpPopup from "../app/common/popups/popup-signup";
import SignInPopup from "../app/common/popups/popup-signin";
import PublicUserRoutes from "../routing/public-user-routes";
import InnerPageBanner from "../app/common/inner-page-banner";
import { showBanner, setBanner } from "../globals/banner-data";
import { showHeader, showFooter, setFooterType, setHeaderType, showFloatingMenus } from "../globals/layout-config";
import FloatingMenus from "../app/common/floating/floatingMenu";

function PublicUserLayout() {
    const currentpath = useLocation().pathname;
    return (
        <>
            <div className="page-wraper">

                {
                    showFloatingMenus(currentpath) &&
                    <FloatingMenus />
                }

                {/* Header */}
                {
                    showHeader(currentpath) &&
                    setHeaderType(currentpath)
                }

                <div className="page-content">
                    {/* {
                        showBanner(currentpath) &&
                        <InnerPageBanner _data={setBanner(currentpath)} />
                    } */}
                    <PublicUserRoutes />
                </div>

                {/* Footer */}
                {
                    showFooter(currentpath) &&
                    setFooterType(currentpath)
                }

                {/* BUTTON TOP START */}
                <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate" /></button>

                <SignUpPopup />
                <SignInPopup />

            </div>
        </>
    )
}

export default PublicUserLayout;