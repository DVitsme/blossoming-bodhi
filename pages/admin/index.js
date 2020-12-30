import React from "react";
import SidebarContainer from "@/components/sidebar/Index.component";
import xw from "xwind";

const AdminPanel = () => {
  return (
    <div>
      <SidebarContainer />
      <div css={xw`fixed right-0 w-5/6 overflow-hidden`}>
        <div css={xw`m-16`}>
          <h1>Im the index</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
