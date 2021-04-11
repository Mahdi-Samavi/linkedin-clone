import InfoIcon from '@material-ui/icons/Info';
import Follows from '../Components/Follows';
import '../css/Aside.css';

export default function Aside(props) {
    return (
        <div className="aside">
            <div className="aside__feed_follows card">
                <div className="aside__feed_follows_header">
                    <span>Add to your feed</span>
                    <InfoIcon />
                </div>
                <Follows follows={[
                    {name: 'Firebase', image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQH4mWlWY2w9VQ/company-logo_200_200/0/1519919471350?e=1626307200&v=beta&t=47UXSPqC2pma5f3oPXvf3kr6wtFQcrmf9uYocwuhweU'},
                    {name: 'Google Cloud', image: 'https://media-exp1.licdn.com/dms/image/C560BAQFIFLR7jxm2lg/company-logo_100_100/0/1600274556510?e=1626307200&v=beta&t=zNp2kZiTQstUFVP99_c0IFGdSozUEzZGxtvfzseUgrw'},
                    {name: 'Google Developers', image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEx8fTz8QFKvw/company-logo_200_200/0/1615318650285?e=1626307200&v=beta&t=-SSKd3GHzdyEl1e3wSuZNoB90pHt3lGHIRHt8vuI6nY'},
                    {name: 'Google AdSense', image: 'https://media-exp1.licdn.com/dms/image/C560BAQHUVg4Fv8Kcmg/company-logo_200_200/0/1580988263268?e=1626307200&v=beta&t=Io3-0BuJaObscr-wFD-DoLc3mHkGHSO0iEwN8vKOUhY'},
                ]} />
            </div>
        </div>
    );
}