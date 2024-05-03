import Card from './Card';
import React, { useState } from 'react'




export const Cards = ({courses , catagory}) => {

    // let allCourses = [];
    // const getCourses = () =>{
    //     Object.values(courses).forEach( (courseCatagory) =>{
    //         courseCatagory.forEach( (course) =>{
    //             allCourses.push(course);
    //         })
    //     } )
    //     return allCourses;
    // }
    const [likedCourse , setLikedcourse] = useState([]);

    const getCourses = () => {
              if(catagory === "All"){
                    let allCourses = [];
                  // Check if courses is defined and not null before using Object.values()
                    if (courses && typeof courses === 'object') {
                        Object.values(courses).forEach(courseCategory => {
                        courseCategory.forEach(course => {
                            allCourses.push(course);
                        });
                        });
                    }
                            return allCourses;
              }
              else{
                return courses[catagory];
              }
              
            };
          
            const allCourses = getCourses();

    

  return (
    <div className=' flex flex-wrap justify-center gap-4 mb-4'>
        {
           allCourses.map( (course) =>{
                return    <Card course = {course} likedCourse = {likedCourse}  setLikedcourse = {setLikedcourse} />
                
            })
        }
    </div>
  )
}
export default Cards;



  