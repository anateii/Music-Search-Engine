import { Container, Form, Navbar, Nav, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Track } from "../interfaces";
import { ChangeEvent, FormEvent, useState } from "react";
import "./mainpage.css";

const MainPage = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<Track[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    fetchTracks()
  };

  const fetchTracks = async() => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + input || "maluma"
    );

    if (response.ok) {
      const { data } = await response.json();
      setResults(data);
    }
  }

  return (
    <>
      <Container fluid className="container-wrapper">
        <Navbar>
          <Nav>
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={input}
                onChange={handleChange}
              />
            </Form>
          </Nav>
        </Navbar>

        <Row className="my-3 row-wrapper">
          {results
            .map((track) => (
              <Col xs={10} md={3} className="mt-3" id="col-wrapper">
                <Card>
                  <Link to={`details/${track.id}`} style={{ color: "white" }}>
                    <Card.Img variant="top" src={track.album.cover_big} />
                  </Link>
                  <Card.Body>
                    <Card.Title>{track.title}</Card.Title>
                    <Card.Text>{track.artist.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
            .splice(0, 9)}
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
