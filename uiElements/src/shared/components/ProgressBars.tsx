
function ProgressBars() {
    return (
        <>
            <div className="mx-4">
                {/* ProgressBars */}
                <h2 className="section-title"> Progress Bars </h2>
                
                <div className="section-block">
                   
                    <div className="row">
                        
                        <div className="col-lg-6">
                            <h3 className="section-title"> Contextual </h3>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{width: "10%"}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <h3 className="section-title"> Striped </h3>
                            <div className="progress mb-3">
                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "10%"}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="progress mb-3">
                                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="progress mb-3">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="progress mb-3">
                                <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="progress mb-4">
                                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <h3 className="section-title"> Multiple bars </h3>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "15%"}} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="progress-bar bg-info" role="progressbar" style={{width: "30%"}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "20%"}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <h3 className="section-title"> Animated </h3>
                            <div className="progress mb-4">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: "75%"}}></div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <h3 className="section-title"> Sizing </h3>
                            <div className="progress progress-lg mb-3">
                                <div className="progress-bar" role="progressbar" style={{width: "10%"}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}> 10% </div>
                            </div>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}> 25% </div>
                            </div>
                            <div className="progress progress-sm mb-3">
                                <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="progress progress-xs mb-3">
                                <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    );
}

export default ProgressBars;