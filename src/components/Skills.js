import React from 'react'
import { Button } from 'react-scroll'

const hardSkills = ['PHP', 'SQL',  'TAILWIND', 'REACT', 'RUBY ON RAILS', 'NODE.JS', 'NEXT.JS', 'GRAPHQL', 'BOOSTRAP', 'TYPESCRIPT', 'JAVASCRIPT', 'HTML', 'CSS', 'DOCKER'];

const softSkills = ['PRAGMATISM', 'INTERPERSONAL SKILLS', 'SENSITIVITY', 'RESILIENCE', 'PROFESSIONAL AWARENESS'];
// Discernment/pragmatism Interpersonal skills Sensitivity Resilience Professional awareness

const values =['KINDNESS', 'TRANSCENDENCE', 'COMMITMENT', 'IMPACT', 'INTEGRITY']


const Skills = () => {
  return (
    <div id="about" className="bg-beige text-white md:pb-10 lg:pb-20 lg:min-h-[90vh] space-y-16">
      <div className='w-11/12 md:w-10/12 mx-auto flex flex-col items-left justify-center md:gap-32 gap-10 p-2 md:p-0'>
        <div className=''>
          <h2 className='rubik-mono-one-regular bg-green text-beige px-2 py-3 rounded-tr-lg rounded-bl-lg rounded-tl-sm rounded-br-sm inline-block mb-5'>HARD SKILLS</h2>
          <div className=''>
            {
              hardSkills.map((skill, index) => (
                <Button id={index} className='bg-pink border-2 border-white hover:opacity-85 text-white font-bold py-2 px-4 rounded-full m-1 archivo-black-regular'>
                  {skill}
                </Button>
              ))
            }
          </div>
        </div>
        <div className=''>
          <h2 className='rubik-mono-one-regular bg-green text-beige px-2 py-3 rounded-tr-lg rounded-bl-lg rounded-tl-sm rounded-br-sm inline-block mb-5'>SOFT SKILLS</h2>
          <div className=''>
            {
              softSkills.map((skill, index) => (
                <Button id={index} className='bg-pink border-2 border-white hover:opacity-85 text-white font-bold py-2 px-4 rounded-full m-1 archivo-black-regular'>
                  {skill}
                </Button>
              ))
            }
          </div>
        </div>
        <div className=''>
          <h2 className='rubik-mono-one-regular bg-green text-beige px-2 py-3 rounded-tr-lg rounded-bl-lg rounded-tl-sm rounded-br-sm inline-block mb-5'>VALUES</h2>
          <div className=''>
            {
              values.map((skill, index) => (
                <Button id={index} className='bg-pink border-2 border-white hover:opacity-85 text-white font-bold py-2 px-4 rounded-full m-1 archivo-black-regular'>
                  {skill}
                </Button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
