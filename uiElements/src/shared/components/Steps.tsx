import { useState } from "react";
import classNames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faUser, faCheck } from "@fortawesome/free-solid-svg-icons";
const Steps = () => {
    const [selectedStep, setSelectedStep] = useState<number>(1);
    return (
        <>
            <div className="m-4">
                <div className="section-block">
                    <h2 className="section-title"> Steps </h2>
                </div>
                <div className="section-block">
                    <div className="bs-stepper">
                        <div className="card">
                            <div className="card-header">
                                <div className="steps steps-">
                                    <ul>
                                        <li className={classNames("step menu-link-hoverable", { "active": selectedStep === 1 })} onClick={() => setSelectedStep(1)}>
                                            <a className="step-trigger" ><span className="step-indicator step-indicator-icon"><FontAwesomeIcon icon={faRightToBracket} className="step-icon" /></span><span className="d-none d-sm-inline">Account</span></a>
                                        </li>
                                        <li className={classNames("step menu-link-hoverable", { "active": selectedStep === 2 })} onClick={() => setSelectedStep(2)} >
                                            <a className="step-trigger" ><span className="step-indicator step-indicator-icon"><FontAwesomeIcon icon={faUser} className="step-icon" /></span><span className="d-none d-sm-inline">Personal</span></a>
                                        </li>
                                        <li className={classNames("step menu-link-hoverable", { "active": selectedStep === 3 })} onClick={() => setSelectedStep(3)}>
                                            <a className="step-trigger"><span className="step-indicator step-indicator-icon"><FontAwesomeIcon icon={faCheck} className="step-icon" /></span><span className="d-none d-sm-inline">Confirm</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <fieldset>
                                    <>
                                        {selectedStep === 1 &&
                                            <>
                                                <legend>Provide your account details</legend>
                                                <div className="form-group mb-4">
                                                    <div className="form-label-group">
                                                        <input type="text" id="userid" name="userid" className="form-control parsley-success" value="bent10@mail.com" /> <label>Mobile number or email</label>
                                                    </div><small className="form-text text-muted"><strong>Type carefully!</strong> You will be sent a SMS / Email confirmation.</small>
                                                    <div className="invalid-feedback"> Valid phone number / email is required. </div>
                                                </div>
                                                <div className="form-group mb-4">
                                                    <div className="form-label-group">
                                                        <input type="text" id="username" name="username" className="form-control parsley-success" value="bent10" /> <label >Username</label>
                                                    </div><small className="form-text text-muted">May contain letters, digits, underscores, and should be between 4 and 20 characters long.</small>
                                                    <div className="invalid-feedback"> Valid username is required. </div>
                                                </div>
                                                <div className="form-group mb-4">
                                                    <div className="form-label-group">
                                                        <input type="password" name="passwd" className="form-control parsley-success" value="secretwords" /> <label >Password</label>
                                                    </div><small className="form-text text-muted">The longer the better. Include numbers for protein.</small>
                                                    <div className="invalid-feedback"> Valid password is required. </div>
                                                </div>
                                                <hr className="mt-5" />
                                                <div className="d-flex">
                                                    <button type="button" className="next btn btn-primary ml-auto" onClick={() => setSelectedStep(selectedStep + 1)}>Next step</button>
                                                </div>
                                            </>}
                                        {selectedStep === 2 &&
                                            <>
                                                <legend>Personal Information</legend>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-label-group">
                                                            <input type="text" id="firstName" className="form-control" name="firstName" value="Beni" /> <label >First name</label>
                                                        </div>
                                                        <div className="invalid-feedback"> Valid first name is required. </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-label-group">
                                                            <input type="text" id="lastName" className="form-control" name="lastName" value="Arisandi" /> <label>Last name</label>
                                                        </div>
                                                        <div className="invalid-feedback"> Valid last name is required. </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-4">
                                                    <div className="form-label-group">
                                                        <input type="text" id="address" className="form-control" name="address" value="5888 Mya Causeway" placeholder="Address" /> <label >Address</label>
                                                    </div>
                                                    <div className="invalid-feedback"> Please enter your shipping address. </div>
                                                </div>
                                                <div className="form-group mb-4">
                                                    <div className="form-label-group">
                                                        <input type="text" id="address2" className="form-control" name="address2" value="Apartment 185" placeholder="Apt. or suite" /> <label >Apartment or suite <span className="badge badge-secondary"><em>Optional</em></span></label>
                                                    </div>
                                                </div>
                                                <hr className="mt-5" />
                                                <div className="d-flex">
                                                    <button type="button" className="prev btn btn-secondary" onClick={() => setSelectedStep(selectedStep - 1)}>Previous</button> <button type="button" className="next btn btn-primary ml-auto" onClick={() => setSelectedStep(selectedStep + 1)} >Next step</button>
                                                </div>
                                            </>
                                        }
                                        {selectedStep === 3 &&
                                            <>
                                                <legend>Terms Agreement</legend>
                                                <div className="card bg-light">
                                                    <div className="card-body overflow-auto" style={{ height: 260 }}>
                                                        <p> Ad vero quidem sit magni, sed eum laudantium, alias, consequuntur commodi eveniet nesciunt debitis esse sint temporibus id magnam accusamus perferendis laborum? Nobis ducimus minus blanditiis voluptates et, eligendi laborum. Ea suscipit, aperiam libero id dicta quia architecto iusto tenetur, dignissimos veritatis adipisci et! Recusandae impedit repudiandae, quam sunt repellat quia iusto tempora temporibus alias deleniti, nulla? Laborum expedita optio quam quasi, esse magni sit tempore! </p>
                                                        <p> Dicta asperiores ea voluptatum nihil quasi, officia tempora voluptates. Quidem reprehenderit nesciunt culpa, architecto iure, neque itaque suscipit, iusto, porro ipsum consequatur! </p>
                                                        <p> Ad vero quidem sit magni, sed eum laudantium, alias, consequuntur commodi eveniet nesciunt debitis esse sint temporibus id magnam accusamus perferendis laborum? Nobis ducimus minus blanditiis voluptates et, eligendi laborum. Ea suscipit, aperiam libero id dicta quia architecto iusto tenetur, dignissimos veritatis adipisci et! Recusandae impedit repudiandae, quam sunt repellat quia iusto tempora temporibus alias deleniti, nulla? Laborum expedita optio quam quasi, esse magni sit tempore! </p>
                                                        <p> Dicta asperiores ea voluptatum nihil quasi, officia tempora voluptates. Quidem reprehenderit nesciunt culpa, architecto iure, neque itaque suscipit, iusto, porro ipsum consequatur! </p>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" id="agreement" name="agreement" className="custom-control-input" /> <label className="custom-control-label" >Agree to terms and conditions</label>
                                                    </div>
                                                </div>
                                                <hr className="mt-5" />
                                                <div className="d-flex">
                                                    <button type="button" className="prev btn btn-secondary" onClick={() => setSelectedStep(selectedStep - 1)}>Previous</button> <button type="submit" className="submit btn btn-primary ml-auto" onClick={() => { }}>Submit</button>
                                                </div>
                                            </>
                                        }
                                    </>

                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-block">
                  <h2 className="section-title"> Progress List </h2>
                  <p className="text-muted"> Alternative indicator with progress list component </p>
                  <div className="card">
                    <div className="card-body">
                      <ol className="progress-list mb-sm-0">
                        <li className="success">
                          <button type="button" data-toggle="tooltip" title="" data-original-title="Step 1">
                            <span className="progress-indicator"></span> <span className="sr-only">Step 1</span></button>
                        </li>
                        <li className="success">
                          <button type="button" data-toggle="tooltip" title="" data-original-title="Step 2">
                            <span className="progress-indicator"></span> <span className="sr-only">Step 2</span></button>
                        </li>
                        <li className="active">
                          <button type="button" data-toggle="tooltip" title="" data-original-title="Step 3">
                            <span className="progress-indicator"></span> <span className="sr-only">Step 3</span></button>
                        </li>
                        <li>
                          <button type="button" data-toggle="tooltip" title="" data-original-title="Step 4">
                            <span className="progress-indicator"></span> <span className="sr-only">Step 4</span></button>
                        </li>
                        <li>
                          <button type="button" data-toggle="tooltip" title="" data-original-title="Step 5">
                            <span className="progress-indicator"></span> <span className="sr-only">Step 5</span></button>
                        </li>
                      </ol>
                    </div>
                    <div className="card-body">
                      <p> Progress list content</p>
                    </div>
                  </div>
                  <div className="my-5"></div>
                  <div className="card">
                    <div className="card-body">
                      <ol className="progress-list mb-0 mb-sm-4">
                        <li className="success">
                          <button type="button">
                            <span className="progress-indicator"></span></button> <span className="progress-label d-none d-sm-inline-block">Step 1</span>
                        </li>
                        <li className="success">
                          <button type="button">
                            <span className="progress-indicator"></span></button> <span className="progress-label d-none d-sm-inline-block">Step 2</span>
                        </li>
                        <li className="active error">
                          <button type="button">
                            <span className="progress-indicator"></span></button> <span className="progress-label d-none d-sm-inline-block">Step 3</span>
                        </li>
                        <li>
                          <button type="button">
                            <span className="progress-indicator"></span></button> <span className="progress-label d-none d-sm-inline-block">Step 4</span>
                        </li>
                        <li>
                          <button type="button">
                            <span className="progress-indicator"></span></button> <span className="progress-label d-none d-sm-inline-block">Step 5</span>
                        </li>
                      </ol>
                    </div>
                    <div className="card-body">
                      <p> Progress list content </p>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Steps;