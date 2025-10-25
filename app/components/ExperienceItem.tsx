import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props = {
  title: string;
  company: string;
  dateRange: string;
  description: string;
  defaultExpanded?: boolean;
}

const ExperienceItem: React.FC<Props> = ({ title, company, dateRange, description, defaultExpanded = true }) => {
  return (
    <Accordion style={{ background: 'transparent', boxShadow: 'none' }} defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id={`panel-${title}`}
        style={{ borderBottom: '1px solid #ddd', marginBottom: -1 }}
      >
        <Typography>
          <span className='text-xl lg:text-2xl'>{title}</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <span className='w-full px-2 block'>
            <span className='text-md my-2 block lg:text-lg'>
              {company}
            </span>
            <span className='text-sm my-2 block lg:text-base'>
              {dateRange}
            </span>
            <span className='text-sm block lg:text-base' dangerouslySetInnerHTML={{ __html: description }} />
          </span>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default ExperienceItem;
