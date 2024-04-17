import "./share.css";
import {PermMedia , Label ,Room, EmojiEmotions} from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
        
        <div className="sharewrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assests/person/offers.jpeg" alt="" />
                <input placeholder="whats in your mind safak" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia style={{ color: 'tomato' }} className="shareIcon"/>
                        <span className="shareOptionText">Photo or Vedio</span>
                    </div>
                    <div className="shareOption">
                        <Label style={{ color: 'blue' }} className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room style={{ color: 'green' }} className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions style={{ color: 'orange' }} className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>

            </div>

        </div>
    </div>
  )
}
