"use client";
import { useRef, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import Alert, { AlertType } from "./Alert";

const BASE_URL =
  process.env.NODE_ENV == "production"
    ? "https://faucet-delta-eight.vercel.app/api/airdrop"
    : "http://localhost:3000";

const API_URL = `${BASE_URL}/api/airdrop`;

export default function Airdrop() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [alertType, setAlertType] = useState<AlertType>("info");
  const [alertKey, setAlertKey] = useState<number>(0);

  function CustomAlert(message: string, type: AlertType = "info") {
    setAlertMessage(message);
    setAlertType(type);
    setAlertKey((prev) => prev + 1);
  }
  const handleSubmitButton = async () => {
    try {
      if (!inputRef.current || inputRef.current.value === "") {
        return;
      }
      const pKey: PublicKey = new PublicKey(inputRef.current.value);
      if (!pKey) {
        throw new Error("Invalid Input");
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
      console.log(`${error}`);
      CustomAlert(`${error}`, "error");
      console.log([process.env.NODE_ENV, API_URL]);
    } finally {
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className="flex gap-5">
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
        Airdrop
      </button>
    </div>
  );
}
