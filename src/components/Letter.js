import React from 'react'

const Letter = (props) => {
  const {title, content} = props
  const contentWithLineBreaks = content.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))

  return (
    <div className='Letter' data-scroll>
      <div className='Letter-Box'>
        <h1>{title}</h1>
        <p>{contentWithLineBreaks}</p>
      </div>
    </div>
  )
}

export default Letter
