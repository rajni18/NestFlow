import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "../types/postType";

interface PostState{
    posts : Post[]
}
const initialState : PostState ={
    posts : []
}

const PostSlice = createSlice({
    name : "post",
    initialState ,
    reducers :{
        addPost: (state,action: PayloadAction<Post>)=>{
            state.posts.unshift(action.payload)
        }

    }

})

export const {addPost} = PostSlice.actions;
export default PostSlice.reducer ;
