import {useState, useEffect} from "react"
import { PageUsersMain } from "./styles"
import Map from "../../components/Map"
import { useParams } from "react-router-dom"
import { storesDetails } from "../../constants"

const StoresMap = () => {

  const { id } = useParams()
  const [ storage, setStorage ] = useState()
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      setStorage(storesDetails)
      setLoading(false)
    }
    load()
  }, [id])


  if(loading || !storage) {
    return (
      <p>Carregando...</p>
    )
  }

  return (
    <>
      <PageUsersMain>
        <p>Id: {storage[0].id}</p>
        <p>Loja: {storage[0].name}</p>
        <p>Latitude: {storage[0].lat}</p>
        <p>Longitude: {storage[0].lon}</p>
      </PageUsersMain>
      <Map position={[storage[0].lat, storage[0].lon]} address={storage[0].address}/>
    </>
  )
}

	// {storage[0].map(({ lat, lon, address }) => {
	// 			return <Map position={(lat, lon)} address={address} />;
	// 		})}


export default StoresMap;
