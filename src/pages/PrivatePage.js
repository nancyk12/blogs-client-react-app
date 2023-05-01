import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import { verifyUser } from "../AuthUtils";
import { useAuth } from "../Auth/AuthContext";


export default function PrivatePage() {
    cosnt[isVerified, setIsVerified] = useState(false)
    const { user } = useAuth();
    useEffec(() => {
        const responseFetch = async() => {
            const verifiedUser = await verifyUser(user)
            if(verifiedUser)
        }
    }, [user]);

  return(
    <div>
      <Outlet />

    </div>
   );
}