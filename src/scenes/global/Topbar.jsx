import { Box, IconButton, useTheme } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { tokens } from "../../theme.js";


const Topbar = () => {
    const theme = useTheme();
    const color = tokens(theme.palette.mode);

    return <Box display="flex" backgroundColor={color.secondary[100]} justifyContent="space-between" p={2}>

        {/* SearchBar*/}
        <Box
            display="flex"
            backgroundColor={color.primary[100]}
            borderRadius="3px"
        >

        </Box>

        {/* Icons*/}
        <Box
            display="flex"
        >


            <IconButton>
                <PersonOutlinedIcon />
            </IconButton>



        </Box>



    </Box>;


};

export default Topbar;