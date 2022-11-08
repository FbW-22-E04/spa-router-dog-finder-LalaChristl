import React from 'react'

const Dog = ({item, idx}) => {
  return (
  
         <div className="text-center" key={idx}>
                  <img className="h-[150px] w-[150px] rounded-full border-4 border-blue-400" src={item?.image} alt="" />
                <h2 className="mt-3">{item?.name}</h2>
            
              </div>

  )
}

export default Dog
