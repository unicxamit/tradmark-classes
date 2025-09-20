import { useState } from "react";
import AllDemoFloatingMenu from "./all-demo";
import AllDemoFloatingOptions from "./all-demo-options";
import BuyNowFloatingMenu from "./buy-now";

function FloatingMenus() {

    const [demosActive, setDemosActive] = useState(false);

    function handleDemoClick() {
        setDemosActive(!demosActive);
    }

    return (
        <>
            <AllDemoFloatingOptions onClick={handleDemoClick} active={demosActive} />
            <div className="buy-btn-wrap">
                <div className="buy-btn-list">
                    <AllDemoFloatingMenu onClick={handleDemoClick} />
                    <BuyNowFloatingMenu />
                </div>
            </div>
        </>
    )
}
export default FloatingMenus;