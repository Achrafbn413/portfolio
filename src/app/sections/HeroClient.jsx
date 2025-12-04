"use client";

import dynamic from "next/dynamic";

export default dynamic(() => import("./Hero"), {
  ssr: false,   // 🚀 désactive le rendu côté serveur pour Hero
});
