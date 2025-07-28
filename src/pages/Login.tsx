export default function Login() {
  return (
    <div className="w-full ">
      <div className="bg-white w-[50%] mx-auto my-20 h-screen rounded-2xl border-neutral-200 border p-10">
        <p className="text-tiddy-gray text-4xl">please enter your detaiils</p>
        <h1 className="text-5xl ">Welcome Back</h1>
        <form className="flex flex-col">
          <input
            className="rounded border border-neutral-200 p-3"
            type="email"
            name="email"
            placeholder="Email address"
          ></input>
          <input
            className="rounded border border-neutral-200 p-3"
            type="password"
            name="password"
            placeholder="password"
          ></input>
          <button
            className="bg-blue-500 text-white p-4 rounded text-lg"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
