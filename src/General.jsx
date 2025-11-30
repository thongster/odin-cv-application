export default function General() {


    return (
        <>
            <form action="/" method="post">
                <div className="nameDiv">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" required placeholder="John D. Smith"/>
                </div>
                <div className="emailDiv">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" required placeholder="johndsmith@gmail.com"/>
                </div>
                <div className="phoneDiv">
                    <label htmlFor="phone">Phone Number: </label>
                    <input type="tel" id="phone" required placeholder="555-555-5555"/>
                </div>
            </form>
        </>
    )
}