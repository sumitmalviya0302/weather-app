import React from 'react'

const Spinner = () => {

    const spinner = `https://tenor.com/view/loading-buffering-spinning-waiting-gif-17313179`

  return (
    <>
        <Image className='w-[200px] m-auto block' src={spinner} alt='loading..' />
    </>
  )
}

export default Spinner