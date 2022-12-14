
import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () =>
  <Row>
    <Col md="8">
      {/* AUTHOR INTRO STARTS */}
      <Media className="mb-4 admin-intro">
        <Image
          roundedCircle
          width={64}
          height={64}
          className="mr-3"
          src="/img/ownerAvatar.jpg"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
          <p className="welcome-text">
          My name is Your Name and I am a blogger. I write all about my travel, food & lifestyle experiences. Hope you join me in my journey!
          </p>
        </Media.Body>
      </Media>
      {/* AUTHOR INTRO ENDS */}
    </Col>
  </Row>

export default AuthorIntro;
