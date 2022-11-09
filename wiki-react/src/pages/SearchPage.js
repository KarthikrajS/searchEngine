import React, { useEffect, useRef, useState } from 'react'
import { useStateValue } from '../components/StateProvider'
import useWikiSearch from '../components/useWikiSearch';
import './SearchPage.css'
import response from '../components/response';
import {Link} from 'react-router-dom'
import Search from '../components/Search';
import kjse2 from './img/kjse2.png'

function SearchPage() {
  const [{term}, dispatch] = useStateValue();
  const {data} = useWikiSearch(term);
  
  console.log(data);
  
  return (<div className='searchPage'>
            <div className='searchPage__header'>
        {/* {console.log(data)} */}
        {/* <Card /> */}
            <Link to="/">
                <img src={kjse2} className='searchPage__logo' alt="" />
            </Link>
            <div className='searchPage__headerBody'><Search hideButtons={true} /></div>
            </div>
      <div className='searchPage__body' 
      // container-fluid d-flex justify-content-center'
      >
      {term && (<div className='searchPage__results'>
      <div className='searchPage_result_count'>
        About {term}
      </div>
      <div id='searchPage__result'>{data?.map(item=>(
        <div>{item}</div>
      ))}</div>
       </div>
      )}
      
      </div>
      </div>
  )
}

export default SearchPage