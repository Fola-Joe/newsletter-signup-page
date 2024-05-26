import './TopComponent.css';

export default function TopComponent () {
    return (
        <div className="TopComponent">
            <picture>
                <source media="(min-width: 550px)" srcset="images/illustration-sign-up-desktop.svg" />
                <img className="image" src="images/illustration-sign-up-mobile.svg" alt="signup img" />
            </picture>
        </div>
    )
}