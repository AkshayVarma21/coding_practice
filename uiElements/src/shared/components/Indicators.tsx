
function Indicators() {
    return (
        <>
            <div className="mx-4">
                {/* Indicators */}
                <h2 className="section-title"> Indicators </h2>
                <div className="section-block">
                    <div className="alert alert-secondary has-icon alert-dismissible fade show">
                        <button type="button" className="close" data-dismiss="alert">×</button>
                        <div className="alert-icon">
                            <span className="fa fa-flag"></span>
                        </div>
                        <h4 className="alert-heading"> Warning! </h4>
                        <p className="mb-0"> Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="/#" className="alert-link">vel scelerisque nisl consectetur et</a>. </p>
                    </div>
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="alert alert-danger alert-dismissible fade show">
                                <button type="button" className="close" data-dismiss="alert">×</button> <strong>Oh snap!</strong> <a href="/#" className="alert-link">Change a few things up</a> and try submitting again. </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="alert alert-success alert-dismissible fade show">
                                <button type="button" className="close" data-dismiss="alert">×</button> <strong>Well done!</strong> You successfully read <a href="/#" className="alert-link">this important alert message</a>. </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="alert alert-info alert-dismissible fade show">
                                <button type="button" className="close" data-dismiss="alert">×</button> <strong>Heads up!</strong> This <a href="/#" className="alert-link">alert needs your attention</a>, but it's not super important. </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="alert alert-primary has-icon" role="alert">
                                <div className="alert-icon">
                                    <span className="fa fa-info"></span>
                                </div>This is a primary alert with <a href="/#" className="alert-link">an example link</a>. Give it a click if you like.
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="alert alert-warning has-icon" role="alert">
                                <div className="alert-icon">
                                    <span className="fa fa-bullhorn"></span>
                                </div>This is a warning alert with <a href="/#" className="alert-link">an example link</a>. Give it a click if you like.
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="alert alert-dark has-icon" role="alert">
                                <div className="alert-icon">
                                    <span className="fa fa-bell"></span>
                                </div>This is a dark alert with <a href="/#" className="alert-link">an example link</a>. Give it a click if you like.
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>


        </>
    );
}



export default Indicators;