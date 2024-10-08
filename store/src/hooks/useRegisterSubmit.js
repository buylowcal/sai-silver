// hooks/useRegisterSubmit.js

import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomerServices from "@services/CustomerServices";
import { notifyError, notifySuccess } from "@utils/toast";

const useRegisterSubmit = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = async (formData) => {
    const { name, email, password } = formData;
    setLoading(true);

    try {
      // Call the registration service
     const response= await CustomerServices.initialRegisterCustomer({ name, email, password });
      if(response.message == 'Registration successful'){
        notifySuccess("Registration successful! Please log in.");

        // Redirect to login page
        router.push("/");
      }
      // Notify success
      
    } catch (error) {
      // Handle errors
      notifyError(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    errors,
    loading,
    handleSubmit,
    submitHandler,
    getValues,
  };
};

export default useRegisterSubmit;
