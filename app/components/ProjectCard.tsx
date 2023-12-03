import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { ProjectInfo } from '../utilities/types';

const ProjectCard: React.FC<ProjectInfo> = ({ imageUri, title, content, techStacks, link1, link2 }) => {
    return (
        <div className='text-left shadow-md rounded gradient-bg bg-white flex flex-col' data-aos="zoom-in">
            <Image src={imageUri} alt={`${title} Picture`} width={800} height={100} />
            <div className='px-4'>
                <h3 className='mt-4 text-lg font-bold'>
                    {title}
                </h3>
                <p className='mt-2 italic'>
                    {techStacks.map((techStack, i) => {
                        return i !== techStacks.length - 1 ? `${techStack}, ` : techStack
                    })}
                </p>
                <p className='py-8 text-base leading-relaxed'>
                    {content}
                </p>
            </div>
            <div className='flex justify-between mt-auto'>
                <Link href={link1} target="_black" className={`py-3 text-sm relative w-1/2 text-center border-t border-r bg-primary hover:bg-secondary transition 300 ease-linear none ${link1===""?'hidden':'block'}`}>
                    <button>Check it Out</button>
                </Link>
                <Link href={link2} target="_black" className={`py-3 text-sm relative text-center border-t border-r bg-primary hover:bg-secondary transition 300 ease-linear ${link1===""?'w-full': 'w-1/2'}`}>
                    <button><FaGithub className="left-0 right-0 mx-auto text-xl"/></button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;