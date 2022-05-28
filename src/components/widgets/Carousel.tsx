import React, { useEffect, useState } from "react";
import background from "../../assets/img/back2.jpg";
import backgElectro from "../../assets/img/back3.jpg";

function Carousel() {
  const [number, setNumber] = useState(1);
  const tabImgs = [background, backgElectro];

  useEffect(() => {
    const n = Math.random();
    if (n > 0.5) setNumber(0);
    else setNumber(1);
  }, []);

  return (
    <div
      className="ContainerCarousel"
      style={{
        background: `url(${tabImgs[number]}) center/cover`,
      }}
    >
      <div className="content-text isCursor">high-techTec</div>
    </div>
  );
}

export default Carousel;
