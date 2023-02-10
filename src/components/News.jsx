import React,{useEffect, useState} from 'react'
import { Select,Typography,Row,Col,Avatar,Card } from 'antd'
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import axios from 'axios';
const {Text,Title} = Typography;
const {Option} = Select;



const News = (simplified) => {
 const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
// const {data} = useGetCryptosQuery(10);
// const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  //const { data } = useGetCryptosQuery(100);
 const result = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  console.log(result);

  useEffect(()=>{
    getData();
  },[])

  const getData = async() => {
    const {data} = await axios.get("https://www.bing.com/news/search?q=top+stories&form=TNSA02");
    console.log(data);
  }


  return (

    <div>
       
      <h1>News</h1>
    </div>
  )
}

export default News
