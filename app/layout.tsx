import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ironclad — Sender-constrained session tokens",
  description:
    "Ironclad is a DPoP + DBSC + mTLS middleware and SDK layer that keeps session tokens bound to the sender — not the bearer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
