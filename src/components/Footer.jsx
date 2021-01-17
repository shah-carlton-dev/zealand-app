import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
var style = {
    backgroundColor: "rgb(246,247,249)",
    textAlign: "center",
    padding: "20px",
    paddingTop: "0px !important",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "85px",
    width: "100%",
    zIndex: '11',
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '100%',
  width: '100%',
}



function Footer({  }) {
    return (
        <div>
            <div style={style}>
                <p>Questions? Reach out at 925.963.2774 or lburnett@options-cm.com</p>
                <p>&copy; {new Date().getFullYear()} Copyright: <a href="https://urldefense.proofpoint.com/v2/url?u=http-3A__www.options-2Dcm.com&d=DwMFAg&c=98-1fAyu96wLkqDlFjoYUb5nrUdSVWGncDa4Mw9HQNE&r=NTVCsZNQZ1PojlzhapedH0NrTsriGT1RRRxYF_iPuhY&m=L5mHp2veAhuasB80XVeA_Aftk-G1D9CgkMWtIMe2otA&s=UEqnInRA3CxTFPb8NIu1iawjv8f-YgJIi8xq9GdGRZw&e="> Options </a></p>
                
            </div>
        </div>
    )
}

export default Footer
