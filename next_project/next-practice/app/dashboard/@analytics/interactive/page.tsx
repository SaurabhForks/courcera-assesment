import Link from "next/link";
import React from "react";

export default function InteractivePage() {
  return (
    <div>
      Interactive Page
      <p>This is the interactive page content.</p>
      <Link href="/dashboard">Back to Normal</Link>
    </div>
  );
}
