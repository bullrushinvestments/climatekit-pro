import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { CircularProgress, Box, Typography, Button, TextField, Grid } from '@mui/material';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpec>({
    id: 0,
    name: '',
    description: ''
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpecification({
      ...specification,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/business-specifications', specification);
      // Reset form or handle success state
    } catch (err) {
      setError('Failed to create business specification.');
    }

    setLoading(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="name"
            label="Business Specification Name"
            name="name"
            autoComplete="business-specification-name"
            value={specification.name}
            onChange={handleChange}
            aria-describedby="business-specification-name-helper-text"
            helperText={
              error && 'business-specification-name' in (error as any) ? (error as any)['business-specification-name'] : ''
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            autoComplete="description"
            value={specification.description}
            onChange={handleChange}
            aria-describedby="business-specification-description-helper-text"
            helperText={
              error && 'description' in (error as any) ? (error as any)['description'] : ''
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            aria-label="Create Business Specification"
            className={clsx('create-button', { 'spinner': loading })}
          >
            {loading ? <CircularProgress size={24} /> : 'Create'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { CircularProgress, Box, Typography, Button, TextField, Grid } from '@mui/material';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpec>({
    id: 0,
    name: '',
    description: ''
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpecification({
      ...specification,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/business-specifications', specification);
      // Reset form or handle success state
    } catch (err) {
      setError('Failed to create business specification.');
    }

    setLoading(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="name"
            label="Business Specification Name"
            name="name"
            autoComplete="business-specification-name"
            value={specification.name}
            onChange={handleChange}
            aria-describedby="business-specification-name-helper-text"
            helperText={
              error && 'business-specification-name' in (error as any) ? (error as any)['business-specification-name'] : ''
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            autoComplete="description"
            value={specification.description}
            onChange={handleChange}
            aria-describedby="business-specification-description-helper-text"
            helperText={
              error && 'description' in (error as any) ? (error as any)['description'] : ''
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            aria-label="Create Business Specification"
            className={clsx('create-button', { 'spinner': loading })}
          >
            {loading ? <CircularProgress size={24} /> : 'Create'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateBusinessSpecification;