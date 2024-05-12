import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Typography } from '@mui/material';
import { Card, CardActionArea, CardMedia, Box, Link } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function ProjectElement({ image, name, associatedWith, description, tools, link }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea onClick={handleClickOpen}>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={name}
            />
            <Box sx={{ p: 2, pt: 0 }}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
            </Box>
          </CardActionArea>
        </Card>
      </Grid>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent dividers>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={name}
            sx={{ marginBottom: 2 }}
          />
          <div style={{ padding: '20px' }}>
            <Typography gutterBottom variant="h6">Associated With:</Typography>
            <Typography style={{ marginLeft: '20px' }} gutterBottom>{associatedWith}</Typography>
            <Typography gutterBottom variant="h6">Description:</Typography>
            <Typography style={{ marginLeft: '20px' }} gutterBottom>{description}</Typography>
            <Typography gutterBottom variant="h6">Tools and Packages:</Typography>
            <Typography style={{ marginLeft: '20px' }} gutterBottom>{tools}</Typography>
            <Typography gutterBottom variant="h6">Project Link:</Typography>
            <Link style={{ marginLeft: '20px' }} href={link} target="_blank" rel="noopener">{link}</Link>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// export default ProjectElement;





// Define project data
const projectsData = [
  {
    // image: `url(${process.env.PUBLIC_URL}/ProjectRAG.png)`,
    image: "https://media.licdn.com/dms/image/sync/D4E27AQF9LpYRSr8PnA/articleshare-shrink_800/0/1715382851455?e=1716080400&v=beta&t=13EnzJlodFlSehZjoR5baKPYb6Xx_eIEpTfbPGNrERU",
    associatedWith: "Personal project",
    description: "Developed a system to extract data from any uploaded PDF file using the Unstructured Python library. The extracted information is then converted into chunks that can be processed into embeddings using one of the available open source German language embedding models from HuggingFace. A vectorstore is then initialised with these embeddings and a retirever is set up using LangChain. Finally, I used LangChain prompt templates to initialise a prompt with roles and embed the user query into the prompt, along with the relevant retrieved bits of the document. This prompt is then passed into the LLM to achieve retrieval augmented generation.",
    tools: "Python, HuggingFace, LangChain, ChromaDB, OpenAI API",
    name: "Retrieval augmented generation",
    link: "https://github.com/chiragbhuvaneshwara/llmexps/tree/main"
  },
  // Add more projects as needed
  {
    // image: `url(${process.env.PUBLIC_URL}/ProjectRAG.png)`,
    image: "https://t3.ftcdn.net/jpg/05/17/31/54/360_F_517315479_5APCsHqS3fFO0NAHewzDu9XS8Y2PhLBy.jpg",
    associatedWith: "Researcher at DFKI GmbH",
    description: "TCreated StudyMaster, a React-based UI connected to Java backend, that controls virtual characters in Wizard of Oz experiments in real-time. Enabled remote studies with ~100 people.",
    tools: "Java, Javalin, WebSockets, ReactJS, HTML, CSS",
    name: "Studymaster",
    link: "TBD"
  },
  {
    // image: `url(${process.env.PUBLIC_URL}/ProjectRAG.png)`,
    image: "https://t3.ftcdn.net/jpg/05/17/31/54/360_F_517315479_5APCsHqS3fFO0NAHewzDu9XS8Y2PhLBy.jpg",
    associatedWith: "Research Assistant at DFKI GmbH",
    description: "Created a browser based tool that allows a user to upload images and have them pre-annotated using Facebook’s detectron based Mask RCNN model and then the GUI allows for the editing of the annotations as needed by the user.",
    tools: "Python, Pytorch, Flask, ReactJS, detectron2, Mask RCNN",
    name: "Interactive Object Annotation Tool",
    link: "https://drive.google.com/drive/folders/1AamLEUlZf-oAIYlse_5ZReCHvDwgJA1s"
  },
  {
    // image: `url(${process.env.PUBLIC_URL}/ProjectRAG.png)`,
    image: "https://t3.ftcdn.net/jpg/05/17/31/54/360_F_517315479_5APCsHqS3fFO0NAHewzDu9XS8Y2PhLBy.jpg",
    associatedWith: "Master Thesis Student at Saarland University and DFKI GmbH",
    description: "Interactive controller system that allows a user to control the boxing motions of a virtual character. The motions are synthesised by a Pytorch neural network in Flask backend and REST interface to enable movement of virtual character in Unity.",
    tools: "Python, Tensorflow, Keras, Flask, Unity, Blender",
    name: "Interactive neural based Boxing Character Controller",
    link: "https://github.com/chiragbhuvaneshwara/interactive_neural_boxing.git"
  },
];

function Projects() {
  return (
    <Box
      sx={{
        justifyContent: 'left',
        alignItems: 'left',
        textAlign: 'left',
        padding: 4,
        marginBottom: 4,
        backgroundColor: "#303030",
        borderRadius: "10px",
        width: "95vw",
      }}
    >
      <Typography sx={{ margin: 4 }} variant="h2">Projects</Typography>
      <Grid container spacing={4}>
        {projectsData.map((project, index) => (
          <ProjectElement
            key={index}
            image={project.image}
            associatedWith={project.associatedWith}
            description={project.description}
            tools={project.tools}
            name={project.name}
            link={project.link}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;



// function Projects() {
//   return (
//     <Box sx={{ 
//       justifyContent: 'left',
//       alignItems: 'left',
//       textAlign: 'left',
//       padding:4, marginBottom: 4, backgroundColor: "#303030", borderRadius: "10px",
//       width: "95vw",
//     }}>
//       <Typography sx={{ margin: 4}} variant="h2">Projects</Typography>
//       <Grid container spacing={4}>
//         <ProjectElement
//           image="https://images.template.net/wp-content/uploads/2016/11/07130359/Cafe-Menu-Template.jpg"
//           associatedWith = "job 1"
//           description = "Yo yo yo."
//           tools = "X, Y, Z"
//           name="Project 1"
//           link="project_link_1"
//         />
//                 <ProjectElement
//           image="https://images.template.net/wp-content/uploads/2016/11/07130359/Cafe-Menu-Template.jpg"
//           associatedWith = "job 1"
//           description = "Yo yo yo."
//           tools = "X, Y, Z"
//           name="Project 1"
//           link="project_link_1"
//         />
//                 <ProjectElement
//           image="https://images.template.net/wp-content/uploads/2016/11/07130359/Cafe-Menu-Template.jpg"
//           associatedWith = "job 1"
//           description = "Yo yo yo."
//           tools = "X, Y, Z"
//           name="Project 1"
//           link="project_link_1"
//         />
//                 <ProjectElement
//           image="https://images.template.net/wp-content/uploads/2016/11/07130359/Cafe-Menu-Template.jpg"
//           associatedWith = "job 1"
//           description = "Yo yo yo."
//           tools = "X, Y, Z"
//           name="Project 1"
//           link="project_link_1"
//         />
//       </Grid>

//     </Box>
//   );
// }

// export default Projects;