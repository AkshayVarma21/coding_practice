const Activity = () => {

    return (
        <>
            <div className="m-4">
                <div className="section-block">
                    <h2 className="section-title"> Timeline </h2>
                </div>
                <div className="section-block">
                    <h2 className="section-title"> Today </h2>
                    <ul className="timeline">
                        <li className="timeline-item">
                            <div className="timeline-figure">
                                <span className="tile tile-circle tile-sm"><i className="fa fa-calendar fa-lg"></i></span>
                            </div>
                            <div className="timeline-body">
                                <div className="media">
                                    <div className="media-body">
                                        <h6 className="timeline-heading selected-component">
                                            <div className="text-link">Management Meeting - W3 evaluation</div>
                                        </h6>
                                        <p className="mb-0">
                                            Jeffrey Wells created a schedule </p>
                                    </div>
                                    <div className="d-none d-sm-block">
                                        <span className="timeline-date">About a minute ago</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-figure">
                                <span className="tile tile-circle tile-sm"><i className="fa fa-tasks fa-lg"></i></span>
                            </div>
                            <div className="timeline-body">
                                <div className="media">
                                    <div className="media-body">
                                        <h6 className="timeline-heading selected-component">
                                            <div className="text-link">Support Convertation</div>
                                        </h6>
                                        <p className="mb-0">
                                            Anna Vargas logged a chat with team </p>
                                    </div>
                                    <div className="d-none d-sm-block">
                                        <span className="timeline-date">3 hours ago</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h2 className="section-title"> Yesterday </h2>
                    <ul className="timeline">
                        <li className="timeline-item">
                            <div className="timeline-figure">
                                <span className="tile tile-circle tile-sm"><i className="fa fa-tasks fa-lg"></i></span>
                            </div>
                            <div className="timeline-body">
                                <div className="media">
                                    <div className="media-body">
                                        <h6 className="timeline-heading selected-component">
                                            <div className="text-link">Daily Report - Dealing targeting</div>
                                        </h6>
                                        <p className="mb-0">
                                            Arthur Carroll created a todo on task </p>
                                    </div>
                                    <div className="d-none d-sm-block">
                                        <span className="timeline-date">8:14pm</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h2 className="section-title"> January 25, 2018 </h2>
                    <ul className="timeline">
                        <li className="timeline-item">
                            <div className="timeline-figure">
                                <span className="tile tile-circle tile-sm"><i className="fa fa-cube fa-lg"></i></span>
                            </div>
                            <div className="timeline-body">
                                <div className="media">
                                    <div className="media-body">
                                        <h6 className="timeline-heading selected-component">
                                            <div className="text-link">Project updated by Sara Carr</div>
                                        </h6>
                                        <p className="mb-0">
                                            Sara Carr updated <strong>Online Store App</strong> to Online Store
                                        </p>
                                        <p className="timeline-date d-sm-none"> at 3:21 AM </p>
                                    </div>
                                    <div className="d-none d-sm-block">
                                        <span className="timeline-date">3:21am</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-figure">
                                <span className="tile tile-circle tile-sm"><i className="fa fa-tasks fa-lg"></i></span>
                            </div>
                            <div className="timeline-body">
                                <div className="media">
                                    <div className="media-body">
                                        <h6 className="timeline-heading selected-component">
                                            <div className="text-link">Someone assigned you to a task</div>
                                        </h6>
                                        <p className="mb-0">
                                            Angela Petersonassign Make lemonade from scratch  to you
                                        </p>
                                        <p className="timeline-date d-sm-none"> at 5:21pm </p>
                                    </div>
                                    <div className="d-none d-sm-block">
                                        <span className="timeline-date">5:21pm</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-figure">
                                <span className="tile tile-circle tile-sm"><i className="fa fa-user fa-lg"></i></span>
                            </div>
                            <div className="timeline-body">
                                <div className="media">
                                    <div className="media-body">
                                        <h6 className="timeline-heading selected-component">
                                            <div className="text-link">You have new followers</div>
                                        </h6>
                                        <p className="mb-0">
                                           Willie Dixon and 3 others followed you </p>
                                        <p className="timeline-date d-sm-none"> at 10:32pm </p>
                                    </div>
                                    <div className="d-none d-sm-block">
                                        <span className="timeline-date">10:32pm</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Activity;