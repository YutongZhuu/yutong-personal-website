"use client"

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AppBar, Toolbar, Typography, Button, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
const navButtons = [{ text: "Home", url:"/" }];
const Nav: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <Paper style={{ backgroundColor: '#eff6f4' }}> {/* Replace #yourColorHere with your desired color */}
            <List>
                {navButtons.map((navButton, index) => (
                    <ListItem  key={index}>
                        <ListItemText primary={navButton.text} className='text-center' />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );

    return (
        <AppBar position="fixed" style={{ background: '#eff6f4', boxShadow: 'none' }} className='border-b'>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <div className='flex w-20 justify-between text-text'>
                        <Link href="https://github.com/YutongZhuu" target='_blank'>
                            <FaGithub />
                        </Link>
                        <Link href="https://www.linkedin.com/in/yutongzhu27/" target='_blank'>
                            <FaLinkedin /> 
                        </Link>
                    </div>
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={handleDrawerToggle}
                            style={{ color: "black" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor={'bottom'}
                            open={drawerOpen}
                            onClose={handleDrawerToggle}
                        >
                            {drawer}
                        </Drawer>
                    </>
                ) : (
                    navButtons.map((navButton, index) => (
                        <Link href={navButton.url} key={index}>
                            <Button style={{ color: "black" }}>
                                {navButton.text}
                            </Button>
                        </Link>
                    ))
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
