import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import React from 'react';

const Home = () => {
  return (
    <Container className="bg-shop-light-pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam itaque repudiandae
        mollitia eveniet ipsum culpa iure, inventore asperiores, maxime ipsam blanditiis! Iste
        corporis labore minima consequatur quo dolorum qui fugiat.
      </p>
      <Button>Hello</Button>
    </Container>
  );
};

export default Home;
