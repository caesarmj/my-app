import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
    <div className="px-20 py-4">
        <Header/>
        <Outlet/>
    </div>
    );
}