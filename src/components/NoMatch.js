import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {

  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {
        value === index && (
          <Box sx={{ p: 3 }}>
            <Typography> {children} </Typography>
          </Box>
        )
      }
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


export default function BasicTabs() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item Onee" />
          <Tab label="Item Twoo" />
          <Tab label="Item Threee" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}> Item One </TabPanel>

      <TabPanel value={value} index={1}> Item Two </TabPanel>

      <TabPanel value={value} index={2}> Item Three </TabPanel>

    </Box>
  );
}







// import React from 'react'

// function NoMatch () {
//   return (
//     <div>
//       <h1> Page Not Found </h1>
//     </div>
//   )
// }

// export default NoMatch
