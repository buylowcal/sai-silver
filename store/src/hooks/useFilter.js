import { useRouter } from "next/router";
import { useMemo, useState } from "react";

const useFilter = (data) => {
  const [pending, setPending] = useState([]);
  const [processing, setProcessing] = useState([]);
  const [delivered, setDelivered] = useState([]);
  const [sortedField, setSortedField] = useState("");
  const router = useRouter();

  // console.log("sortedfield", sortedField, data);

  const productData = useMemo(() => {
    let services = data;
    console.log("datalllll",data)
    //filter user order
    if (router.pathname === "/user/dashboard") {
      const orderPending = services?.filter(
        (statusP) => statusP.status === "Pending"
      );
      setPending(orderPending);

      const orderProcessing = services?.filter(
        (statusO) => statusO.status === "Processing"
      );
      setProcessing(orderProcessing);

      const orderDelivered = services?.filter(
        (statusD) => statusD.status === "Delivered"
      );
      setDelivered(orderDelivered);
    }

    //service sorting with low and high price
    if (sortedField === "Low") {
      services = services?.sort(
        (a, b) => a.prices.price < b.prices.price && -1
      );
    }
    if (sortedField === "High") {
      services = services?.sort(
        (a, b) => a.prices.price > b.prices.price && -1
      );
    }
    if (sortedField === "AlphabeticalAZ") {
      services = services?.sort((a, b) => 
        (a.title?.en && b.title?.en ? a.title.en.localeCompare(b.title.en) : 0)
      );
    }
    if (sortedField === "AlphabeticalZA") {
      services = services?.sort((a, b) => 
        (a.title?.en && b.title?.en ? b.title.en.localeCompare(a.title.en) : 0)
      );
    }
    
    return services;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedField, data]);

  return {
    productData,
    pending,
    processing,
    delivered,
    setSortedField,
  };
};

export default useFilter;
