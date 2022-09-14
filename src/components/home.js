import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function home() {
  return (
    <>
    <h1>home</h1>

    <Link className="navbar-brand" to="/pie">pie</Link><br></br>
    <Link className="navbar-brand" to="/bar">bar</Link><br></br>
    <Link className="navbar-brand" to="/areachart">areachart</Link><br></br>
    <Link className="navbar-brand" to="/linechart">linechart</Link><br></br>
    <Link className="navbar-brand" to="/heatmap">heatmap</Link><br></br>
    <Link className="navbar-brand" to="/radar">radar</Link><br></br>
    <Link className="navbar-brand" to="/scatterplot">scatterplot</Link><br></br>
    <Link className="navbar-brand" to="/Sunburst">Sunburst</Link><br></br>
    <Link className="navbar-brand" to="/Treemap">Treemap</Link><br></br>
    <Link className="navbar-brand" to="/barstack">barstack</Link><br></br>
    <Link className="navbar-brand" to="/stream">stream</Link><br></br>
    <br></br><br></br><br></br>
    <Link className="navbar-brand" to="/face_reco">face_reco</Link><br></br>
    </>


  )
}
