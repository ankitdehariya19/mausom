import React from 'react';

const MausonLoader: React.FC = () => {
 

  return (
    <div className='w-full h-screen bg-black  z-50'>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center  bg-opacity-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-violet-500 z-50"></div>
        <div className="absolute bg-black top-24 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-40">
          <h2 className="text-4xl font-bold text-white bg-transparent shadow-xl shadow-violet-500 z-50" >M</h2>
          <p className="text-lg mt-16 text-white z-50" >Wait For Mausom...</p>
        </div>
      </div>
    </div>
  );
};

export default MausonLoader;
