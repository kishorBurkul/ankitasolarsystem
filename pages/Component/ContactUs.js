import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Box, Typography, Paper, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactUs = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('mobile', values.mobile);
    formData.append('message', values.message);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxUr-6hesAv7K9HF32VdUwej6cnLteRfco4sP5lNzovhDMKroP1QAYw2iHTOTYGkrDOWA/exec",
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      );

      if (response.ok || response.type === 'opaque') {
        console.log("data ", response)
        alert("Thank you, the form has been submitted successfully");
        resetForm();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Box
        sx={{
          background: 'url("assets/project_1.jpeg") no-repeat center center',
          backgroundSize: 'cover',
          minHeight: { xs: "60vh", md: "40vh", sm: "40vh", lg: "40vh", xl: "40vh" },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 1200 }}>
          <Typography align="center" variant="h4" gutterBottom mt={4}>
            <strong>Get In Touch</strong>
          </Typography>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item md={6} lg={6} sm={6} display="flex" justifyContent="center">
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: 3,
                  padding: 3,
                  width: '100%',
                  transition: 'background-color 0.3s, color 0.3s',
                  '&:hover': {
                    backgroundColor: 'gray',
                    color: 'white',
                  },
                }}
              >
                <Typography variant="h6" component="h3" mb={2} fontWeight="fontWeightBold">
                  <span>Vadgaon Bk</span>, Pune
                </Typography>
                <Box mb={2} display="flex" alignItems="center">
                  <LocationOnIcon sx={{ color: '#d44638' }} />
                  <Typography>
                    <strong>Office Address:</strong>-
                    Shop No.1 FL S No.42 HISS No. Sinhgad Road , Venutai Chavan College Road Vadgaon Budruk, Pune , 
                    Maharashtra 411041 
                  </Typography>
                </Box>
                <Box mb={2} display="flex" alignItems="center">
                  <EmailIcon sx={{ color: '#d44638' }} />
                  <Typography>
                    <strong>Email:</strong> anitasolar.mh@gmail.com
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <PhoneIcon sx={{ color: '#d44638' }} />
                  <Typography>
                    <strong>Mobile:</strong> +91 9623612594 / 8668844972
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} lg={5} sm={6} xs={12}>
              <Paper sx={{ padding: 2, border: 2, borderColor: "orange", borderRadius: "10px" }}>
                <Formik
                  initialValues={{ name: '', email: '', mobile: '', message: '' }}
                  onSubmit={handleSubmit}
                >
                  {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography variant="h5" gutterBottom align='center' color="blue">
                          <strong> Reach Us</strong>
                        </Typography>
                        <Field
                          name="name"
                          as={TextField}
                          label="Name"
                          variant="outlined"
                          fullWidth
                          required
                        />
                        <Field
                          name="email"
                          as={TextField}
                          label="Email"
                          type="email"
                          variant="outlined"
                          required
                        />
                        <Field
                          name="mobile"
                          as={TextField}
                          label="Mobile"
                          type="tel"
                          variant="outlined"
                          required
                        />
                        <Field
                          name="message"
                          as={TextField}
                          label="Message"
                          variant="outlined"
                          multiline
                          rows={4}
                          required
                        />
                        <Button type="submit" variant="outlined" size="medium"
                          sx={{
                            backgroundColor: "#fd5b03",
                            borderRadius: "20px",
                            color: "white",
                            width: "50%",
                            margin: "0 auto",
                            '&:hover': {
                              backgroundColor: 'blue'
                            }
                          }}>
                          Submit
                        </Button>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
