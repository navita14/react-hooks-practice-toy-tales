import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard key={toy.id} name={toy.name} image={toy.image} likes={toy.likes} setToys={setToys} id={toy.id}/>
      ))} 
    
    </div>
  );
}

export default ToyContainer;
