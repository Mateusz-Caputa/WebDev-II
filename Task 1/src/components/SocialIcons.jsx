import iInstagram from "../assets/instagram-icon.webp"
import iFacebook from "../assets/facebook-icon.webp"
import iX from "../assets/x-icon.svg"

export default function SocialIcons({ instagram, facebok, x }) {
    return (
        <div className="icons">
            <a href={instagram}><img src={iInstagram} className="icon" /></a>
            <a href={facebok} ><img src={iFacebook} className="icon" /></a>
            <a href={x}><img src={iX} className="icon" /></a>
        </div>
    )
}
