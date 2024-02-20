import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import auth from "../../firebase/firebase.init";


const Login = () => {
    const { login } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        console.log(email, password);

        login(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                console.error(error);
                toast.error("Incorrect Email or password");
            });
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                const user = res.user;
                console.log(user);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    return (
        <div>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Email"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            required
                            name="password"
                            placeholder="Password"
                            className="input input-bordered"
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        <button
                            onClick={handleGoogleLogin}
                            className="text-center align-middle select-none font-sans font-bold mt-2 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5  rounded-lg border border-blue-gray-500 text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] flex items-center justify-center gap-3"
                        >
                            <img
                                src="https://docs.material-tailwind.com/icons/google.svg"
                                alt="metamask"
                                className="w-6 h-6"
                            />
                            Continue with Google
                        </button>
                    </div>
                </form>
                <p className="text-center mt-4 mb-4">
                    Do not have an account{" "}
                    <Link className="text-blue-600 font-bold" to="/signUp">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;