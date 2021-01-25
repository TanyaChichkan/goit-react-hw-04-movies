import React from 'react';

const NotificationPage=({text,location,history})=>{
  const handleBackPage=(e)=>{

    history.push('/');
  };

  return(
    <>
      <h1>Something went wrong</h1>
      <p>{text}</p>
      <p>Please,try again</p>
      <button type="button" onClick={handleBackPage} className="History-Button">Go back</button>

    </>
  )
};

export default NotificationPage;