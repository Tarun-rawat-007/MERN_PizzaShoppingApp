// import React from 'react'

const UserInfo = ({email,image,name}) => {
    const payNow=()=>{
        alert("Item Ordered successfully 🍕");
    }
  return (
    <div className="card" style={{ height: '150px', objectFit: 'cover' }}>
  <img src={image} className="card-img-top" alt="Card image cap" />
  <div className="card-body">
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <p>{email}</p>
    </div>
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input
        value={name}
        className="form-control"
        type="text"
        placeholder="Enter your name"
      />
    </div>
    <div className="form-group">
      <label htmlFor="address">Address:</label>
      <textarea className="form-control" cols="40" rows="3" placeholder="Enter your address"></textarea>
    </div>
    <button onClick={payNow} className="btn btn-primary mt-3">
      Pay Now
    </button>
  </div>
</div>

  )
}

export default UserInfo