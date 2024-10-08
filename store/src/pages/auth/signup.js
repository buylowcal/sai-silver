import { FiLock, FiMail, FiUser } from "react-icons/fi";

//internal import
import Layout from "@layout/Layout";
import Error from "@components/form/Error";
import InputArea from "@components/form/InputArea";
import useLoginSubmit from "@hooks/useLoginSubmit";
import BottomNavigation from "@components/login/BottomNavigation";
import Link from "next/link";
import useRegisterSubmit from "@hooks/useRegisterSubmit";

import { useForm } from "react-hook-form";


//sign up form
const SignUp = () => {
  const {
    handleSubmit,
    submitHandler,
    register,
    errors,
    loading,
    getValues,
  } = useRegisterSubmit();

  return (
    <Layout title="Signup" description="This is the sign-up page">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="py-4 flex flex-col lg:flex-row w-full">
          <div className="w-full sm:p-5 lg:p-8">
            <div className="mx-auto text-left justify-center rounded-md w-full max-w-lg px-4 py-8 sm:p-10 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2x">
              <div className="overflow-hidden mx-auto">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold font-serif">Sign Up</h2>
                  <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
                    Create an account by filling in the information below.
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit(submitHandler)}
                  className="flex flex-col justify-center mb-6"
                >
                  <div className="grid grid-cols-1 gap-5">
                    {/* Name Field */}
                    <div className="form-group">
                      <InputArea
                        register={register}
                        name="name"
                        label="Name"
                        type="text"
                        placeholder="Full Name"
                        Icon={FiUser}
                        required={true}
                      />
                      <Error errorName={errors.name} />
                    </div>

                    {/* Email Field */}
                    <div className="form-group">
                      <InputArea
                        register={register}
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="Email"
                        Icon={FiMail}
                        required={true}
                      />
                      <Error errorName={errors.email} />
                    </div>

                    {/* Password Field */}
                    <div className="form-group">
                      <InputArea
                        register={register}
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        Icon={FiLock}
                        required={true}
                      />
                      <Error errorName={errors.password} />
                    </div>

                    {/* Confirm Password Field */}
                    <div className="form-group">
                      <InputArea
                        register={register}
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm Password"
                        Icon={FiLock}
                        required={true}
                      />
                      <Error errorName={errors.confirmPassword} />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        disabled={loading}
                        type="submit"
                        className={`w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1 ${
                          loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        {loading ? (
                          <span className="flex items-center justify-center">
                            <img
                              src="/loader/spinner.gif"
                              alt="Loading"
                              width={20}
                              height={10}
                            />
                            <span className="font-serif ml-2 font-light">
                              Processing
                            </span>
                          </span>
                        ) : (
                          "Register"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
                <BottomNavigation
                  desc="Already have an account?"
                  route={"/auth/login"}
                  pageName={"Login"}
                  loginTitle="Sign Up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;