import React, { useRef } from 'react'
import './WorkExperience.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import {WORK_EXPERIENCE} from '../../utils/data'
import Slider from 'react-slick'


const WorkExperience = () => {
  const sliderRef = useRef();

  const settings = {
    dots : false,
    infinite : true,
    speed : 500,
    slideToShow : 2,
    slideToScroll : 1,
    arrows : false,
    responsive :[
      {
        breakpoint : 769,
        settings : {
          slideToShow : 1,
          slideToScroll : 1,
        },
      },
    ],
  };

  return (
    <section className='experience-container'>

        <h5>Work Experience</h5>

        <div className='experience-content'>

          <Slider ref={sliderRef} {...settings}>

            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item}/>
            ))}

          </Slider>

        </div>

    </section>
  )
}

export default WorkExperience