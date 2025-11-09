import React, { useState } from "react";

const OfferBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-linear-to-r from-indigo-900 to-purple-800 text-white text-center py-3 flex items-center justify-center gap-2 relative">
      <p className="text-sm sm:text-base">
         Diwali sale is live! Use coupon code{" "}
        <span className="bg-black/40 text-white px-2 py-1 rounded-md font-semibold">
          DIWALI30
        </span>{" "}
        and get up to <span className="font-semibold">30% off</span> 
      </p>

      {/* Close Button */}
      <button
        className="absolute right-4 text-xl hover:scale-110 transition-transform"
        onClick={() => setVisible(false)}
      >
        ×
      </button>
    </div>
  );
};

export default OfferBanner;
