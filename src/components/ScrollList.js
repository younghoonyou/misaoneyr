import React from 'react'
const ScrollList = (prpos) => {
  const {content} = prpos
  const handleClick = (url) => {
    window.open(url)
  }
  return (
    <div className='Scroll-Box'>
      {content.map((m, idx) => (
        <div
          className='Location-List'
          key={idx}
          onClick={() => handleClick(m.url)}
        >
          <span>{m.title}</span>
          <span>{m.date}</span>
        </div>
      ))}
    </div>
  )
}

export default ScrollList
