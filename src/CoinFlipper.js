import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';
import options from "./consants";
import {getRandomElFormArr, findCountInArray} from "./helpers";

class CoinFlipper extends Component {
  constructor(props){
    super(props);
    this.state = {
        side: options[0],
        donuyor: false,
        gelenler: []
    }
  }
  handleClick = () => {
    this.setState({donuyor: true});
    const randomEl = getRandomElFormArr(options);
    setTimeout(() => this.setState({donuyor: false}, () => {
        this.setState({
            side: randomEl,
            gelenler: [...this.state.gelenler].concat([randomEl])
        });
    }), 1000);
  };

  render(){
    return (
      <div className="CoinFlipper">
        <h1>
            {
                options.map((option) => {
                    if(options[options.length -1] === option){
                        return <span> {option} </span>
                    }else {
                        return <span>{option} ya da</span>
                    }
                })
            }
        </h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        <button onClick={this.handleClick} >At!</button>
        <p>
            Toplam
            <strong> {this.state.gelenler.length} </strong>
            atıştan
            <div>
                {
                    options.map(option => {
                        return <div key={option}>
                        {findCountInArray(this.state.gelenler, option)}
                        <span> {option} </span>
                    </div>
                    })
                }
            </div>
        </p>
      </div>
    )
  }
}

export default CoinFlipper;