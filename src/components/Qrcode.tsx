import qrImage from "../assets/image-qr-code.png";

const Qrcode = () => {
    return(
        <div className="card">
            <img src={qrImage} alt="qr-code" />
            <h1 className="card_titlte">Improve you front-end skill by building projects</h1>
            <p>Scan the QR code to visit Fronted Mentor and take your coding skill to the next level</p>
        </div>
    );
}

export default Qrcode;