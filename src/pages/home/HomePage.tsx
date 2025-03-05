import { SideBar } from "../../layouts/SideBar.tsx";
import { Header } from "../../layouts/Header.tsx";
import { Outlet } from "react-router-dom";

/**
 * HomePage component that serves as the main landing page of the application.
 * It displays the sidebar, header, and the dynamic content using Outlet.
 */
export const HomePage = () => {
    return (
        <div className="font-montserrat relative flex bg-neutral-350 h-screen">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <div className="w-full flex flex-col">
                <Header />

                {/* Dynamic Page Content */}
                <section className="overflow-y-auto flex-grow p-4 bg-secondary-background">
                    <Outlet />
                </section>
            </div>
        </div>
    );
};
