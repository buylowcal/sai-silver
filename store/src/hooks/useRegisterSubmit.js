// hooks/useRegisterSubmit.js

import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomerServices from "@services/CustomerServices";
import { notifyError, notifySuccess } from "@utils/toast";
import { signIn } from "next-auth/react";

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
      const response = await CustomerServices.initialRegisterCustomer({ name, email, password });
  
      if (response.message === 'Registration successful') {
        // Automatically log in the user after successful registration
        const loginResponse = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
  
        if (loginResponse.ok) {
          notifySuccess("Registration and login successful!");
          // Redirect to the desired page (e.g., dashboard)
          router.push("/");
        } else {
          console.log("Login failed after registration:", loginResponse);
          notifyError("Login failed after registration. Please try again.");
        }
      } else {
        console.log("Registration failed:", response);
        notifyError(response.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.log("Error in registration:", error);
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