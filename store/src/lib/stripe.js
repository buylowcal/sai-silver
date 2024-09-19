import SettingServices from "@services/SettingServices";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;


const getStripe = async (storeSetting) => {
  if (!stripePromise) {
    const stripeKey = storeSetting?.stripe_key;
    if (stripeKey) {
      stripePromise = loadStripe(stripeKey);
    } else {
      console.warn('Stripe key is not available. Stripe functionality will be disabled.');
      // Return a dummy promise or null, depending on how you want to handle this case
      return Promise.resolve(null);
    }
  }
  return stripePromise;
};

export default getStripe;
