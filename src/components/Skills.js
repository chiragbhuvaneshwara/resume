import React from 'react';
import { Box } from '@mui/material';

const skillsList = [
  "Python",
  "Java",
  "R",
  "JavaScript",
  "C#",
  "HuggingFace",
  "LangChain",
  "ChromaDB",
  "OpenAI API",
  "Tensorflow",
  "PyTorch",
  "Pandas",
  "sklearn",
  "Flask",
  "ReactJS",
  "Apache Kafka",
  "Javalin",
  "Unity",
  "docker",
  "Git",
  "data preprocessing",
  "model training",
  "model evaluation",
  "prompt engineering"
];

function Skills() {
  return (
    <div>
      {skillsList.map((skill, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: '#f0f0f0', // Tray box background color
            padding: '10px',
            margin: '5px',
            borderRadius: '5px',
            fontWeight: 'bold',
            color: 'black',
            display: 'inline-block',
          }}
        >
          {skill}
        </Box>
      ))}
    </div>
  );
}

export default Skills;
