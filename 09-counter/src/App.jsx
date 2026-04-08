import React from 'react'

const App = () => {
  const [counter, setCounter] = React.useState(5)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-80">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Chai aur React
        </h1>

        <h2 className="text-lg text-gray-600 mb-6">
          Counter Value: {counter}
        </h2>

        <div className="flex justify-center gap-4">
          <button 
            onClick={addValue}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
            Add Value {counter}
          </button>

          <button 
            onClick={removeValue}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
            Remove Value {counter}
          </button>
        </div>

      </div>

    </div>
  )
}

export default App