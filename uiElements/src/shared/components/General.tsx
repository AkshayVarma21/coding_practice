function General() {
    return (
        <>
            <div className="m-4">
            <div className="section-block">
                  <h2 className="section-title"> Sortable </h2>
                  <p className="text-muted"> JavaScript library for reorderable drag-and-drop lists on modern browsers and touch devices. No jQuery. </p>
                </div>
                <div className="row" data-toggle="sortable" data-draggable=".sortable-tile" data-handle=".drag-handle">
                  
                  <div className="col-lg-6 sortable-tile">
                    
                    <div className="card card-fluid">
                      <div className="card-header drag-handle"> Draft Items </div>
                      <ul className="sortable-lists list-group list-group-flush list-group-bordered" data-toggle="sortable" data-group="pages">
                        <li className="list-group-item align-items-center drag-handle">
                          <span className="drag-indicator"></span>
                          <div> Tracking Order </div>
                          <div className="btn-group ml-auto">
                            <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-secondary"><i className="far fa-trash-alt"></i></button>
                          </div>
                        </li>
                        <li className="list-group-item align-items-center drag-handle">
                          <span className="drag-indicator"></span>
                          <div> Shipping Policy </div>
                          <div className="btn-group ml-auto">
                            <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-secondary"><i className="far fa-trash-alt"></i></button>
                          </div>
                        </li>
                        <li className="list-group-item align-items-center drag-handle">
                          <span className="drag-indicator"></span>
                          <div> Return &amp; Exchanges </div>
                          <div className="btn-group ml-auto">
                            <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-secondary"><i className="far fa-trash-alt"></i></button>
                          </div>
                        </li>
                        <li className="list-group-item align-items-center drag-handle">
                          <span className="drag-indicator"></span>
                          <div> Privacy Statement </div>
                          <div className="btn-group ml-auto">
                            <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-secondary"><i className="far fa-trash-alt"></i></button>
                          </div>
                        </li>
                        <li className="list-group-item align-items-center drag-handle">
                          <span className="drag-indicator"></span>
                          <div> Term Of Services </div>
                          <div className="btn-group ml-auto">
                            <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-secondary"><i className="far fa-trash-alt"></i></button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="col-lg-6 sortable-tile">
                    
                    <div className="card card-fluid">
                      <div className="card-header drag-handle"> Publish Items </div>
                      <ul className="sortable-lists list-group list-group-flush list-group-bordered" data-toggle="sortable" data-group="pages">
                        <li className="list-group-item align-items-center drag-handle">
                          <span className="drag-indicator"></span>
                          <div> Homepage </div>
                          <div className="btn-group ml-auto">
                            <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-secondary"><i className="far fa-trash-alt"></i></button>
                          </div>
                        </li>
                        <li className="list-group-item align-items-center drag-handle">
                          <span className="drag-indicator"></span>
                          <div> Shops </div>
                          <div className="btn-group ml-auto">
                            <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-secondary"><i className="far fa-trash-alt"></i></button>
                          </div>
                        </li>
                        <li className="list-group-item align-items-center drag-handle">
                          <span className="drag-indicator"></span>
                          <div> About Us </div>
                          <div className="btn-group ml-auto">
                            <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-secondary"><i className="far fa-trash-alt"></i></button>
                          </div>
                        </li>
                        <li className="list-group-item align-items-center drag-handle">
                          <span className="drag-indicator"></span>
                          <div> Our Teams </div>
                          <div className="btn-group ml-auto">
                            <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-secondary"><i className="far fa-trash-alt"></i></button>
                          </div>
                        </li>
                        <li className="list-group-item align-items-center drag-handle">
                          <span className="drag-indicator"></span>
                          <div> Inquiries </div>
                          <div className="btn-group ml-auto">
                            <button className="btn btn-sm btn-secondary">Edit</button> <button className="btn btn-sm btn-secondary"><i className="far fa-trash-alt"></i></button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>


        </>
    );
}

export default General;