import React from 'react';
import camperListItem from './camper_list_item.js';
const CamperList = ({campers}) => {
  const Items = campers.map((camper,index)=>{
    return <camperListItem key={index} camper={camper} number={index + 1} />
});
return(
  <table className="table table-striped">
  <thead>
  <tr>
  <th>#</th>
  <th>Username</th>
  <th>Last 30 Days</th>
  <th>All Time points</th>
  </tr>
  </thead>
  <tbody>
  {Items}
  </tbody>
  </table>
);
}
export default CamperList;
