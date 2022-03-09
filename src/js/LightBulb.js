import React from 'react';

export default function LightBulb({ colour, style }) {
  console.log(style)
  return (
      <div className={"lightBulb " + colour} style={{style}}>
      </div>
  );
}
