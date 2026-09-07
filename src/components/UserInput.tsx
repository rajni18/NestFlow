import type {UserInputProps} from "../types/type"
const UserInput = ({userInput,setUserInput,handleAdd} : UserInputProps) => {

  return (
    <div className="mt-8 w-full max-w-4xl">
      <div className="flex items-center gap-3 rounded-2xl border border-[#c7bde7] bg-[#f2eefb] px-4 py-3 shadow-sm shadow-[#b7a9db]/20">
        <div className="flex flex-1 items-center gap-3">
          <span className="text-lg text-[#3a3a5f]">🔍</span>
          <input
            type="text"
            placeholder="Join the community"
            className="w-full border-0 bg-transparent text-base text-[#1f2937] placeholder:text-[#6b7280] focus:outline-none"
            value={userInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserInput(e.target.value);
            }}
          />
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-[#3f5fe2] px-4 py-1.5 text-sm font-medium text-white"
        onClick={handleAdd}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserInput;
