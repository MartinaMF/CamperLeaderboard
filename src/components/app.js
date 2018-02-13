import React, { Component } from 'react';
import CamperList from './camper_list.js'
import axios from 'axios';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTimeCampers:[],
      recentCampers:[],
      currentView:'allTimeCampers'
    };
  }

  componentDidMount() {
    axios.all([this.fetchRcentCampers(),this.fetchAllTimeCampers()]).then(axios.spread((recentCampers,allTimeCampers)=>{
      this.setState({
        recentCampers:recentCampers.data,
        allTimeCampers:allTimeCampers.data
      });
    }));
  }
fetchRcentCampers(){
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
}
  fetchAllTimeCampers(){
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }

  changeView(currentView){
this.setState({currentView});

  }
/*mapCampers(campers){
  return campers.map((camper)=>{
    return '<p>'+camper.username+'</p>';
  });
}*/

  render() {
    return (
      <div>
      <h2>{this.state.currentView}</h2>
      <button onClick={()=>this.changeView('recentCampers')} className="btn btn-primary">recentCampers</button>
      <button onClick={()=>this.changeView('allTimeCampers')} className="btn btn-primary">allTimeCampers</button>
      <CamperList campers={this.state[this.state.currentView]}/>
      </div>
    );
  }
}
