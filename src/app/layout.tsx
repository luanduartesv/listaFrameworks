
import "./globals.css";
import {Header} from "./components/header/index";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialised`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
