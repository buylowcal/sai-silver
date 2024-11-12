import Link from "next/link";
import React, { useState } from "react";
import { FiMail } from "react-icons/fi";

//internal import
import Error from "@components/form/Error";
import InputArea from "@components/form/InputArea";
import useLoginSubmit from "@hooks/useLoginSubmit";
import BottomNavigation from "@components/login/BottomNavigation";
import { usePasswordReset } from "@hooks/usePasswordReset";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";


const SuccessMessage = ({ email }) => {
  return (
    <div className="text-center">
      <div className="mb-6">
        <svg 
          className="w-16 h-16 mx-auto text-emerald-500"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-4">Email Sent Successfully!</h3>
      <p className="text-gray-600 mb-4">
        We've sent a password reset link to:
        <br />
        <span className="font-medium">{email}</span>
      </p>
      <p className="text-sm text-gray-500">
        Please check your email and click the link to reset your password.
        <br />
        If you don't see the email, please check your spam folder.
      </p>
    </div>
  );
};
const ForgetPassword = () => {
  const router = useRouter();
  const [emailSent, setEmailSent] = useState(false);
  const [sentEmail, setSentEmail] = useState('');
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
      setEmailSent(true);
      setSentEmail(verifyEmail);
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
              
              {emailSent && !router.query?.token ? (
                <SuccessMessage email={sentEmail} />
              ) : (
                <form
                  onSubmit={handleSubmit(submitHandler)}
                  className="flex flex-col justify-center"
                >
                  <div className="grid grid-cols-1 gap-5">
                    {router.query?.token ? (
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
              )}
              
              <BottomNavigation
                or={true}
                route="/auth/signup"
                pageName="Sign Up"
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