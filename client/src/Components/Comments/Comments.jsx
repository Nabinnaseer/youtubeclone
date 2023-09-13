import React,{useState} from 'react';
import './Comments.css';
import DisplayComments from './DisplayComments';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../actions/comments';

function Comments({videoId}) {
    const CurrentUser = useSelector((state) => state.currentUserReducer);
    const commentsList = useSelector((s) => s.commentReducer.data || []);
    const [CommentText, setCommentText] = useState("")
    const dispatch = useDispatch();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (CurrentUser) {
            if (!CommentText) {
                alert("Please type your comment")
            }else{
                dispatch(postComment({
                    videoId : videoId,
                    userId : CurrentUser.result._id,
                    commentBody: CommentText,
                    userCommented: CurrentUser.result.name,
                }));
                setCommentText("");
            }
        }else{
            alert("Please login to post comment")
        }
    }
    // const commentsList = [{
    //     _id:"1",
    //     commentBody:"Hello",
    //     userComment:"Luke"
    // },
    // {   
    //     _id:"2",
    //     commentBody:"Hello There",
    //     userComment:"Jeff"
    // },
    // ];
  return (
    <>
        <form className='comments_sub_form_comments' onSubmit={handleOnSubmit}>
            <input 
            type="text" 
            onChange={(e) => setCommentText(e.target.value)}
            value={CommentText}
            placeholder='Add Comment...' 
            className='comment_ibox' />
            <input type="submit" value="Add" className='comment_add_btn_comment' />
        </form>
        <div className="display_comment_container">
            {
                commentsList.filter((q)=> videoId === q.videoId).reverse().map((m) => {
                    return(
                        <DisplayComments
                        cId = {m._id}
                        userId = {m.userId}
                        commentBody = {m.commentBody}
                        commentOn = {m.commentOn}
                        userCommented = {m.userCommented}
                        />
                    )
                })
            }
        </div>
    </>
  )
}

export default Comments