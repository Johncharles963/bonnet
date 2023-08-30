import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import { TimeToLeaveTwoTone } from '@mui/icons-material';

const Schedule = ({ minHeight = '200px', maxHeight = '300px', height = '30vh', minWidth = '200px', maxWidth = '500px', width = '80vw' }) => {
    const n = 35
    const [currentYear, setCurrentYear] = useState();
    const [currentMonth, setCurrentMonth] = useState();
    const [currentDay, setCurrentDay] = useState(1);
    const [firstDayOfMonth, setFirstDayOfMonth] = useState();
    const [lastDayOfMonth, setLastDayOfMonth] = useState();
    const [lastDayOPrvfMonth, setLastDayOfPrvMonth] = useState();
    const takenDays = [
        {
            year: 2023,
            month: 7,
            day: 15
        },
        {
            year: 2023,
            month: 8,
            day: 2
        },
        {
            year: 2023,
            month: 9,
            day: 28
        }
    ]
    const takenHours = [
        '8 am',
        '1 pm'
    ]
    const hours = useRef()
    const name = useRef()
    const time = useRef()


    const dayNames = ["Sunday", "Monday", "Tuesday", 'Wednesday', "Thursday", "Friday", "Saturday"]
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    useEffect(() => {
        // Update the document title using the browser API
        const d = new Date();
        setCurrentYear(d.getFullYear())
        setCurrentMonth(d.getMonth())
        let arr = []
        for (let i = 8; i <= 16; i++) {
            i < 12 ? arr.push(`${i} am`) : i === 12 ? arr.push(`${i} pm`) : arr.push(`${i - 12} pm`)

        }
        hours.current = arr

        // console.log(`${d.getFullYear()}-${d.getMonth()}-01`,d2,dayNames[d2.getDay()], d2.getDay(), currentMonth)
    }, []);

    useEffect(() => {
        // Update the document title using the browser API
        console.log(`${currentYear}-${currentMonth + 1}-01`)
        const d = new Date(currentYear, currentMonth, 1);
        setFirstDayOfMonth(d.getDay())
        setLastDayOfMonth(new Date(currentYear, currentMonth + 1, 0).getDate())
        setLastDayOfPrvMonth(new Date(currentYear, currentMonth, 0).getDate())
        console.log(d, dayNames[d.getDay()], d.getDay(), currentMonth)
    }, [currentMonth]);

    const nextMonth = () => {
        if (currentMonth >= 11) {
            setCurrentMonth(0)
            setCurrentYear(currentYear + 1)
        }
        else {
            setCurrentMonth(currentMonth + 1)
        }
    }
    const prevMonth = () => {
        if (currentMonth <= 0) {
            setCurrentMonth(11)
            setCurrentYear(currentYear - 1)
        }
        else {
            setCurrentMonth(currentMonth - 1)
        }
    }
    const calculate = (i) => {
        return i < firstDayOfMonth || i > lastDayOfMonth + (firstDayOfMonth - 1) || takenDays.find((element) => (element.day == (i - firstDayOfMonth + 1) && element.month == currentMonth && element.year == currentYear))
    }
    const dateClicked = (i) => {
        if (!calculate(i)) {
            console.log('available date clicked')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name.current.value, time.current.value)
    }
    console.log(currentMonth, firstDayOfMonth, lastDayOfMonth, currentYear)
    console.log(hours)
    return (
        <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '60px'}}>
            <Box  sx={{display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography variant="h4" component="p">
                    {currentYear}
                </Typography>
                <Typography variant="h4" component="p">
                    {months[currentMonth]}
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                <Button sx={{border: '2px solid lightcoral', width: '40%', borderRadius: '20px', color: 'black',}} onClick={() => { prevMonth() }}>prev</Button>
                <Button sx={{width: '40%', borderRadius: '20px', color: 'black', border: '2px solid lightcoral'}} onClick={() => { nextMonth() }}>next</Button>
                </Box>
                <Box sx={{
                    display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
                    height: height,
                    width: width,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    minHeight: minHeight,
                    minWidth: minWidth,
                }}>
                    {[...Array(n)].map((e, i) => (
                        <div onClick={(e) => dateClicked(i)} key={i} style={{ border: '1px solid black', height: '20%', width: '13%', backgroundColor: calculate(i) ? 'grey' : 'white', cursor: calculate(i) ? 'not-allowed' : 'pointer' }}>
                            {firstDayOfMonth && lastDayOPrvfMonth &&
                                i < firstDayOfMonth ? lastDayOPrvfMonth - (firstDayOfMonth - i - 1) : i > lastDayOfMonth + (firstDayOfMonth - 1) ? i - (lastDayOfMonth + firstDayOfMonth - 1) : `${i - firstDayOfMonth + 1}`
                            }
                        </div>
                    ))}
                </Box>
            </Box>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <Box >
                        <select ref={time} style={{ width: '100%', height: '40px', borderRadius: '5px' }}>
                            {hours?.current?.map((hour, index) => (
                                <option disabled={takenHours.includes(hour) ? true : false} style={{ backgroundColor: takenHours.includes(hour) ? 'grey' : 'white' }} value={hour} key={`hour${index}`}>{hour}</option>
                            ))}
                        </select>
                    </Box>
                    <TextField inputProps={{ ref: name }} label="Name" variant="outlined" />
                    <Button  sx={{backgroundColor: 'lightCoral', color: 'white', '&:focus': { backgroundColor: 'lightblue' }}} type="submit">Submit</Button>
                </Box>
            </form>
        </Box>
    )
}


// function IsVerify({children}) {
//     const {data: auth} = useQuery(IS_USER_AUTHENTICATED);

//     if(auth?.isUserAuthenticated === true) {
//         return(<>{children}</>);
//     } else {
//         return(<Verify/>)
//     }
// }

export default Schedule