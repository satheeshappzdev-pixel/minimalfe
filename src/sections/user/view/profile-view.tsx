import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ProfileView() {
  const [formData, setFormData] = useState({
    firstName: 'Orla',
    middleName: '',
    lastName: 'Dirlik',
    city: 'Brazil',
    username: '',
    password: '************',
    email: 'dirla@example.com',
    phone: '+90 532 530 76',
    alternatePhone: '+90 444 530 11',
    address: '',
    country: '',
    postalCode: '',
  });

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', formData);
    // Add your save logic here
  };

  return (
    <DashboardContent maxWidth={false}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4">Edit Profile</Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Left Section - Profile Form */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card sx={{ p: 3 }}>
            {/* General Section */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                GENERAL
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <TextField
                    fullWidth
                    label="First Name"
                    value={formData.firstName}
                    onChange={handleChange('firstName')}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <TextField
                    fullWidth
                    label="Middle Name"
                    value={formData.middleName}
                    onChange={handleChange('middleName')}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    value={formData.lastName}
                    onChange={handleChange('lastName')}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="City"
                    value={formData.city}
                    onChange={handleChange('city')}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Account Section */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                ACCOUNT
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Username"
                    value={formData.username}
                    onChange={handleChange('username')}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <Button size="small" variant="text">
                            SHOW
                          </Button>
                        ),
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Re-Type Password"
                    type="password"
                    slotProps={{
                      input: {
                        endAdornment: (
                          <Button size="small" variant="text">
                            SHOW
                          </Button>
                        ),
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange('password')}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <Button size="small" variant="text">
                            SHOW
                          </Button>
                        ),
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Contact Section */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                CONTACT
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <TextField
                    fullWidth
                    label="Mobile Phone"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <TextField
                    fullWidth
                    label="Alternate Phone"
                    value={formData.alternatePhone}
                    onChange={handleChange('alternatePhone')}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <TextField
                    fullWidth
                    label="Address"
                    value={formData.address}
                    onChange={handleChange('address')}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <TextField
                    fullWidth
                    label="City"
                    value={formData.city}
                    onChange={handleChange('city')}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <TextField
                    fullWidth
                    label="Country"
                    value={formData.country}
                    onChange={handleChange('country')}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 3 }}>
              <Button variant="outlined" color="inherit">
                Cancel
              </Button>
              <Button variant="contained" color="primary" onClick={handleSaveChanges}>
                Save Changes
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* Right Section - Profile Card */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ p: 3, textAlign: 'center' }}>
            {/* Avatar with Edit Toggle */}
            <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
              <Avatar
                src="/assets/images/avatar/avatar-25.webp"
                alt="Orla Dirlik"
                sx={{ width: 120, height: 120, mx: 'auto' }}
              />
            </Box>

            {/* Name and Role */}
            <Typography variant="h6" sx={{ mb: 0.5 }}>
              Orla Dirlik
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Programmer
            </Typography>

            {/* Stats */}
            <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 3 }}>
              <Box>
                <Typography variant="h6">228</Typography>
                <Typography variant="caption" color="text.secondary">
                  Posts
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">4,442</Typography>
                <Typography variant="caption" color="text.secondary">
                  Followers
                </Typography>
              </Box>
            </Box>

            {/* Contact Info */}
            <Box sx={{ mb: 3, textAlign: 'left' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Iconify icon="solar:settings-bold-duotone" width={20} />
                <Typography variant="body2">+90 532 530 76</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Iconify icon="solar:pen-bold" width={20} />
                <Typography variant="body2">dirla@example.com</Typography>
              </Box>
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <IconButton
                sx={{
                  bgcolor: 'primary.lighter',
                  '&:hover': { bgcolor: 'primary.light' },
                }}
              >
                <Iconify icon="solar:share-bold" width={24} />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: 'info.lighter',
                  '&:hover': { bgcolor: 'info.light' },
                }}
              >
                <Iconify icon="solar:eye-bold" width={24} />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: 'error.lighter',
                  '&:hover': { bgcolor: 'error.light' },
                }}
              >
                <Iconify icon="solar:cart-3-bold" width={24} />
              </IconButton>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
