import AddIcon from '@material-ui/icons/Add';
import '../css/Follows.css';

export default function Follows(props) {
    return (
        <ul className="Follows">
            {props.follows.map((follow, index) => (
                <li key={index} className="Follows__item">
                    <a href="/">
                        <img width="48" height="48" src={follow.image} />
                    </a>
                    <div>
                        <span>{follow.name}</span>
                        <button>
                            <AddIcon />
                            Follow
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}