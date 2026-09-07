import UserInput from "./UserInput";
import Comment from "./Comment";
import { useState } from "react";
import type { CommentProps } from "../types/commentType";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const CommentSection = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [comments,setComments] = useState<CommentProps[]>([]);
  const {theme} = useContext(ThemeContext);

  const handleAdd = () => {
    console.log("added",userInput);
    const commentData : CommentProps = {
      id : Date.now(),
      comment : userInput,
      userName : "Ava Thomson" ,
      role : "member",
      createdAt : new Date().toLocaleString()
    }
    if(!userInput.trim()) return;
    setComments(prev => [...prev , commentData])
    setUserInput("");
  };


  return (
    <div className="flex w-full flex-col items-center">
      <UserInput
        userInput={userInput}
        setUserInput={setUserInput}
        handleAdd={handleAdd}
      />

      <div className="mt-6 w-full max-w-4xl">
        <div className="my-4 flex items-center justify-between">
          <h2 className={`text-2xl font-semibold ${theme=== 'light' ? 'text-[#1f2937]' : 'text-white'}`}>
           {comments.length > 0 ? " Recent comments" : "No comments"}
          </h2>
          {/* <span className="rounded-full bg-[#e7e2ff] px-3 py-1 text-xs font-medium text-[#473a7a]">
            Comments : {comments.length}
          </span> */}
        </div>

        <div className="space-y-3">
          {comments.map((data)=>(
           <Comment key={data.id} data={data}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
