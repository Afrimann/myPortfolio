import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLnaguage from './SkillsLnaguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]' >
      <h1 className='heading'>Education & <span className='text-yellow-400'>Skill</span></h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
          <SkillsItem 
          title= 'React Developer' 
          year= '2022 - Present' 
          desc='As a skilled React Developer, I create dynamic, responsive, and scalable web applications. With a solid understanding of React&apos;s component-based architecture, hooks, and state management, I deliver efficient, maintainable code. I specialize in building intuitive user interfaces, optimizing performance, and integrating APIs seamlessly. My focus is on creating high-quality, user-centered web experiences that meet modern standards.' />
          <SkillsItem 
          title= 'Next Developer' 
          year= '2023 - Present' 
          desc='As a skilled Next.js Developer, I build fast, SEO-optimized, and scalable web applications. With expertise in server-side rendering, static generation, and API integration, I create performant solutions that enhance user experience. I leverage Next.js features to develop dynamic, responsive web applications while optimizing for speed and search engines. My focus is on delivering high-quality, maintainable code that drives results.

'/>
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
          <SkillsItem  
          title= 'Microsoft Office Worker' 
          year= '2020 - Present' 
          desc='As an experienced Microsoft Office Specialist, I maximize productivity using Word, Excel, PowerPoint, and Outlook. I excel at creating detailed spreadsheets, professional documents, and effective presentations. My expertise in data analysis, automation, and formatting allows me to deliver accurate, efficient results. I ensure seamless communication and workflow management to meet business needs.'/>
          <SkillsItem  
          title= 'Graphics Designer' 
          year= '2021 - Present' 
          desc='As a creative Graphic Designer, I craft visually compelling designs that engage and inspire. Proficient in Adobe Creative Suite, I create logos, branding, marketing materials, and user interfaces that align with client goals. My designs focus on clarity, aesthetics, and strong brand identity. I ensure each project delivers impactful visuals that resonate with target audiences.

'/>
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
