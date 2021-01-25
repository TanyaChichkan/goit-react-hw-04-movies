import React, { useState } from 'react';
import {form,input,iconSearch,button} from './Form.module.css';
import icon from '../../symbol-defs.svg';

const ButtonStyles={

}

const SearchForm =({onSubmit})=>{

  const [query, setQuery] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  }

  const handleChange=e=>{
    setQuery(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className={form}>
      <input type="text" value={query} onChange={handleChange}
        placeholder="Type your query here" className={input}/>
      <button type="submit" className={button}>
        <svg className={icon} className={iconSearch}>
          <use xlinkHref={`${icon}#iconsearch`}/>
        </svg>
        Search</button>
    </form>
  )

};

export default SearchForm;
