import { useState } from 'react';

const Checkboxes = () => {
    const [isChecked, setIsChecked] = useState<boolean>(true);
    const onClickChecked = () => {
        setIsChecked(!isChecked);
    }
    return (
        <>
            <div className="m-4">
                <h2 className="section-title"> Checkboxes </h2>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <fieldset>
                                <legend>Checkboxes</legend>
                                <div className="form-group">
                                    <label className="d-block">Inline checkbox</label>
                                    <div className="custom-control custom-control-inline custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" /> <label className="custom-control-label" >Basic checkbox</label>
                                    </div>
                                    <div className="custom-control custom-control-inline custom-checkbox" onClick={onClickChecked}>
                                        <input type="checkbox" className="custom-control-input" checked={isChecked} /> <label className="custom-control-label" >Checked</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="d-block">Hidden label</label>
                                    <div className="custom-control-stacked">
                                        <div className="custom-control custom-control-inline custom-control-nolabel custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" /> <label className="custom-control-label" >Basic checkbox</label>
                                        </div>
                                        <div className="custom-control custom-control-inline custom-control-nolabel custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" checked /> <label className="custom-control-label">Checked</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Available for block?</label>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" /> <label className="custom-control-label" >Yes, this is a block checkbox</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Helper content</label>
                                    <div className="custom-control custom-checkbox mb-1" >
                                        <div onClick={onClickChecked}>
                                            <input type="checkbox" className="custom-control-input" checked={isChecked} /> <label className="custom-control-label" >Shipping address is the same as my billing address</label>
                                        </div>
                                        <div className="text-muted"> Reduces the number of fields required to check out. The billing address can still be edited. </div>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-1">
                                        <input type="checkbox" className="custom-control-input" /> <label className="custom-control-label" >Save this information for next time</label>
                                        <div className="text-muted"> This is a help text to guide users to explain the choice you will be making. </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>States</label>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" disabled /> <label className="custom-control-label" >Option is disabled</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input is-valid" /> <label className="custom-control-label" >Maximal project</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input is-invalid" /> <label className="custom-control-label" >Autosave</label>
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

export default Checkboxes;