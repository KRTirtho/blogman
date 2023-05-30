import { FC, PropsWithChildren } from "react";
import Sidebar from "./__comp/sidebar";

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="sm:max-w-5xl w-full mx-auto flex flex-col sm:flex-row gap-4">
      <Sidebar />
      <aside className="w-full">{children}</aside>
    </div>
  );
};

export default ProfileLayout;
