import React from 'react'
import './task.css'


function Task(props) {
    const { title, rightIcon, rightDelIcon } = props;

    return (
        <div className='task-list'>
            <div className='task-box'>
                <p>{title}</p>
                <div className='icon'>
                    {rightIcon}
                    {rightDelIcon}
                    {/* <TiTick className='icon-tick' />
                    <MdDeleteSweep className='icon-delete' /> */}
                </div>
            </div>
        </div>
    )
}

export default Task