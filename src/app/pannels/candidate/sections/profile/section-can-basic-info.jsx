import React from "react";
import "../../condidateCss/SectionCandidateBasicInfo.css";

function SectionCandidateBasicInfo() {
  return (
    <>
      <form>
        <div className="panel panel-default">
          <div className="panel-heading wt-panel-heading p-a20">
            <h4 className="panel-tittle m-a0">Basic Informations</h4>
          </div>
          <div className="panel-body wt-panel-body p-a20 m-b30">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Full Name</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_name"
                      type="text"
                      placeholder="Devid Smith"
                    />
                    <i className="fs-input-icon fa fa-user" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Email Address</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_Email"
                      type="email"
                      placeholder="Devid@example.com"
                    />
                    <i className="fs-input-icon fas fa-at" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Phone Number</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_phone"
                      type="text"
                      placeholder="(251) 1234-456-7890"
                    />
                    <i className="fs-input-icon fa fa-phone-alt" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Age</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_since"
                      type="date"
                      placeholder="35 Years"
                    />
                    <i className="fs-input-icon fa fa-child" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Gender</label>
                  <select className="custom-form-select">
                    <option value="gender">gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading wt-panel-heading p-a20">
            <h4 className="panel-tittle m-a0">Address Informations</h4>
          </div>
          <div className="panel-body wt-panel-body p-a20 m-b30">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>Address Line 1</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_since"
                      type="text"
                      placeholder="address_line_1"
                    />
                    <i className="fs-input-icon fa fa-globe-americas" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>Address Line 2</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_since"
                      type="text"
                      placeholder="address_line_2"
                    />
                    <i className="fs-input-icon fa fa-globe-americas" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>Country</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_since"
                      type="text"
                      placeholder="country"
                    />
                    <i className="fs-input-icon fa fa-globe-americas" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>State</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_since"
                      type="text"
                      placeholder="state"
                    />
                    <i className="fs-input-icon fa fa-globe-americas" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>City</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_since"
                      type="text"
                      placeholder="Texas"
                    />
                    <i className="fs-input-icon fa fa-globe-americas" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>Postcode</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_since"
                      type="text"
                      placeholder={75462}
                    />
                    <i className="fs-input-icon fas fa-map-pin" />
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>Full Address</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_since"
                      type="text"
                      placeholder="1363-1385 Sunset Blvd Angeles, CA 90026 ,USA"
                    />
                    <i className="fs-input-icon fas fa-map-marker-alt" />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue={
                      "Greetings! when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading wt-panel-heading p-a20">
            <h4 className="panel-tittle m-a0">
              Professinal/Additional Informations
            </h4>
          </div>
          <div className="panel-body wt-panel-body p-a20 m-b30">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>Occupation/Job Title</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_since"
                      type="text"
                      placeholder="occupation"
                    />
                    <i className="fs-input-icon fa fa-briefcase" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>Company/Business</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_since"
                      type="text"
                      placeholder="company"
                    />
                    <i className="fs-input-icon fa fa-building" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>Website</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_since"
                      type="text"
                      placeholder="website"
                    />
                    <i className="fs-input-icon fa fa-link" />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Bio/About</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue={
                      "Greetings! when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
                    }
                    placeholder="write a text here"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading wt-panel-heading p-a20">
            <h4 className="panel-tittle m-a0">Account Informations</h4>
          </div>
          <div className="panel-body wt-panel-body p-a20 m-b30">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>Username</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_since"
                      type="text"
                      placeholder="occupation"
                      readOnly
                    />
                    <i className="fs-input-icon fa fa-user" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Account Status</label>
                  <select className="custom-form-select">
                    <option value="active">Active</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>Created At</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control"
                      name="company_since"
                      type="date"
                      placeholder="created_at"
                    />
                    <i className="fs-input-icon fa fa-calendar-alt" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading wt-panel-heading p-a20">
            <h4 className="panel-tittle m-a0">Documents (Optional Uploads)</h4>
          </div>
          <div className="panel-body wt-panel-body p-a20 m-b30">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>Aadhaar Card</label>
                  <div className="ls-inputicon-box file-upload-wrapper">
                    <label
                      htmlFor="adhar"
                      className="form-control file-upload-label"
                      style={{ padding: "17px 40px" }}
                    >
                      {" "}
                      <i className="fs-input-icon fa fa-id-card" />
                      Aadhaar Card
                    </label>
                    <input
                      className="form-control file-upload-input"
                      name="adhar"
                      id="adhar"
                      type="file"
                      placeholder="File UPload"
                    />
                    {/* <i className="fs-input-icon fa fa-globe-americas" /> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>PAN Card</label>
                  <div className="ls-inputicon-box file-upload-wrapper">
                    <label
                      htmlFor="pan"
                      className="form-control file-upload-label"
                      style={{ padding: "17px 40px" }}
                    >
                      {" "}
                      <i className="fs-input-icon fa fa-address-card" />
                      PAN Card
                    </label>
                    <input
                      className="form-control file-upload-input"
                      name="adhar"
                      id="pan"
                      type="file"
                      placeholder="File UPload"
                    />
                    {/* <i className="fs-input-icon fa fa-globe-americas" /> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group city-outer-bx has-feedback">
                  <label>Other Docs</label>
                  <div className="ls-inputicon-box file-upload-wrapper">
                    <label
                      htmlFor="other"
                      className="form-control "
                      style={{ padding: "17px 40px" }}
                    >
                      <i className="fs-input-icon fa fa-file-upload" />
                      Other Docs
                    </label>
                    <input
                      className="form-control file-upload-input"
                      name="other"
                      id="other"
                      type="file"
                      placeholder="File UPload"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading wt-panel-heading p-a20">
            <h4 className="panel-tittle m-a0">
              Preferences/Setting (Optional)
            </h4>
          </div>
          <div className="panel-body wt-panel-body p-a20 m-b30">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Language Preference</label>
                  <select className="custom-form-select">
                    <option value="hindi">Hindi</option>
                    <option value="english">English</option>
                  </select>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12"
                style={{ marginTop: "8px" }}
              >
                <div className="form-group city-outer-bx has-feedback grid ">
                  <label>Notification</label>
                  <label className="custom-toggle-label">
                    <input
                      type="checkbox"
                      value=""
                      className="custom-toggle-input"
                    />
                    <div className="custom-toggle-slider"></div>
                    <span className="custom-toggle-text">Toggle me</span>
                  </label>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12"
                style={{ marginTop: "8px" }}
              >
                <div className="form-group city-outer-bx has-feedback grid ">
                  <label>Dark Mode</label>
                  <label className="custom-toggle-label">
                    <input
                      type="checkbox"
                      value=""
                      className="custom-toggle-input"
                    />
                    <div className="custom-toggle-slider"></div>
                    <span className="custom-toggle-text">Theme</span>
                  </label>
                </div>
              </div>
              <div
                className="col-lg-12 col-md-12 "
                style={{ marginTop: "50px" }}
              >
                <div className="">
                  <button type="submit" className="site-button">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SectionCandidateBasicInfo;
