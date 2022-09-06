import React, { Component, useEffect } from "react";

function Vercel() {
  useEffect(() => {
    window.location.href = "https://vercel.com/";
  }, []);

  return (
    <div>
      <p>You are being redirected to vercel.com</p>
    </div>
  );
}

export default Vercel;