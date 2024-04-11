import React, { useState } from 'react';
import { Typography, Container, Box, FormControl, FormLabel, TextareaAutosize, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { companyInfoSchema } from '../features/actions'; 
import { getDataCompany } from '../features/reducer'; 
import { useNavigate } from 'react-router-dom';

function CompanyInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    briefCompanyProfile: "",
    pageUrl: "",
    vision: "",
    name: "",
    designation: "",
    profileSummary: "",
    linkedinProfile: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await companyInfoSchema.validate(formData, { abortEarly: false });
      dispatch(getDataCompany(formData));
      navigate('/portfolio');
    } catch (error) {
      if (error.name === 'ValidationError') {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      }
    }
  };
  const handleBack = () => {
    navigate('/');
  };
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" color="initial">
        Tell us more about yourself
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <FormControl>
            <FormLabel>Brief company profile</FormLabel>
            <TextareaAutosize
              minRows={5}
              variant="outlined"
              name="briefCompanyProfile"
              value={formData.briefCompanyProfile}
              onChange={handleChange}
            />
            {errors.briefCompanyProfile && (
              <Typography color="error">{errors.briefCompanyProfile}</Typography>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Facebook/Linkedin page URL</FormLabel>
            <TextField
              name="pageUrl"
              type='url'
              value={formData.pageUrl}
              onChange={handleChange}
            />
            {errors.pageUrl && (
              <Typography color="error">{errors.pageUrl}</Typography>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Vision / Mission</FormLabel>
            <TextareaAutosize
              minRows={5}
              variant="outlined"
              name="vision"
              value={formData.vision}
              onChange={handleChange}
            />
            {errors.vision && (
              <Typography color="error">{errors.vision}</Typography>
            )}
          </FormControl>
        </Box>
          <Typography variant="h2" color="initial">
            Management Team Details
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <TextField
              name="name"
              type='text'
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <Typography color="error">{errors.name}</Typography>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Designation</FormLabel>
            <TextField
              name="designation"
              type='text'
              value={formData.designation}
              onChange={handleChange}
            />
            {errors.designation && (
              <Typography color="error">{errors.designation}</Typography>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Profile Summary</FormLabel>
            <TextareaAutosize
              minRows={5}
              variant="outlined"
              name="profileSummary"
              value={formData.profileSummary}
              onChange={handleChange}
            />
            {errors.profileSummary && (
              <Typography color="error">{errors.profileSummary}</Typography>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Linkedin page URL</FormLabel>
            <TextField
              name="linkedinProfile"
              type='url'
              value={formData.linkedinProfile}
              onChange={handleChange}
            />
            {errors.linkedinProfile && (
              <Typography color="error">{errors.linkedinProfile}</Typography>
            )}
          </FormControl>
        </Box>
        <Button variant="outlined" sx={{width: "100%", my: 4}} > ADD MEMBERS </Button>
        <Box sx={{display: "flex", gap: 2, mb: 10}}>
          <Button variant="outlined" sx={{width: "40%"}} onClick={() => handleBack()}> BACK </Button>
          <Button variant="contained" sx={{width: 1}} type="submit">CONTINUE</Button>
        </Box>
      </form>
    </Container>
  );
}

export default CompanyInfo;
