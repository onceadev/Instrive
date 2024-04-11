import React, { useState } from 'react';
import { Typography, Container, Box, FormControl, FormLabel, TextareaAutosize, TextField, Button } from '@mui/material';

function Portfolio() {
  const [boxCount, setBoxCount] = useState(1);

  const addNewBox = () => {
    setBoxCount(boxCount + 1);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" color="initial">
        Tell us more about yourself
      </Typography>
      <form>
        {[...Array(boxCount)].map((_, index) => (
          <Box key={index} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <TextField
                name={`productName${index}`}
                type='text'
                placeholder='Product Name'
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Product portfolio Description</FormLabel>
              <TextareaAutosize
                minRows={5}
                variant="outlined"
                name={`portfolioDescription${index}`}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Facebook/Linkedin page URL</FormLabel>
              <TextField
                name={`pageUrl${index}`}
                type='url'
              />
            </FormControl>
          </Box>
        ))}
        <Button variant="outlined" sx={{ width: "100%", my: 4 }} onClick={addNewBox}> ADD NEW PRODUCT </Button>
        <Box sx={{ display: "flex", gap: 2, mb: 10 }}>
          <Button variant="outlined" sx={{ width: "40%" }} > BACK </Button>
          <Button variant="contained" sx={{ width: 1 }} type="submit">CONTINUE</Button>
        </Box>
      </form>
    </Container>
  );
}

export default Portfolio;
