import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Sidebar() {
  return (
    <div className='sidebar'>
      <h2 className='app-title'>TimeTable-R</h2>
      <div className='content'>
        <div className='timetable'>
          <div className='timetable-icons'>
            <ArrowRightIcon color='disabled'sx={{fontSize: 30}} style={{width: '27px'}}/>
            <AssignmentIcon color='disabled' sx={{fontSize: 20}} style={{margin: "auto"}}/>
          </div>
          <div style={{paddingLeft: "15px", letterSpacing: "0.2px"}}>My Timetable</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar