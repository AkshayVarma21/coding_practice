const Tables = () => {
    return (
        <>
            <div className="mx-4 ">
                {/* Tables */}
                <div className="section-block">
                    <h2 className="section-title mx-4"> Tables </h2>
                </div>
                <div className="section-block mx-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="section-title"> Simple table with hover</h3>
                            <table className="table table-hover">
                                <thead className="thead-light">
                                    <tr>
                                        <th style={{ minWidth: 200 }}> Product </th>
                                        <th > Variants </th><th > Prices </th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr >
                                        <td > Wine - Chateau Bonnet </td>
                                        <td > 113 </td><td > $22.38 </td>
                                    </tr>
                                    <tr >
                                        <td > Cookie - Oatmeal </td>
                                        <td > 216 </td><td > $21.90 </td>
                                    </tr>
                                    <tr >
                                        <td > True - Vue Containers </td>
                                        <td > 191 </td><td > $24.96 </td>
                                    </tr>
                                    <tr >
                                        <td > Nut - Pumpkin Seeds </td>
                                        <td > 329 </td><td > $32.21 </td>
                                    </tr>
                                    <tr >
                                        <td > Artichoke - Bottom, Canned </td>
                                        <td > 375 </td><td > $27.75 </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="section-title"> Table with striped dark background </h3>
                            <table className="table table-striped table-dark">
                                <thead className="thead-light">
                                    <tr>
                                        <th style={{ minWidth: 200 }}> Product </th>
                                        <th > Variants </th><th > Prices </th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr >
                                        <td > Wine - Chateau Bonnet </td>
                                        <td > 113 </td><td > $22.38 </td>
                                    </tr>
                                    <tr >
                                        <td > Cookie - Oatmeal </td>
                                        <td > 216 </td><td > $21.90 </td>
                                    </tr>
                                    <tr >
                                        <td > True - Vue Containers </td>
                                        <td > 191 </td><td > $24.96 </td>
                                    </tr>
                                    <tr >
                                        <td > Nut - Pumpkin Seeds </td>
                                        <td > 329 </td><td > $32.21 </td>
                                    </tr>
                                    <tr >
                                        <td > Artichoke - Bottom, Canned </td>
                                        <td > 375 </td><td > $27.75 </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="section-title"> Table with row selected and horizontal scroll </h3>
                            <div className="table-wrapper">
                                <table className="table mb-0">
                                    <thead className="thead-">
                                        <tr >
                                            <th className="th_min_width">CALL NUMBER</th>
                                            <th >SUMMARY</th><th className="th_min_width">SEVERITY</th>
                                            <th className="th_min_width">STATUS</th>
                                            <th className="th_min_width">Category</th>
                                            <th className="th_min_width">LOCATION</th>
                                            <th className="th_min_width">SUBMITTED BY </th>
                                            <th className="th_min_width">SUBMITTED ON</th>
                                            <th className="th_min_width">LAST UPDATED</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr className="pointer" style={{ fontWeight: "bold" }}>
                                            <td style={{ color: "#00AA7E", borderLeft: "5px solid #00AA7E" }}> Ticket Id </td>
                                            <td > Description</td>
                                            <td ><span className="badge A" style={{ padding: "0.3rem" }}>A</span> Critical </td>
                                            <td > Status </td><td > Category </td>
                                            <td > Location: Location of origin </td>
                                            <td > Submitted By: User name </td>
                                            <td > Submitted on: Date of submitted </td>
                                            <td style={{ color: "#8b8b8b" }}> Last updated on Date </td>
                                        </tr>
                                        <tr className="pointer">
                                            <td > Ticket Id </td>
                                            <td > Description</td>
                                            <td >
                                                <span className="badge C" style={{ padding: "0.3rem" }}>AC</span> Medium </td>
                                            <td > Status </td><td > Category </td>
                                            <td > Location: Location of origin </td>
                                            <td > Submitted By: User name </td>
                                            <td > Submitted on: Date of submitted </td>
                                            <td style={{ color: "#8b8b8b" }}> Last updated on Date </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="section-title"> Small sized</h3>
                            <table className="table table-sm table-hover">
                                <thead className="thead-light">
                                    <tr>
                                        <th style={{ minWidth: 200 }}> Product </th>
                                        <th > Variants </th><th > Prices </th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr >
                                        <td > Wine - Chateau Bonnet </td>
                                        <td > 113 </td><td > $22.38 </td>
                                    </tr>
                                    <tr >
                                        <td > Cookie - Oatmeal </td>
                                        <td > 216 </td><td > $21.90 </td>
                                    </tr>
                                    <tr >
                                        <td > True - Vue Containers </td>
                                        <td > 191 </td><td > $24.96 </td>
                                    </tr>
                                    <tr >
                                        <td > Nut - Pumpkin Seeds </td>
                                        <td > 329 </td><td > $32.21 </td>
                                    </tr>
                                    <tr >
                                        <td > Artichoke - Bottom, Canned </td>
                                        <td > 375 </td><td > $27.75 </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="section-title"> Row colors</h3>
                            <table className="table table-hover">
                                <thead className="thead-light">
                                    <tr>
                                        <th style={{ minWidth: 200 }}> Product </th>
                                        <th > Variants </th><th > Prices </th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr >
                                        <td > Wine - Chateau Bonnet </td>
                                        <td > 113 </td><td > $22.38 </td>
                                    </tr>
                                    <tr className="table-success">
                                        <td > Cookie - Oatmeal </td>
                                        <td > 216 </td><td > $21.90 </td>
                                    </tr>
                                    <tr className="table-primary">
                                        <td > True - Vue Containers </td>
                                        <td > 191 </td><td > $24.96 </td>
                                    </tr>
                                    <tr className="table-danger">
                                        <td > Nut - Pumpkin Seeds </td>
                                        <td > 329 </td><td > $32.21 </td>
                                    </tr>
                                    <tr className="table-warning">
                                        <td > Artichoke - Bottom, Canned </td>
                                        <td > 375 </td><td > $27.75 </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tables;