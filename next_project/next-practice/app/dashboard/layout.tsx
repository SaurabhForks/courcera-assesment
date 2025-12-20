import React from "react";

export default function DashboardLayout({
  children,
  notification,
  analytics,
  users,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  analytics: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>{children}</h1>
      </header>
      <main>{users}</main>
      <aside>{notification}</aside>
      <section>{analytics}</section>
    </div>
  );
}
