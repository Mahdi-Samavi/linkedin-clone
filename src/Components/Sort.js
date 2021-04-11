import { useEffect } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../css/Sort.css';

export default function Sort(props) {
    useEffect(() => {
        const sort_elements = document.getElementsByClassName('sort');
        Object.keys(sort_elements).forEach(key => {
            let sort_el = sort_elements[key];
            let value = sort_el.getAttribute('value');
            let option = sort_el.getElementsByClassName(value)[0];
            option.classList.add('active');
            sort_el.getElementsByClassName('type')[0].innerHTML = option.textContent;
        });
    });

    return (
        <div value={props.default} className="sort">
            <button {...props}>
                <span>Sort by:</span>
                <span className="type"></span>
                <ArrowDropDownIcon/>
            </button>
            <ul>
                <li><button className="top">Top</button></li>
                <li><button className="recent">Recent</button></li>
            </ul>
        </div>
    );
}