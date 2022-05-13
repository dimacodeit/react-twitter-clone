import { HomeOutlined } from '@mui/icons-material';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NavButton from '../nav-button/Nav-button';
import Logo from '../../logo/Logo';

export default function Navigation() {
  return (
    <>
      <Logo previewOnly={false} to="home" />
      <NavButton icon={HomeOutlined} to="home" title="Home" />
      <NavButton icon={TagOutlinedIcon} to="explore" title="Explore" />
      <NavButton
        icon={NotificationsNoneOutlinedIcon}
        to="notifications"
        title="Notifications"
      />
      <NavButton icon={EmailOutlinedIcon} to="messages" title="Messages" />
      <NavButton
        icon={BookmarkBorderOutlinedIcon}
        to="bookmarks"
        title="Bookmarks"
      />
      <NavButton icon={PersonOutlinedIcon} to="profile" title="Profile" />
    </>
  );
}
