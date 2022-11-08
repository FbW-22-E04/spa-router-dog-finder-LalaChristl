import React from 'react'
import { useParams } from 'react-router-dom'
import Dogs from './Dogs'

const SingleDog = ({allDogs}) => {
    const {singledog} = useParams()
    const item = allDogs.filter(item => item.name === singledog)[0]
    // console.log(item);
  return (
         <div className="text-center mt-10">
            <Dogs allDogs={allDogs}/>

                <h1 className='mt-10'>{`Name: ${item?.name}`}</h1>
       
                <p className='mt-5'>{`Age: ${item?.age}`}</p>
                <p className='mt-5'>{item?.motto}</p>
              </div>

  )
}

export default SingleDog