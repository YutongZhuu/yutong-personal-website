import Image from 'next/image'
import './globals.css'
import ExperienceItem from './components/ExperienceItem';
import { ProjectInfo } from './utilities/types';
import ProjectCard from './components/ProjectCard';
import Link from 'next/link';
const ProjectInfos: ProjectInfo[] = [
  {
    imageUri: "/LLVMWyvernSmall.png",
    techStacks: ["C++", "LLVM"],
    title: "LLVM Contributions",
    content: "Contributed to Clang frontend by enhancing the Diagnostic Module.",
    link1: "",
    link2: "https://github.com/llvm/llvm-project/pulls?q=is%3Amerged+is%3Apr+author%3AYutongZhuu+"
  }
];


export default function Home() {
  type Experience = {
    title: string;
    company: string;
    dateRange: string;
    description: string;
    defaultExpanded?: boolean;
  }

  const Experiences: Experience[] = [
    {
      title: 'Incoming Software Engineering Intern',
      company: "Snowflake - Menlo Park, CA",
      dateRange: 'Jan 2026 - Apr 2026',
      description: 'Will be working on database query engine',
    },
    {
      title: 'Undergraduate Research Assistant',
      company: 'University of Waterloo - Waterloo, ON',
      dateRange: 'Aug 2025 - Present',
      description: 'Assisted in research on Java type systems, supervised by Prof. Werner Dietl.',
    },
    {
      title: 'Compiler Software Engineering Intern',
      company: 'Huawei Canada - Markham, ON',
      dateRange: 'Jan 2025 - April 2025',
      description: 'Contributed to compiler optimization and profiling for HarmonyOS in the Mobile CPU team.'
    },
    {
      title: 'Test Automation Developer Intern',
      company: 'Tangam Systems - Waterloo, ON',
      dateRange: 'Sept 2024 - Aug 2024',
      description: 'Developed and maintained a automatin test suite using <strong>Cypress</strong> with <strong>JavaScript</strong> with <strong>SQL</strong> queries to ensure the quality of a full-stack web application.',
    },
    {
      title: 'Software Developer Intern',
      company: 'AUAV Tech Inc. - Calgary, AB',
      dateRange: 'Sept 2023 - Dec 2023',
      description: 'Led the development of an interactive exam preparation platform using <strong>React</strong>, <strong>Node.js</strong>, and <strong>AWS</strong>, enhancing user experience and security, and streamlined the deployment process.',
    }
  ];

  return (
    <div>
      <main className="font-heading bg-background overflow-hidden">
        <div className='h-screen bg-secondary'>
          <div className='h-full text-center flex md:flex-row-reverse flex-col md:flex-row w-full justify-around items-center bg-background arc-background lg:px-5'>
            <div className='' data-aos="fade-left">
              <Image className='right-0 left-0 mx-auto hidden md:block' src={"/logo.png"} alt="Desktop image" width={250} height={250} />
              <Image className='right-0 left-0 mx-auto md:hidden block' src={"/logo.png"} alt="Mobile image" width={100} height={100} />
            </div>
            <div className='md:text-left'>
              <h1 className='font-bold lg:text-6xl md:text-4xl w-2xl whitespace-nowrap leading-relaxed text-2xl'>
                Hi! My Name Is <span className='gradient'>Yutong</span> <span className='italic hollow'>Zhu</span>
                <br />
                <span className='lg:mt-6 block'>
                  A <span className='underline-animation inline-block after:bg-accent'>Software Developer</span>
                </span>
                <br />
              </h1>
              <div className='mt-10 lg:text-lg text-sm ' data-aos="fade-right">
                Computer Engineering student at <strong>the University of Waterloo.</strong>
              </div>
              <div className='flex lg:w-1/2 lg:flex-row justify-evenly lg:ml-10 mt-10'>
                <Link href='./MyResume.pdf' target='_blank'>
                  <button className='bg-secondary px-5 py-3 text-sm relative hover:-translate-y-1 ease-in duration-300 rounded'>View My Resume</button>
                </Link>
                <a href='mailto:y25zhu@outlook.com'>
                  <button className='bg-primary px-5 py-3 text-sm relative hover:-translate-y-1 ease-in duration-300 rounded hover:shadow-primary hover:shadow-lg '>Email Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-secondary flex flex-col px-10 justify-arround py-5 lg:flex-row pt-5 lg:pt-20 pb-10'>
          <h2 className='text-3xl lg:text-5xl w-1/3 flex mb-8 lg:justify-center' data-aos="fade-right">
            skills
          </h2>
          <ul className='text-sm leading-6 lg:text-lg lg:w-1/2' data-aos="fade-left">
            <li className='mb-2'>
              <span className='font-bold'>Programming Languages</span>:
              <span className='underline decoration-2 decoration-accent'> JavaScript</span>
              /TypeScript, SQL, C/C++, Python</li>
            <li className='mb-2'>
              <span className='font-bold'>Web Development</span>:
              <span className='underline decoration-2 decoration-accent'>React</span>, Next.js, Node.js, Express.js, Flask, MySQL, HTML5, CSS3, Tailwind CSS, Bootstrap, Material-UI</li>
            <li className='mb-2'>
              <span className='font-bold'>DevOps/Test</span>:
              AWS, Google Cloud Platform, Firebase, Git, Github, Gitlab, <span className='underline decoration-2 decoration-accent'>Cypress</span>, Selenium, Jest
            </li>
          </ul>
        </div>



        <div className='px-10 lg:flex py-20 justify-between border-b-2'>
          <h2 className='text-3xl lg:text-5xl w-1/3 flex mb-8 lg:justify-center lg:items-center' data-aos="fade-right">
            experiences
          </h2>
          <div className='lg:w-3/5' data-aos="fade-left">
            {Experiences.map(exp => (
              <ExperienceItem key={exp.title} {...exp} />
            ))}
          </div>
        </div>
        <div className='py-10 px-3 border-b-2 border-dashed border-slate-300 dashed-border'>
          <h2 className='text-3xl lg:text-5xl mb-8 w-full text-center' data-aos="fade-down">
            Personal Projects
          </h2>
          <div className=''></div>
          <div className='grid lg:grid-cols-3 gap-x-10 px-10 md:grid-cols-2 grid-cols-1 gap-y-5'>
            {
              ProjectInfos.map((projectInfo) => <ProjectCard {...projectInfo} key={projectInfo.title} />)
            }
          </div>
          <div />
        </div>
      </main>
    </div>
  )
}
