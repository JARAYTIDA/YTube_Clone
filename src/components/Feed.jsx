import {useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Height } from '@mui/icons-material';
import SideBar from './SideBar';
import Videos from './Videos';
import { FetchFromAPI } from '../utils/FetchFromAPI';

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([])

    {/* also passing some dependencies in use effect in array [] */}
    {/* [] meaning that the code inside useEffect function onlu run when we refresh the page */}
    {/* if we pass selectedCategory in [] then it will run when we select a category */}
    useEffect ( () => {
        FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    console.log(videos);

    return (
        <Stack sx={{flexDirection: {sx: "column", md:"row"}}}>
            <Box sx= {{height:{sx:'auto', md:'93vh'}, borderRight:' 1px solid #3d3d3d', px:{sx:0, md:2}}}>
                <SideBar
                    selectedCategory = {selectedCategory}
                    setSelectedCategory = {setSelectedCategory}
                />
                <Typography className='copyright' varient='body2' sx={{mt:1.5, color:"#fff"}}>
                    Copyright 2023 YTube
                </Typography>
            </Box>

            <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}} >
                {selectedCategory} <span style={{color:'#f31503'}}>
                        videos
                    </span>
                </Typography>
                <Videos videos = {videos}/>
            </Box>
        </Stack>
    )
}

export default Feed