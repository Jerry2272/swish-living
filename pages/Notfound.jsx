import React from 'react'

const Notfound = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-20">404 - Page Not Found</h1>
      <p className="text-center mt-4 text-gray-600">The page you are looking for does not exist.</p>
      <div className="text-center mt-6">    
        <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
        </div>
      <img src="https://via.placeholder.com/400" alt="Not Found" className="mx-auto mt-10" />
      <p className="text-center text-gray-500 mt-4">If you think this is an error, please contact support.</p>
      <p className="text-center text-gray-500 mt-2">Thank you for your patience!</p>
    </div>
  )
}

export default Notfound
