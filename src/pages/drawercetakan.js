import { Drawer } from "antd";
import Bchalview from "./Bchalview";
import Cetakan27 from "./cetakan27";


function Drawercetakan({ data = {}, onClose = () => {}, visible = false }) {
    return (
        <Drawer title={"Cetak BC 2.7"} width="80%" visible={visible} onClose={onClose} closable={false}>
        <div style={{width: '100%', height: 550}}>
            <Cetakan27 />
        </div>
        </Drawer>
    );
}

export default Drawercetakan