import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { IoLockOpenOutline } from "react-icons/io5";
import {
  FiCheck,
  FiFileText,
  FiGrid,
  FiHome,
  FiList,
  FiRefreshCw,
  FiSettings,
  FiShoppingCart,
  FiTruck,
  FiUser,
} from "react-icons/fi";
import { signOut } from "next-auth/react";

//internal import
import Layout from "@layout/Layout";
import Card from "@components/order-card/Card";
import OrderServices from "@services/OrderServices";
import RecentOrder from "@pages/user/recent-order";
import { SidebarContext } from "@context/SidebarContext";
import Loading from "@components/preloader/Loading";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import NavBarTop from "@layout/navbar/NavBarTop";

const Dashboard = ({ title, description, children }) => {
  const router = useRouter();
  const { isLoading, setIsLoading, currentPage } = useContext(SidebarContext);

  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Track if the component is mounted

    const handleGetCustomerOrders = async () => {
      setLoading(true);
      try {
        const res = await OrderServices.getOrderCustomer({
          page: currentPage,
          limit: 10,
        });
        if (isMounted) {
          setData(res);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setLoading(false);
          setError(error.message);
        }
      }
    };

    handleGetCustomerOrders();

    return () => {
      isMounted = false; // Clean up the effect by setting isMounted to false
    };
  }, [currentPage]);

  const handleLogOut = () => {
    signOut();
    Cookies.remove("couponInfo");
    router.push("/");
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const userSidebar = [
    {
      // title: showingTranslateValue(
      //   storeCustomizationSetting?.dashboard?.dashboard_title
      // ),
      title: "Dashboard",
      href: "/user/dashboard",
      icon: FiGrid,
    },

    {
      // title: showingTranslateValue(
      //   storeCustomizationSetting?.dashboard?.my_order
      // ),
      title: "My Orders",
      href: "/user/my-orders",
      icon: FiList,
    },
    {
      title: "My Account",
      href: "/user/my-account",
      icon: FiUser,
    },

    {
      // title: showingTranslateValue(
      //   storeCustomizationSetting?.dashboard?.update_profile
      // ),
      title: "Update Profile",
      href: "/user/update-profile",
      icon: FiSettings,
    },
    {
      // title: showingTranslateValue(
      //   storeCustomizationSetting?.dashboard?.change_password
      // ),
      title: "Change Password",
      href: "/user/change-password",
      icon: FiFileText,
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Layout
          title={title ? title : "Dashboard"}
          description={description ? description : "This is User Dashboard"}
        >
          {/* <div className="mb-6">
          <NavBarTop />
          </div> */}
          <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 mt-14">
            <div className="py-10 lg:py-12 flex flex-col lg:flex-row w-full">
              <div className="flex-shrink-0 w-full lg:w-80 mr-7 lg:mr-10  xl:mr-10 ">
                <div className="bg-white p-4 sm:p-5 lg:p-8 rounded-md sticky top-32">
                  {userSidebar?.map((item) => (
                    <span
                      key={item.title}
                      className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-100 w-full hover:text-black hover:text-black"
                    >
                      <item.icon
                        className="flex-shrink-0 h-5 w-5"
                        aria-hidden="true"
                      />
                      <Link
                        href={item.href}
                        className="inline-flex items-center justify-between ml-2 text-[19px] font-medium w-full hover:text-black hover:text-black"
                      >
                        {item.title}
                      </Link>
                    </span>
                  ))}
                  <span className="p-2 flex font-serif items-center rounded-md hover:bg-gray-100 w-full hover:text-black hover:text-black">
                    {/* <span className="mr-2">
                      <IoLockOpenOutline />
                    </span>{" "} */}
                    <button
                      onClick={handleLogOut}
                      className="inline-flex items-center justify-between text-[19px] font-medium w-full hover:text-black hover:text-black"
                    >
                      {showingTranslateValue(
                        storeCustomizationSetting?.navbar?.logout
                      )}
                    </button>
                  </span>
                </div>
              </div>
              <div className="w-full bg-white mt-4 lg:mt-0 p-4 sm:p-5 lg:p-8 rounded-md overflow-hidden">
                {!children && (
                  <div className="overflow-hidden">
                    <h2 className="text-xl font-serif font-semibold mb-5">
                      {showingTranslateValue(
                        storeCustomizationSetting?.dashboard?.dashboard_title
                      )}
                    </h2>
                    <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4">
                      <Card
                        // title={showingTranslateValue(
                        //   storeCustomizationSetting?.dashboard?.total_order
                        // )}
                        title="Dashboard"
                        Icon={FiShoppingCart}
                        quantity={data?.totalDoc}
                        className="text-red-600  bg-red-200"
                      />
                      <Card
                        // title={showingTranslateValue(
                        //   storeCustomizationSetting?.dashboard?.pending_order
                        // )}
                        title="Pending Orders"
                        Icon={FiRefreshCw}
                        quantity={data?.pending}
                        className="text-orange-600 bg-orange-200"
                      />
                      <Card
                        // title={showingTranslateValue(
                        //   storeCustomizationSetting?.dashboard?.processing_order
                        // )}
                        title="Processing Orders"
                        Icon={FiTruck}
                        quantity={data?.processing}
                        className="text-indigo-600 bg-indigo-200"
                      />
                      <Card
                        // title={showingTranslateValue(
                        //   storeCustomizationSetting?.dashboard?.complete_order
                        // )}
                        title="Delivered Orders"
                        Icon={FiCheck}
                        quantity={data?.delivered}
                        className="text-emerald-600 bg-emerald-200"
                      />
                    </div>
                    <RecentOrder data={data} loading={loading} error={error} />
                  </div>
                )}
                {children}
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });
