import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TrackDetail } from '../interfaces'
import { Container, Row, Image, Col } from 'react-bootstrap'



const DetailsPage =() => {

const { id }=useParams()

const [trackDetails, setTrackDetails] = useState<TrackDetail | null>(null)


  useEffect(() => {
    fetchTracks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



const fetchTracks = async () => {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/deezer/track/' + id
    )

    if (!response.ok) return

    const data = await response.json()
    setTrackDetails(data)
  }


    return trackDetails ? 
    (
 
        <Container>
        <Row>
          <Col xs={10}>
            <Image fluid src={trackDetails.album.cover_big} />
            <h4>{trackDetails.title}</h4>
            <h6>{trackDetails.artist.name}</h6>
          </Col>
        </Row>
      </Container>
    ) : null
}

export default DetailsPage