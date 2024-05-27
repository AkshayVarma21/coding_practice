import { useState } from 'react';

const Radios = () => {
    const [radioInline, setRadioInline] = useState<string>("rd1");

    return (
        <>
            <div className="m-4">
                <h2 className="section-title"> Radiobuttons </h2>
                <div id="radios" className="card">
                    <div className="card-body">
                        <form>
                            <fieldset>
                                <legend>Radios</legend>
                                <div className="form-group">
                                    <label className="d-block">Inline radio</label>
                                    <div className="custom-control custom-control-inline custom-radio" onClick={() => setRadioInline("rd1")} >
                                        <input type="radio" className="custom-control-input" name="rdGroup1" id="rd1" checked={radioInline === "rd1"}/> <label className="custom-control-label" >Credit card</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-radio" onClick={() => setRadioInline("rd2")} >
                                        <input type="radio" className="custom-control-input" name="rdGroup1" id="rd2" checked={radioInline === "rd2"}/> <label className="custom-control-label" >Debit card</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-radio" onClick={() => setRadioInline("rd3")} >
                                        <input type="radio" className="custom-control-input" name="rdGroup1" id="rd3" checked={radioInline === "rd3"} /> <label className="custom-control-label" >Paypal</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Payment method</label>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="rdGroup2" id="rd4" checked /> <label className="custom-control-label" >Credit card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="rdGroup2" id="rd5" /> <label className="custom-control-label" >Debit card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="rdGroup2" id="rd6" /> <label className="custom-control-label" >Paypal</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Helper content</label>
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="rdGroup3" id="rd7" /> <label className="custom-control-label" >Credit card</label>
                                        <div className="text-muted"> This is a help text to guide users to explain the choice you will be making. </div>
                                    </div>
                                    <div className="custom-control custom-radio mb-1">
                                        <input type="radio" className="custom-control-input" name="rdGroup3" id="rd8" checked /> <label className="custom-control-label" >Paypal</label>
                                        <div className="custom-control-hint mt-1">
                                            <input type="text" className="form-control" placeholder="e.g. abc@123.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>States</label>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="rdGroup4" id="rd9" disabled /> <label className="custom-control-label" >Option is disabled</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input is-valid" name="rdGroup4" id="rd10" /> <label className="custom-control-label" >Maximal team</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input is-invalid" name="rdGroup4" id="rd11" /> <label className="custom-control-label" >Maximum project</label>
                                        <div className="invalid-feedback">
                                            <i className="fa fa-exclamation-circle fa-fw"></i> Can't update your setting, please try again. </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Radios;