import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div class = "parent">

      <Card user = 'aman' age = {18} img = 'https://plus.unsplash.com/premium_photo-1733760125442-efad43dd88c3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user = 'jaber' age = {22} img = 'https://images.unsplash.com/photo-1769745836625-4cac1ba455a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user = 'aber' age = {19} img = 'https://images.unsplash.com/photo-1761839258830-81f87b1c6d62?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      
    </div>
  )
}

export default App
