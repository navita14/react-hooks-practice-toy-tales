import React from "react";

function ToyCard({id, name,image,likes,setToys}) {
  
  ///delete
  function handleDelete(){
    setToys(prev => prev.filter(toy => {
      return toy.id !== id 
    }))

    fetch(`http://localhost:3001/toys/${id}`, {
      'method': 'DELETE'
    })
    ///dont need to add this but you can if you want to let someone know if it was deleted
    // .then(res => res.json())
    // .then(data => console.log(data))
  }

///patch
  function handleLike(){
    setToys(prevToys => prevToys.map(toy => {
      if (toy.id === id) {
        toy.likes++
        return toy
      } else {
        return toy
      }
    }))
    fetch(`http://localhost:3001/toys/${id}`, {
      method : 'PATCH',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'likes' : likes + 1}) // {what you are targeting : what what you are doing with it}
    })
  }

///////////

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLike}className="like-btn">Like {"<3"}</button>
      <button onClick= {handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
