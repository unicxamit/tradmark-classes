import { useEffect, useState } from "react";
import "../../../../StyleCss/Change_password.css";
function CanChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmMatch, setConfirmMatch] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Error states for empty fields
  const [currentPasswordError, setCurrentPasswordError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  // Password validation states
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isCaseValid, setIsCaseValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isSpecialValid, setIsSpecialValid] = useState(false);
  const [isDifferentFromCurrent, setIsDifferentFromCurrent] = useState(false);

  useEffect(() => {
    // Clear new password error when user starts typing
    if (newPassword) {
      setNewPasswordError(false);
    }

    // Password strength calculation
    let strength = 0;
    const lengthValid = newPassword.length >= 8;
    const caseValid = /[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword);
    const numberValid = /\d/.test(newPassword);
    const specialValid = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
    const differentFromCurrent = newPassword !== currentPassword;
    if (lengthValid) strength++;
    if (caseValid) strength++;
    if (numberValid) strength++;
    if (specialValid) strength++;
    if (differentFromCurrent) strength++;

    setPasswordStrength(strength);
    setIsLengthValid(lengthValid);
    setIsCaseValid(caseValid);
    setIsNumberValid(numberValid);
    setIsSpecialValid(specialValid);
    setIsDifferentFromCurrent(differentFromCurrent);

    // Confirm password validation
    setConfirmMatch(confirmPassword === newPassword);
  }, [newPassword, confirmPassword, currentPassword]);

  // Effect to clear confirm password error when user starts typing
  useEffect(() => {
    if (confirmPassword) {
      setConfirmPasswordError(false);
    }
  }, [confirmPassword]);

  // Effect to clear current password error when user starts typing
  useEffect(() => {
    if (currentPassword) {
      setCurrentPasswordError(false);
    }
  }, [currentPassword]);

  // Toggle password visibility
  const togglePasswordVisibility = (inputId) => {
    const input = document.getElementById(inputId);
    if (input) {
      input.type = input.type === "password" ? "text" : "password";
      const button = input.nextElementSibling;
      if (button) {
        button.textContent = input.type === "password" ? "👁" : "🙈";
      }
    }
  };
  const getStrengthBarColor = () => {
    if (newPassword.length >= 10 && passwordStrength === 5) return "lightgreen";
    if (newPassword.length >= 8 && passwordStrength >= 4) return "#ADD8E6"; // Light Blue
    if (passwordStrength >= 3) return "orange";
    if (passwordStrength >= 2) return "red";
    return "red";
  };

  const getStrengthLabel = () => {
    if (newPassword.length >= 10 && passwordStrength === 5) return "Strong ";
    if (newPassword.length >= 8 && passwordStrength >= 4) return "Good ";
    if (passwordStrength >= 3) return "Fair ";
    if (passwordStrength >= 2) return "Weak ";
    if (passwordStrength >= 1) return "Very Weak ";
    return "";
  };

  const getStrengthBarWidth = () => {
    if (newPassword.length >= 10 && passwordStrength === 5) return "99%";
    if (newPassword.length >= 8 && passwordStrength >= 4) return "80%";
    if (passwordStrength >= 3) return "60%";
    if (passwordStrength >= 2) return "40%";
    if (passwordStrength >= 1) return "20%";
    return "0%";
  };
  // hdnld submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset all errors before validation
    setCurrentPasswordError(false);
    setNewPasswordError(false);
    setConfirmPasswordError(false);

    let isValidForm = true;

    // Check for empty fields
    if (!currentPassword.trim()) {
      setCurrentPasswordError(true);
      isValidForm = false;
    }
    if (!newPassword.trim()) {
      setNewPasswordError(true);
      isValidForm = false;
    }
    if (!confirmPassword.trim()) {
      setConfirmPasswordError(true);
      isValidForm = false;
    }

    const isNewPasswordValid =
      isLengthValid &&
      isCaseValid &&
      isNumberValid &&
      isSpecialValid &&
      isDifferentFromCurrent;
    let validedation = getStrengthLabel();
    if (!isNewPasswordValid) {
      alert(`Oops!The New Password Look's ${validedation}`);
      return;
    }

    // // Validate confirm password
    if (!confirmMatch) {
      alert("❗ Passwords do not match");
      return;
    }

    // Simulate loading state
    const submitButton = event.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Changing...";

    // Simulate API call for password change
    setTimeout(() => {
      setShowSuccessMessage(true);
      if (currentPassword && newPassword && confirmPassword) {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        alert("Password Change Successfully");
      }

      setConfirmMatch(false);
      setPasswordStrength(0);
      setIsLengthValid(false);
      setIsCaseValid(false);
      setIsNumberValid(false);
      setIsSpecialValid(false);
      setIsDifferentFromCurrent(false);

      submitButton.disabled = false;
      submitButton.textContent = "Change Password";

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }, 2000);
  };
  const ValidationItem = ({ isValid, children }) => (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        color: isValid ? "#5cb85c" : "#666",
        marginBottom: "5px",
      }}
    >
      {isValid ? (
        <span
          style={{
            display: "inline-block",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            backgroundColor: "#5cb85c",
            color: "white",
            textAlign: "center",
            lineHeight: "18px",
            marginRight: "8px",
            flexShrink: 0,
            fontWeight: "bold",
          }}
        >
          &#10003;
        </span>
      ) : (
        <span
          style={{
            display: "inline-block",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            border: "2px solid #bbb",
            marginRight: "8px",
            flexShrink: 0,
          }}
        ></span>
      )}
      {children}
    </li>
  );
  return (
    <div className="twm-right-section-panels site-bg-gray">
      <form onSubmit={handleSubmit}>
        <div className="panels panel-defaults">
          <div className="panel-headings wt-panel-headings p-a20">
            <h4 className="panel-tittles m-a0">Change Password</h4>
          </div>
          <div className="panel-bodys wt-panel-body p-a20 ">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="oldPassword">Old Password</label>
                  <div className="ls-inputicon-boxs">
                    <input
                      className="form-control wt-form-control"
                      name="oldPassword"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      type="password"
                      placeholder="Old Password"
                      //  required
                    />
                  </div>
                  {currentPasswordError && (
                    <div
                      style={{
                        display: "block",
                        color: "red",
                        paddingLeft: "6px",
                        fontSize: "13px",
                      }}
                    >
                      Current password is required
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>New Password</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control wt-form-control"
                      name="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      type="password"
                      placeholder="New Password"
                    />
                  </div>
                  {newPasswordError && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "13px",
                        marginTop: "6px",
                        textAlign: "left",
                        paddingLeft: "6px",
                      }}
                    >
                      New password is required.
                    </div>
                  )}
                  {newPassword && (
                    <>
                      <div
                        style={{
                          marginTop: "8px",
                          height: "4px",
                          borderRadius: "4px",
                          // marginLeft:'2px',
                          transition:
                            "width 0.3s ease-in-out, background-color 0.3s ease-in-out",
                          width: getStrengthBarWidth(), // Dynamically set width here
                          backgroundColor: getStrengthBarColor(),
                        }}
                      ></div>
                      <div
                        style={{
                          fontSize: "14px",
                          marginTop: "5px",
                          color: "#666",
                        }}
                      >
                        {getStrengthLabel()}
                      </div>
                    </>
                  )}
                  <ul
                    style={{ listStyle: "none", padding: 0, marginTop: "10px" }}
                  >
                    <ValidationItem isValid={isLengthValid}>
                      At least 8 characters
                    </ValidationItem>
                    <ValidationItem isValid={isCaseValid}>
                      Includes uppercase & lowercase letters
                    </ValidationItem>
                    <ValidationItem isValid={isNumberValid}>
                      Includes a number
                    </ValidationItem>
                    <ValidationItem isValid={isSpecialValid}>
                      Includes a special character (!@#$%^&amp;*)
                    </ValidationItem>
                    <ValidationItem isValid={isDifferentFromCurrent}>
                      Must be different from current password
                    </ValidationItem>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>Confirm Password</label>
                  <div className="ls-inputicon-box">
                    <input
                      className="form-control wt-form-control"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </div>
                  {confirmPasswordError && (
                    <div
                      style={{
                        display: "block",
                        color: "red",
                        paddingLeft: "6px",
                        fontSize: "13px",
                      }}
                    >
                      Confirm password is required.
                    </div>
                  )}
                  {confirmPassword.length > 0 && (
                    <div
                      style={{
                        height: "4px", // Thickness of the line
                        borderRadius: "4px",
                        marginLeft: "2px",
                        marginTop: "8px", // Space above the line
                        transition:
                          "width 0.3s ease-in-out, background-color 0.3s ease-in-out",
                        width: "99%", // Always 100% width for the line
                        backgroundColor: confirmMatch ? "lightgreen" : "red",
                      }}
                    >
                      {confirmMatch ? (
                        <p
                          style={{
                            color: "green",
                            paddingTop: "5px",
                            fontSize: "14px",
                          }}
                        >
                          Passwords match! Ready to submit
                        </p>
                      ) : (
                        <p
                          style={{
                            color: "red",
                            paddingTop: "5px",
                            fontSize: "14px",
                          }}
                        >
                          Password mismatch detected
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="text-left">
                  <button type="submit" className="site-button">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CanChangePasswordPage;
