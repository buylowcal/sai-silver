import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";

//internal imports

import useAsync from "@hooks/useAsync";
import { getUserSession } from "@lib/auth";
import Dashboard from "@pages/user/dashboard";
import CustomerServices from "@services/CustomerServices";
import NavBarTop from "@layout/navbar/NavBarTop";

const MyAccount = () => {
  const userInfo = getUserSession();
  const { data, loading, error } = useAsync(() =>
    CustomerServices.getShippingAddress({
      userId: userInfo?.id,
    })
  );

  const hasShippingAddress =
    data?.shippingAddress && Object.keys(data.shippingAddress).length > 0;

  // console.log("data", data?.shippingAddress);

  return (
    <Dashboard title="my-account" description="This is my account page">
     
      <div className="overflow-hidden mt-14">
        <div className="grid gap-4 mb-8 sm:grid-cols-2 grid-cols-1 ">
          {/* User Info Card */}
          <div className="flex h-full relative">
            <div className="flex items-center border border-gray-200 w-full rounded-lg p-4 relative">
              <Link
                href="/user/update-profile"
                className="absolute top-2 right-2 bg-[#ff6b01] text-white tracking-widest px-3 py-1 rounded hover:bg-black"
              >
                Edit
              </Link>
              <div className="flex items-center justify-center rounded-full text-xl text-center mr-4  ">
                {userInfo?.image ? (
                  <img
                    src={userInfo.image}
                    width={64}
                    height={64}
                    className="h-20 w-20 rounded-full p-2 text-center bg-gray-50 "
                    alt={userInfo?.name[0]}
                  />
                ) : (
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 text-xl font-bold text-center mr-4">
                    {userInfo?.name?.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h5 className="leading-none mb-2 text-lg font-semibold text-gray-700">
                  {userInfo?.name}
                </h5>
                <p className="text-base text-gray-400">{userInfo?.email}</p>
                <p className="text-base text-gray-400">{userInfo?.phone}</p>
              </div>
            </div>
          </div>

          {/* Shipping Address Card */}
          {hasShippingAddress ? (
            <div className="flex h-full relative">
              <div className="flex items-center border border-gray-200 w-full rounded-lg p-4 relative">
                <Link
                  href={`/user/add-shipping-address?id=${userInfo?.id}`}
                  className="absolute top-2 right-2  bg-[#ff6b01] text-white tracking-widest px-3 py-1 rounded hover:bg-black"
                >
                  Edit
                </Link>
                <div className="flex-grow">
                  {!loading && error ? (
                    <Error errorName={error} />
                  ) : (
                    <>
                      <h5 className="leading-none mb-2 text-lg font-semibold text-gray-700">
                        {data?.shippingAddress?.name}{" "}
                        <span className="text-xs text-gray-500">
                          (Default Shipping Address)
                        </span>
                      </h5>
                      <p className="text-base text-gray-500">
                        <span className="text-base font-semibold text-gray-500">
                          Contact:
                        </span>{" "}
                        {data?.shippingAddress?.contact}{" "}
                      </p>
                      <p className="text-base text-gray-500">
                        <span className="text-base font-semibold text-gray-500">
                          Address:
                        </span>{" "}
                        {data?.shippingAddress?.address}{" "}
                      </p>
                      <p className="text-base text-gray-500">
                        {data?.shippingAddress?.country},{" "}
                        {data?.shippingAddress?.city},{" "}
                        {data?.shippingAddress?.area} -
                        {data?.shippingAddress?.zipCode}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full relative">
              <Link
                href="/user/add-shipping-address"
                className="flex items-center bg-[#ff6b01] text-white hover:bg-cyan-700 w-full rounded-lg py-3 px-4 text-center relative"
              >
                <FiPlus className="text-xl font-bold text-center mr-4" /> Add
                Default Shipping Address
              </Link>
            </div>
          )}
        </div>
      </div>
    </Dashboard>
  );
};

export default MyAccount;
