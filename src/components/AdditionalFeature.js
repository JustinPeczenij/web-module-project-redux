import React from 'react';

const AdditionalFeature = props => {
  console.log('props:', props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=> {console.log(props.feature)
        props.addFeature(props.feature)
        console.log(props)}} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
