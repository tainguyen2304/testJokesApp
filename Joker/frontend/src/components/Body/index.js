import React from 'react'
import "./Body.scss"
import Story from './Story'
import Title from './Title'
export default function Body() {
      return (
            <div className='Container-body'>
                  <Title/>
                  <Story/>
            </div>
      )
}
