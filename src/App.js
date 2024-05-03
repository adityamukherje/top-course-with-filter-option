import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Stylefilter from "./components/Stylefilter";
import Cards from "./components/Cards";
import filterData from "./data";
import { useEffect } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [courses , setCourses] = useState( null);
  const [catagory , setCatagory] = useState(filterData[0].title)
  useEffect( ()=>{
    const fetchData = async () => {
      try{
        const res = await fetch('https://codehelp-apis.vercel.app/api/get-top-courses');
        const data = await res.json();
        console.log(data);
        setCourses(data.data);
      }
      catch(error){
        toast.error("Error Fetching Data");
      }
    }
      fetchData();
  },[])
  return (
    <div className=" min-h-screen flex flex-col bg-bgDark2  " >
      <Navbar/>
        <div className=" bg-bgDark2 ">
          <Stylefilter filter = {filterData} catagory = {catagory} setCatagory= {setCatagory} />

            <div className=' w-11/12 flex max-w-[1200px] mx-auto items-center min-h-[50vh] justify-center flex-wrap '>
                    <Cards courses = {courses}  catagory={catagory} />
            </div>
        </div>
    </div>
  )
};

export default App;
