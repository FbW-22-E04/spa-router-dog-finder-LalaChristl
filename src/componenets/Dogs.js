import React from "react";
import { Link } from "react-router-dom";

import Dog from "./Dog";

const Dogs = ({ allDogs }) => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl">HELLO. WE HAVE DOGS. CLICK FOR MORE INFO.</h1>
      <div className="flex justify-center gap-[80px] mt-10">
        {allDogs.map((item, idx) => {
          return (
            <Link key={idx} to={`/dogs/${item.name}`}>
              <Dog item={item} idx={idx}/>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dogs;
