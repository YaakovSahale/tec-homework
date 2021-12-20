import { useState, useEffect } from 'react'

function Reddit() {
  const [title, setTitle] = useState([])

  useEffect(getData, [])
  
  function getData (){
    fetch('https://www.reddit.com/r/reactjs.json')
      .then((res) => res.json())
      .then((data) => setTitle(data.data.children))
      .catch(err => console.error(err))
  }

  return (
    <>
      <div>
        <ol>
          {title.map((reddit, i) => {
            return <li key={i}> {reddit.data.title}</li>
          })}
        </ol>
      </div>
    </>
  )
}

export default Reddit