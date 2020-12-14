import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Table.css'
import { PaginationTable } from '../UniversityPage/PaginationTable';
function Table() {
    var [uniname, setUniname] = useState([]);
    useEffect(() => {
        getdata();
        document.title = "University";
    },[])

    const getdata = async () => {
        const response = await axios.get(
            'http://universities.hipolabs.com/search?country=India'
        );

        console.log(response);
        setUniname(response.data);
    } 
  uniname = uniname.reduce((unique, o) => {
    if(!unique.some(obj => obj['name'] === o['name'])) {
      unique.push(o);
    }
    return unique;
},[]);

    return (
        <div>
            <PaginationTable datas={uniname}></PaginationTable>
        </div>
    );

}

export default Table