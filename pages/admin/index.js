import React from "react";
import SidebarContainer from "@/components/sidebar/Index.component";
import xw from "xwind";

const AdminPanel = () => {
  return (
    <div>
      <SidebarContainer />
      <div css={xw`fixed right-0 w-6/7 bg-gray-200 h-screen overflow-hidden`}>
        <header css={xw`bg-white shadow`}>
          <div css={xw`max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8`}>
            <h1 css={xw`text-3xl font-bold leading-tight text-gray-900`}>
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div css={xw`max-w-7xl mx-auto py-6 sm:px-6 lg:px-8`}>
            {/* <!-- Replace with your content --> */}
            <div css={xw`px-4 py-6 sm:px-0`}>
              <div css={xw`rounded-lg h-96  bg-white`}></div>
            </div>
            {/* <!-- /End replace -->  */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
