
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import { State } from "@/State";
import store from "@/store";
import { useSelector } from "react-redux";
const Dashboard = () => {
    const isAuthenticated = useSelector((state: State) => state.isAuthenticated);
    return(
        <div>
            {isAuthenticated  && <Navbar/>}
            {!isAuthenticated && <LandingPage/>}
        </div>
    )
}


export default Dashboard;