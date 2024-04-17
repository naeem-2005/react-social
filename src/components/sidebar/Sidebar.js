import "./sidebar.css";
import {RssFeed , HelpOutline , WorkOutline , Event , School,Group,Bookmarks,PlayCircle} from "@mui/icons-material";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <WorkOutline  className="sidebarIcon"/>
            <span className="slidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed  className="sidebarIcon"/>
            <span className="slidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Event  className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School  className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
          <li className="sidebarListItem">
            <Group  className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle  className="sidebarIcon"/>
            <span className="sidebarListItemText">Vedeos</span>
          </li>
          <li className="sidebarListItem">
            <Bookmarks  className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline  className="sidebarIcon"/>
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline  className="sidebarIcon"/>
            <span className="sidebarListItemText">Question</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarFriendList" />
        <li className="sidebarFriend">
          <img src="/assests/person/product-11.jpg" alt="img" className="sidebarFriendimg" />
          <span className="sidebarFriendName">Naeem Malik</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assests/person/product-11.jpg" alt="img" className="sidebarFriendimg" />
          <span className="sidebarFriendName">Naeem Malik</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assests/person/product-11.jpg" alt="img" className="sidebarFriendimg" />
          <span className="sidebarFriendName">Naeem Malik</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assests/person/product-11.jpg" alt="img" className="sidebarFriendimg" />
          <span className="sidebarFriendName">Naeem Malik</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assests/person/product-11.jpg" alt="img" className="sidebarFriendimg" />
          <span className="sidebarFriendName">Naeem Malik</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assests/person/product-11.jpg" alt="img" className="sidebarFriendimg" />
          <span className="sidebarFriendName">Naeem Malik</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assests/person/product-11.jpg" alt="img" className="sidebarFriendimg" />
          <span className="sidebarFriendName">Naeem Malik</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assests/person/product-11.jpg" alt="img" className="sidebarFriendimg" />
          <span className="sidebarFriendName">Naeem Malik</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assests/person/product-11.jpg" alt="img" className="sidebarFriendimg" />
          <span className="sidebarFriendName">Naeem Malik</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assests/person/product-11.jpg" alt="img" className="sidebarFriendimg" />
          <span className="sidebarFriendName">Naeem Malik</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assests/person/product-11.jpg" alt="img" className="sidebarFriendimg" />
          <span className="sidebarFriendName">Naeem Malik</span>
        </li>
      </div>
    </div>
  )
}
