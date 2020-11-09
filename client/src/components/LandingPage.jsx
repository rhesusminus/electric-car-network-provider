import React from 'react'
import { Link } from '@reach/router'
import { useStations } from '../hooks/useStations'
import { Station } from './'

export const LandingPage = () => {
  const { isLoading, isError, data } = useStations()

  if (isLoading) {
    return <div>Loading stations...</div>
  }

  if (isError) {
    return <div>Error :-(</div>
  }

  return (
    <div>
      {data.map((station) => (
        <Link to={`/station/${station.id}`} key={station.id}>
          <Station station={station} />
        </Link>
      ))}
    </div>
  )
}
