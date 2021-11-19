import React, { useState, useEffect } from 'react'
import ExportCSV  from './ExportCSV'


const Table = (props) => {
    
    const [data,setData]=useState([]);
    
    // Fetch Json Data
    const getData=()=>{
      fetch('/rushing'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
      
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson['rushingStats'])  
          setFilteredRows(myJson['rushingStats'])
        });
        
    }
    useEffect(()=>{
      getData()

    },[])


    
    const [searchTerm, setSearchTerm] = useState("")
    const [order, setOrder] = useState("DESC")
    
    // Sort
    const sorting = (column) => {
        if (order === "ASC"){
            const sorted = [...data].sort((a,b)=>
            Number(a[column].toString().replace(/[^\d.-]/g, '')) > Number(b[column].toString().replace(/[^\d.-]/g, '')) ? 1 : -1

            );
            const sortedFiltered = [...filteredRows].sort((a,b)=>
            Number(a[column].toString().replace(/[^\d.-]/g, '')) > Number(b[column].toString().replace(/[^\d.-]/g, '')) ? 1 : -1
            );
            setFilteredRows(sortedFiltered)
            setData(sorted);
            setOrder("DESC")
        }
        if (order === "DESC"){
            const sorted = [...data].sort((a,b)=>
            Number(a[column].toString().replace(/[^\d.-]/g, '')) < Number(b[column].toString().replace(/[^\d.-]/g, '')) ? 1 : -1
            );
            const sortedFiltered = [...filteredRows].sort((a,b)=>
            Number(a[column].toString().replace(/[^\d.-]/g, '')) < Number(b[column].toString().replace(/[^\d.-]/g, '')) ? 1 : -1
            );
            setFilteredRows(sortedFiltered)
            setData(sorted);
            setOrder("ASC")
        }
    }

    const [filteredRows,setFilteredRows]=useState(data);
    return(

        <div>
        
            <input type="text" placeholder="Search Player" style = {{marginTop:5, marginBottom:25, width:"22%"}}
            onChange = {(e)=>{
                
                setSearchTerm(e.target.value)
                if(e.target.value != ""){
                    setFilteredRows(data.filter((d) => d["Player"].toLowerCase().includes(e.target.value.toLowerCase())))
                }
                else{
                    setFilteredRows(data)
                }
                
            }}
            
            />
            <ExportCSV data={filteredRows}/>
            <table>
            
           
                    <th>Player</th>
                    <th>Team</th>
                    <th>Pos</th>
                    <th>Att</th>
                    <th>Att/G</th>
                    <th onClick={()=>sorting("Yds")}><button>Yds</button></th>
                    <th>Avg</th>
                    <th>Yds/G</th>
                    <th onClick={()=>sorting("TD")}><button>TD</button></th>
                    <th onClick={()=>sorting("Lng")}><button>Lng</button></th>
                    <th>1st</th>
                    <th>1st%</th>
                    <th>20+</th>
                    <th>40+</th>
                    <th>FUM</th>
                    

                <tbody>
                
                   
                    {data.filter(d=>{

                        if (searchTerm === ''){
                       
                            return d
                        }
                        else if(
                            
                            d["Player"].toLowerCase().includes(searchTerm.toLowerCase())
                        ){
                            
                            return d
                        }
                      
                    }).map((d)=>(
                         <tr key={d.Player}>
                            <td>{d["Player"]}</td>
                            <td>{d["Team"]}</td>
                            <td>{d["Pos"]}</td>
                            <td>{d["Att"]}</td>
                            <td>{d["Att/G"]}</td>
                            <td>{d["Yds"]}</td>
                            <td>{d["Avg"]}</td>
                            <td>{d["Yds/G"]}</td>
                            <td>{d["TD"]}</td>
                            <td>{d["Lng"]}</td>
                            <td>{d["1st"]}</td>
                            <td>{d["1st%"]}</td>
                            <td>{d["20+"]}</td>
                            <td>{d["40+"]}</td>
                            <td>{d["FUM"]}</td>
                        </tr>
                        
                    ))}
                
                </tbody>
            </table>
        </div>
    )
}

export default Table;  