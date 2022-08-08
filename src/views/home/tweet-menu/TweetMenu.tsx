import React, { FunctionComponent } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useAppSelector } from '@Hooks/redux';
import menuOption, { ITEM_HEIGHT } from '../constants/tweet-menu';
import CardEvent from '../models/enums';
import { TweetMenuOption } from '../models/types';

interface TweetMenuProps {
  onOption: (option: string) => void;
  tweetName: string;
}

const predicate = (login: string | null, name: string) => (item: TweetMenuOption) => {
  if (item.value === CardEvent.Bookmark) return true;
  return login === name;
};

const TweetMenu: FunctionComponent<TweetMenuProps> = ({
  onOption,
  tweetName,
}) => {
  const { login } = useAppSelector((state) => state.authReducer);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {menuOption.filter(predicate(login, tweetName)).map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => {
              onOption(option.value);
              handleClose();
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default TweetMenu;
