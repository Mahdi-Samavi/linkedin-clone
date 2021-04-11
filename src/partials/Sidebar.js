import '../css/Sidebar.css';

export default function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebar__info card">
                <div className="sidebar__profile_bg_image"></div>
                <a href="/" alt="Mahdi Samavi">
                    <img 
                        src="https://media-exp1.licdn.com/dms/image/C5603AQGA33Z0QadD6Q/profile-displayphoto-shrink_100_100/0/1581908791580?e=1622073600&v=beta&t=sKPRRB3MPBwkAjdZiBfTyOCp7uh2fDJ5EzPg-fOzPWw"
                        width="64"
                        height="64"
                        alt="Photo of Mahdi Samavi"
                    />
                    <p>Mahdi Samavi</p>
                </a>
                <p>Full Stack Web Developer</p>
                <div className="sidebar__block">
                    <a href="/" alt="Grow your network" className="sidebar__grow_up">
                        <p>Connection<span>1</span></p>
                        <p>Grow your network</p>
                    </a>
                </div>
                <div className="sidebar__block">
                    <a href="/" alt="" className="sidebar__premium">
                        <p>Access exclusive tools & insights</p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" width="24" height="24" focusable="false">
                                <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
                                <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
                            </svg>
                            <p>Try Premium Free for 1 Month</p>
                        </div>
                    </a>
                </div>
                <div className="sidebar__block">
                    <a href="/" alt="My items" className="sidebar__items">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                            <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
                        </svg>
                        <p>My items</p>
                    </a>
                </div>
            </div>
        </div>
    );
}