import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const About = () => {
    return (
        <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '40px'}}>
            <Typography variant="h4" component="p">
                Who Is Claude?
            </Typography>
            <Box>
                <Box sx={{ padding: '20px', backgroundColor: '#FBFAF5' }}>
                    <Typography variant="body1" component="p">
                        Claude Bonnet is a highly accomplished healthcare professional with a diverse academic background and extensive experience in the field.
                        Holding a Bachelor of Science in Biochemistry and French from Union College, Claude possesses a unique blend of scientific knowledge and linguistic proficiency.
                        Building upon this foundation, he pursued a Master of Science in Nursing from Yale School of Nursing, graduating in 2022.
                    </Typography>
                </Box>
                <Box sx={{ padding: '20px', backgroundColor: '#F5F6FB' }}>
                    <Typography variant="body1" component="p">
                        As a registered nurse and a board-certified
                        Family Nurse Practitioner, Claude is committed to delivering exceptional care to patients across the lifespan. Currently serving as an officer in the United States Public Health Service,
                        Claude works diligently in the Bureau of Prisons as a Family Nurse Practitioner. His expertise and dedication contribute to the provision of comprehensive healthcare services to incarcerated
                        individuals and their future m communities.
                    </Typography>
                </Box>
                <Box sx={{ padding: '20px', backgroundColor: '#FBFAF5' }}>
                    <Typography variant="body1" component="p">Beyond his professional endeavors, Claude is a devoted family man,
                        cherishing his role as a husband and father to one child. With a passion for healthcare, a strong educational background, and a commitment to serving others,
                        Claude Bonnet continues to make a positive impact in his field and the lives of those he cares for.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default About