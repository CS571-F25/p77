import { Outlet } from "react-router";
import Header from "../components/Header"

//this component is a shared wrapper so the header, nav bar and search bar don't need to be manually copied into every page
export default function MainLayout() {
    return <div className="app">
        <Header />
        <main style={{paddingTop:"64px"}}>
            <Outlet />
        </main>
    </div>
}