import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';



const CustomContext = props => (
    <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
            <React.Fragment>
                <i className="fal fa-ellipsis-h" variant="contained" {...bindTrigger(popupState)}></i>
                <Menu {...bindMenu(popupState)}  getContentAnchorEl={null} anchorOrigin={{vertical:"bottom",horizontal: 'left',}}>
                    <MenuItem onClick={() => window.location = "https://www.brandonsaravia.com/"}>Get to know me</MenuItem>
                    <MenuItem onClick={() => window.location = "https://github.com/BrandonSaravia"}>View my Github</MenuItem>
                    <MenuItem onClick={() => window.location = "https://www.linkedin.com/in/brandon-saravia-24b59b182/"}>View my LinkedIn</MenuItem>
                    <MenuItem onClick={() => window.location = "https://www.brandonsaravia.com/"}>Contact me</MenuItem>
                </Menu>
            </React.Fragment>
        )}
    </PopupState>
)

export default CustomContext