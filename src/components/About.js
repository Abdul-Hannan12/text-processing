import React from 'react'

export default function About() {
  const style = {
    'width': '60vw',
    'marginTop': '35px'
  }
  return (
    <div className="container">
        <h1>About Our Text Modifier</h1>
        <p style={style}> This web app lets you edit text. You may choose from a number of options, such as capitalizing or using any case, eliminating superfluous spaces, and many more. When you're done editing your content, you may conveniently copy the resulting text! </p>
    </div>
  )
}
