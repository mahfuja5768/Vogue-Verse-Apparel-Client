import { Link } from "react-router-dom";
import bg from "../assets/9.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [showPass, setShowPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photoUrl = form.get("photoUrl");
    const password = form.get("password");

    console.log(name, email, password, photoUrl);

    setRegisterError("");
    formValues.reset();
    // if (name.length === 0 || password.length < 0) {
    //   return;
    // } else if (password.length < 6) {
    //   return setRegisterError(" The password is less than 6 characters");
    // }
    // else if (!/[A-Z]/.test(password)) {
    //   return setRegisterError(" The password don't have a capital letter");
    // } else if (!/[!#$%&?]/.test(password)) {
    //   return setRegisterError(" The password don't have a special character");
    // }
  };
  return (
    <div
      className="py-0 lg:py-8"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-primary py-8 max-w-[1280px] mx-auto px-4 lg:px-12">
        <h1 className="lg:text-5xl text-4xl font-bold text-center mb-12">
          Register Now
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-6">
          <div className="lg:col-span-2">
            <img
              src={"https://i.ibb.co/yFcRx9F/login-concept-illustration-65141-421-removebg-preview.png"}
              alt=""
            />
          </div>
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl ">Name</span>
                  </label>
                  <label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="input input-bordered bg-white rounded-lg w-full"
                      required
                    />
                  </label>
                </div>
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
              </div>
              <div className="form-control text-black mt-4">
                <label className="label">
                  <span className="label-text text-xl">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Enter your photo url"
                  className="input input-bordered w-full"
                />
              </div>
              <p className="text-black text-lg my-5">
                Already have an account ?
                <Link to="/login" className="link text-blue-500 ms-2">
                  Login now
                </Link>
              </p>

              {registerError && (
                <h3 className="text-red-600  text-lg pb-2">{registerError}</h3>
              )}
              <input
                type="submit"
                className="w-full cursor-pointer bg-secondary text-white my-2 rounded-lg py-4 font-bold"
                value="  Register now"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
