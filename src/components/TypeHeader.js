import React from 'react'
import TypeIt from 'typeit-react'
const TypeHeader = () => {
  return (
    <div className='Typebox'>
      <TypeIt
        options={{
          loop: true,
          speed: 50,
        }}
        getBeforeInit={(instance) => {
          instance
            .type('This is my love story')
            .move(-11)
            .delete(2)
            .pause(750)
            .type('<b>our</b>')
            .move(11)
            .type(' &#x2764;')
            .pause(200)
            .delete(22)
          return instance
        }}
      />
    </div>
  )
}

export default TypeHeader
