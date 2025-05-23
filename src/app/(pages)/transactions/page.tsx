"use client";

import { formatTimeAgo } from "@/utils/helper";
import { useEffect, useState } from "react";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BACKEND_URL
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
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      console.log(data);
      setTransactions(data);

      if (response.status === 200) {
        setLoad(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (load) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        Loading
      </div>
    );
  } else
    return (
      <div className="w-full h-screen px-10 py-10">
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
              {transactions.map((transaction) => {
                return (
                  <tr key={transaction.Id} className="text-black">
                    <td className="px-4 py-2">{transaction.PublicKey}</td>
                    <td className="px-4 py-2">{transaction.Signature}</td>
                    {transaction.Status ? (
                      <td className="px-4 py-2 text-green-600 font-semibold">
                        SUCCESS
                      </td>
                    ) : (
                      <td className="px-4 py-2 text-red-600 font-semibold">
                        FAIL
                      </td>
                    )}
                    <td className="px-4 py-2">
                      {formatTimeAgo(transaction.CreatedAt)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
}
