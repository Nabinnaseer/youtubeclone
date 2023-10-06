import React,{useState} from 'react';
import './Comments.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comments';
import moment from 'moment';

function DisplayComments({cId,commentBody,userCommented,userId,commentOn,commentPos}) {
    const CurrentUser = useSelector((state) => state.currentUserReducer || []);
    // console.log(userId)
    const [CmtBdy, setCmtBdy] = useState("");
    const [cmtId, setcmtId] = useState("");
    const [Edit, setEdit] = useState(false);
    const handleEdit = (ctId,ctBdy) => {
        setEdit(true);
        setcmtId(ctId);
        setCmtBdy(ctBdy);
    }
    const dispatch = useDispatch();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!CmtBdy) {
            alert("Type your comment")
        }else{
            dispatch(editComment({
                id:cmtId,
                commentBody:CmtBdy
            }))
            setCmtBdy("")
        }
        setEdit(false);
    };
    const handleDel = (id) =>{
        dispatch(deleteComment(id))
    };
  return (
    <>
        {
            Edit ? (<>

                <form className='comments_sub_form_comments' 
                onSubmit={handleOnSubmit}
                >
                    <input 
                    type="text" 
                    onChange={(e) => setCmtBdy(e.target.value)}
                    value={CmtBdy}
                    placeholder='Edit Comment .. ' 
                    className='comment_ibox' />
                    <input type="submit" value="Edit Changes" className='comment_add_btn_comment' />
                </form>
            
            </>):(
                    <p className="comment_body">{commentBody}</p>
            )
        }
        
        <p className="usercommented">{" "} - {userCommented} Commented {moment(commentOn).fromNow()}</p>
        <p className="usercommented">Comment Position = {commentPos}</p>

        {/* {
            CurrentUser.result._id === userId && (
               <>
                <p className="EditDel_DisplayComment">
                <i onClick={() => handleEdit(cId,commentBody)}>Edit</i>
                <i onClick={() => handleDel(cId)}>Delete</i>
                </p>
               </>
            )
        } */}
                {
                CurrentUser.result && CurrentUser.result._id === userId && (
                    <div>
                    <p className="EditDel_DisplayComment">
                        <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
                        <i onClick={() => handleDel(cId)}>Delete</i>
                    </p>
                    </div>
                )
        }
        
    </>
  )
}

export default DisplayComments;