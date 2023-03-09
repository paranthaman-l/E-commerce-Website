import React from 'react'
import RingLoader from "react-spinners/RingLoader";
import { useStates } from '../States';
const Loading = () => {
    const {loading} = useStates();
  return (
    <div className='loading_effect  '>
        <RingLoader
        className='loader'
        color={"#0066ff"}
        loading={loading}
        size={40}
      />
    </div>
  )

}

export default Loading