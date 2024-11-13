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


const ForgetPassword = () => {
  const router = useRouter();
  const [emailSent, setEmailSent] = useState(false);
  const [sentEmail, setSentEmail] = useState('');
  const [resending, setResending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
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
    try {
      setErrorMessage(''); // Clear any previous errors
      setSuccessMessage(''); // Clear any previous success messages
      const { verifyEmail } = data;
      
      if (router.query?.token) {
        await resetPassword(data.newPassword, router.query.token);
      } else {
        const response = await initiatePasswordReset(verifyEmail);
        console.log("email res", response);
        
        // When API sends only message (success case)
        if (response) {
          setEmailSent(true);
          setSentEmail(verifyEmail);
          setSuccessMessage(response.message);
        }
        // When API sends success: false and message (error case)
        else if (response.success === false) {
          setEmailSent(false);
          setErrorMessage(response.message);
        }
      }
    } catch (error) {
      setEmailSent(false);
      setErrorMessage(error.response?.data?.message || 'Something went wrong');
    }
  };
  
  const handleResend = async () => {
    try {
      setResending(true);
      setErrorMessage('');
      setSuccessMessage('');
      
      const response = await initiatePasswordReset(sentEmail);
      
      // When API sends only message (success case)
      if (response.message === 'Please check your email to reset password!') {
        setSuccessMessage(response.message);
      }
      // When API sends success: false and message (error case)
      else if (response.success === false) {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Something went wrong');
    } finally {
      setResending(false);
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

              {/* Error Message Display */}
              {errorMessage && (
                <div className="mb-4 p-3 rounded bg-red-50 border border-red-200">
                  <p className="text-red-600 text-sm text-center">
                    {errorMessage}
                  </p>
                </div>
              )}
              
              {emailSent && !router.query?.token ? (
                <SuccessMessage 
                  email={sentEmail} 
                  onResend={handleResend}
                  loading={resending}
                  errorMessage={errorMessage}
                  successMessage={successMessage}
                />
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
                      className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1 disabled:opacity-50 disabled:cursor-not-allowed"
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

// Update SuccessMessage component to use the success message
const SuccessMessage = ({ email, onResend, loading, errorMessage, successMessage }) => {
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
      
      {/* Show success message if available */}
      {successMessage && (
        <p className="text-sm text-emerald-600 mb-4">
          {successMessage}
        </p>
      )}
      
      <p className="text-sm text-gray-500 mb-6">
        Please check your email and click the link to reset your password.
        <br />
        If you don't see the email, please check your spam folder.
      </p>
      
      <div className="mt-6 border-t pt-6">
        <p className="text-sm text-gray-600 mb-3">
          Didn't receive the email?
        </p>
        <button
          onClick={onResend}
          disabled={loading}
          className="text-emerald-600 hover:text-emerald-700 font-medium text-sm focus:outline-none disabled:opacity-50"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Resending...
            </span>
          ) : (
            "Click here to resend the link"
          )}
        </button>
        
        {/* Error message in resend section */}
        {errorMessage && (
          <p className="mt-2 text-sm text-red-600">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;