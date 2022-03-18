import React from 'react';

export default function LightBulb({ colour, id }) {
  return (
    // <div className={"lightBulb " + colour}>
    <div className={"lightBulb lightOff"} id={id}>
    </div>
  );
}
