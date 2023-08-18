import { PublicRoutes } from "./publicRoutes"
import { PrivateRoutes } from "./privateRoutes"
import { useAuth } from "../hooks/useAuth"


const RoutesApp = () => {
    const { user } = useAuth()

    if (user?.email) {
      return <PrivateRoutes/>
    }
    return (
        <PublicRoutes/>
    )
}

export default RoutesApp;