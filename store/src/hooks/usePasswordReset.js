// hooks/usePasswordReset.js
import { useState } from 'react';
import { useRouter } from 'next/router';
 import { notifySuccess, notifyError } from '../utils/toast';
import CustomerServices from '@services/CustomerServices';

export const usePasswordReset = () => {
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();

  const initiatePasswordReset = async (email) => {
    setLoading(true);
    try {
      const res = await CustomerServices.forgetPassword({ verifyEmail: email });
      notifySuccess(res.message || "Please check your email to reset password!");
      setLoading(false);
      return true;
    } catch (err) {
      setLoading(false);
      notifyError(err?.response?.data?.message || "Something went wrong!");
      return false;
    }
  };

  const resetPassword = async (newPassword, token) => {
    setLoading(true);
    try {
      const res = await CustomerServices.resetPassword({
        newPassword,
        token
      });
      setLoading(false);
      setShowLogin(true);
      notifySuccess(res.message || "Password reset successful!");
      return true;
    } catch (err) {
      setLoading(false);
      notifyError(err?.response?.data?.message || "Reset failed!");
      return false;
    }
  };

  return {
    loading,
    showLogin,
    initiatePasswordReset,
    resetPassword
  };
};