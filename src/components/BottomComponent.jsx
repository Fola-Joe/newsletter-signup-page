export default function BottomComponent() {
    return (
        <div className="BottomComponent">
            <h1>Stay Updated</h1>
            <h2>Join 60,000+ product managers receiving monthly updates on:</h2>
            <ul>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
            </ul>

            <form action="">
                <h3>Email address</h3>
                <input type="email" name="email" id="email" aria-aria-labelledby="Email address" />
                <button>Subscribe to monthly newsletter</button>
            </form>
        </div>
    )
}