import './BottomComponent.css';

export default function BottomComponent() {
    return (
        <div className="BottomComponent">
            <h1 className="heading">Stay Updated!</h1>
            <h2 className="line-1">Join 60,000+ product managers receiving monthly updates on:</h2>
            <ul className="list">
                <li>
                    <img src="images/icon-list.svg" alt="" />
                    <p>Product discovery and building what matters</p>
                </li>
                <li>
                    <img src="images/icon-list.svg" alt="" />
                    <p>Measuring to ensure updates are a success</p>
                </li>
                <li>
                    <img src="images/icon-list.svg" alt="" />
                    <p>And much more!</p>
                </li>
            </ul>

            <form action="" className="form">
                <h3 className="email">Email address</h3>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    aria-aria-labelledby="Email address" 
                    placeholder="email@company.com"
                />
                <button className="btn">Subscribe to monthly newsletter</button>
            </form>
        </div>
    )
}