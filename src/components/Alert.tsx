"use client";
import React from "react";

export type AlertType = "success" | "error" | "warning" | "info";

export type AlertProps = {
  type?: AlertType;
  message: string;
  onClose?: () => void;
};

export const alertColors = {
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
};

export default function Alert({ type = "info", message }: AlertProps) {
  const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (show == true)
    return (
      <div
        className={`absolute z-50 bottom-5 right-5 p-4 border rounded-md flex justify-between items-center shadow-sm ${alertColors[type]} `}
      >
        <span>{message}</span>
      </div>
    );
}
