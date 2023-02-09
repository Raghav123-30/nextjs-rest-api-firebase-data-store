import { useEffect } from "react"
import store from '../store'
import { useDispatch } from "react-redux"
const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const handleLogout = () => {
            
            dispatch({
                type : 'LOGOUT'
            })

        }
        console.log("logging out ")
        handleLogout()
    },[])
    return(
        <div>

        </div>
    )
}

export default Logout