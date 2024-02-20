import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setRegisterError] = useState(false);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/.test(password)) {
            setRegisterError(' Password must be at least 6 characters, include one lowercase letter, one uppercase letter, and one special character.')
            return;
        }


        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('User Created Successfully!')
            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        <p className="text-red-600">{error}</p>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;