import React from 'react';
import Blog from '../../../components/base/blog';
import HomeSlider from '../../../components/base/slider';

function Home(): JSX.Element {
  return (
    <div>
      <HomeSlider />
      <Blog />
    </div>
  );
}

export default Home;
