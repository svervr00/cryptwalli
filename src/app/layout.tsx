// "use client";
// import "./globals.css";


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <main>{children}</main>
//       </body>
//     </html>
//   );
// }



import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>CryptWalli - Crypto Wallet & Mining</title>
        <meta name="description" content="Manage wallets, track coins, and mine crypto with CryptWalli." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="cryptowallet, crypto mining, blockchain, cryptocurrency" />
        <meta name="author" content="CryptWalli Team" />
        <link rel="icon" href="/public/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
