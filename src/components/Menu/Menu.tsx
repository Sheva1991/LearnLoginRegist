import React, { useCallback, useEffect, useRef, useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/Auth/actions';
import { useStyles } from './styles';



const MenuListComposition = () => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    const handleToggle = useCallback(() => {
        setOpen((prevOpen) => !prevOpen);
    }, [])

    const handleClose = useCallback(
        (event: React.MouseEvent<EventTarget>) => {
            if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
                return;
            }
            setOpen(false);
        }, [])

    const handleLogout = useCallback((e: React.MouseEvent<EventTarget>) => {
        dispatch(logout())
        handleClose(e)
    }, [dispatch, handleClose])

    const handleListKeyDown = useCallback((event: React.KeyboardEvent) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }, [])

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
            <div>
                <IconButton edge="start" color="inherit" ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}>
                    <MenuIcon />
                </IconButton>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose} component={NavLink} to={ROUTES.account.users}>Users</MenuItem>
                                        <MenuItem onClick={handleClose} component={NavLink} to={ROUTES.account.posts}>Posts</MenuItem>
                                        <MenuItem onClick={handleLogout} component={NavLink} to={ROUTES.auth.login}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}

export default MenuListComposition
