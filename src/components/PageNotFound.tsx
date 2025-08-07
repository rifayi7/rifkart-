import { Frown } from "lucide-react";
import React from "react";

export default function PageNotFound() {
  return (
    <div className="w-full min-h-screen  flex justify-center items-center text-5xl gap-10">
      <span>
        <Frown size={50} />
      </span>
      <h1>Page Not Found..!</h1>
    </div>
  );
}
