import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

export const getShipments = async () => {
  const shipmentCollectionRef = collection(db, 'shipment')
  const response = getDocs(shipmentCollectionRef)
    .then(res => {
      return res.docs[0].data().ships
    })
    .catch(err => {
      console.log(err)
    })
  return response
}
