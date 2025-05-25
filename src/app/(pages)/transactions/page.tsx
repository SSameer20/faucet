"use client";

import { useEffect, useState } from "react";
import { formatTimeAgo } from "@/utils/helper";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BACKEND_URL || "https://faucet.sameer.digital"
    : "http://localhost:3000";

const API_URL = `${BASE_URL}/api/transactions`;

export type Transaction = {
  Id: string;
  PublicKey: string;
  Signature: string;
  Status: boolean;
  CreatedAt: Date;
};

export default function Page() {
  const [load, setLoad] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      console.log(`serving at ${API_URL}`);
      const response = await fetch(API_URL);
      const data = await response.json();

      const parsedData = data.map((tx: Transaction) => ({
        ...tx,
        CreatedAt: new Date(tx.CreatedAt),
      }));

      setTransactions(parsedData);

      if (response.status === 200) {
        setLoad(false);
      } else {
        setError("Failed to load transactions.");
      }
    } catch (err) {
      console.log(err);
      setError("Failed to fetch transactions.");
    }
  }

  if (load) {
    return (
      <div className="h-screen w-screen flex flex-col justify-center items-center text-gray-600">
        <svg
          className="animate-spin h-8 w-8 text-gray-500 mb-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 100 16v-4l-3.5 3.5L12 24v-4a8 8 0 01-8-8z"
          />
        </svg>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen px-6 md:px-10 py-10 overflow-auto">
      {error && <div className="text-red-600 text-center mb-4">{error}</div>}

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-gray-100 text-gray-800 uppercase">
            <tr>
              <th className="px-4 py-2">PublicKey</th>
              <th className="px-4 py-2">Signature</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white overflow-auto">
            {transactions.map((transaction) => (
              <tr key={transaction.Id} className="text-black">
                <td className="px-4 py-2 truncate max-w-[200px]">
                  {transaction.PublicKey.slice(0, 8)}...
                </td>
                <td className="px-4 py-2 truncate max-w-[200px]">
                  {transaction.Signature.slice(0, 8)}...
                </td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    transaction.Status ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {transaction.Status ? "SUCCESS" : "FAIL"}
                </td>
                <td className="px-4 py-2">
                  {formatTimeAgo(transaction.CreatedAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
