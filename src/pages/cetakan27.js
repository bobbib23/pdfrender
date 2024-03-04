import Pdfbcrender from "./pdfrender";
import { Document, PDFViewer, Page, StyleSheet } from '@react-pdf/renderer';


function Cetakan27() {

    const styles = StyleSheet.create({
        page: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#FFF',
        }
    });

    return (
        <PDFViewer style={{ width: '100%', height: '500px' }}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <Pdfbcrender />
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default Cetakan27