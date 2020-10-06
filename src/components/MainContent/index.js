import React from 'react';
import Button from '../Button';
import SkillsBar from '../SkillsBar';
import ContactForm from '../ContactForm';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import './index.scss';
import EducationTimeline from '../EducationTimeline';
import ExperienceTimeline from '../ExperienceTimeline';
import Portfolio from '../Portfolio';

//Data import
import data from '../../data.json';

function MainContent({ lang, setLang }) {
  return (
    <>
      <div className='main--content'>
        <div className='main--language '>
          <LanguageSelector lang={lang} setLang={setLang} />
        </div>
        <div className='main--hero'>
          <h4>{data[lang].header.greeting}</h4>
          <h1>Vytautas</h1>
          <h1>Jazepčikas</h1>
          <div className='main--hero--break'></div>
          <h2>{data[lang].header.profession}</h2>
          <Button
            color='red'
            href='https://github.com/vytautasjaz/vytautas-online/raw/master/public/assets/downloads/Vytautas_Jazepcikas_CV.pdf'
            width='w300'
          >
            {data[lang].header.cv}
          </Button>
        </div>
        <hr />
        <div className='main--container' id='about'>
          <h1>{data[lang].menu.item_1}</h1>
          <p>
            {data[lang].about.part1}
            <br /> <br /> {data[lang].about.part2}
          </p>
        </div>
        <div className='main--container' id='skills'>
          <h1>{data[lang].menu.item_2}</h1>
          <h2>{data[lang].skills.type1.name}</h2>
          <div className='subtitle'>{data[lang].skills.info}</div>
          <div className='main--container--skills'>
            <SkillsBar
              skill={data[lang].skills.type1.skill1.name}
              level={data[lang].skills.type1.skill1.description}
              progress='70'
              color='red'
            />
            <SkillsBar
              skill={data[lang].skills.type1.skill2.name}
              level={data[lang].skills.type1.skill2.description}
              progress='90'
              color='red'
            />
            <SkillsBar
              skill={data[lang].skills.type1.skill3.name}
              level={data[lang].skills.type1.skill3.description}
              progress='60'
              color='red'
            />
            <SkillsBar
              skill={data[lang].skills.type1.skill4.name}
              level={data[lang].skills.type1.skill4.description}
              progress='80'
              color='red'
            />
            <SkillsBar
              skill={data[lang].skills.type1.skill5.name}
              level={data[lang].skills.type1.skill5.description}
              progress='20'
              color='red'
            />
            <SkillsBar
              skill={data[lang].skills.type1.skill6.name}
              level={data[lang].skills.type1.skill6.description}
              progress='50'
              color='red'
            />
            <SkillsBar
              skill={data[lang].skills.type1.skill7.name}
              level={data[lang].skills.type1.skill7.description}
              progress='20'
              color='red'
              position='last'
            />
          </div>
          <h2>{data[lang].skills.type2.name}</h2>
          <div className='subtitle'>{data[lang].skills.info}</div>
          <div className='main--container--skills'>
            <SkillsBar
              skill={data[lang].skills.type2.skill1.name}
              level={data[lang].skills.type2.skill1.description}
              progress='90'
              color='blue'
            />
            <SkillsBar
              skill={data[lang].skills.type2.skill2.name}
              level={data[lang].skills.type2.skill2.description}
              progress='90'
              color='blue'
            />
            <SkillsBar
              skill={data[lang].skills.type2.skill3.name}
              level={data[lang].skills.type2.skill3.description}
              progress='60'
              color='blue'
            />
            <SkillsBar
              skill={data[lang].skills.type2.skill4.name}
              level={data[lang].skills.type2.skill4.description}
              progress='40'
              color='blue'
            />
          </div>
        </div>
        <div className='main--container' id='education'>
          <h1>{data[lang].menu.item_3}</h1>
          <EducationTimeline lang={lang} />
        </div>
        <div className='main--container' id='experience'>
          <h1>{data[lang].menu.item_4}</h1>
          <ExperienceTimeline lang={lang} />
        </div>
        <div className='main--container' id='portfolio'>
          <h1>{data[lang].menu.item_5}</h1>
          <Portfolio lang={lang} />
        </div>
        <div className='main--container' id='contact'>
          <h1>{data[lang].menu.item_6}</h1>
          <p>
            <strong>{data[lang].contact.mail}</strong>{' '}
            <a href='mailto:vytautasjaz@gmail.com'>vytautasjaz@gmail.com</a>{' '}
            <br />
            <strong>{data[lang].contact.phone}</strong> +370 672 14684
            <br />
            <br />
          </p>
          <ContactForm lang={lang} />
        </div>
      </div>
    </>
  );
}

export default MainContent;
