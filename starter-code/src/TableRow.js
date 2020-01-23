import React, { Component } from "react";
import './TableRow.css';


class TableRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, pictureUrl, popularity, deleteRow } = this.props;
    return (
      <div className="card" >
        <img className="card-img-top" src={pictureUrl} alt="Imagem de capa do card" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Popularity: {Math.round(popularity * 100) / 100}</p>
          <a href="#" className="btn btn-primary" onClick={deleteRow} >Delete</a>
        </div>
      </div>
    );
  }
}

export default TableRow;

// {/* <div className="row">
// <img src={pictureUrl} alt="" />
// <h2>{name}</h2>
// <h3>{Math.round(popularity * 100) / 100}</h3>
// <button onClick={deleteRow}>Detele</button>{" "}
// </div> */}