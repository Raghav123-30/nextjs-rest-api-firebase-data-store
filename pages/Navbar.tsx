import AppBar from '@mui/material/AppBar'
import  Toolbar  from '@mui/material/Toolbar';
import Link from 'next/link';
import Button from '@mui/material/Button'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Navbar = () => {
    return(
        <div style={{marginBottom:'5.5rem'}}>
            <AppBar sx={{color:'primary'}}>
                <Toolbar className='toolbar' >
                    <AdminPanelSettingsIcon ></AdminPanelSettingsIcon>
                  <Button variant='text'  sx={{color:'white'}}>
                    
                    <Link className='LinkText' href="/add">Add Feedbacks</Link>
                  </Button>
                  <Button variant='text' sx={{color:'white'}}>
                   
                    <Link className='LinkText' href="/modify">Modify Vendor</Link>
                  </Button>
                  <Button variant='text'  sx={{color:'white'}}>
                    
                    <Link className='LinkText' href="/stats">View stats</Link>
                  </Button>
                  <Button variant='text'  sx={{color:'white'}}>
                    
                    <Link className='LinkText' href="/logout">Log out</Link>
                  </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar; 