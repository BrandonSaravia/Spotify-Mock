import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';



const CustomContext = props => (
    <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
            <React.Fragment>
                <i class="fas fa-ellipsis-h" variant="contained" {...bindTrigger(popupState)}></i>
                
                <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Cake</MenuItem>
                    <MenuItem onClick={popupState.close}>Death</MenuItem>
                </Menu>
            </React.Fragment>
        )}
    </PopupState>
)

export default CustomContext