import JobZImage from "../../../../common/jobz-img";
import { NavLink, useLocation } from "react-router-dom";
import { setMenuActive } from "../../../../../globals/constants";
import {
  candidate,
  canRoute,
  publicUser,
} from "../../../../../globals/route-names";
import "../../../../../StyleCss/Can-sidebar.css";
function CanSidebarSection() {
  const currentpath = useLocation().pathname;
  console.log(canRoute(candidate.DASHBOARD), "canroute");
  return (
    <>
      <div className="twm-candidate-profile-pics ">
        <JobZImage src="images/user-avtar/pic4.jpg" alt="" />
        <div className="upload-btn-wrappers">
          <div id="upload-image-grid" />
          <button className="site-button button-sm">Upload Photo</button>
          <input
            type="file"
            name="myfile"
            id="file-uploader"
            accept=".jpg, .jpeg, .png"
          />
        </div>
      </div>
      <div className="twm-mid-contents text-center">
        <NavLink
          to={canRoute(publicUser.candidate.DETAIL1)}
          className="twm-job-titles"
        >
          <h4>Randall Henderson </h4>
        </NavLink>
        <p>IT Contractor</p>
      </div>
      <div className="twm-nav-list-1s">
        <ul>
          <li
            className={setMenuActive(
              currentpath,
              canRoute(candidate.DASHBOARD)
            )}
          >
            <NavLink to={canRoute(candidate.DASHBOARD)}>
              <i className="fa fa-tachometer-alt" />
              Dashboard
            </NavLink>
          </li>
          <li
            className={setMenuActive(currentpath, canRoute(candidate.PROFILE))}
          >
            <NavLink to={canRoute(candidate.PROFILE)}>
              <i className="fa fa-user" />
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
              <i className="fas fa-briefcase" />
              My Services
            </NavLink>
          </li>
          {/* <li className={setMenuActive(currentpath, canRoute(candidate.RESUME))}>
                        <NavLink to={canRoute(candidate.RESUME)}><i className="fa fa-receipt" />
                            My Resume
                        </NavLink>
                    </li> */}
          <li
            className={setMenuActive(
              currentpath,
              canRoute(candidate.CV_MANAGER)
            )}
          >
            <NavLink to={canRoute(candidate.CV_MANAGER)}>
              <i className=" fas fa-level-up-alt" />
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
              <i className="fas fa-credit-card" />
              Accounts & Billing
            </NavLink>
          </li>
          <li
            className={setMenuActive(currentpath, canRoute(candidate.ALERTS))}
          >
            <NavLink to={canRoute(candidate.ALERTS)}>
              <i className="fa fa-bell" />
              Notifications
            </NavLink>
          </li>

          <li className={setMenuActive(currentpath, canRoute(candidate.CHAT))}>
            <NavLink to={canRoute(candidate.CHAT)}>
              <i className="fa fa-comments" />
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
              <i className="fa fa-fingerprint" />
              Change Passeord
            </NavLink>
          </li>
          <li className={setMenuActive(currentpath, canRoute(candidate.CHAT))}>
            <NavLink to={canRoute(candidate.CHAT)}>
              <i className="fas fa-sign-out-alt" />
              Sign Out
            </NavLink>
          </li>
          <li
            className={setMenuActive(
              currentpath,
              canRoute(candidate.SAVED_JOBS)
            )}
          >
            <NavLink to={canRoute(candidate.SAVED_JOBS)}>
              <i className="fa fa-paperclip" />
              Uploads
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CanSidebarSection;
