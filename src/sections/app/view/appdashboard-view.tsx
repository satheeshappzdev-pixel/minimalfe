/* eslint-disable perfectionist/sort-imports */
import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TableContainer from '@mui/material/TableContainer';
import { useTheme } from '@mui/material/styles';

import { DashboardContent } from 'src/layouts/dashboard';

import { Chart } from 'src/components/chart';
import { Iconify } from 'src/components/iconify';


// Mock data for invoices
const invoices = [
  { id: 'INV-1990', category: 'Android', price: 83.74, status: 'Paid' },
  { id: 'INV-1991', category: 'Mac', price: 97.14, status: 'Out of date' },
  { id: 'INV-1992', category: 'Windows', price: 68.71, status: 'Progress' },
  { id: 'INV-1993', category: 'Android', price: 85.21, status: 'Paid' },
  { id: 'INV-1994', category: 'Mac', price: 52.17, status: 'Paid' },
];

// Mock data for applications
const applications = [
  {
    name: 'Microsoft office 365',
    price: 'Free',
    users: '9.91k',
    storage: '9.68 Mb',
    rating: '9.01k',
    icon: '🔵',
    color: '#5F6EF5',
  },
  {
    name: 'Opera',
    price: 'Free',
    users: '1.95k',
    storage: '1.9 Mb',
    rating: '1.95k',
    icon: '🔴',
    color: '#FF5252',
  },
  {
    name: 'Adobe acrobat reader DC',
    price: '$68.71',
    users: '9.12k',
    storage: '8.91 Mb',
    rating: '9.12k',
    icon: '📄',
    color: '#DC2626',
  },
  {
    name: 'Joplin',
    price: 'Free',
    users: '6.98k',
    storage: '6.82 Mb',
    rating: '6.98k',
    icon: '📝',
    color: '#3B82F6',
  },
  {
    name: 'Topaz photo AI',
    price: '$52.17',
    users: '8.49k',
    storage: '9.29 Mb',
    rating: '8.49k',
    icon: '🖼️',
    color: '#6366F1',
  },
];

// Mock data for countries
const countries = [
  { name: 'Germany', flag: '🇩🇪', users: '9.91k', orders: '1.95k', sales: '9.12k' },
  { name: 'England', flag: '🇬🇧', users: '1.95k', orders: '9.12k', sales: '6.98k' },
  { name: 'France', flag: '🇫🇷', users: '9.12k', orders: '6.98k', sales: '8.49k' },
  { name: 'Korean', flag: '🇰🇷', users: '6.98k', orders: '8.49k', sales: '2.03k' },
  { name: 'USA', flag: '🇺🇸', users: '8.49k', orders: '2.03k', sales: '3.36k' },
];

// Mock data for authors
const authors = [
  { name: 'Jayvion Simon', followers: '9.91k', trophy: 'gold' },
  { name: 'Deja Brady', followers: '9.12k', trophy: 'silver' },
  { name: 'Lucian Obrien', followers: '1.95k', trophy: 'bronze' },
];

export function AppDashboardView() {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState('All times');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'success';
      case 'Out of date':
        return 'error';
      case 'Progress':
        return 'warning';
      default:
        return 'default';
    }
  };

  const renderMetricCard = (
    title: string,
    value: string | number,
    change: number,
    sparklineData: number[]
  ) => {
    const isPositive = change >= 0;
    const chartColor = isPositive ? theme.palette.success.main : theme.palette.error.main;

    return (
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {title}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                {value}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: isPositive ? 'success.main' : 'error.main',
                }}
              >
                <Iconify
                  icon={isPositive ? 'eva:trending-up-fill' : 'eva:trending-down-fill'}
                  width={16}
                />
                <Typography variant="body2" sx={{ ml: 0.5, fontWeight: 500 }}>
                  {isPositive ? '+' : ''}
                  {change}%
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                  last 7 days
                </Typography>
              </Box>
            </Box>

            <Box sx={{ width: 80, height: 60 }}>
              <Chart
                type="bar"
                series={[{ data: sparklineData }]}
                options={{
                  chart: {
                    sparkline: { enabled: true },
                    toolbar: { show: false },
                  },
                  plotOptions: {
                    bar: {
                      columnWidth: '80%',
                      borderRadius: 2,
                    },
                  },
                  colors: [chartColor],
                  tooltip: { enabled: false },
                  states: {
                    hover: { filter: { type: 'none' } },
                    active: { filter: { type: 'none' } },
                  },
                }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  };

  const renderCircularProgress = (value: number, label: string, color: string) => (
    <Card sx={{ background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)` }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h3" color="white" sx={{ fontWeight: 600 }}>
              {value.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="white" sx={{ opacity: 0.8 }}>
              {label}
            </Typography>
          </Box>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                border: `8px solid rgba(255,255,255,0.3)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h6" color="white" sx={{ fontWeight: 600 }}>
                {label === 'Conversion' ? '48%' : '75%'}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <DashboardContent maxWidth={false}>
      <Card sx={{ mb: 3, bgcolor: 'grey.900', color: 'white' }}>
        <CardContent
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3 }}
        >
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Welcome back 👋
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Jaydon Frankie
            </Typography>
            <Typography variant="body2" color="grey.400" sx={{ mt: 1, mb: 2, maxWidth: 500 }}>
              If you are going to use a passage of Lorem Ipsum, you need to be sure there
              isn&apos;t anything.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Go now
            </Button>
          </Box>
          <Box component="img" src="/assets/illustrations/character-1.png" sx={{ height: 150 }} />
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {renderMetricCard('Total active users', '18,765', 2.6, [22, 8, 35, 50, 82, 84, 77, 12])}
          {renderMetricCard('Total installed', '4,876', 0.2, [56, 47, 40, 62, 73, 30, 23, 54])}
          {renderMetricCard('Total downloads', '678', -0.1, [40, 70, 50, 28, 70, 75, 7, 64])}
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
            gap: 3,
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                New Invoices
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Invoice ID</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.id} hover>
                        <TableCell>{invoice.id}</TableCell>
                        <TableCell>{invoice.category}</TableCell>
                        <TableCell>${invoice.price}</TableCell>
                        <TableCell>
                          <Chip
                            label={invoice.status}
                            color={getStatusColor(invoice.status)}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton size="small">
                            <Iconify icon="eva:more-vertical-fill" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>View all</Button>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent sx={{ p: 2.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, px: 0.5 }}>
                Related applications
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  mb: 2.5,
                  px: 0.5,
                  bgcolor: 'grey.100',
                  p: 0.5,
                  borderRadius: 1,
                }}
              >
                {['Top 7 days', 'Top 30 days', 'All times'].map((tab) => (
                  <Button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    variant={selectedTab === tab ? 'contained' : 'text'}
                    size="small"
                    sx={{
                      flex: 1,
                      textTransform: 'none',
                      fontWeight: 500,
                      fontSize: '0.75rem',
                      py: 0.75,
                      bgcolor: selectedTab === tab ? 'white' : 'transparent',
                      color: selectedTab === tab ? 'text.primary' : 'text.secondary',
                      boxShadow: selectedTab === tab ? 1 : 0,
                      '&:hover': {
                        bgcolor: selectedTab === tab ? 'white' : 'grey.200',
                      },
                    }}
                  >
                    {tab}
                  </Button>
                ))}
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {applications.map((app, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      p: 1,
                      borderRadius: 1.5,
                      transition: 'background-color 0.2s',
                      '&:hover': { bgcolor: 'action.hover' },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1 }}>
                      <Avatar
                        sx={{
                          bgcolor: app.color,
                          width: 40,
                          height: 40,
                          fontSize: '1.25rem',
                        }}
                      >
                        {app.icon}
                      </Avatar>

                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {app.name}
                        </Typography>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            flexWrap: 'wrap',
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Iconify
                              icon={'solar:users-group-rounded-bold' as any}
                              width={14}
                              sx={{ color: 'text.secondary' }}
                            />
                            <Typography variant="caption" color="text.secondary">
                              {app.users}
                            </Typography>
                          </Box>

                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Iconify
                              icon={'solar:database-bold' as any}
                              width={14}
                              sx={{ color: 'text.secondary' }}
                            />
                            <Typography variant="caption" color="text.secondary">
                              {app.storage}
                            </Typography>
                          </Box>

                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Iconify
                              icon={'solar:star-bold' as any}
                              width={14}
                              sx={{ color: 'warning.main' }}
                            />
                            <Typography variant="caption" color="text.secondary">
                              {app.rating}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                        color: app.price === 'Free' ? 'success.main' : 'primary.main',
                        ml: 1,
                      }}
                    >
                      {app.price}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Top installed countries
              </Typography>
              {countries.map((country, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2,
                    p: 1,
                    borderRadius: 1,
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                    <Typography variant="h5">{country.flag}</Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {country.name}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 3 }}>
                    <Typography variant="caption" color="text.secondary">
                      👤 {country.users}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      📦 {country.orders}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      💰 {country.sales}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Top authors
              </Typography>
              {authors.map((author, index) => {
                const trophyColor =
                  author.trophy === 'gold'
                    ? '#FFD700'
                    : author.trophy === 'silver'
                      ? '#C0C0C0'
                      : '#CD7F32';

                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 2,
                      p: 1,
                      borderRadius: 1,
                      '&:hover': { bgcolor: 'action.hover' },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar>{author.name.charAt(0)}</Avatar>
                      <Box>
                        <Typography variant="body2" fontWeight={600}>
                          {author.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          ❤️ {author.followers}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: trophyColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                      }}
                    >
                      🏆
                    </Box>
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {renderCircularProgress(38566, 'Conversion', '#00796B')}
          {renderCircularProgress(55566, 'Applications', '#1565C0')}
        </Box>
      </Box>
    </DashboardContent>
  );
}
