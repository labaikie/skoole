/*eslint-disable react/prop-types*/
import React from 'react'
import CounterViewContainer from './counter/CounterViewContainer'
import ColorViewContainer from './colors/ColorViewContainer'
import ScheduleViewContainer from './schedule/ScheduleViewContainer'
import StudentsViewContainer from './students/StudentsViewContainer'
import ChatViewContainer from './chat/ChatViewContainer'

/*
AppRouter is responsible for mapping a navigator scene to a view
*/
export default function AppRouter(props) {
  const { key } = props.scene.route

  if (key === 'Browse') {
    return <StudentsViewContainer />
  } else if (key === 'Schedule') {
    return <ScheduleViewContainer />
  } else if (key === 'Snoop') {
    return <ChatViewContainer />
  }

  if (key.indexOf('Color') === 0) {
    const index = props.scenes.indexOf(props.scene)
    return (
      <ColorViewContainer index={index}/>
    );
  }

  throw new Error('Unknown navigation key: ' + key)
}
