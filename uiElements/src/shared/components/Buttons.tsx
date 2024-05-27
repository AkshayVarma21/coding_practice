import { useTranslation } from "react-i18next";
function Buttons() {
    const { t  } = useTranslation();
    return (
        <>
            <div className="mx-4">
                <h2 className="section-title p-2"> {t("buttons")}</h2>
                <div className="card-deck-xl row">
                    <div className="card card-fluid col-lg-6">
                        <div className="card-body">
                            <div className="el-example">
                                <button type="button" className="btn btn-primary">{t("button")}</button> <button type="button" className="btn btn-secondary">{t("button")}</button> <button type="button" className="btn btn-success">{t("button")}</button> <button type="button" className="btn btn-info">{t("button")}</button> <button type="button" className="btn btn-warning">{t("button")}</button> <button type="button" className="btn btn-danger">{t("button")}</button> <button type="button" className="btn btn-light">{t("button")}</button> <button type="button" className="btn btn-dark">{t("button")}</button> <button type="button" className="btn btn-link">{t("button")}</button>
                            </div>
                        </div>
                        <div className="card-body border-top">
                            <div className="el-example">
                                <button type="button" className="btn btn-primary disabled">{t("disabled")}</button> <button type="button" className="btn btn-secondary disabled">{t("disabled")}</button> <button type="button" className="btn btn-success disabled">{t("disabled")}</button> <button type="button" className="btn btn-info disabled">{t("disabled")}</button> <button type="button" className="btn btn-warning disabled">{t("disabled")}</button> <button type="button" className="btn btn-danger disabled">{t("disabled")}</button> <button type="button" className="btn btn-light disabled">{t("disabled")}</button> <button type="button" className="btn btn-dark disabled">{t("disabled")}</button> <button type="button" className="btn btn-link disabled">{t("disabled")}</button>
                            </div>
                        </div>
                        <div className="card-body border-top">
                            <div className="el-example">
                                <button type="button" className="btn btn-outline-primary">{t("outline")}</button> <button type="button" className="btn btn-outline-secondary">{t("outline")}</button> <button type="button" className="btn btn-outline-success">{t("outline")}</button> <button type="button" className="btn btn-outline-info">{t("outline")}</button> <button type="button" className="btn btn-outline-warning">{t("outline")}</button> <button type="button" className="btn btn-outline-danger">{t("outline")}</button> <button type="button" className="btn btn-outline-light">{t("outline")}</button> <button type="button" className="btn btn-outline-dark">{t("outline")}</button>
                            </div>
                        </div>
                        <div className="card-body border-top">
                            <div className="el-example">
                                <button type="button" className="btn btn-subtle-primary">{t("subtle")}</button> <button type="button" className="btn btn-subtle-secondary">{t("subtle")}</button> <button type="button" className="btn btn-subtle-success">{t("subtle")}</button> <button type="button" className="btn btn-subtle-info">{t("subtle")}</button> <button type="button" className="btn btn-subtle-warning">{t("subtle")}</button> <button type="button" className="btn btn-subtle-danger">{t("subtle")}</button> <button type="button" className="btn btn-subtle-light">{t("subtle")}</button> <button type="button" className="btn btn-subtle-dark">{t("subtle")}</button>
                            </div>
                        </div>
                    </div>

                    <div className="card card-fluid col-lg-6">

                        <div className="card-body">

                            <div className="el-example">
                                <button type="button" className="btn btn-secondary btn-lg">{t("large")}</button> <button type="button" className="btn btn-secondary">{t("default")}</button> <button type="button" className="btn btn-secondary btn-sm">{t("small")}</button><button type="button" className="btn btn-secondary btn-xs">{t("xsmall")}</button>
                            </div>
                        </div>

                        <div className="card-body border-top">
                            <div className="btn-group-vertical">
                                <button type="button" className="btn btn-secondary">{t("groupvertical")}</button>
                                <button type="button" className="btn btn-secondary">{t("groupvertical")}</button> <button type="button" className="btn btn-secondary">{t("groupvertical")}</button>
                            </div>
                        </div>

                        <div className="card-body border-top">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-secondary">{t("left")}</button> <button type="button" className="btn btn-secondary">{t("middle")}</button> <button type="button" className="btn btn-secondary">{t("right")}</button>
                            </div>
                        </div>

                        <div className="card-body border-top">
                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-secondary">1</button> <button type="button" className="btn btn-secondary">2</button> <button type="button" className="btn btn-secondary">3</button>
                                </div>
                                <div className="btn-group mr-2" role="group" aria-label="Second group">
                                    <button type="button" className="btn btn-secondary">4</button> <button type="button" className="btn btn-secondary">5</button>
                                </div>
                                <div className="btn-group" role="group" aria-label="Third group">
                                    <button type="button" className="btn btn-secondary">6</button>
                                </div>
                            </div>
                        </div>

                        <div className="card-body border-top">
                            <button type="button" className="btn btn-primary btn-lg btn-block">{t("blocklvlbtn")}</button>
                        </div>
                    </div>
                </div>
                <div className="log-divider">
                        <span className="bg-light"><i className="fa fa-comment"></i> {t("logdiv")}</span>
                    </div>
                    {/* Buttons  Shapes*/}
                    <div className="row">

                        <div className="col-lg-6">
                            <p>
                                <span className="badge badge-primary">{t("primary")}</span> <span className="badge badge-secondary">{t("secondary")}</span> <span className="badge badge-success">{t("success")}</span> <span className="badge badge-danger">{t("danger")}</span> <span className="badge badge-warning">{t("warning")}</span> <span className="badge badge-info">{t("info")}</span> <span className="badge badge-light">{t("light")}</span> <span className="badge badge-dark">{t("dark")}</span>
                            </p>
                            <p>
                                <span className="badge badge-subtle badge-primary">{t("primary")}</span> <span className="badge badge-subtle badge-secondary">{t("secondary")}</span> <span className="badge badge-subtle badge-success">{t("success")}</span> <span className="badge badge-subtle badge-danger">{t("danger")}</span> <span className="badge badge-subtle badge-warning">{t("warning")}</span> <span className="badge badge-subtle badge-info">{t("info")}</span> <span className="badge badge-subtle badge-light">{t("light")}</span> <span className="badge badge-subtle badge-dark">{t("dark")}</span>
                            </p>
                        </div>

                        <div className="col-lg-6">
                            <p>
                                <span className="badge badge-pill badge-primary">{t("primary")}</span> <span className="badge badge-pill badge-secondary">{t("secondary")}</span> <span className="badge badge-pill badge-success">{t("success")}</span> <span className="badge badge-pill badge-danger">{t("danger")}</span> <span className="badge badge-pill badge-warning">{t("warning")}</span> <span className="badge badge-pill badge-info">{t("info")}</span> <span className="badge badge-pill badge-light">{t("light")}</span> <span className="badge badge-pill badge-dark">{t("dark")}</span>
                            </p>
                            <p>
                                <span className="badge badge-lg badge-danger"><span className="oi oi-media-record pulse mr-1"></span>{t("liveView")}</span>
                            </p>
                        </div>
                    </div>
                    <p>
                        <a href="/#" className="mention">@{t("mention")}</a>
                    </p>
            </div>
            

        </>
    );
}

export default Buttons;