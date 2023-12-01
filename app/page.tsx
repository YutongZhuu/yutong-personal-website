import Image from 'next/image'
import './globals.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Home() {
  return (
    <main className="font-heading bg-background">
      <div className='h-screen bg-secondary'>
        <div className='h-full text-center flex md:flex-row-reverse flex-col md:flex-row w-full justify-around items-center bg-background arc-background lg:px-5'>
          <div className=''>
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
            <div className='mt-10 lg:text-lg text-sm '>
              I'm a <strong>software developer</strong> based in Waterloo, Canada. <br />
              I'm currently studying <strong>Computer Engineering</strong> at the University of Waterloo. <br />
              I'm constantly seeking new and exciting experiences in the realm of software development.<br />
            </div>
            <div className='flex lg:w-1/2 lg:flex-row justify-evenly lg:ml-10 mt-10'>
              <button className='bg-secondary px-5 py-3 text-sm relative hover:-translate-y-1 ease-in duration-300 rounded'>More About Me</button>
              <button className='bg-primary px-5 py-3 text-sm relative hover:-translate-y-1 ease-in duration-300 rounded hover:shadow-primary hover:shadow-lg '>Contact Me</button>
            </div>
          </div>
        </div>
      </div>


      <div className='bg-secondary flex flex-col px-10 justify-arround py-5 lg:flex-row pt-5 lg:pt-20 pb-10'>
        <h2 className='text-3xl lg:text-5xl w-1/3 flex mb-8 lg:justify-center'>
          skills
        </h2>
        <ul className='text-sm leading-6 lg:text-lg lg:w-1/2'>
          <li className='mb-2'>
            <span className='font-bold'>Web Development</span>:
            <span className='underline decoration-2 decoration-accent'>JavaScript</span>
            /TypeScript,
            HTML/CSS, <span className='underline decoration-2 decoration-accent'>React</span>, Next.js, Node.js,  <span className='underline decoration-2 decoration-accent'>Express</span>, <span className='underline decoration-2 decoration-accent'>Tailwind CSS</span>, SASS, Firebase, SQL, MySQL</li>
          <li className='mb-2'><span className='font-bold'>DevOps</span>: AWS, <span className='underline decoration-2 decoration-accent'>Git</span>, GitHub, Microsoft Azure</li>
          <li><span className='font-bold'>Others</span>: C++, C#, Unity, VHDL, tensorflow.js</li>
        </ul>
      </div>



      <div className='px-10 lg:flex py-20 justify-between'>
        <h2 className='text-3xl lg:text-5xl w-1/3 flex mb-8 lg:justify-center lg:items-center'>
          experiences
        </h2>
        <div className='lg:w-3/5'>
          <Accordion style={{ background: 'transparent', boxShadow: 'none' }} defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ borderBottom: '1px solid #ddd', marginBottom: -1 }}
            >
              <Typography>
                  <span className='text-xl lg:text-2xl'>Software Developer Intern</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className=''>
                <span className='w-full px-2 block'>
                  <span className='text-md my-2 block lg:text-lg'>
                    AUAV Tech Inc. - Calgary, AB
                  </span>
                  <span className='text-sm my-2 block lg:text-base'>
                    Sept/2023 - Present
                  </span>
                  <span className='text-sm block lg:text-base'>
                    Led the development of an interactive exam preparation platform using <strong>React</strong>, <strong>Node.js</strong>, and <strong>AWS</strong>, enhancing user experience and security, and streamlined the deployment process.
                  </span>
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>


    </main>
  )
}
