import React from 'react'
import {HomePageExplore} from '../../../data/homepage-explore'
import HighlightText from './HighlightText';
import { useState } from 'react';
import CourseCard from './CourseCard';

//course tabName data jo hum fetch krege baad me 
const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];


const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(HomePageExplore[0].tag)  //this is the current tab // jb hum website open krege tab konsa tab default click hoga // currentTab ki value HomePageExplore[0].tag se set hogi jo ki "Free" hai
  
    const [courses, setCourses] = useState(HomePageExplore[0].courses);  //ous currentTab ke courses ko set karega //courses state ki value HomePageExplore[0].courses se set hogi

    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading); // currentCard ki value HomePageExplore[0].courses[0].heading ki hogi

    const setMyCourse = (value) =>{     
        setCurrentTab(value)   //currentTab ki value set karega jo ki value hai jo humne click kiya hai tab par
        const result= HomePageExplore.filter((course)=>course.tag === value) //this will filter courses tag from the data of the HomePageExplore and store the resut in the result //this will give us the courses of the current tab that we clicked on
        setCourses(result[0].courses)   //this will set the courses state with the courses of the current tab that we clicked on
        setCurrentCard(result[0].courses[0].heading) // this will set the currentCard state with the heading of the first course of the current tab that we clicked on
    }


   //Creating UI for this section 

  return (      
    
    <div>

      {/* Heading text */}
        <div className='text-4xl font-semibold text-center '>
        Unlock the 
        <HighlightText text={"Power of Code"} />
      </div>

      {/* Sub-Heading text */}
      <p className='text-center text-richblack-300  text-lg font-semibold mt-3 mb-3 lg:mb-0 '>
        Learn to build anything you can imagine
      </p>  

      {/* Tabs div --> tabs wala component */}
      <div className=' hidden lg:flex mt-5 shadow-custom  flex-row rounded-full
       bg-richblack-800 mb-5 border-richblack-100
      p-1'>
      {
        tabsName.map( (element, index) => {   //
            return (
                <div
                className={`text-[16px] flex flex-row items-center gap-9 font-medium 
                ${currentTab === element 
                ? "bg-richblack-900 text-richblack-5 font-medium"
                : "text-richblack-200" } rounded-full transition-all duration-200 cursor-pointer
                hover:bg-richblack-900 hover:text-richblack-5 px-8 py-2`}
                key={index}
                onClick={() => setMyCourse(element)}
                >
                    {element}
                </div>
            )
        })
      }
      </div>

      {/* Gap Div */}
      <div className='hidden lg:block lg:h-[200px]'></div>

      {/* course card ka group */}  {/*Teeno card ko keseshow krege hum */} 

      <div className='lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between 
      flex-wrap w-full lg:left-1 lg:-translate-y-[50%] text-black 
      lg:mb-0  mb-9 lg:px-0 px-3'>
        {
            courses.map(  (element, index) => {
                return (
                    <CourseCard   //course card component ko use krege //aur ye sara data pass krege 
                    key={index}
                    cardData = {element}
                    currentCard = {currentCard}
                    onClick = {()=>{setCurrentCard(element.heading)}}
                    />
                )
            } )
        }
      </div>
    </div>
  )
}

export default ExploreMore