import "./right.css";
import {users} from "../../dummyData";
import Online from "../../components/online/Online";






export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assests/gift.jpg" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Today is my Birthday</b> and <b>3 other friends</b> have a birthday .</span>
        </div>
        <img src="/assests/gift-ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {
            users.map((u) => (
              <Online key={u.id} user={u}/>
            ))
            
          }
         
         
        </ul>
      </div>
    </div>
  )
}
