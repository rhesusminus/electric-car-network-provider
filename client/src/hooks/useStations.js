import axios from 'axios'
import { useQuery } from 'react-query'

export function useStations() {
  return useQuery('stations', async () => {
    const { data } = await axios.get('http://localhost:4000/api/stations')
    return data
  })
}
