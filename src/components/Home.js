import React from 'react';
import HomeCarousel from './HomeCarousel';
import '../styles/Home.css';
import { Card } from 'react-bootstrap'; // Import Bootstrap Card component

// New Card component
const CustomCard = ({ title, imageSrc, content }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to React Auth App</h1>
      <p>This is a simple authentication app built with React and Bootstrap.</p>

      <div className="carousel-container">
        <HomeCarousel />
      </div>

      <div className="card-container">
        {/* Card 1 */}
        <CustomCard
          title="Card 1"
          imageSrc="/images/imag1.jpg" // Update with your image path
          content="Card Content 1"
        />

        {/* Card 2 */}
        <CustomCard
          title="Card 2"
          imageSrc="/images/img2.jpg" // Update with your image path
          content="Card Content 2"
        />

        {/* Card 3 */}
        <CustomCard
          title="Card 3"
          imageSrc="/images/img3.jpg" // Update with your image path
          content="Card Content 3"
        />

        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Home;
