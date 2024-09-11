import React from 'react';
import { Button } from 'react-scroll';
import { useTranslation } from 'react-i18next';


const hardSkills = ['PHP', 'SQL',  'TAILWIND', 'REACT', 'RUBY ON RAILS', 'NODE.JS', 'NEXT.JS', 'GRAPHQL', 'BOOSTRAP', 'TYPESCRIPT', 'JAVASCRIPT', 'HTML', 'CSS', 'DOCKER'];

const softSkills = ['pragmatism', 'interpersonal skills', 'sensitivity', 'resilience', 'professional awareness'];
// Discernment/pragmatism Interpersonal skills Sensitivity Resilience Professional awareness

const values =['kindness', 'transcendence', 'commitment', 'impact', 'integrity']


const Skills = () => {
  const { t, i18n } = useTranslation();

  return (
    <div id="about" className="bg-beige text-white md:pb-10 lg:pb-20 lg:min-h-[90vh] space-y-16">
      <div className='w-11/12 md:w-10/12 mx-auto flex flex-col items-left justify-center md:gap-32 gap-10 p-2 md:p-0'>
        <div className=''>
          <h2 className='rubik-mono-one-regular bg-green text-beige px-2 py-3 rounded-tr-lg rounded-bl-lg rounded-tl-sm rounded-br-sm inline-block mb-5'>{t('hard skills')}</h2>
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
          <h2 className='rubik-mono-one-regular bg-green text-beige px-2 py-3 rounded-tr-lg rounded-bl-lg rounded-tl-sm rounded-br-sm inline-block mb-5'>{t('soft skills')}</h2>
          <div className=''>
            {
              softSkills.map((skill, index) => (
                <Button id={index} className='bg-pink border-2 border-white hover:opacity-85 text-white font-bold py-2 px-4 rounded-full m-1 archivo-black-regular uppercase'>
                  {t(skill)}
                </Button>
              ))
            }
          </div>
        </div>
        <div className=''>
          <h2 className='rubik-mono-one-regular bg-green text-beige px-2 py-3 rounded-tr-lg rounded-bl-lg rounded-tl-sm rounded-br-sm inline-block mb-5'>{t('values')}</h2>
          <div className=''>
            {
              values.map((skill, index) => (
                <Button id={index} className='bg-pink border-2 border-white hover:opacity-85 text-white font-bold py-2 px-4 rounded-full m-1 archivo-black-regular uppercase'>
                  {t(skill)}
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
