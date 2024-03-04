import React from "react";
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Cetakan27 from "./cetakan27";
import { Button } from "antd";


function Bchalview() {
    return (
        <>
         <div style={{marginBottom:'20px'}}>
        <PDFDownloadLink
        document={<Cetakan27 />} fileName='reportCetakan27' >
          {({loading}) => <Button loading={loading} type='primary' >Download</Button>}
        </PDFDownloadLink>
      </div>

            <PDFViewer style={{width:'100%', height:'500px'}}>
                <Cetakan27 />
            </PDFViewer>
        </>
    );
}

export default Bchalview