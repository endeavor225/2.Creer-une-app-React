import React from 'react'

export default function Child(props) {
  console.log("🚀 ~ Child ~ props:", props)
  return (
    <div>
        {props.children}
    </div>
  )
}
