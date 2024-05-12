import React, { useState } from 'react';
import { ListItem, ListItemText, Collapse, IconButton, Grid, List } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';

function JobDetails({ jobTitle, companyName, startDate, endDate, activities }) {
  const [expanded, setExpanded] = useState(false);

  const handleJobExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <ListItem>
        <Grid container alignItems="center" spacing={2}>
        <Grid item xs={2}>
            <ListItemText
              primary={jobTitle}
            />
          </Grid>
          <Grid item xs={6}>
            <ListItemText
              secondary={companyName}
            />
          </Grid>
          <Grid item xs={2}>
            <ListItemText secondary={`${startDate} - ${endDate}`} />
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={handleJobExpand}>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div style={{ padding: '20px' }}>
          <List>
            {activities.map((activity, index) => (
              <ActivityDetails key={index} {...activity} />
            ))}
          </List>
        </div>
      </Collapse>
    </>
  );
}

function ActivityDetails({ name, subActivities }) {
  const [expanded, setExpanded] = useState(false);

  const handleActivityExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div >
      <ListItem>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={11}>
            <ListItemText primary={name} />
          </Grid>
          {subActivities && subActivities.length > 0 && (
            <Grid item xs={1}>
              <IconButton onClick={handleActivityExpand}>
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Grid>
          )}
        </Grid>
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div style={{ padding: '20px' }}>
          <List>
            {subActivities && subActivities.map((subActivity, index) => (
              <ListItem key={index}>
                <ListItemText primary={subActivity} />
              </ListItem>
            ))}
          </List>
        </div>
      </Collapse>
    </div>
  );
}

export default JobDetails;
