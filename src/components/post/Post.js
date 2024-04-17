import React, { useState } from 'react'; // Import useState from React
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { users } from "../../dummyData";

export default function Post({ post }) {
    const [like, setLike] = useState(post.like);

    const likeHandler = () => {
        setLike(like + 1);
    };

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{users.filter(u => u.id === post.userId)[0].username}</span>
                        <span className="postDate"> {post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postText">{post?.desc}</div>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assests/like.png" alt="" className="LikeIcon" onClick={likeHandler} />
                        <img src="/assests/heart-icon.png" alt="" className="heartIcon" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
