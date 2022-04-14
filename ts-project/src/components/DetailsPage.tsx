import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TrackDetail } from "../interfaces";
import { Container, Row, Image, Col } from "react-bootstrap";
import "./details.css";

const DetailsPage = () => {
  const { id } = useParams();

  const [trackDetails, setTrackDetails] = useState<TrackDetail | null>(null);

  useEffect(() => {
    fetchTracks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTracks = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/track/" + id
    );

    if (response.ok) {
      const data = await response.json();
      setTrackDetails(data);
    }
  };

  return trackDetails ? (
    <>
      <Container className="my-5 d-flex justify-content-center">
        <Row>
          <Col xs={10} style={{ textAlign: "center", color: "white" }}>
            <h1>Track Details</h1>
            <Image fluid src={trackDetails.album.cover_big} className="mt-5" />
            <h4>{trackDetails.title}</h4>
            <h6>{trackDetails.artist.name}</h6>
          </Col>
        </Row>
      </Container>
    </>
  ) : null;
};

export default DetailsPage;
