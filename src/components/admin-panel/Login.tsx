import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="bg-black min-h-screen grid place-items-center">
        <button className="bg-white px-8 py-4 flex gap-2 items-center rounded-md" onClick={() => signIn("google")}>
            <FaGoogle size={30} />Sign In with Google!
        </button>
    </div>
  )
}

export default Login