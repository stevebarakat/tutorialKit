import React from "react";

function Stately({ url, height }) {
  return <iframe className="stately" src={url} height={height} />;
}

export default Stately;
