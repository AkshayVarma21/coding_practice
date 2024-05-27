import { useState, useEffect } from 'react';
import { searchableDropdown } from '../static/jsons/searchableDropdown';
import { ConversionItem } from '../static/Constants';

const Inputs = () => {
    const [showPassword, setShowPassword] = useState<string>("password");
    const [clearableValue, setClearableValue] = useState<string>("Clearable value");
    const [selectedItem, setSelectedItem] = useState<ConversionItem | undefined>();
    const [filteredList, setFilteredList] = useState<Array<ConversionItem>>([])

    useEffect(() => {
        setFilteredList(searchableDropdown);
    }, [])
    const onSearchItem = (value: string) => {
        if (value)
            setFilteredList(searchableDropdown.filter(item => item.label.toLowerCase().includes(value.toLowerCase())));
        else
            setFilteredList(searchableDropdown);
    }

    const onClickShowPassword = () => {
        if (showPassword === "password")
            setShowPassword("text");
        else
            setShowPassword("password");

    }
    return (
        <>
            <div className="m-4">
                <h2 className="section-title"> Input fields </h2>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <fieldset>
                                <legend>Base style</legend>
                                <div className="form-group">
                                    <label >Email address</label> <input type="email" className="form-control" placeholder="e.g. abc@123.com" /> <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label >Number input</label>
                                    <div className="custom-number">
                                        <input type="number" id="points" className="form-control" name="points" step="1" />
                                        {/* <input type="number" className="form-control" min="0" max="10" step="1" value={numberInput.toString()}/>
                                        <div className="custom-number-controls">
                                            <div className="custom-number-btn custom-number-up" onClick={onClickAdd}>+</div>
                                            <div className="custom-number-btn custom-number-down" onClick={onClickSubtract}>-</div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label >File input</label>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" multiple /> <label className="custom-file-label" >Choose file</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Clearable</label>
                                    <div className="has-clearable">
                                        <button type="button" className="close show" onClick={() => setClearableValue("")}><span ><i className="fa fa-times-circle"></i></span></button> <input type="text" className="form-control" placeholder="Type something..." value={clearableValue} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label >Spinner</label>
                                    <div className="has-spinner">
                                        <div className="spinner-border spinner-border-sm text-muted show" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div><input type="text" className="form-control" placeholder="Type something..." defaultValue="Moon" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label >Textarea</label>
                                    <textarea className="form-control" rows={3}></textarea>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <hr className="my-3" />
                <div className="card">
                    <div className="card-body">
                        <form>
                            <fieldset>
                                <legend>
                                    Labels
                                </legend>
                                <div className="form-group">
                                    <label>Name <abbr title="Required">*</abbr></label>
                                    <input type="text" className="form-control" placeholder="Required asterisks" required />
                                </div>
                                <div className="form-group">
                                    <label>Name <span className="badge badge-danger">Required</span></label>
                                    <input type="text" className="form-control" placeholder="Required label" required />
                                </div>
                                <div className="form-group">
                                    <label>Description <span className="badge badge-secondary"><em>Optional</em></span></label>
                                    <textarea className="form-control" rows={3} placeholder="Optional label"></textarea>
                                </div>
                                <div className="form-group">
                                    <label className="d-flex justify-content-between" ><span>Description</span>
                                        <span className="text-muted">0 of 80 characters used</span></label>
                                    <textarea className="form-control" rows={3} placeholder="Label with description"></textarea>
                                </div>
                                <div className="form-group">
                                    <label className="d-flex justify-content-between" ><span>Password</span>
                                        <div className="menu-link-hoverable" onClick={onClickShowPassword}>
                                            {showPassword === "password" ?
                                                <>
                                                    <i className="fa fa-eye fa-fw"></i>
                                                    <span>Show</span>
                                                </>
                                                :
                                                <>
                                                    <i className="fa fa-fw fa-eye-slash"></i>
                                                    <span>Hide</span>
                                                </>
                                            }
                                        </div>
                                    </label>
                                    <input type={showPassword} className="form-control" defaultValue="Password"></input>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <hr className="my-3" />
                <div className="card">
                    <div className="card-body">
                        <form>
                            <fieldset>
                                <legend>Floating label</legend>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="email" className="form-control" defaultValue="abc@123.com" placeholder="Email address" required />
                                        <label>Email address</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <select className="custom-select" required>
                                            <option value=""> Choose... </option>
                                            <option> United States </option>
                                            <option> India </option>
                                        </select> <label>Country</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label" >Searchable dropdown</label>
                                    <div className="dropdown bootstrap-select show" style={{ width: "100%" }}>
                                        {/* <select id="bss4" style={{ display: "none" }}>
                                            <option data-tokens="ketchup mustard"> Hot Dog, Fries and a Soda </option>
                                            <option data-tokens="mustard"> Burger, Shake and a Smile </option>
                                            <option data-tokens="frosting"> Sugar, Spice and all things nice </option>
                                        </select> */}
                                        <button type="button" className="custom-select dropdown-toggle" data-toggle="dropdown" role="combobox" aria-owns="bs-select-4" aria-haspopup="listbox" aria-expanded="true" data-id="bss4" title="Hot Dog, Fries and a Soda">
                                            <div className="filter-option"><div className="filter-option-inner">
                                                <div className="filter-option-inner-inner" style={{ textAlign: "start" }}>{selectedItem && selectedItem.label}</div>
                                            </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu show" style={{ maxHeight: "259.125px", overflow: "hidden", width: "100%", minHeight: "44px", position: "absolute", top: "36px", left: "0px", willChange: "top, left" }}>
                                            <div className="dropdown-arrow"></div>
                                            <div className="bs-searchbox px-3 pb-2">
                                                <input type="search" className="form-control" role="combobox" placeholder='Search' onChange={(e) => onSearchItem(e.target.value)} />
                                            </div>
                                            <div className="inner show" role="listbox" id="bs-select-4" style={{ maxHeight: "199.125px", overflowY: "auto", minHeight: "0px" }}>
                                                <ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: "0px", marginBottom: "0px", width: "100%" }}>
                                                    {filteredList.map(item =>
                                                        <li className="selected">
                                                            <div role="option" className="dropdown-item" id="bs-select-4-0" onClick={() => setSelectedItem(item)}>
                                                                <span className="text">{item.label} </span>
                                                            </div>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="password" className="form-control" placeholder="Password" required />
                                        <label>Password</label>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="card-body border-top">
                        <form>
                            <fieldset>
                                <legend>States</legend>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="email" className="form-control placeholder-shown" placeholder="Email address" disabled />
                                        <label>Email address</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="email" className="form-control" value="readonly@123.com" placeholder="Email address" readOnly />
                                        <label>Email address</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group has-spinner">
                                        <span className="spinner-border spinner-border-sm text-primary show"></span>
                                        <input type="email" className="form-control" value="abc@123.com" placeholder="Placeholder" />
                                        <label>Email address</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="email" className="form-control is-valid" value="abc@123.com" placeholder="Placeholder" />
                                        <label>Email address</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="password" className="form-control is-invalid" value="password" placeholder="Password" />
                                        <label>Password</label>
                                        <div className="invalid-feedback">
                                            <i className="fa fa-exclamation-circle fa-fw"></i> Sorry, that password isn't right.
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>

                    </div>
                </div>
                <hr className="my-3" />
                <div className="card">
                    <div className="card-body">
                        <form>
                            <fieldset>
                                <legend>Selects</legend>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Country</label> <select className="custom-select" required>
                                                <option value=""> Choose... </option>
                                                <option> United States </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>State</label> <select className="custom-select" required>
                                                <option value=""> Choose... </option>
                                                <option> California </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="card-body border-top">
                        <form>
                            <fieldset>
                                <legend>States</legend>
                                <div className="form-group">
                                    <label >Country</label> <select className="custom-select" required disabled >
                                        <option value=""> Choose... </option>
                                        <option selected> United States </option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Country</label> <select className="custom-select is-valid" required>
                                        <option value=""> Choose... </option>
                                        <option selected> United States </option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>State</label> <select className="custom-select is-invalid" required>
                                        <option value=""> Choose... </option>
                                        <option> California </option>
                                    </select>
                                    <div className="invalid-feedback">
                                        <i className="fa fa-exclamation-circle fa-fw"></i> Please select your state. </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="card-body border-top">
                        <form>
                            <fieldset>
                                <legend>Sizes</legend>
                                <div className="form-group">
                                    <label className="col-form-label col-form-label-sm">Small select</label> <select className="custom-select custom-select-sm" >
                                        <option> Small select </option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">Default select</label> <select className="custom-select" >
                                        <option> Default select </option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label col-form-label-lg">Large select</label> <select className="custom-select custom-select-lg" >
                                        <option> Large select </option>
                                    </select>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inputs;