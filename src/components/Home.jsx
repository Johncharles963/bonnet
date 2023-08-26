import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';



const Home = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '40px'}}>
            <Box sx={{maxWidth: '400px', maxHeight: '400px', alignSelf: 'center', overflow: 'hidden', borderRadius: '100%', backgroundColor: 'lightBlue'}}>
                <img style={{ height: '100%', width: '100%' }} src="https://lh3.googleusercontent.com/pw/AIL4fc-JU_313uQ1UTM4CJHCbBbzhWBe_U5O78w1dKOjpBFgggwwsJ6jM8isfQIIVp6zeslGBcpwr6jeSwgV-_MJesv4OM8NkOcUWwpufmwpzoEhPWeol4b5MoB9z20coq1LCvBUkAlSri62unuXdM4LAnSvEg=w408-h612-s-no?authuser=0" />
            </Box>
            <Box>
            <Typography variant="h4" component="p">
              Hi, I'm Claude-Luvier Bonnet.
            </Typography>
            <Typography sx={{marginTop: '15px'}} variant="h5" component="p">
              MSN, APRN, FNP-C
            </Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Button onClick={(e)=>{navigate('/about')}} sx={{border: '2px solid lightcoral', width: '150px', borderRadius: '20px', color: 'black',}} >
              About Me
            </Button>
            <Button onClick={(e)=>{navigate('/contact')}} sx={{border: '2px solid lightcoral', width: '150px', borderRadius: '20px',  color: 'black'}} >
              Contact Me
            </Button>
            </Box>
        </Box>
    )
}
// https://lh3.googleusercontent.com/pw/AIL4fc-JU_313uQ1UTM4CJHCbBbzhWBe_U5O78w1dKOjpBFgggwwsJ6jM8isfQIIVp6zeslGBcpwr6jeSwgV-_MJesv4OM8NkOcUWwpufmwpzoEhPWeol4b5MoB9z20coq1LCvBUkAlSri62unuXdM4LAnSvEg=w408-h612-s-no?authuser=0
//  https://lh3.googleusercontent.com/pw/AIL4fc_tqpi-Vtn1DcAdtl1xH5aYAnvSUoIIlJm_eCDx_-bIQUVALMdhN_uiaPSpGUvMEk3FnL_y6TWbjpHu39MCQBj6LDuI832iYxhshC3RuKwnMEahB_VbhPqztugoXv8h4qLMCL7Rz1_G_-8i-gV_uzlp7w=w1066-h1600-s-no?authuser=0
export default Home