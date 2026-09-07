import UserInput from "./UserInput";
import Comment from "./Comment";
import { useState } from "react";

const CommentSection = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [comments,setComments] = useState<string[]>([]);

  const handleAdd = () => {
    console.log("added",userInput);
    if(!userInput.trim()) return;
    setComments(prev => [...prev , userInput])
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
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#1f2937]">
           {comments.length > 0 ? " Recent comments" : "No comments"}
          </h2>
          {/* <span className="rounded-full bg-[#e7e2ff] px-3 py-1 text-xs font-medium text-[#473a7a]">
            Comments : {comments.length}
          </span> */}
        </div>

        <div className="space-y-3">
          {comments.map((comment,index)=>(
           <Comment key={index} comment={comment}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
