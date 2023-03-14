import * as React from 'react';
import SkillComponent from './SkillComponent';
import html from "../assets/skills/html-5.svg";
import css from '../assets/skills/css3.svg';
import javascript from '../assets/skills/javascript.svg';
import typescript from '../assets/skills/typescript.svg';
import react from '../assets/skills/react.svg';
import python from '../assets/skills/python.svg';
import cpp from '../assets/skills/cpp.svg';
import bash from '../assets/skills/bash.svg';
import aws from '../assets/skills/aws.svg';
import docker from '../assets/skills/docker.svg';
import git from '../assets/skills/git.svg';
import terraform from '../assets/skills/terraform.svg';
import postgresql from '../assets/skills/postgresql.svg';
import mongodb from '../assets/skills/mongodb.svg';
import tailwind from '../assets/skills/tailwind.svg';

const Skills = () => (
    <div className="bg-background  px-4 py-8">
        <h1 className="text-gray-300 text-4xl text-center py-3">SKILLS</h1>
        <div className="bg-gray-600 rounded-lg py-3 flex-auto">
            <p className='text-gray-100 text-lg px-8 text-bold'>Languages/Frameworks:</p>
            <div className="flex flex-wrap justify-center pb-2">
                <SkillComponent name="Python" img={python} />
                <SkillComponent name="C++" img={cpp} />
                <SkillComponent name="HTML" img={html} />
                <SkillComponent name="CSS" img={css} />
                <SkillComponent name="JavaScript" img={javascript} />
                <SkillComponent name="TypeScript" img={typescript} />
                <SkillComponent name="React" img={react} />
                <SkillComponent name="Bash" img={bash} />
            </div>
            <p className='text-gray-100 text-lg px-8 text-bold'>Other Tools/Technologies:</p>
            <div className="flex flex-wrap justify-center">
                <SkillComponent name="AWS" img={aws} />
                <SkillComponent name="Docker" img={docker} />
                <SkillComponent name="Terraform" img={terraform} />
                <SkillComponent name="PostgreSQL" img={postgresql} />
                <SkillComponent name="Git" img={git} />
                <SkillComponent name="MongoDB" img={mongodb} />
                <SkillComponent name="Tailwind" img={tailwind} />
            </div>
        </div>
    </div>
);

export default Skills;
export {};