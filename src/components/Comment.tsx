import type { CommentProps } from "../types/commentType";

const Comment = ({data} : {data : CommentProps}) => {
  return (
    <article className="flex items-start gap-3 rounded-2xl border border-[#d5cdef] bg-white/80 p-4 shadow-sm shadow-[#d9d0f3]/30">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#d5d9ff] to-[#f5d6ee] font-semibold text-[#2b2d5b]">
        A
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-xs text-[#1f2937]">{data.userName}</h3>
            <span className="rounded-full bg-[#ede9fe] px-2 py-0.5 text-[8px] font-medium uppercase tracking-wide text-[#4c1d95]">
              {data.role}
            </span>
          </div>
          <span className="text-xs text-gray-500">{data.createdAt}</span>
        </div>

        <p className="mt-2 text-md leading-6 text-gray-700">
          {data.comment}
        </p>

        <div className="text-[#3f5fe2] text-sm font-semibold mt-2">
          <button>Reply</button><span> | </span>
          <button>Edit</button><span> | </span>
          <button>Delete</button>
        </div>
      </div>
    </article>
  );
};

export default Comment;