import React, { Component } from "react";

export default class extends Component {
  render() {
    const { item, viewDetail } = this.props;
    return (
      <div style={{
        border: '1px solid #000',
        height: '500px',

      }}>
        <img src={item.image} atl="title" style={{
          height: '300px',
          width: '100%',
          objectFit: 'cover'
        }}/>
        <div className="card-body">
          <h3 className="card-title" style={{
            fontSize: '22px',
          }}>{item.name}</h3>
          <p className="card-text" >{item.price}$</p>
          <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
            viewDetail(item)
          }}>View detail</button>
        </div>
      </div>
    );
  }
}
