import PublicRoutes from "./publicRoutes"
import PrivateRoutes from "./privateRoutes"
import useAuth from "../hooks/useAuth"


const RoutesApp = () => {
    const { user } = useAuth()

    if (user?.email) {
      return <PrivateRoutes/>,
      <PublicRoutes/>
    }
    return (
        <PublicRoutes/>
    )
}

export default RoutesApp;