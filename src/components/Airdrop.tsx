// "use client";
// import { useRef, useState } from "react";
// import { PublicKey } from "@solana/web3.js";

// const API_URL = `/api/airdrop`;

// export default function Airdrop() {
//   const inputRef = useRef<HTMLInputElement>(null);
//   const [alertMessage, setAlertMessage] = useState<string>("");
//   const [alertType, setAlertType] = useState<AlertType>("info");
//   const [alertKey, setAlertKey] = useState<number>(0);
//   const [load, setLoad] = useState<boolean>(false);

//   function CustomAlert(message: string, type: AlertType = "info") {
//     setAlertMessage(message);
//     setAlertType(type);
//     setAlertKey((prev) => prev + 1);
//   }
//   const handleSubmitButton = async () => {
//     try {
//       setLoad(true);
//       if (!inputRef.current || inputRef.current.value === "") {
//         return;
//       }
//       const pKey: PublicKey = new PublicKey(inputRef.current.value);
//       if (!pKey) {
//         throw new Error("Invalid PublicKey");
//       }

//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ publicKey: pKey.toBase58() }),
//       });

//       if (response.status === 200) {
//         CustomAlert(`Airdropped successfully ✅`, "success");
//         return;
//       }

//       throw new Error("Failed to fetch");
//     } catch (error) {
//       CustomAlert(`${error}`, "error");
//       console.log([process.env.NODE_ENV, API_URL]);
//     } finally {
//       if (inputRef && inputRef.current) {
//         inputRef.current.value = "";
//       }
//       setLoad(false);
//     }
//   };

//   return (
//     <div className="flex gap-5 z-100 mt-10">
//       {alertMessage && (
//         <Alert
//           key={alertKey}
//           type={alertType}
//           message={alertMessage}
//           onClose={() => setAlertMessage("")}
//         />
//       )}
//       <input
//         type="text"
//         name="address"
//         id="address"
//         ref={inputRef}
//         placeholder="Sol Address"
//         className="min-w-[300px] px-5 h-10 border-[0.5px] border-amber-50 rounded-xl"
//       />
//       <button
//         className="px-4 py-2 rounded-xl bg-blue-300 text-emerald-950 font-bold hover:bg-blue-400 cursor-pointer"
//         type="button"
//         onClick={handleSubmitButton}
//       >
//         {load ? "loading" : "Airdrop"}
//       </button>
//     </div>
//   );
// }
"use client";

import React, { useRef, useState } from "react";
import { Wallet, Zap, ArrowRight } from "lucide-react";
import Alert, { AlertType } from "./Alert";
import { PublicKey } from "@solana/web3.js";

const API_URL = `/api/airdrop`;
const AirdropBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [alertType, setAlertType] = useState<AlertType>("info");
  const [alertKey, setAlertKey] = useState<number>(0);
  const [load, setLoad] = useState<boolean>(false);

  function CustomAlert(message: string, type: AlertType = "info") {
    setAlertMessage(message);
    setAlertType(type);
    setAlertKey((prev) => prev + 1);
  }
  const handleSubmitButton = async () => {
    try {
      setLoad(true);
      if (!inputRef.current || inputRef.current.value === "") {
        CustomAlert(`rovide a valid public key`);
        return;
      }
      const pKey: PublicKey = new PublicKey(inputRef.current.value);
      if (!pKey) {
        CustomAlert(`Invalid Public Key`);
        return;
      }

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ publicKey: pKey.toBase58() }),
      });

      if (response.status === 200) {
        CustomAlert(`Airdropped successfully ✅`, "success");
        return;
      }

      throw new Error("Failed to fetch");
    } catch (error) {
      CustomAlert(`${error}`);
    } finally {
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
      setLoad(false);
    }
  };
  return (
    <div className="w-full max-w-md mx-auto my-10 transition-transform duration-300 hover:scale-105">
      {alertMessage && (
        <Alert
          key={alertKey}
          type={alertType}
          message={alertMessage}
          onClose={() => setAlertMessage("")}
        />
      )}
      {/* Main Card */}
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

        <div className="relative bg-gradient-to-br from-purple-900/90 via-purple-800/80 to-blue-900/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
          {/* Wallet Icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-purple-500/20 rounded-full border border-purple-400/30">
              <Wallet className="w-8 h-8 text-purple-300" />
            </div>
          </div>

          <div className="space-y-6">
            {/* Wallet Address Input */}
            <div>
              <label className="block text-lg font-medium text-white mb-3">
                Wallet Address
              </label>
              <input
                type="text"
                ref={inputRef}
                placeholder="Enter your Solana wallet address..."
                className="w-full px-4 py-4 bg-black/30 border border-purple-400/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-200 text-base"
              />
            </div>

            {/* Request Button */}
            <button
              onClick={handleSubmitButton}
              disabled={load}
              className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              <div className="flex items-center justify-center space-x-3">
                {load ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white"></div>
                    <span className="text-lg">Processing...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    <span className="text-lg">Request SOL</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirdropBox;
