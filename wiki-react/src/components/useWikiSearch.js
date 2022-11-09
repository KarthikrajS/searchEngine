import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {Button} from '@material-ui/core'


function useWikiSearch(term) {
    const [data, setData] = useState(null);
    // const [resdata, setResdata] = useState(null);
    const navigate = useNavigate()
  useEffect(()=>{
    // let card ='';
    // let resd =null
    const fetchData = async() =>{
        axios.post("/search/"+term)
        .then(res =>{
            console.log(res.data[1])
            localStorage.setItem('searchResult', JSON.stringify(res.data))
            var d1 = res.data;
            var arr = Array(d1[1].length);
            // d1[1]?.items.map(item=>{
            //     for(let i=0; i< d1[1].length ; i++){
            //         arr[i][0] = item
            //     }
            // })
            let card1 = ''
            for(let i=0; i< d1[1].length;i++){
                // arr[i][0] = d1[1][i];
                // arr[i][1] = d1[3][i];
                arr[i]=
                
                    <div className="searchPage__result"> 
                    <a href={d1[3][i]} target='_blank' className="searchPage__resultTitle"><h2>
                    {d1[1][i]}</h2></a>
                    <a href={d1[3][i]} target='_blank' className="searchPage__resultSnippet">
                    <h4>{d1[3][i]}</h4></a>
                    </div>
                ;
            }
            console.log(arr)  
            setData(arr);         
        })
        .catch((err)=>{
            if(err){
                throw  err
            }
        })
    }
    fetchData();
    },[term])

    // useEffect((data)=>{
    //     let card='';

    //     for(let i=0; i< data[1].length; i++){
    //         card  += "<div className='col-md-9'> <div className='card text-center p-2 border-box-lg'> <div className='card-body text-dark'> <h4 className='card-title'>"+data[1][i]+"</h4> </div></div></div>";
    //         }
    //         setResdata(card)
    // },[data])
    return {data}
}

export default useWikiSearch