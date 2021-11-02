import React, {useState, Fragment} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from '../Assets/Ploop.svg'
import LogoutIcon from '@mui/icons-material/Logout'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import {Link, useHistory} from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Navbar() {

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logout= () => {
    localStorage.clear();
    history.push("/login")
  }

  const history = useHistory();

  const list = (anchor) => (
    <Box m={2} pt={3}
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
            {[{id: 1, title: 'Home', Path: '/'}, {id: 2,title: 'Settings', Path: '/settings'}].map((item, index) => (
                <Link className="navbar-links" to={item.Path}>
                    <ListItem button key={item.id}>
                        <ListItemIcon>
                        {index % 2 === 0 ? <HomeIcon /> : <SettingsIcon />}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItem>
                </Link>
            ))}
        </List>
        <Divider />
        <List>
            {[{title: "Logout"}].map((item, index) => (
                    <ListItem button key={item.title} onClick={logout}>
                        <ListItemIcon>
                        {<LogoutIcon />}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItem>
            ))}
        </List>
    </Box>
  );    

  return (
    <div className="navbar--container">
        <img src={logo} alt="ploop logo"/>
        <div className="burguer-menu">
        {['right'].map((anchor) => (
            <Fragment key={anchor}>
            <Button 
                onClick={toggleDrawer(anchor, true)} 
                sx={{
                    fontSize: "300%",
                    color: "#7F5F20",
                }}>
                    =
            </Button>
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
            </Fragment>
        ))}
        </div>
    </div>
  );
}