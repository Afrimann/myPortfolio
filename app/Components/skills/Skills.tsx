import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLnaguage from './SkillsLnaguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]' >
      <h1 className='heading'>Education & <span className='text-yellow-400'>Skill</span></h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
          <SkillsItem title= 'React Developer' year= '2022 - Present' />
          <SkillsItem title= 'Next Developer' year= '2023 - Present'/>
          <SkillsLnaguage 
          skill1= 'html'
          skill2= 'css'
          skill3= 'javascript'
          skill4= 'Typescript'
          level1= 'w-[90%]'
          level2= 'w-[88%]'
          level3= 'w-[70%]'
          level4= 'w-[65%]' />
        </div>
        <div>
          <SkillsItem  title= 'Microsoft Office Worker' year= '2020 - Present'/>
          <SkillsItem  title= 'Graphics Designer' year= '2021 - Present'/>
          <SkillsLnaguage 
          skill1= 'CorelDraw'
          skill2= 'Excel'
          skill3= 'powerpoint'
          skill4= 'photoshop'
          level1= 'w-[90%]'
          level2= 'w-[88%]'
          level3= 'w-[70%]'
          level4='w-[75%]'/>
        </div>
      </div>
    </div>
  )
}

export default Skills
