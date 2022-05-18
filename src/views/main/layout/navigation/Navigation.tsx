import { HomeOutlined } from '@mui/icons-material';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NavButton from '../nav-button/Nav-button';
import Logo from '@Components/logo/Logo';

export default function Navigation() {
  return (
    <>
      <Logo previewOnly={false} to="home" />
      <NavButton icon={HomeOutlined} to="home" label="Home" />
      <NavButton icon={TagOutlinedIcon} to="explore" label="Explore" />
      <NavButton
        icon={NotificationsNoneOutlinedIcon}
        to="notifications"
        label="Notifications"
      />
      <NavButton icon={EmailOutlinedIcon} to="messages" label="Messages" />
      <NavButton
        icon={BookmarkBorderOutlinedIcon}
        to="bookmarks"
        label="Bookmarks"
      />
      <NavButton icon={PersonOutlinedIcon} to="profile" label="Profile" />
    </>
  );
}
