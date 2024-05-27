import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faFolder, faEnvelope, faFileArrowDown, faDollarSign, faCopy, faCircleExclamation, faAddressCard, faTrash } from "@fortawesome/free-solid-svg-icons";

function Icons() {
  return (
    <>
      <div className="mx-4">
        {/* Icons */}
        <h2 className="section-title"> Icons </h2>
        <div className="page-section">

          <div className="row">

            <div className="col-lg-6">

              <div className="card card-fluid">

                <div className="card-body">
                  <h4 className="card-title"> Use with button </h4>
                  <div className="el-example mb-3">
                    <button className="btn btn-secondary"><span className="fa fa-download mr-1"></span> Button</button> <button className="btn btn-primary">Button <span className="fa fa-thumbs-up ml-1"></span></button>
                  </div>
                  <h4 className="card-title"> Group </h4>
                  <div className="el-example">
                    <div className="btn-group">
                      <button className="btn btn-secondary"><span className="fa fa-download"></span></button> <button className="btn btn-secondary">Button</button>
                    </div>
                    <div className="btn-group">
                      <button className="btn btn-secondary">Button</button> <button className="btn btn-secondary"><span className="fa fa-thumbs-up"></span></button>
                    </div>
                    <div className="btn-group">
                      <button className="btn btn-secondary"><span className="fa fa-list"></span></button> <button className="btn btn-secondary"><span className="fa fa-th"></span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">

              <div className="card card-fluid">

                <div className="card-body">
                  <h4 className="card-title"> List Icons </h4>
                  <ul className="list-icons mb-3">
                    <li>
                      <span className="list-icon"><span className="fa fa-check text-primary"></span></span> Ullam odit vel at, commodi atque ratione? </li>
                    <li>
                      <span className="list-icon"><span className="fa fa-check-circle text-pink pulse"></span></span> Eligendi aliquid quis reprehenderit, officia fuga vero. </li>
                    <li>
                      <span className="list-icon"><span className="fa fa-check-circle-o text-success"></span></span> Nostrum perspiciatis laboriosam mollitia assumenda beatae distinctio! </li>
                    <li>
                      <span className="list-icon"><span className="fa fa-times-circle text-warning"></span></span> In, nulla dolor. Suscipit facilis molestiae architecto? </li>
                    <li>
                      <span className="list-icon"><span className="fa fa-times text-red"></span></span> Blanditiis non voluptas numquam incidunt eum temporibus! </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-lg-6">

              <div className="card card-fluid">

                <div className="card-body">
                  <h4 className="card-title"> Tiles </h4>
                  <div className="my-3">
                    <div className="tile tile-lg">
                      <span className="fa fa-user"></span>
                    </div>
                    <div className="tile">
                      <span className="fa fa-user"></span>
                    </div>
                    <div className="tile tile-sm">
                      <span className="fa fa-user"></span>
                    </div>
                    <div className="tile tile-xs mr-3">
                      <span className="fa fa-user"></span>
                    </div><a href="/#" className="tile bg-primary tile-lg">BA</a> <a href="/#" className="tile bg-primary">BA</a> <a href="/#" className="tile bg-primary tile-sm">B</a> <a href="/#" className="tile bg-primary tile-xs">B</a>
                  </div>
                </div>

                <ul className="list-group list-group-flush list-group-bordered">
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile bg-primary">
                        <span className="fa fa-user"></span>
                      </div>
                    </div>
                    <div className="list-group-item-body"> Cras justo odio </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile bg-success">
                        <span className="fa fa-comments"></span>
                      </div>
                    </div>
                    <div className="list-group-item-body"> Dapibus ac facilisis in </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile bg-danger">
                        <span className="fa fa-upload"></span>
                      </div>
                    </div>
                    <div className="list-group-item-body"> Morbi leo risus </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile bg-warning">
                        <span className="fa fa-tags"></span>
                      </div>
                    </div>
                    <div className="list-group-item-body"> Porta ac consectetur ac </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile bg-info">
                        <span className="fa fa-shopping-cart"></span>
                      </div>
                    </div>
                    <div className="list-group-item-body"> Vestibulum at eros </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faFileArrowDown} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> File arrow </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faCircleArrowLeft} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Back  </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faFolder} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Folder  </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Envelope  </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faDollarSign} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Dollar  </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faCopy} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Copy  </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faCircleExclamation} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Warning </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faAddressCard} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Address card </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Delete </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">

              <div className="card card-fluid">

                <div className="card-body">
                  <h4 className="card-title"> Tiles Cirlce </h4>
                  <div className="my-3">
                    <div className="tile tile-circle tile-lg">
                      <span className="fa fa-user"></span>
                    </div>
                    <div className="tile tile-circle">
                      <span className="fa fa-user"></span>
                    </div>
                    <div className="tile tile-circle tile-sm">
                      <span className="fa fa-user"></span>
                    </div>
                    <div className="tile tile-circle tile-xs mr-3">
                      <span className="fa fa-user"></span>
                    </div><a href="/#" className="tile bg-primary tile-circle tile-lg">BA</a> <a href="/#" className="tile bg-primary tile-circle">BA</a> <a href="/#" className="tile bg-primary tile-circle tile-sm">B</a> <a href="/#" className="tile bg-primary tile-circle tile-xs">B</a>
                  </div>
                </div>

                <ul className="list-group list-group-flush list-group-bordered">
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile tile-circle bg-primary">
                        <span className="fa fa-user"></span>
                      </div>
                    </div>
                    <div className="list-group-item-body"> Cras justo odio </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile tile-circle bg-success">
                        <span className="fa fa-comments"></span>
                      </div>
                    </div>
                    <div className="list-group-item-body"> Dapibus ac facilisis in </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile tile-circle bg-danger">
                        <span className="fa fa-upload"></span>
                      </div>
                    </div>
                    <div className="list-group-item-body"> Morbi leo risus </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile tile-circle bg-warning">
                        <span className="fa fa-tags"></span>
                      </div>
                    </div>
                    <div className="list-group-item-body"> Porta ac consectetur ac </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile tile-circle bg-info">
                        <span className="fa fa-shopping-cart"></span>
                      </div>
                    </div>
                    <div className="list-group-item-body"> Vestibulum at eros </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile tile-circle bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faFileArrowDown} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> File arrow </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile tile-circle bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faCircleArrowLeft} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Back </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile tile-circle bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faFolder} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Folder </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile tile-circle bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Envelope </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile tile-circle bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faDollarSign} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Dollar </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile tile-circle bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faCopy} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Copy </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile tile-circle bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faCircleExclamation} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Warning </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile tile-circle bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faAddressCard} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Address card </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-item-figure">
                      <div className="tile tile-circle bg-info icon-wrapper">
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                    </div>
                    <div className="list-group-item-body"> Delete </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}



export default Icons;