import React, { useState, useEffect } from 'react';
import { tokens } from "../theme";
import { Box, Typography, CircularProgress, useTheme } from '@mui/material';
import image from './assets/menu.png';

const UsersInfo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography color="error">{`Error: ${error}`}</Typography>
      </Box>
    );
  }

  const firstUser = users.length > 0 ? users[0] : null;

  return (
    <Box p={3} m="40px 0 0 0" height="auto">
      {/* Welcome Box */}
      <Box
        p={2}
        m="20px 0"
        sx={{
          border: `2px solid ${colors.primary[200]}`,
          borderRadius: '8px',
          backgroundColor: colors.background.default,
          boxShadow: 2
        }}
      >
        <Typography variant="h4">Welcome Madonna</Typography>
      </Box>

      {/* Display the menu image */}
      <Box display="flex" justifyContent="center" m="20px 0">
        <img
          src={image}
          alt="Menu"
          width="600"
          height="auto"
        />
      </Box>

      {/* History Section */}
      <Box
        p={4}
        m="20px 0"
        sx={{
          border: `3px solid ${colors.secondary[300]}`,
          borderRadius: '8px',
          backgroundColor: colors.background.default,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          History
        </Typography>
        <Typography variant="h6" paragraph>
          My Great Great Great Grandmother Bridget Dolan and her children (11) left Ireland around 1848 and arrived in Philadelphia, PA, on April 1849. 
          Many family members then moved to Clinton County in Iowa in the early 1850s.
        </Typography>
        <Typography variant="h6" paragraph>
          It is only fitting we honor her name and the name of an Irish Saint well known and celebrated in Ireland (St. Brigid). 
          Between my Irish dad and then visiting Ireland, I grew up never knowing a stranger. 
          My parents raised us under the tradition of welcoming people to our kitchen and table.
        </Typography>
      </Box>

      {/* Everyone is Welcomed Section */}
        <Box
          p={4}
          m="20px 0"
          sx={{
            border: `3px solid ${colors.secondary[300]}`,
            borderRadius: '8px',
            backgroundColor: colors.background.default,
            boxShadow: 3,
            textAlign: 'justify',
          }}
        >
          <Typography variant="h4" gutterBottom>
          A community that gathers together grows together          </Typography>
          <Typography variant="h6" paragraph>
            My husband and I enjoy welcoming people to our community and now in retirement wish to help it grow. 
            Irish Pubs are a natural attraction for hospitality, great conversations, and a community hub or hangout.
          </Typography>
          <Typography variant="h6" paragraph>
            We welcome you to join us here at Bridgetâ€™s not to watch TV, not to catch up on tech browsing but to meet 
            your neighbors and visitors to our community. You may come as a stranger and be welcomed when you return as a friend.
          </Typography>
        </Box>

      {firstUser ? (
        <Box>
          <Box display="flex" m="40px 0 0 0" height="auto">
            <Typography variant="h3">{firstUser.name}</Typography>
          </Box>
          <Box
            p={4}
            sx={{
              border: `3px solid ${colors.secondary[200]}`,
              borderRadius: '8px',
              backgroundColor: colors.background.default,
              boxShadow: 3,
            }}
          >
            <Typography variant="h3" gutterBottom>
              User Information
            </Typography>
            <Typography variant="h5" p={1}>Username: {firstUser.username}</Typography>
            <Typography variant="h5" p={1}>Email: {firstUser.email}</Typography>
            <Typography variant="h5" p={1}>Phone: {firstUser.phone}</Typography>
            <Typography variant="h5" p={1}>Website: {firstUser.website}</Typography>
          </Box>
        </Box>
      ) : (
        <Typography>No users available</Typography>
      )}
    </Box>
  );
};

export default UsersInfo;