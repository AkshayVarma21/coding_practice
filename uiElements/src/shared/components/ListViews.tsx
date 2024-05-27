
function ListViews() {
    return (
        <>
            <div className="mx-4">
                {/* ListViews */}
                <h2 className="section-title"> ListViews </h2>
                <div className="page-section">

                    <div className="section-block">

                        <div className="row">

                            <div className="col-lg-6">

                                <ul className="list-group mb-3">
                                    <li className="list-group-item">Basic list item </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">List item with badge <span className="badge badge-danger badge-pill">14</span>
                                    </li>
                                    <li className="list-group-header">List header </li>
                                    <li className="list-group-item active">Active list item </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">List item with switcher <label className="switcher-control"><input type="checkbox" name="onoffswitch" className="switcher-input"  /> <span className="switcher-indicator"></span></label>
                                    </li>
                                    <li className="list-group-item disabled">Disable list item </li>
                                </ul>
                            </div>

                            <div className="col-lg-6">

                                <div className="list-group mb-3">
                                    <a href="/#" className="list-group-item list-group-item-action">Basic list item</a> <a href="/#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">List item with badge <span className="badge badge-danger badge-pill">14</span></a>
                                    <div className="list-group-header"> List header </div><a href="/#" className="list-group-item list-group-item-action active">Active list item</a> <a href="/#" className="list-group-item list-group-item-action disabled">Disable list item</a> <a href="/#" className="list-group-item list-group-item-action">Basic list item</a>
                                </div>
                            </div>

                            <div className="col-lg-6">

                                <div className="list-group list-group-bordered mb-3">
                                    <a href="/#" className="list-group-item list-group-item-action list-group-item-primary">This is a primary list group item</a> <a href="/#" className="list-group-item list-group-item-action list-group-item-success">This is a success list group item</a>
                                    <div className="list-group-header"> List header </div><a href="/#" className="list-group-item list-group-item-action list-group-item-danger">This is a danger list group item</a> <a href="/#" className="list-group-item list-group-item-action list-group-item-warning">This is a warning list group item</a> <a href="/#" className="list-group-item list-group-item-action list-group-item-info">This is a info list group item</a> <a href="/#" className="list-group-item list-group-item-action list-group-item-dark">This is a dark list group item</a>
                                </div>
                            </div>

                            <div className="col-lg-6">

                                <div className="list-group list-group-divider mb-3">
                                    <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <span className="fa fa-lg fa-fw fa-briefcase"></span>
                                        </div>
                                        <div className="list-group-item-body">
                                            <span className="list-group-item-text">Business</span>
                                        </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <span className="fa fa-lg fa-fw fa-comments"></span>
                                        </div>
                                        <div className="list-group-item-body d-flex justify-content-between align-items-center">
                                            <span className="list-group-item-text">Communication</span> <span className="badge badge-danger badge-pill">14</span>
                                        </div>
                                    </a>
                                    <div className="list-group-header"> List header </div><a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <span className="fa fa-lg fa-fw fa-paint-brush"></span>
                                        </div>
                                        <div className="list-group-item-body">
                                            <span className="list-group-item-text">Design</span>
                                        </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action active">
                                        <div className="list-group-item-figure">
                                            <span className="fa fa-lg fa-fw fa-graduation-cap"></span>
                                        </div>
                                        <div className="list-group-item-body">
                                            <span className="list-group-item-text">Education</span>
                                        </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <span className="fa fa-lg fa-fw fa-line-chart"></span>
                                        </div>
                                        <div className="list-group-item-body">
                                            <span className="list-group-item-text">Finance</span>
                                        </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <span className="fa fa-lg fa-fw fa-cutlery"></span>
                                        </div>
                                        <div className="list-group-item-body">
                                            <span className="list-group-item-text">Food</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />

                    <div className="section-block">
                        <h3 className="section-title"> Single-line list </h3>
                    </div>

                    <div className="section-block">

                        <div className="row">

                            <div className="col-lg-6">

                                <div className="list-group list-group-bordered mb-3">
                                    <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile bg-success">
                                                <span className="fa fa-comments"></span>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body"> Dapibus ac facilisis in </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile bg-danger">
                                                <span className="fa fa-upload"></span>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body"> Morbi leo risus </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile bg-warning">
                                                <span className="fa fa-tags"></span>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body"> Porta ac consectetur ac </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile bg-info">
                                                <span className="fa fa-shopping-cart"></span>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body"> Vestibulum at eros </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6">

                                <div className="list-group list-group-bordered mb-3">
                                    <div className="list-group-item">
                                        <div className="list-group-item-figure">
                                            <a href="/#" className="tile tile-circle bg-success"><i className="fa fa-comments"></i></a>
                                        </div>
                                        <div className="list-group-item-body"> Dapibus ac facilisis in </div>
                                        <div className="list-group-item-figure">
                                            <button className="btn btn-sm btn-icon btn-light"><i className="fa fa-info-circle"></i></button>
                                        </div>
                                    </div>
                                    <div className="list-group-item">
                                        <div className="list-group-item-figure">
                                            <a href="/#" className="tile tile-circle bg-danger"><i className="fa fa-upload"></i></a>
                                        </div>
                                        <div className="list-group-item-body"> Morbi leo risus </div>
                                        <div className="list-group-item-figure">
                                            <button className="btn btn-sm btn-icon btn-light"><i className="fa fa-info-circle"></i></button>
                                        </div>
                                    </div>
                                    <div className="list-group-item">
                                        <div className="list-group-item-figure">
                                            <a href="/#" className="tile tile-circle bg-warning"><i className="fa fa-tags"></i></a>
                                        </div>
                                        <div className="list-group-item-body"> Porta ac consectetur ac </div>
                                        <div className="list-group-item-figure">
                                            <button className="btn btn-sm btn-icon btn-light"><i className="fa fa-info-circle"></i></button>
                                        </div>
                                    </div>
                                    <div className="list-group-item">
                                        <div className="list-group-item-figure">
                                            <a href="/#" className="tile tile-circle bg-info"><i className="fa fa-shopping-cart"></i></a>
                                        </div>
                                        <div className="list-group-item-body"> Vestibulum at eros </div>
                                        <div className="list-group-item-figure">
                                            <button className="btn btn-sm btn-icon btn-light"><i className="fa fa-info-circle"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">

                                <div className="list-group list-group-bordered mb-3">
                                    <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-circle bg-primary"> BA </div>
                                        </div>
                                        <div className="list-group-item-body"> Beni Arisandi </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-circle bg-yellow"> DP </div>
                                        </div>
                                        <div className="list-group-item-body"> Diane Peters </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-circle bg-purple"> JG </div>
                                        </div>
                                        <div className="list-group-item-body"> Jennifer Gray </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-circle bg-red"> ZF </div>
                                        </div>
                                        <div className="list-group-item-body"> Zachary Fowler </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6">

                                <div className="list-group list-group-bordered mb-3">
                                    <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body"> Beni Arisandi </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body"> Diane Peters </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body"> Jennifer Gray </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body"> Zachary Fowler </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />

                    <div className="section-block">
                        <h3 className="section-title"> Two-line list </h3>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="card card-fluid">

                                <div className="list-group list-group-flush list-group-divider">

                                    <div className="list-group-item">
                                        <div className="list-group-item-figure">
                                            <a href="/#" className="tile tile-circle bg-success"><span className="fa fa-file-o"></span></a>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title">
                                                <a href="/#">Business services</a>
                                            </h4>
                                            <p className="list-group-item-text"> Jan 28, 2018 </p>
                                        </div>
                                        <div className="list-group-item-figure">
                                            <button className="btn btn-sm btn-icon btn-light"><i className="fa fa-download"></i></button>
                                        </div>
                                    </div>

                                    <div className="list-group-item">
                                        <div className="list-group-item-figure">
                                            <a href="/#" className="tile tile-circle bg-danger"><span className="fa fa-file"></span></a>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title">
                                                <a href="/#">Miscellaneous expenses</a>
                                            </h4>
                                            <p className="list-group-item-text"> Jan 21, 2018 </p>
                                        </div>
                                        <div className="list-group-item-figure">
                                            <button className="btn btn-sm btn-icon btn-light"><i className="fa fa-download"></i></button>
                                        </div>
                                    </div>

                                    <div className="list-group-item">
                                        <div className="list-group-item-figure">
                                            <a href="/#" className="tile tile-circle bg-purple"><span className="fa fa-folder"></span></a>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title">
                                                <a href="/#">Education &amp; Children</a>
                                            </h4>
                                            <p className="list-group-item-text"> Jan 19, 2018 </p>
                                        </div>
                                        <div className="list-group-item-figure">
                                            <button className="btn btn-sm btn-icon btn-light"><i className="fa fa-download"></i></button>
                                        </div>
                                    </div>

                                    <div className="list-group-item">
                                        <div className="list-group-item-figure">
                                            <a href="/#" className="tile tile-circle bg-info"><span className="fa fa-files-o"></span></a>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title">
                                                <a href="/#">Auto &amp; Transport</a>
                                            </h4>
                                            <p className="list-group-item-text"> Jan 12, 2018 </p>
                                        </div>
                                        <div className="list-group-item-figure">
                                            <button className="btn btn-sm btn-icon btn-light"><i className="fa fa-download"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">

                            <div className="card card-fluid">

                                <div className="list-group list-group-flush list-group-divider">
                                    <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title"> Are you free tonight? </h4>
                                            <p className="list-group-item-text text-truncate">
                                                <span className="text-dark">Beni Arisandi</span> – Fuga quis quod voluptas mollitia aliquid alias tenetur. Laboriosam asperiores cupiditate aperiam! </p>
                                        </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title"> RE: Your trip to Montreal <span className="text-muted">6</span>
                                            </h4>
                                            <p className="list-group-item-text text-truncate">
                                                <span className="text-dark">Diane Peters</span> – Consectetur quis veritatis aut maiores omnis, expedita officiis delectus perspiciatis a dolores. </p>
                                        </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title"> Invitation: Joe's Dinner @ Fri Aug 22 </h4>
                                            <p className="list-group-item-text text-truncate">
                                                <span className="text-dark">Me, Jennifer, Alex</span> – Officiis numquam, repellat nam tempore sit aliquid nostrum autem excepturi quis nihil. </p>
                                        </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title"> The Perfect Gift For Everyone On Your List </h4>
                                            <p className="list-group-item-text text-truncate">
                                                <span className="text-dark">Zachary Fowler</span> – Ad earum dolore excepturi itaque officia vel fugiat quo, quisquam dicta ex. </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />

                    <div className="section-block">
                        <h3 className="section-title"> Three-line list </h3>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="card card-fluid">

                                <div className="list-group list-group-flush list-group-divider">
                                    <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-lg tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title"> Are you free tonight? </h4>
                                            <h5 className="list-group-item-subtitle"> Beni Arisandi </h5>
                                            <p className="list-group-item-text text-truncate"> Fuga quis quod voluptas mollitia aliquid alias tenetur. Laboriosam asperiores cupiditate aperiam! </p>
                                        </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-lg tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title"> RE: Your trip to Montreal <span className="text-muted">6</span>
                                            </h4>
                                            <h5 className="list-group-item-subtitle"> Diane Peters </h5>
                                            <p className="list-group-item-text text-truncate"> Consectetur quis veritatis aut maiores omnis, expedita officiis delectus perspiciatis a dolores. </p>
                                        </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-lg tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title"> Invitation: Joe's Dinner @ Fri Aug 22 </h4>
                                            <h5 className="list-group-item-subtitle"> Me, Jennifer, Alex </h5>
                                            <p className="list-group-item-text text-truncate"> Officiis numquam, repellat nam tempore sit aliquid nostrum autem excepturi quis nihil. </p>
                                        </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-lg tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title"> The Perfect Gift For Everyone On Your List </h4>
                                            <h5 className="list-group-item-subtitle"> Zachary Fowler </h5>
                                            <p className="list-group-item-text text-truncate"> Ad earum dolore excepturi itaque officia vel fugiat quo, quisquam dicta ex. </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">

                            <div className="card card-fluid">

                                <div className="list-group list-group-flush list-group-divider">
                                    <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-lg tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title"> Beni Arisandi </h4>
                                            <h5 className="list-group-item-subtitle"> Are you free tonight? </h5>
                                            <p className="list-group-item-text text-truncate"> Fuga quis quod voluptas mollitia aliquid alias tenetur. Laboriosam asperiores cupiditate aperiam! </p>
                                        </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-lg tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title"> Diane Peters </h4>
                                            <h5 className="list-group-item-subtitle"> RE: Your trip to Montreal <span className="text-muted">6</span>
                                            </h5>
                                            <p className="list-group-item-text text-truncate"> Consectetur quis veritatis aut maiores omnis, expedita officiis delectus perspiciatis a dolores. </p>
                                        </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-lg tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title"> Me, Jennifer, Alex </h4>
                                            <h5 className="list-group-item-subtitle"> Invitation: Joe's Dinner @ Fri Aug 22 </h5>
                                            <p className="list-group-item-text text-truncate"> Officiis numquam, repellat nam tempore sit aliquid nostrum autem excepturi quis nihil. </p>
                                        </div>
                                    </a> <a href="/#" className="list-group-item list-group-item-action">
                                        <div className="list-group-item-figure">
                                            <div className="tile tile-lg tile-circle bg-muted">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="list-group-item-body">
                                            <h4 className="list-group-item-title"> Zachary Fowler </h4>
                                            <h5 className="list-group-item-subtitle"> The Perfect Gift For Everyone On Your List </h5>
                                            <p className="list-group-item-text text-truncate"> Ad earum dolore excepturi itaque officia vel fugiat quo, quisquam dicta ex. </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />

                   

                    <div className="section-block">
                        <h3 className="section-title"> Form-element list </h3>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="card card-fluid">

                                <div className="list-group list-group-flush list-group-bordered">
                                    <div className="list-group-header"> Input Checkbox </div><label className="list-group-item custom-control custom-checkbox"><input name="listcheckbox" type="checkbox" className="custom-control-input"  /> <span className="custom-control-label">List checkbox #1</span></label> <label className="list-group-item custom-control custom-checkbox"><input name="listcheckbox" type="checkbox" className="custom-control-input"  /> <span className="custom-control-label">List checkbox #2</span></label>
                                    <div className="list-group-header"> Input Radio </div><label className="list-group-item custom-control custom-radio"><input name="listradio" type="radio" className="custom-control-input" defaultChecked /> <span className="custom-control-label">List radio #1</span></label> <label className="list-group-item custom-control custom-radio"><input name="listradio" type="radio" className="custom-control-input" defaultChecked /> <span className="custom-control-label">List radio #2</span></label>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">

                            <div className="card card-fluid">

                                <div className="list-group list-group-flush list-group-bordered">
                                    <div className="list-group-header"> I have switcher </div>
                                    <div className="list-group-item d-flex justify-content-between align-items-center"> Switch me! <label className="switcher-control switcher-control-success"><input type="checkbox" name="onoffswitch" className="switcher-input"  /> <span className="switcher-indicator"></span></label>
                                    </div>
                                    <div className="list-group-header"> Control Input </div><input type="text" className="list-group-item" placeholder="Username" /> <input type="password" className="list-group-item" placeholder="Password" /> <select className="list-group-item custom-select">
                                        <option > Select one </option>
                                        <option value="1"> One </option>
                                        <option value="2"> Two </option>
                                        <option value="3"> Three </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}



export default ListViews;