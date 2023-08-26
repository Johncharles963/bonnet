import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


const Contact = () => {
    return (
        <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '40px', minHeight: '80vh', justifyContent: 'space-evenly', width: '90%' }}>
            <Typography sx={{fontWeight: '550'}} variant="h4" component="p">
                Lets Get In Touch!
            </Typography>
            <Box sx={{ backgroundColor: '#FBFAF5', display: 'flex', flexDirection: 'column', padding: '15px', borderRadius: '20px' }}>
                <a style={{textDecoration: 'none', display: 'flex',  flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '20px',  padding: '15px', color: 'black'}} href="tel:203-868-0433" target='_blank'>
                    <SmartphoneIcon sx={{color: '#820f49', fontSize: '40px'}}  />
                    <Typography sx={{color: '#0035da', fontWeight: 'bold'}}  variant="h5" component="p">
                        Call Me
                    </Typography>
                    <Typography sx={{color: '#0035da', fontWeight: 'bold'}} variant="h6" component="p">
                        203-868-0433
                    </Typography>
                </a>
            </Box>
            <Box sx={{ backgroundColor: '#FBFAF5', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '15px', borderRadius: '20px'}}>
                <a style={{textDecoration: 'none', display: 'flex',  flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '20px',  padding: '15px'}}  href="mailto:claude.luvier.bonnet@gmail.com"  target='_blank'>
                    <AlternateEmailIcon sx={{color: '#820f49', fontSize: '40px'}} />
                    <Typography sx={{color: '#0035da', fontWeight: 'bold'}} variant="h5" component="p">
                        Email Me
                    </Typography>
                    <p className='email'  sx={{color: '#0035da', fontWeight: 'bold', fontSize: {xs: '18px', sm: '20px'}}} >
                        claude.luvier.bonnet@gmail.com
                    </p>
                </a>
            </Box>
        </Box>
    )
}
// #002391
export default Contact