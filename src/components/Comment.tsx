type CommentProps ={
  comment : string
}

const Comment = ({comment} : CommentProps ) => {
  return (
    <article className="flex items-start gap-3 rounded-2xl border border-[#d5cdef] bg-white/80 p-4 shadow-sm shadow-[#d9d0f3]/30">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#d5d9ff] to-[#f5d6ee] font-semibold text-[#2b2d5b]">
        A
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-[#1f2937]">Ava Thompson</h3>
            <span className="rounded-full bg-[#ede9fe] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#4c1d95]">
              Member
            </span>
          </div>
          <span className="text-xs text-gray-500">2h ago</span>
        </div>

        <p className="mt-2 text-sm leading-6 text-gray-700">
          {comment}
        </p>

        <div className="text-[#3f5fe2] font-semibold mt-2">
          <button>Reply</button><span> | </span>
          <button>Edit</button><span> | </span>
          <button>Delete</button>
        </div>
      </div>
    </article>
  );
};

export default Comment;