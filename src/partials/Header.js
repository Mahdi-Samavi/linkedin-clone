import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Navigation from '../Components/Navigation';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';

export default function Header(props) {
    return (
        <header>
            <div className="header__left">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" className="header__logo">
                        <title>LinkedIn</title>
                        <g>
                            <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                        </g>
                    </svg>
                </a>
                <div className="header__search_box">
                    <SearchIcon/>
                    <input type="text" name="search" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <Navigation items={[
                    {icon: <HomeIcon/>, title: 'Home', url: '/', className: ' active'},
                    {icon: <PeopleIcon/>, title: 'My Network', url: '/', className: ''},
                    {icon: <WorkIcon/>, title: 'Jobs', url: '/', className: ''},
                    {icon: <MessageIcon/>, title: 'Messaging', url: '/', className: ''},
                    {icon: <NotificationsIcon/>, title: 'Notifications', url: '/', className: ''},
                    {icon: <AccountCircleIcon/>, title: 'Me', suffix: <ArrowDropDownIcon/>, url: '/', className: ''},
                    {icon: <AppsIcon/>, title: 'Work', suffix: <ArrowDropDownIcon/>, classes: 'primary_nav', url: '/', className: ''},
                    {title: 'Try Premium Free for 1 Month', url: '/', className: ''}
                ]}/>
            </div>
        </header>
    );
}