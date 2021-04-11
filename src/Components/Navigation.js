import '../css/Navigation.css';

export default function Navigation(props) {
    return (
        <ul className="navigation">
            {props.items.map((item, index) => (
                <li key={index} className={item.classes}>
                    <a href={item.url} className={"nav_item" + item.className}>
                        {item.icon}
                        {
                            item.suffix
                            ? <span>{item.title}{item.suffix}</span>
                            : item.title
                        }
                    </a>
                </li>
            ))}
        </ul>
    );
}