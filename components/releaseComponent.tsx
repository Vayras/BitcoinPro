import React from 'react';
import "./component.css"

interface ReleaseComponentProps {
  // Add props here as needed
}

const releases = [
  "Bitcoin Pro 29.1",
  "Bitcoin Pro 29.0",
  "Bitcoin Pro 28.2",
  "Bitcoin Pro 28.1",
  "Bitcoin Pro 28.0",
  "Bitcoin Pro 27.2",
  "Bitcoin Pro 27.1",
  "Bitcoin Pro 27.0",
  "Bitcoin Pro 26.2",
  "Bitcoin Pro 26.1",
  "Bitcoin Pro 26.0",
  "Bitcoin Pro 25.2",
  "Bitcoin Pro 25.1",
  "Bitcoin Pro 25.0",
  "Bitcoin Pro 24.2",
  "Bitcoin Pro 24.1",
  "Bitcoin Pro 24.0.1",
  "Bitcoin Pro 23.2",
  "Bitcoin Pro 23.1",
];

const ReleaseComponent: React.FC<ReleaseComponentProps> = () => {
  return (
    <>
    <div className='release-component-container'>
      {releases.map((release, index) => (
        <div key={index} className='release-card'>
          <p>{release}</p>
          <p className='read-more'> <a className='text' href='/release/29.1'>Read More</a></p>
        </div>
      ))}
    </div>
    </>
  );
};

export default ReleaseComponent;
