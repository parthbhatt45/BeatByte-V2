import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0f0f0f]">
            <div className="bg-[#181818] p-8 rounded-xl w-full max-w-md shadow-lg">

                <h1 className="text-3xl font-bold mb-6 text-center text-white">
                    Login
                </h1>

                <form className="flex flex-col gap-4">

                    <input
                        type="email"
                        placeholder="Email"
                        className="p-3 rounded bg-[#282828] text-white outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="p-3 rounded bg-[#282828] text-white outline-none"
                    />

                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-black font-semibold p-3 rounded transition"
                    >
                        Login
                    </button>

                    <p className="text-center text-gray-400">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-green-500 hover:underline"
                        >
                            Register
                        </Link>
                    </p>

                </form>

            </div>
        </div>
    );
}

export default Login;