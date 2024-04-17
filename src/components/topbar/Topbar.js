import { Search , Person , Chat , Notifications} from "@mui/icons-material";
import "./topbar.css";


export default function Topbar() {
    return (
      <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="Logo">LamaSocial</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search/>
                <input placeholder="seacrh for friend , post , vedio" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcon">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <div className="topbarIcon">
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">2</span>
                </div>
            </div>
            <div className="topbarIcon">
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="/assests/person/slider-3.jpg" alt="" className="topbarImg" />
        </div>
      </div>
    );
  }
  