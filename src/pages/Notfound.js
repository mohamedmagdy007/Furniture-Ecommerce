import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
const Notfound = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-5">
        <Player
          src="https://assets8.lottiefiles.com/packages/lf20_F3k8xS.json"
          autoplay
          loop
          className="player"
        />
      </div>
    </div>
  );
};

export default Notfound;
