import { Box, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box sx={{ padding: '5rem 1rem', marginTop: '5rem' }}>
      <Typography variant="h1">Home</Typography>
      <Typography>Welcome to the homepage.</Typography>
    </Box>
  )
}

export default Home