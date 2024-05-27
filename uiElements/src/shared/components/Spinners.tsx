
function Spinners() {
    return (
        <>
            <div className="mx-4">
                {/* Spinners */}
                <div className="section-block">
                    <h2 className="section-title"> Spinners </h2>
                    <p className="text-muted"> Indicate the loading state of a component or page. </p>
                </div>
                <div className="section-block">

                    <div className="row">

                        <div className="col-lg-6">
                            <h3 className="section-title"> Border spinner </h3>
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-border text-secondary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-border text-success" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-border text-danger" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-border text-warning" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-border text-info" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-border text-muted" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-border text-dark" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <h3 className="section-title"> Growing spinner </h3>
                            <div className="spinner-grow text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-secondary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-success" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-danger" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-warning" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-info" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-muted" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-dark" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                    <h3 className="section-title mt-3"> Sizing </h3>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="spinner-border text-primary spinner-border-sm" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-primary spinner-grow-sm" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <button className="btn btn-primary" type="button" disabled><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> <span className="sr-only">Loading...</span></button> <button className="btn btn-primary" type="button" disabled><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...</button> <button className="btn btn-primary" type="button" disabled><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> <span className="sr-only">Loading...</span></button> <button className="btn btn-primary" type="button" disabled><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Loading...</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Spinners;