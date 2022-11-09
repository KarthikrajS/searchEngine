import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
import './Search.css'
import {Button} from '@material-ui/core'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search(hideButtons = false) {

    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useNavigate();

    const search= (e) =>{
        if (e && e.preventDefault) { e.preventDefault(); }
        console.log(input)
        dispatch({
            type : actionTypes.SET_SEARCH_TERMS,
            term : input

        })
        history('/search')
    }
  return (
    <form className='search'>
        <div className='search__input'>
            <SearchIcon  className='search__inputIcon'/>
            <input value={input} onChange={e=>setInput(e.target.value)}/>
        </div>
        {!hideButtons ? 
        (<div className='search_button'>
            <Button type='submit' className='search__button' variant='outlined' onClick={(e)=>{search(e)}}>Search</Button>
        </div>):
        (<div className='search_button'>
            <Button type='submit' className='search__buttonsHidden' variant='outlined' onClick={(e)=>{search(e)}}>Search</Button>
        </div>)
        }
        
    </form>
  )

}

export default Search