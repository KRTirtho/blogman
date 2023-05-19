// import SupabaseProvider from "@/app/__comp/supabase-provider";
import "./globals.css";
import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";
import { supabaseRSC } from "@/collection/supabase";
import SupabaseProvider from "./__comp/supabase-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Blogman",
  description: "The same old blogging app with a twist",
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  const supabase = supabaseRSC();
  const session = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={poppins.className}>
        <SupabaseProvider serverSession={session.data.session}>
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
