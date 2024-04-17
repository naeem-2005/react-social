import "./online.css";

export default function Online({user}) {
  return (
    <div>
    <li className="rightBarFriend">
            <div className="rightbarProfileImgConatiner">
              <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>

          </div>
  )
}
