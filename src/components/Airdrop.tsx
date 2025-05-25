"use client";
import { useRef, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import Alert, { AlertType } from "./Alert";

const API_URL = `/api/airdrop`;

export default function Airdrop() {
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
        return;
      }
      const pKey: PublicKey = new PublicKey(inputRef.current.value);
      if (!pKey) {
        throw new Error("Invalid PublicKey");
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
      CustomAlert(`${error}`, "error");
      console.log([process.env.NODE_ENV, API_URL]);
    } finally {
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
      setLoad(false);
    }
  };

  return (
    <div className="flex gap-5 z-100">
      {alertMessage && (
        <Alert
          key={alertKey}
          type={alertType}
          message={alertMessage}
          onClose={() => setAlertMessage("")}
        />
      )}
      <input
        type="text"
        name="address"
        id="address"
        ref={inputRef}
        placeholder="Sol Address"
        className="min-w-[300px] px-5 h-10 border-[0.5px] border-amber-50 rounded-xl"
      />
      <button
        className="px-4 py-2 rounded-xl bg-blue-300 text-emerald-950 font-bold hover:bg-blue-400 cursor-pointer"
        type="button"
        onClick={handleSubmitButton}
      >
        {load ? "loading" : "Airdrop"}
      </button>
    </div>
  );
}
