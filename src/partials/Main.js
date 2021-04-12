import PublicIcon from '@material-ui/icons/Public';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DescriptionIcon from '@material-ui/icons/Description';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PostOpt from '../Components/PostOpt';
import Sort from '../Components/Sort';
import Posts from '../Components/Posts';
import '../css/Main.css';

export default function Main(props) {
    return (
        <div className="main">
            <div className="main__share_box card">
                <div className="main__row">
                    <a href="/" alt="Mahdi Samavi">
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C5603AQGA33Z0QadD6Q/profile-displayphoto-shrink_100_100/0/1581908791580?e=1622073600&v=beta&t=sKPRRB3MPBwkAjdZiBfTyOCp7uh2fDJ5EzPg-fOzPWw"
                            width="48"
                            height="48"
                            alt="Photo of Mahdi Samavi"
                        />
                    </a>
                    <button type="button" name="share" className="model" data-model-id="send_post" data-model-title="Create a post">Start a post</button>
                    <div id="send_post">
                        <div className="main__model_header">
                            <img
                                src="https://media-exp1.licdn.com/dms/image/C5603AQGA33Z0QadD6Q/profile-displayphoto-shrink_100_100/0/1581908791580?e=1622073600&v=beta&t=sKPRRB3MPBwkAjdZiBfTyOCp7uh2fDJ5EzPg-fOzPWw"
                                width="48"
                                height="48"
                                alt="Photo of Mahdi Samavi"
                            />
                            <div>
                                <p>Mahdi Samavi</p>
                                <button type="button">
                                    <PublicIcon />
                                    <span>Anyone</span>
                                    <ArrowDropDownIcon />
                                </button>
                            </div>
                        </div>
                        <form>
                            <textarea name="content" value="" placeholder="What do you want to talk about?" />
                            <div>
                                <button>Post</button>
                                <div>
                                    <PostOpt options={[
                                        {icon: <AddIcon />, action: ''},
                                        {icon: <PhotoIcon />, action: ''},
                                        {icon: <YouTubeIcon />, action: ''},
                                        {icon: <DescriptionIcon />, action: ''}
                                    ]} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="main__row">
                    <div className="main__post_options">
                        <a href="/" className="main__post_option_photo">
                            <PhotoSizeSelectActualIcon/>
                            Photo
                        </a>
                        <a href="/" className="main__post_option_video">
                            <YouTubeIcon/>
                            Video
                        </a>
                        <a href="/" className="main__post_option_event">
                            <EventIcon/>
                            Event
                        </a>
                        <a href="/" className="main__post_option_write_article">
                            <AssignmentIcon/>
                            Write article
                        </a>
                    </div>
                </div>
            </div>

            <Sort default="top" className="main__sort_by" />

            <Posts />
        </div>
    );
}