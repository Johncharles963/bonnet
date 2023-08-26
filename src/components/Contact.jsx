import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


const Contact = () => {
    return (
        <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '40px', minHeight: '80vh', justifyContent: 'space-evenly' }}>
            <Typography variant="h4" component="p">
                Lets Get In Touch
            </Typography>
            <Box sx={{ backgroundColor: '#FBFAF5', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '20px' }}>
                <a style={{textDecoration: 'none'}} href="tel:555-555-5555" target='_blank'>
                    <SmartphoneIcon />
                    <Typography variant="h5" component="p">
                        Call Me
                    </Typography>
                    <Typography variant="h6" component="p">
                        123-456-78991
                    </Typography>
                </a>
            </Box>
            <Box sx={{ backgroundColor: '#FBFAF5', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '20px' }}>
                <a style={{textDecoration: 'none'}}  href="mailto:email@example.com"  target='_blank'>
                    <AlternateEmailIcon />
                    <Typography variant="h5" component="p">
                        Email Me
                    </Typography>
                    <Typography variant="h6" component="p">
                        claudesEmail@example.com
                    </Typography>
                </a>
            </Box>
        </Box>
    )
}

export default Contact