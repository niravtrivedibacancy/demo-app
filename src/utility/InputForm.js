import React from 'react'

export default function InputForm({type,id,value,className,onChange,onClick}) {
  if(type === 'text' || type === 'email' || type === 'password'){
    return (
      <input type={type} id={id} valule={value} onChange={onChange}/>
    );
  }
  else if(type === 'button'){
    return(
      <button onClick={onClick}>{value}</button>
    );
  }
  else if(type === 'label'){
    return(
      <label className={className}>{value}</label>
    );
  }
}
