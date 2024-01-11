export default function TopComponent () {
    return (
        <div className="TopComponent">
            <picture>
                <source media="(min-width: 820px)" srcset="images/illustration-sign-up-desktop.svg" />
                <img src="images/illustration-sign-up-mobile.svg" alt="signup img" />
            </picture>
        </div>
    )
}