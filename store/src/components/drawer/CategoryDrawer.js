import React, { useContext } from "react";
import dynamic from "next/dynamic";
import Drawer from "rc-drawer";

import Category from "@components/category/Category";
import { SidebarContext } from "@context/SidebarContext";

const CategoryDrawer = () => {
  const { categoryDrawerOpen, closeCategoryDrawer } =
    useContext(SidebarContext);

  return (
    <Drawer
      open={categoryDrawerOpen}
      onClose={closeCategoryDrawer}
      parent={null}
      level={null}
      placement={"left"}
      // className="bg-pink-300"
    >
      <Category />
    </Drawer>
  );
};
export default dynamic(() => Promise.resolve(CategoryDrawer), { ssr: false });
