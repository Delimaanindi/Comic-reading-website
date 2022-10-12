import React, {useState} from "react";
import Comics from '../components/comicdata'
import Comiccard from './comiccard';
import '../styles/tab.css'
import '../styles/card.css'
import icontab from '../hot.png'

export default function Filtertab() {
    const [data, setData] = useState(Comics);
    const [input, setInput] = useState('');
    // const [select, setSelected] = useState('all');

    const filterdata = (cateData) => {
        const filteredData = Comics.filter((curProps) => {
          return curProps.category === cateData;
        });
  
        setData(filteredData);
    };

    return( 
        <>   
      <input type="text" placeholder='Search comic' id='inputsearch' onChange={(e) => setInput(e.target.value)}/>
      <button id='searchBtn' ><b>Search</b></button>
      <select name="genre" className="select">
              <option value="genre" className="option">Genre</option>
              <option value="all" className="option" onChange={() => 
                setData(Comics)
              }>All</option>
              <option value="adventure" className="option">Adventure</option>
              <option value="Family" className="option" >Family</option>
              <option value="Fantasy" className="option" >Fantasy</option>
              <option value="Romance" className="option">Romance</option>
            </select>
        <div className="buttons">
        <button className='tabBtn' id="all" onClick={() => setData(Comics)}><b>All</b></button>
        <button className='tabBtn' id="hottest"
        onClick={() => filterdata('hottest')}>
            <span><b>Hottest Stories</b><img src={icontab} alt='' id='hot'/></span></button>
        <button className='tabBtn' id="new"
        onClick={() => filterdata('new')}><b>New stories</b></button>
        <button className='tabBtn' id="latest"
        onClick={() => filterdata('latest')}><b>Latest Updates</b></button>
        </div>

        <div className='comicList' key={data.id}>
        {data.filter((data) => {
              if(!data || !data.title) {
                return false;
            };
            return data.title.toLowerCase().includes(input)
            }).map(d => 
              (
              <Comiccard key={d.id}
              image={d.image}
              title={d.title}
              synopsis={d.synopsis}
              />
              )
           )}
        </div>
        
        </>
    )

}