import "./globals.css";
import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";
import { supabaseRSC } from "@/collection/supabase";
import SupabaseProvider from "./__comp/supabase-provider";
import GlobalNavigation from "./__comp/navigation";
import Progressbar from "./__comp/progress-bar";
import AppGuard from "./__comp/guard";

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
      <body>
        <SupabaseProvider serverSession={session.data.session}>
          <AppGuard>
            <GlobalNavigation />
            <main className="p-2 md:px-6 md:py-4">{children}</main>
          </AppGuard>
        </SupabaseProvider>
        <Progressbar />
      </body>
    </html>
  );
};

export default RootLayout;
