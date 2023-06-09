import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utils/constants"
import SearchBar from "./SearchBar"


const Navbar = () => (
    <Stack direction = {{sm:'row', xs:'col'}} alignItems='center' p = {2} sx = {{position: "sticky", background: "#000", top: 0, justifyContent: 'space-between'}}>
        <Link to="/" style={{display:'flex', alignItems:'center'}}>
            <img src={logo} alt="logo" height={45}/>
            <h1 p = {3} style={{marginLeft:'14px' ,color:'white', font:'bold'}}>YTube</h1>
        </Link>

        <SearchBar/>
    </Stack>   
)

export default Navbar