/*eslint-disable react/prop-types*/
import React from 'react'
import CounterViewContainer from './counter/CounterViewContainer'
import ColorViewContainer from './colors/ColorViewContainer'
import NewViewContainer from './new/NewViewContainer'
import ExploreViewContainer from './explore/ExploreViewContainer'

/*
AppRouter is responsible for mapping a navigator scene to a view
*/
export default function AppRouter(props) {
  const {key} = props.scene.route;

  if (key === 'Explore') {
    return <ExploreViewContainer />;
  } else if (key === 'New') {
    return <NewViewContainer />;
  }

  if (key.indexOf('Color') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <ColorViewContainer index={index}/>
    );
  }

  throw new Error('Unknown navigation key: ' + key);
}
