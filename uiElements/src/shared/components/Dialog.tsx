
import { useEffect } from "react";
import { Tooltip } from "bootstrap";
import { Popover } from "bootstrap";

function Dialog() {

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle = "tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl)
    });
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle = "popover"]'))
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new Popover(popoverTriggerEl)
    })
  }, [])
  return (
    <>
      <div className="mx-4">
        {/* Dialog */}
        <h2 className="section-title"> Dialog </h2>
        <div className="card-deck-xl">

          <div className="card card-fluid">
            <div className="card-header"> Tooltips &amp; Popovers </div>
            <div className="card-body">
              <p className="text-muted"> Hover on buttons below to see tooltips. </p>
              <div className="el-example">
                <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top" data-title="Tooltip on Top">Tooltip on top</button>
                <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="right" data-title="Tooltip on right">Tooltip on right</button> <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" data-title="Tooltip on bottom">Tooltip on bottom</button> <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="left" data-title="Tooltip on left">Tooltip on left</button> <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-html="true" data-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>
              </div>
            </div>

            <div className="card-body border-top">
              <p className="text-muted"> Click buttons below to see Popover. </p>
              <div className="el-example">
                <button type="button" className="btn btn-secondary" data-container="body"   data-trigger="focus" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-title="Popover Title">Popover Left</button> <button type="button" className="btn btn-secondary" data-container="body"  data-trigger="focus" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-title="Popover Title">Popover Top</button> <button type="button" className="btn btn-secondary" data-container="body"  data-trigger="focus" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-title="Popover Title">Popover Bottom</button> <button type="button" className="btn btn-secondary" data-container="body"  data-trigger="focus" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-title="Popover Title">Popover Right</button>
              </div>
            </div>
          </div>

          <div className="card card-fluid">
            <div className="card-header"> Modals &amp; Toastr </div>
            <div className="card-body">
              <div className="el-example">
                <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">Open: normal</button> <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModalLg">Open: large</button> <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModalSm">Open: small</button> <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter">Open: center</button> <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModalLong">Open: long</button> <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModalScrollable">Open: scrollable</button>
              </div>
              <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

                <div className="modal-dialog" role="document">

                  <div className="modal-content">

                    <div className="modal-header">
                      <h5 id="exampleModalLabel" className="modal-title"> Modal title </h5>
                    </div>

                    <div className="modal-body">
                      <p> Laudantium praesentium similique natus consequuntur, quae amet, sequi non velit placeat distinctio excepturi tempore quos expedita veritatis at corporis beatae maiores iste. </p>
                      <p> Omnis velit praesentium, incidunt voluptatibus voluptatem iure corporis minima error ipsum itaque magnam vero laborum molestiae vel. Saepe modi atque, iure dolores nulla dolor quia, eius libero ullam dicta explicabo! </p>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary" data-dismiss="modal">Click Me</button> <button type="button" className="btn btn-light">Secondary Action</button>
                    </div>
                  </div>
                </div>
              </div>

              <div id="exampleModalLg" className="modal fade" tabIndex={1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">

                <div className="modal-dialog modal-lg" role="document">

                  <div className="modal-content">

                    <div className="modal-header">
                      <h5 id="myLargeModalLabel" className="modal-title"> Modal title </h5>
                    </div>

                    <div className="modal-body">
                      <p> Officiis asperiores consectetur in, aspernatur, voluptate velit ut libero quo eius veritatis incidunt, fugit voluptatibus ullam voluptates error earum unde illo! Aliquid. </p>
                      <p> Explicabo, fugiat sapiente aliquam? Perspiciatis, harum ratione veritatis. Fuga velit eos quos numquam impedit, unde reiciendis asperiores sunt repellat distinctio, totam, veritatis mollitia. Id iusto repudiandae ad, architecto assumenda blanditiis. </p>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary" data-dismiss="modal">Click Me</button> <button type="button" className="btn btn-light">Secondary Action</button>
                    </div>
                  </div>
                </div>
              </div>


              <div id="exampleModalSm" className="modal fade" tabIndex={1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">

                <div className="modal-dialog modal-sm" role="document">

                  <div className="modal-content">

                    <div className="modal-header">
                      <h5 id="mySmallModalLabel" className="modal-title"> Modal title </h5>
                    </div>

                    <div className="modal-body">
                      <p> Quis cum doloremque, ab culpa fugit deserunt necessitatibus! Eos saepe impedit, facilis veritatis, incidunt fuga optio sint, officiis molestias earum deserunt quas! </p>
                      <p> Modi vel nihil doloribus tempore amet. Facilis vel, cupiditate incidunt illo amet pariatur tenetur quam commodi neque, mollitia laboriosam aperiam fugiat, ratione. Ratione rem nobis temporibus facilis exercitationem porro? Obcaecati. </p>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal fade" id="exampleModalCenter" tabIndex={1} role="dialog" aria-labelledby="exampleModalCenterLabel" aria-hidden="true">

                <div className="modal-dialog modal-dialog-centered" role="document">

                  <div className="modal-content">

                    <div className="modal-header">
                      <h5 id="exampleModalCenterLabel" className="modal-title"> Modal title </h5>
                    </div>

                    <div className="modal-body">
                      <p> Laudantium praesentium similique natus consequuntur, quae amet, sequi non velit placeat distinctio excepturi tempore quos expedita veritatis at corporis beatae maiores iste. </p>
                      <p> Omnis velit praesentium, incidunt voluptatibus voluptatem iure corporis minima error ipsum itaque magnam vero laborum molestiae vel. Saepe modi atque, iure dolores nulla dolor quia, eius libero ullam dicta explicabo! </p>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary" data-dismiss="modal">Click Me</button> <button type="button" className="btn btn-light">Secondary Action</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal fade" id="exampleModalLong" tabIndex={1} role="dialog" aria-labelledby="exampleModalLongLabel" aria-hidden="true">

                <div className="modal-dialog" role="document">

                  <div className="modal-content">

                    <div className="modal-header">
                      <h5 id="exampleModalLongLabel" className="modal-title"> Modal title </h5>
                    </div>

                    <div className="modal-body">
                      <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                      <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                      <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                      <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                      <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                      <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                      <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                      <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                      <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                      <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                      <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                      <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                      <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                      <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                      <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                      <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                      <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                      <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary" data-dismiss="modal">Click Me</button> <button type="button" className="btn btn-light">Secondary Action</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal fade" id="exampleModalScrollable" tabIndex={1} role="dialog" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">

                <div className="modal-dialog modal-dialog-scrollable" role="document">

                  <div className="modal-content">

                    <div className="modal-header">
                      <h5 id="exampleModalScrollableLabel" className="modal-title"> Modal title </h5>
                    </div>

                    <div className="modal-body">
                      <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                      <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                      <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                      <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                      <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                      <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                      <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                      <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                      <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                      <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                      <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                      <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                      <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                      <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                      <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                      <p> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                      <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                      <p> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </p>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary" data-dismiss="modal">Click Me</button> <button type="button" className="btn btn-light">Secondary Action</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body border-top">
              <div className="el-example">
                <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModalAlert">Open: alert</button> <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModalAlertWarning">Open: warning</button> <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModalAlertDanger">Open: danger</button>
              </div>
              <div className="modal modal-alert fade" id="exampleModalAlert" data-backdrop="static" tabIndex={1} role="dialog" aria-labelledby="exampleModalAlertLabel" aria-hidden="true">

                <div className="modal-dialog" role="document">

                  <div className="modal-content">

                    <div className="modal-header">
                      <h5 id="exampleModalAlertLabel" className="modal-title">
                        <i className="fa fa-trophy text-success mr-1"></i> Congrats! You Unlock New Feature. </h5>
                    </div>

                    <div className="modal-body">
                      <p> Eligendi rem, pariatur saepe! Sunt, nulla, esse eligendi culpa doloremque non maxime! </p>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal modal-alert fade" id="exampleModalAlertWarning" data-backdrop="static" tabIndex={1} role="dialog" aria-labelledby="exampleModalAlertWarningLabel" aria-hidden="true">

                <div className="modal-dialog" role="document">

                  <div className="modal-content">

                    <div className="modal-header">
                      <h5 id="exampleModalAlertWarningLabel" className="modal-title">
                        <i className="fa fa-bullhorn text-warning mr-1"></i> Modal: warning </h5>
                    </div>

                    <div className="modal-body">
                      <p> Eligendi rem, pariatur saepe! Sunt, nulla, esse eligendi culpa doloremque non maxime! </p>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button> <button type="button" className="btn btn-light">Secondary Action</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal modal-alert fade" id="exampleModalAlertDanger" data-backdrop="static" tabIndex={1} role="dialog" aria-labelledby="exampleModalAlertDangerLabel" aria-hidden="true">

                <div className="modal-dialog" role="document">

                  <div className="modal-content">

                    <div className="modal-header">
                      <h5 id="exampleModalAlertDangerLabel" className="modal-title">
                        <i className="fa fa-exclamation-triangle text-red mr-1"></i> Alert: danger </h5>
                    </div>

                    <div className="modal-body">
                      <p> Eligendi rem, pariatur saepe! Sunt, nulla, esse eligendi culpa doloremque non maxime! </p>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body border-top">
              <div className="el-example">
                <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModalDrawerRight">Drawer: right</button> <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModalDrawerLeft">Drawer: left</button> <button type="button" className="btn btn-lg btn-primary btn-floated" data-toggle="modal" data-target="#exampleModalDocked" data-backdrop="false"><i className="fa fa-comment fa-lg"></i></button>
              </div>
              <div className="modal modal-drawer fade has-shown" id="exampleModalDrawerRight"  tabIndex={-1} role="dialog" aria-labelledby="exampleModalDrawerRightLabel" style={{display: "none"}} aria-hidden="true">
                
                <div className="modal-dialog modal-drawer-right" role="document">
                  
                  <div className="modal-content">
                    
                    <div className="modal-header modal-body-scrolled">
                      <h5 id="exampleModalDrawerRightLabel" className="modal-title"> Drawer: right </h5>
                    </div>
                    
                    <div className="modal-body">
                      <p> Eligendi rem, pariatur saepe! Sunt, nulla, esse eligendi culpa doloremque non maxime! </p>
                    </div>
                    
                    <div className="modal-footer">
                      <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal modal-drawer fade has-shown" id="exampleModalDrawerLeft"  tabIndex={-1} role="dialog" aria-labelledby="exampleModalDrawerLeftLabel" style={{display: "none"}} aria-hidden="true">
                
                <div className="modal-dialog modal-drawer-left modal-sm" role="document">
                  
                  <div className="modal-content">
                    
                    <div className="modal-header modal-body-scrolled">
                      <h5 id="exampleModalDrawerLeftLabel" className="modal-title"> Drawer: left </h5>
                    </div>
                    
                    <div className="modal-body">
                      <p> Eligendi rem, pariatur saepe! Sunt, nulla, esse eligendi culpa doloremque non maxime! </p>
                    </div>
                    
                    <div className="modal-footer">
                      <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal modal-docked fade" id="exampleModalDocked"  tabIndex={-1} role="dialog" aria-labelledby="exampleModalDockedLabel" aria-hidden="true">
                
                <div className="modal-dialog modal-sm modal-dialog-scrollable" role="document">
                  
                  <div className="modal-content">
                    
                    <div className="modal-header bg-primary text-white">
                      <div className="d-block">
                        <p id="exampleModalDockedLabel"> Hi 👋! I'm a Modal Docked </p>
                        <p className="text-center px-3"> You can use .modal-lg/.modal-sm class to in/decrease my size an put any type of content in my body. </p>
                      </div>
                    </div>
                    
                    <div className="modal-body py-3">
                      
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="text" id="cname" className="form-control placeholder-shown" placeholder="Name" required /> <label>Name</label>
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <div className="form-label-group">
                          <input type="email" id="cmail" className="form-control placeholder-shown" placeholder="Email address" required /> <label>Email Address</label>
                        </div>
                      </div>
                      <button type="button" className="btn btn-lg btn-block btn-primary">Lets Chat</button> <button type="button" className="btn btn-lg btn-block btn-link" data-dismiss="modal" aria-label="Close">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}



export default Dialog;