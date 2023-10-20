import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../components/ProviderContext/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [showPass, setShowPass] = useState(true);
  const {signInUser, googleSign} = useContext(AuthContext)

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    setLoginError("");
    formValues.reset();
    signInUser(email, password)
      .then((res) => {
        console.log(res.user.displayName);
        if(res.user){
          Swal.fire({
            title: "Success!",
            text: "Successfully User Logged in",
            icon: "success",
            confirmButtonText: "Done",
          });
          return navigate(location?.state ? location.state : '/')
        }
      })
      .catch((err) => {
        setLoginError(err.message);
      });
  };

  const handleGoogle = () => {
    googleSign()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Successfully User Logged in",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setLoginError(err.message);
      });
  };

  return (
    <div
      className="py-0 lg:py-8"
    >
      <div className="bg-gradient-to-b from-yellow-200 to-transparent py-8 max-w-[1280px] mx-auto px-4 lg:px-12">
        <h1 className="lg:text-5xl text-4xl font-bold text-center mb-12">
          Login Now
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-6">
          <div className="lg:col-span-2">
            {/* <img
              src={"https://i.ibb.co/yFcRx9F/login-concept-illustration-65141-421-removebg-preview.png"}
              alt=""
            /> */}
            <img
              src={
                "https://i.ibb.co/khLqWVW/forgot-password-concept-illustration-114360-1123-removebg-preview.png"
              }
              alt=""
            />
          </div>
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl ">Email</span>
                </label>
                <label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered bg-white rounded-lg w-full"
                    required
                  />
                </label>
              </div>

              <div className="form-control text-black text-lg ">
                <label className="label">
                  <span className="label-text text-lg ">Password</span>{" "}
                  <span>
                    {showPass ? (
                      <FaEyeSlash onClick={() => setShowPass(!showPass)} />
                    ) : (
                      <FaEye onClick={() => setShowPass(!showPass)} />
                    )}
                  </span>
                </label>
                <input
                  type={showPass ? "password" : "text"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <p className="text-black text-lg my-5">
                New in VogueVerseApparel
                <Link to="/register" className="link text-blue-500 ms-2">
                  Register now
                </Link>
              </p>

              {loginError && (
                <h3 className="text-red-600  text-lg pb-2">{loginError}</h3>
              )}
              <input
                type="submit"
                className="w-full cursor-pointer hover:bg-hoverText bg-secondary text-white my-2 rounded-lg py-4 font-bold"
                value="Login now"
              />
            </form>
            <h2 className="text-center my-1">Or</h2>
            <button
                onClick={handleGoogle}
                className="btn w-full cursor-pointer hover:bg-secondary bg-hoverText text-white"
              >
                <span>With Google</span>
                <span>
                  <FaGoogle></FaGoogle>
                </span>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
