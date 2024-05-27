
function ContainerElements() {
    return (
        <>
            <div className="m-4">
                <div className="section-block">
                    <h2 className="section-title"> Navs </h2>
                    <p className="text-muted"> The base <code>.nav</code> component does not include any <code>.active</code> state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling. </p>
                </div>
                <div className="card-deck-xl">

                    <div className="card card-fluid">

                        <div className="card-header">

                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active show" data-toggle="tab" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#profile">Profile</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" data-toggle="dropdown" href="/#" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-arrow"></div><a className="dropdown-item" href="/#">Action</a> <a className="dropdown-item" href="/#">Another action</a> <a className="dropdown-item" href="/#">Something else here</a>
                                        <div className="dropdown-divider"></div><a className="dropdown-item" href="/#">Separated link</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="card-body">

                            <div id="myTabContent" className="tab-content">
                                <div className="tab-pane fade active show" id="home">
                                    <p> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. </p>
                                </div>
                                <div className="tab-pane fade" id="profile">
                                    <p> Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card card-fluid">

                        <div className="card-body">

                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/#">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" data-toggle="dropdown" href="/#" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                    <div className="dropdown-menu" >
                                        <div className="dropdown-arrow"></div><a className="dropdown-item" href="/#">Action</a> <a className="dropdown-item" href="/#">Another action</a> <a className="dropdown-item" href="/#">Something else here</a>
                                        <div className="dropdown-divider"></div><a className="dropdown-item" href="/#">Separated link</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="card-body">

                            <ul className="nav nav-pills flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/#">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" data-toggle="dropdown" href="/#" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                    <div className="dropdown-menu" >
                                        <div className="dropdown-arrow"></div><a className="dropdown-item" href="/#">Action</a> <a className="dropdown-item" href="/#">Another action</a> <a className="dropdown-item" href="/#">Something else here</a>
                                        <div className="dropdown-divider"></div><a className="dropdown-item" href="/#">Separated link</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="/#">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-deck-xl">

                    <div className="card card-fluid">

                        <div className="card-body">
                            <h4 className="card-title"> Breadcrumbs </h4>
                            <hr />
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">Home </li>
                            </ol>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/#">Home</a>
                                </li>
                                <li className="breadcrumb-item active">Library </li>
                            </ol>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/#">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="/#">Library</a>
                                </li>
                                <li className="breadcrumb-item active">Data </li>
                            </ol>
                        </div>
                    </div>

                    <div className="card card-fluid">

                        <div className="card-body">
                            <h4 className="card-title"> Paginations </h4>
                            <hr />
                            <div className="el-example">
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="/#">«</a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="/#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="/#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="/#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="/#">4</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="/#">5</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="/#">»</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="el-example">
                                <ul className="pagination pagination-sm">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="/#">«</a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="/#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="/#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="/#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="/#">4</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="/#">5</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="/#">»</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-5" />
                <div className="section-block">
                    <h2 className="section-title"> Containers </h2>
                </div>
                <div className="jumbotron">
                    <h1 className="display-1"> Hello, world! </h1>
                    <p className="lead"> This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. </p>
                    <hr className="my-4" />
                    <p> It uses utility classes for typography and spacing to space content out within the larger container. </p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="/#" role="button">Learn more</a>
                    </p>
                </div>
                <div className="section-block">
                    <h2 className="section-title"> Cards </h2>
                    <p className="text-muted"> Provide a flexible and extensible content container with multiple variants and options. </p>
                    <div className="row">

                        <div className="col-lg-6">

                            <div className="card">

                                <div className="card-header">
                                    <ul className="nav nav-tabs card-header-tabs">
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#card-home">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active show" data-toggle="tab" href="#card-profile">Profile</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href="/#">Disabled</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="card-body">

                                    <div id="myTabCard" className="tab-content">
                                        <div className="tab-pane fade" id="card-home">
                                            <h5 className="card-title"> Special title treatment </h5>
                                            <p className="card-text"> With supporting text below as a natural lead-in to additional content. </p><a href="/#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                        <div className="tab-pane fade active show" id="card-profile">
                                            <h5 className="card-title"> Special title treatment </h5>
                                            <p className="card-text"> With supporting text below as a natural lead-in to additional content. </p><a href="/#" className="btn btn-danger">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">

                                <div className="card-body">
                                    <h4 className="card-title"> Special title treatment </h4>
                                    <h6 className="card-subtitle mb-2 text-muted"> Support card subtitle </h6>
                                    <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="/#" className="mention">@stilearningTwit</a> . <a href="/#" className="hashtag">#looper</a> <a href="/#" className="hashtag">#admin</a><br />
                                        <time dateTime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                                    </p>
                                </div>

                                <ul className="list-group list-group-flush list-group-bordered border-top border-bottom">
                                    <li className="list-group-item">Cras justo odio </li>
                                    <li className="list-group-item">Dapibus ac facilisis in </li>
                                    <li className="list-group-item">Vestibulum at eros </li>
                                </ul>

                                <div className="card-body">
                                    <a href="/#" className="card-link">Card link</a> <a href="/#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">

                            <div className="card">

                                <div className="card-header"> Components </div>
                                <div className="card-body">
                                    <h5 className="card-title"> Special title treatment </h5>
                                    <h6 className="card-subtitle text-muted"> Support card subtitle </h6>
                                </div>

                                <div className="card-body">
                                    <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="/#" className="mention">@stilearningTwit</a> . <a href="/#" className="hashtag">#looper</a> <a href="/#" className="hashtag">#admin</a><br />
                                        <time dateTime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                                    </p>
                                </div>

                                <div className="card-footer">
                                    <div className="card-footer-content text-muted"> Card Footer </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-4">

                            <div className="card">
                                <div className="card-header"> Components </div>
                                <div className="card-body">
                                    <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="/#" className="mention">@stilearningTwit</a> . <a href="/#" className="hashtag">#looper</a> <a href="/#" className="hashtag">#admin</a><br />
                                        <time dateTime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                                    </p>
                                </div>

                                <div className="card-footer">
                                    <a href="/#" className="card-footer-item card-footer-item-bordered">Save</a> <a href="/#" className="card-footer-item card-footer-item-bordered">Edit</a> <a href="/#" className="card-footer-item card-footer-item-bordered">Delete</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">

                            <div className="card card-inverse bg-primary">
                                <div className="card-header"> Components </div>
                                <div className="card-body">
                                    <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="/#" className="mention card-link">@stilearningTwit</a> . <a href="/#" className="hashtag card-link">#looper</a> <a href="/#" className="hashtag card-link">#admin</a><br />
                                        <time dateTime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                                    </p>
                                </div>

                                <div className="card-footer">
                                    <a href="/#" className="card-footer-item card-footer-item-bordered card-link">Save</a> <a href="/#" className="card-footer-item card-footer-item-bordered card-link">Edit</a> <a href="/#" className="card-footer-item card-footer-item-bordered card-link">Delete</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">

                            <div className="card bg-secondary">
                                <div className="card-header"> Components </div>
                                <div className="card-body">
                                    <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="/#" className="mention">@stilearningTwit</a> . <a href="/#" className="hashtag">#looper</a> <a href="/#" className="hashtag">#admin</a><br />
                                        <time dateTime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                                    </p>
                                </div>

                                <div className="card-footer">
                                    <a href="/#" className="card-footer-item card-footer-item-bordered">Save</a> <a href="/#" className="card-footer-item card-footer-item-bordered">Edit</a> <a href="/#" className="card-footer-item card-footer-item-bordered">Delete</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">

                            <div className="card card-inverse bg-success">
                                <div className="card-header"> Components </div>
                                <div className="card-body">
                                    <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="/#" className="mention card-link">@stilearningTwit</a> . <a href="/#" className="hashtag card-link">#looper</a> <a href="/#" className="hashtag card-link">#admin</a><br />
                                        <time dateTime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                                    </p>
                                </div>

                                <div className="card-footer">
                                    <a href="/#" className="card-footer-item card-footer-item-bordered card-link">Save</a> <a href="/#" className="card-footer-item card-footer-item-bordered card-link">Edit</a> <a href="/#" className="card-footer-item card-footer-item-bordered card-link">Delete</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">

                            <div className="card card-inverse bg-danger">
                                <div className="card-header"> Components </div>
                                <div className="card-body">
                                    <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="/#" className="mention card-link">@stilearningTwit</a> . <a href="/#" className="hashtag card-link">#looper</a> <a href="/#" className="hashtag card-link">#admin</a><br />
                                        <time dateTime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                                    </p>
                                </div>

                                <div className="card-footer">
                                    <a href="/#" className="card-footer-item card-footer-item-bordered card-link">Save</a> <a href="/#" className="card-footer-item card-footer-item-bordered card-link">Edit</a> <a href="/#" className="card-footer-item card-footer-item-bordered card-link">Delete</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">

                            <div className="card text-black bg-warning">
                                <div className="card-header"> Components </div>
                                <div className="card-body">
                                    <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="/#" className="mention">@stilearningTwit</a> . <a href="/#" className="hashtag">#looper</a> <a href="/#" className="hashtag">#admin</a><br />
                                        <time dateTime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                                    </p>
                                </div>

                                <div className="card-footer">
                                    <a href="/#" className="card-footer-item card-footer-item-bordered">Save</a> <a href="/#" className="card-footer-item card-footer-item-bordered">Edit</a> <a href="/#" className="card-footer-item card-footer-item-bordered">Delete</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">

                            <div className="card card-inverse bg-info">
                                <div className="card-header"> Components </div>
                                <div className="card-body">
                                    <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="/#" className="mention card-link">@stilearningTwit</a> . <a href="/#" className="hashtag card-link">#looper</a> <a href="/#" className="hashtag card-link">#admin</a><br />
                                        <time dateTime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                                    </p>
                                </div>

                                <div className="card-footer">
                                    <a href="/#" className="card-footer-item card-footer-item-bordered card-link">Save</a> <a href="/#" className="card-footer-item card-footer-item-bordered card-link">Edit</a> <a href="/#" className="card-footer-item card-footer-item-bordered card-link">Delete</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">

                            <div className="card text-dark bg-light">
                                <div className="card-header"> Components </div>
                                <div className="card-body">
                                    <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="/#" className="mention">@stilearningTwit</a> . <a href="/#" className="hashtag">#looper</a> <a href="/#" className="hashtag">#admin</a><br />
                                        <time dateTime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                                    </p>
                                </div>

                                <div className="card-footer">
                                    <a href="/#" className="card-footer-item card-footer-item-bordered">Save</a> <a href="/#" className="card-footer-item card-footer-item-bordered">Edit</a> <a href="/#" className="card-footer-item card-footer-item-bordered">Delete</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">

                            <div className="card text-light bg-dark">
                                <div className="card-header"> Components </div>
                                <div className="card-body">
                                    <p className="card-text"> Blanditiis architecto quaerat fugit sit ab veritatis ipsam assumenda doloremque repellendus expedita. <a href="/#" className="mention">@stilearningTwit</a> . <a href="/#" className="hashtag">#looper</a> <a href="/#" className="hashtag">#admin</a><br />
                                        <time dateTime="2018-02-12">Feb 12, 2018 at 08:19pm</time>
                                    </p>
                                </div>

                                <div className="card-footer">
                                    <a href="/#" className="card-footer-item card-footer-item-bordered">Save</a> <a href="/#" className="card-footer-item card-footer-item-bordered">Edit</a> <a href="/#" className="card-footer-item card-footer-item-bordered">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-block">
                    <h2 className="section-title"> Expansion Cards </h2>
                    <p className="text-muted"> A lightweight container that may either stand alone or be connected to a larger surface, such as a card. </p>
                    <div className="row">
                        
                        <div className="col-lg-6">
                            
                            <div id="accordion" className="card-expansion">
                                
                                <div className="card card-expansion-item expanded">
                                    <div className="card-header border-0" id="headingOne">
                                        <button className="btn btn-reset" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><span className="collapse-indicator mr-2"><i className="fa fa-fw fa-caret-right"></i></span> <span>Expandable Item #1</span></button>
                                    </div>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body pt-0"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                                    </div>
                                </div>
                                
                                <div className="card card-expansion-item">
                                    <div className="card-header border-0" id="headingTwo">
                                        <button className="btn btn-reset collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><span className="collapse-indicator mr-2"><i className="fa fa-fw fa-caret-right"></i></span> <span>Expandable Item #2</span></button>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body pt-0"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                                    </div>
                                </div>
                                
                                <div className="card card-expansion-item">
                                    <div className="card-header border-0" id="headingThree">
                                        <button className="btn btn-reset collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><span className="collapse-indicator mr-2"><i className="fa fa-fw fa-caret-right"></i></span> <span>Expandable Item #3</span></button>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body pt-0"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            
                            <div id="accordion2" className="card-expansion">
                                
                                <div className="card card-expansion-item expanded">
                                    <div className="card-header border-0" id="headingOne2">
                                        <button className="btn btn-reset d-flex justify-content-between w-100" data-toggle="collapse" data-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2"><span>Expandable Item #1</span> <span className="collapse-indicator"><i className="fa fa-fw fa-chevron-down"></i></span></button>
                                    </div>
                                    <div id="collapseOne2" className="collapse show" aria-labelledby="headingOne2" data-parent="#accordion2">
                                        <div className="card-body pt-0"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                                    </div>
                                </div>
                                
                                <div className="card card-expansion-item">
                                    <div className="card-header border-0" id="headingTwo2">
                                        <button className="btn btn-reset d-flex justify-content-between w-100 collapsed" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2"><span>Expandable Item #2</span> <span className="collapse-indicator"><i className="fa fa-fw fa-chevron-down"></i></span></button>
                                    </div>
                                    <div id="collapseTwo2" className="collapse" aria-labelledby="headingTwo2" data-parent="#accordion2">
                                        <div className="card-body pt-0"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                                    </div>
                                </div>
                                
                                <div className="card card-expansion-item">
                                    <div className="card-header border-0" id="headingThree2">
                                        <button className="btn btn-reset d-flex justify-content-between w-100 collapsed" data-toggle="collapse" data-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2"><span>Expandable Item #3</span> <span className="collapse-indicator"><i className="fa fa-fw fa-chevron-down"></i></span></button>
                                    </div>
                                    <div id="collapseThree2" className="collapse" aria-labelledby="headingThree2" data-parent="#accordion2">
                                        <div className="card-body pt-0"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-5" />
                <div className="section-block">
                    <h2 className="section-title"> Text Element </h2>
                </div>
                <div className="card card-fluid">
                    <div className="card-body p-sm-5">
                        <h1> Hello World </h1>
                        <p> Lorem ipsum<sup><a href="/#">[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well! </p>
                        <h2> Second level </h2>
                        <p> Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl. </p>
                        <ul>
                            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet. </li>
                            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis. </li>
                            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus. </li>
                            <li>Ut non enim metus. </li>
                        </ul>
                        <h3> Third level </h3>
                        <p> Quisque ante lacus, malesuada ac auctor vitae, congue <a href="/#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus. </p>
                        <ol>
                            <li>Donec blandit a lorem id convallis. </li>
                            <li>Cras gravida arcu at diam gravida gravida. </li>
                            <li>Integer in volutpat libero. </li>
                            <li>Donec a diam tellus. </li>
                            <li>Aenean nec tortor orci. </li>
                            <li>Quisque aliquam cursus urna, non bibendum massa viverra eget. </li>
                            <li>Vivamus maximus ultricies pulvinar. </li>
                        </ol>
                        <blockquote>
                            <p className="mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. </p>
                            <footer> Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                        <p> Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie. </p>
                        <p> Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo. </p>
                        <dl>
                            <dt> Web </dt>
                            <dd> The part of the Internet that contains websites and web pages </dd>
                            <dt> HTML </dt>
                            <dd> A markup language for creating web pages </dd>
                            <dt> CSS </dt>
                            <dd> A technology to make HTML look better </dd>
                        </dl>
                        <p> Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante. </p>
                        <h4> Fourth level </h4>
                        <p> Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur. </p>
                        <code>&lt;!DOCTYPE html&gt;
                            &lt;html&gt;
                            &lt;head&gt;
                            &lt;title&gt;Hello World&lt;/title&gt;
                            &lt;/head&gt;
                            &lt;body&gt;
                            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.&lt;/p&gt;
                            &lt;/body&gt;
                            &lt;/html&gt;</code>
                        <p> Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien. </p>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th> One </th>
                                    <th> Two </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> Three </td>
                                    <td> Four </td>
                                </tr>
                                <tr>
                                    <td> Five </td>
                                    <td> Six </td>
                                </tr>
                                <tr>
                                    <td> Seven </td>
                                    <td> Eight </td>
                                </tr>
                                <tr>
                                    <td> Nine </td>
                                    <td> Ten </td>
                                </tr>
                                <tr>
                                    <td> Eleven </td>
                                    <td> Twelve </td>
                                </tr>
                            </tbody>
                        </table>
                        <p> Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque. </p>
                        <h5> Fifth level </h5>
                        <p> Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio. </p>

                        <h6> Sixth level </h6>
                        <blockquote className="text-right">
                            <p className="mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. </p>
                            <footer> Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                        <p> Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus. </p>
                    </div>
                </div>
            </div>


        </>
    );
}

export default ContainerElements;