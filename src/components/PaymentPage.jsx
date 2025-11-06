import React from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineVerified } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbRefresh } from "react-icons/tb";

import Visa from "../img/visa.png";
import Rupay from "../img/rupay.png";
import Pci from "../img/pci.png";
import Razorpay from "../img/razorpay.png";
import Mastercard from "../img/mastercard.png";
import Phonepay from "../img/phonepay.png";
import Gpay from "../img/gpay.png";
import Paytm from "../img/paytm.png";

const PaymentPage = () => {
  const location = useLocation();
  const { product, quantity } = location.state || {};

  if (!product) return <p className="pt-20 text-center">No product selected!</p>;

  const { price, images } = product;
  const amountPayable = price * quantity;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
          Payments
        </h2>

        <p className="text-sm font-medium text-gray-500 mb-4 text-center">
          PAY ONLINE (UPI Only)
        </p>

        {/* Payment Options */}
        <div className="flex flex-col items-center gap-3">
          <div className="border p-3 rounded-xl hover:border-blue-500 cursor-pointer w-full max-w-xs flex items-center justify-center gap-3">
            <img src={Phonepay} alt="PhonePe" className="h-6" />
            <span className="font-medium text-gray-700">PhonePe</span>
          </div>

          <div className="border p-3 rounded-xl hover:border-blue-500 cursor-pointer w-full max-w-xs flex items-center justify-center gap-3">
            <img src={Paytm} alt="Paytm" className="h-6" />
            <span className="font-medium text-gray-700">Paytm</span>
          </div>

          <div className="border p-3 rounded-xl hover:border-blue-500 cursor-pointer w-full max-w-xs flex items-center justify-center gap-3">
            <img src={Gpay} alt="GPay" className="h-6" />
            <span className="font-medium text-gray-700">BHIM / GPay</span>
          </div>

          <div className="border p-3 rounded-xl hover:border-blue-500 cursor-pointer w-full max-w-xs flex items-center justify-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/942/942799.png"
              alt="QR"
              className="h-5 w-5"
            />
            <span className="font-medium text-gray-700">Other UPI App (Scan QR)</span>
          </div>
        </div>

        {/* PRICE DETAILS */}
        <div className="mt-6 border-t pt-4">
          <p className="flex justify-between text-gray-700 mb-1">
            <span>Price ({quantity} item{quantity > 1 ? "s" : ""})</span>
            <span>₹{price * quantity}</span>
          </p>
          <p className="flex justify-between text-gray-700 mb-1">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free Delivery</span>
          </p>
          <hr className="my-2" />
          <p className="flex justify-between font-semibold text-gray-800">
            <span>Amount Payable</span>
            <span>₹{amountPayable}</span>
          </p>
          <button className="bg-yellow-500 text-white font-semibold mt-4 w-full py-2 rounded-lg hover:bg-yellow-600">
            Pay
          </button>
        </div>
      </div>

      {/* TRUST SECTION */}
      <div className="bg-white shadow-md rounded-2xl mt-10 p-6 w-full max-w-4xl">
        <div className="flex justify-around text-center flex-wrap gap-6 mb-6">
          <div>
            <MdOutlineVerified className="mx-auto text-blue-600 text-3xl" />
            <p className="font-semibold text-gray-800">Authentic Products</p>
          </div>
          <div>
            <RiSecurePaymentLine className="mx-auto text-blue-600 text-3xl" />
            <p className="font-semibold text-gray-800">Secure Payments</p>
          </div>
          <div>
            <TbRefresh className="mx-auto text-blue-600 text-3xl" />
            <p className="font-semibold text-gray-800">Easy Returns</p>
          </div>
        </div>

        {/* Payment Logos */}
        <div className="flex justify-center items-center gap-6 mt-4 flex-wrap">
          <img src={Visa} alt="Visa" className="h-8 w-auto object-contain" />
          <img src={Mastercard} alt="Mastercard" className="h-8 w-auto object-contain" />
          <img src={Rupay} alt="RuPay" className="h-8 w-auto object-contain" />
          <img src={Pci} alt="PCI DSS" className="h-8 w-auto object-contain" />
          <img src={Razorpay} alt="Razorpay" className="h-8 w-auto object-contain" />
          <img src={Phonepay} alt="PhonePe" className="h-8 w-auto object-contain" />
          <img src={Gpay} alt="GPay" className="h-8 w-auto object-contain" />
          <img src={Paytm} alt="Paytm" className="h-8 w-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
