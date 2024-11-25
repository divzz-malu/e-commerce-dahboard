import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/mainNavigation/MainNavigation";
import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import RightDrawer from "../components/drawer/RightDrawer";

function RootLayout() {
  const [isDrawer, setDrawer] = useState(false);
    const [isExpanded, setExpanded] = useState(false);
    const toggleSidebar = () => {
        console.log("clicked", isExpanded);
        setExpanded((prevState) => (prevState = !prevState));
    };
    const toggleDrawer = () => {
      console.log("clicked", isDrawer);
      setExpanded((prevState) => (prevState = !prevState));
  };
    const activeMenu = true;
    // const navigation = useNavigation();

    return (
        <>
            {/* <MainNavigation toggleSidebar={toggleSidebar}/>
      {activeMenu?(<div className='w-52 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
        Sidebar
      </div>):<div className="w-0 dark:bg-secondary-dark-bg">Sidebar</div>}
      <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu?'md:md-ml-52':'flex-2'}`}>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
Navbar
        </div>
      </div> */}

            <div className="">
                <Sidebar isExpanded={isExpanded} />
                <div className={isExpanded?'md:ml-[70px]':'md:ml-[212px] md:mr-[280px]'}>
                    <MainNavigation toggleSidebar={toggleSidebar} toggleDrawer={toggleDrawer}/>
                    <main className="">
                        <Outlet />
                    </main>
                </div>
                <RightDrawer />
            </div>
        </>
    );
}

export default RootLayout;
