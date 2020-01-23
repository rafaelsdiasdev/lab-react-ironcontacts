import React, { Component } from 'react';
import TableRow from './TableRow'
import './App.css';
import data from './contacts.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: this.getFive()
    }
  }

  getFive() {
    let result = data.splice(0, 6);
    return result
  }

  addRandom() {
    const newList = [...this.state.list];
    const randomIdx = Math.floor(Math.random() * (data.length - newList.length) + newList.length);
    newList.push(data[randomIdx]);
    this.setState({ list: newList });
  }

  sortListByName() {
    const sortedList = [...this.state.list];
    sortedList.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ list: sortedList });
  }

  sortListByPopularity() {
    const sortedList = [...this.state.list];
    sortedList.sort((a, b) => b.popularity - a.popularity);
    this.setState({ list: sortedList });
  }
  deleteRow(idx) {
    const newList = [...this.state.list];
    newList.splice(idx, 1);
    this.setState({ list: newList });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col d-flex justify-content-around mt-4 mb-4">
            <a className="btn btn-danger" onClick={() => this.addRandom(this)}>Add Random Contact</a>
            <button className="btn btn-danger" onClick={() => this.sortListByName(this)}>Sort by Name</button>
            <button className="btn btn-danger" onClick={() => this.sortListByPopularity(this)}>Sort by Popularity</button>
          </div>
          <div className="row">
            <div className="col d-flex flex-row flex-wrap justify-content-between">
              {this.state.list.map((el, idx) => (
                <TableRow
                  key={idx}
                  pictureUrl={el.pictureUrl}
                  name={el.name}
                  popularity={el.popularity}
                  deleteRow={() => this.deleteRow(idx)}
                />
              ))}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
