import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Button, Form, Nav } from 'react-bootstrap';
import { AiOutlineLeft } from 'react-icons/ai'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './ViewProduct.css'
import { EligibiltyTable } from './EligibiltyTable';


// TABS 
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
  
// ENDS


export const ViewProduct1 = () => {

  const navigate = useNavigate()

  const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div id='main'>

        <div class='row top-design'>
            <Card bg='Light' className='product-card'>
                <Card.Body>
                    <Card.Text>
                        <div class='card-heading'>
                            <AiOutlineLeft id='arrow-icon' onClick={() => navigate('/Catalogue')} /> 
                            <h5 class='card-heading-text'> CG Protect </h5>
                        </div>

                        <div class='card-content'>
                            <div> 
                                Health Insurance Limited have joined hands to bring you the benefits of health and life insurance 
                            </div>
                            <div> in a comprehensive and affordable Click 2 Protect Health. So nothing comes in the way as </div>
                            <div> you and your family lead a life of pride. </div>
                        </div>

                        <div class='whatsapp-share'>
                            <i class="bi bi-share-fill share"></i>
                            <i class="bi bi-whatsapp whatsapp"></i>
                        </div>

                        <div class='btns'>
                            <Button id='calculate-btn'> CALCULATE PREMIUM </Button>
                            <Button id='get-btn' onClick={() => navigate('/AddNewLeadForm')}> GET QUOTE </Button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>


        {/* TABS  */}
        <div class='row'>
            <Box sx={{ width: '100%' }}>
    
                <Box>
                    <Tabs value={value} onChange={handleChange} textColor="#212121" indicatorColor="primary">
                    <Tab label='Eligibility' id='tab-1'/>
                    <Tab label='Benefits' id='tab-1'/>
                    <Tab label='Servicing' id='tab-1'/>
                    <Tab label='Investors' id='tab-1'/>
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}> <EligibiltyTable /> </TabPanel>

                <TabPanel value={value} index={1}> Benefits </TabPanel>

                <TabPanel value={value} index={2}> Servicing </TabPanel>

                <TabPanel value={value} index={3}> Investors </TabPanel>

            </Box>
        </div>

    </div>
  )
}
