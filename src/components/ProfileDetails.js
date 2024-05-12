import React from 'react';
import { Box, Typography, List, Link } from '@mui/material';
import JobDetails from './JobDetails';
import EducationDetails from './EducationDetails';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Skills from './Skills';

const jobEntries = [
  {
    jobTitle: "Researcher",
    companyName: "Deutsches Forschungszentrum für Künstliche Intelligenz GmbH",
    startDate: "April 2022",
    endDate: "Present",
    activities: [
      { name: "Implemented teacher training system and supervised interaction data collection for ML", subActivities: [] },
      { name: "Developed and optimized Visual Scenemaker and Studymaster*** for conducting remote studies using expert controlled virtual avatars.", subActivities: [] },
      { name: "Collaborated with multidisciplinary teams to deliver socially intelligent agent systems in MITHOS*, UBIDENZ**, EASIER, Hymotion projects.", subActivities: [] }
    ]
  },
  {
    jobTitle: "Junior Researcher",
    companyName: "Deutsches Forschungszentrum für Künstliche Intelligenz GmbH",
    startDate: "August 2021 ",
    endDate: "March 2022",
    activities: [
      { name: "Spearheaded the development of the StudyMaster***, with ReactJS and Java.", subActivities: [] },
      { name: "Implemented several Face emotion recognition models, out of which, our MobileNet model achieved state-of-art classification results.", subActivities: [] },
      { name: "Contributed to the debugging and development of Visual SceneMaker.", subActivities: [] }
    ]
  },
  {
    jobTitle: "Student Research Assistant",
    companyName: "Deutsches Forschungszentrum für Künstliche Intelligenz GmbH",
    startDate: "August 2019",
    endDate: "July 2021",
    activities: [
      { name: "Trained Machine Learning & Deep Learning models for skin cancer classification.", subActivities: [] },
      { name: "Implemented the frontend & backend of a browser-based interactive object annotation tool.", subActivities: [] },
      { name: "Developed the frontend GUI of an interactive diary app to visualise recorded information over time.", subActivities: [] }
    ]
  },
];

const educationEntries = [
  {
    educationTitle: "Master of Science in Embedded Systems",
    institutionName: "Saarland University, Germany",
    startDate: "August 2019",
    endDate: "July 2021",
    activities: [
      { name: "Specialization in Computer Vision and Deep Learning", subActivities: [] },
      { name: "Relevant coursework: High Level Computer Vision, Neural Networks, Elements of Machine Learning, Software Engineering, Statistical Natural Language Processing, Stats with R, Image Processing and Computer Vision, etc.", subActivities: [] }
    ]
  },
  {
    educationTitle: "Bachelor of Science in Electronics and Communication",
    institutionName: "Nitte Meenakshi Institute of Technology, India",
    startDate: "August 2013",
    endDate: "May 2017",
    activities: [
      { name: "•	Relevant coursework: Artificial Neural Networks, Data Strucutures and Algorithms, Information Theory and Coding, Digital Signal Processing, Digital Communication", subActivities: [] },
    ]
  },
];

function ProfileDetails() {
  return (
    <Box sx={{ 
      justifyContent: 'left',
      alignItems: 'left',
      textAlign: 'left',
      padding:4, marginBottom: 4, backgroundColor: "#303030", borderRadius: "10px",
      minWidth: "95vw",
    }}>
      < Typography sx={{ margin: 4}} variant="h2" >Profile Details</Typography>
      <Box sx={{ padding:2, marginBottom: 4, backgroundColor: "dimgray", borderRadius: "10px",}}>
        <Typography variant="h5" gutterBottom>Skills</Typography>
          <Skills/>
      </Box>
      <Box sx={{ padding:2, marginBottom: 4, backgroundColor: "dimgray", borderRadius: "10px", }}>
        <Typography variant="h5" gutterBottom>Work Experience</Typography>
        <List>
          {jobEntries.map((job, index) => (
            <JobDetails
              key={index}
              jobTitle={job.jobTitle}
              companyName={job.companyName}
              startDate={job.startDate}
              endDate={job.endDate}
              activities={job.activities.map(activity => ({
                name: activity.name,
                subActivities: activity.subActivities,
                expanded: false,
                setExpanded: (value) => {}
              }))}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ padding:2, marginBottom: 4, backgroundColor: "dimgray", borderRadius: "10px", }}>
        <Typography variant="h5" gutterBottom>Education</Typography>
        <List>
        {educationEntries.map((edu, index) => (
            <EducationDetails
              key={index}
              educationTitle={edu.educationTitle}
              institutionName={edu.institutionName}
              startDate={edu.startDate}
              endDate={edu.endDate}
              activities={edu.activities.map(activity => ({
                name: activity.name,
                subActivities: activity.subActivities,
                expanded: false,
                setExpanded: (value) => {}
              }))}
            />
          ))}
        </List>
      </Box>

    </Box>
  );
}

export default ProfileDetails;
