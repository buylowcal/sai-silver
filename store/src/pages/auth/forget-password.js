import Link from "next/link";
import React from "react";
import { FiMail } from "react-icons/fi";

//internal import
import Error from "@components/form/Error";
import InputArea from "@components/form/InputArea";
import useLoginSubmit from "@hooks/useLoginSubmit";
import BottomNavigation from "@components/login/BottomNavigation";
import { usePasswordReset } from "@hooks/usePasswordReset";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const ForgetPassword = () => {
  const router = useRouter();
  const {
    loading,
    showLogin,
    initiatePasswordReset,
    resetPassword
  } = usePasswordReset();
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const submitHandler = async (data) => {
    const { verifyEmail } = data;
    
    if (router.query?.token) {
      // If we're on the reset password page
      await resetPassword(data.newPassword, router.query.token);
    } else {
      // If we're on the initial forget password page
      await initiatePasswordReset(verifyEmail);
    }
  };
  return (
    <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 mt-12">
      <div className="py-4 flex flex-col lg:flex-row w-full">
        <div className="w-full sm:p-5 lg:p-8">
          <div className="mx-auto text-left justify-center rounded-md w-full max-w-lg px-4 py-8 sm:p-10 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2x">
            <div className="overflow-hidden mx-auto">
              <div className="text-center mb-6">
                <Link href="/" className="text-3xl font-bold font-serif">
                  Forget Password
                </Link>
                <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
                  Reset Your Password
                </p>
              </div>
              <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 gap-5">
          {router.query?.token ? (
            // Reset password form fields
            <div className="form-group">
              <InputArea
                register={register}
                label="New Password"
                name="newPassword"
                type="password"
                placeholder="Enter new password"
                Icon={FiLock}
              />
              <Error errorName={errors.newPassword} />
            </div>
          ) : (
            // Initial forget password email field
            <div className="form-group">
              <InputArea
                register={register}
                label="Email"
                name="verifyEmail"
                type="email"
                placeholder="Your Register Email"
                Icon={FiMail}
              />
              <Error errorName={errors.verifyEmail} />
            </div>
          )}

          {/* Submit button */}
          <button
            disabled={loading}
            type="submit"
            className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1"
          >
            {loading ? (
              <span>Processing...</span>
            ) : router.query?.token ? (
              "Reset Password"
            ) : (
              "Send Reset Link"
            )}
          </button>
        </div>
      </form>
              <BottomNavigation
                or={true}
                route={"/auth/signup"}
                pageName={"Sign Up"}
                loginTitle="Sign Up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
