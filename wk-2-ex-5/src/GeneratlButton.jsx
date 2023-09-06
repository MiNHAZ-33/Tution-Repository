import React from 'react'

function GeneratlButton({buttonText, ButtonAction}) {
  return (
      <div>
          <button onClick={ButtonAction}>{ buttonText}</button>
    </div>
  )
}

export default GeneratlButton