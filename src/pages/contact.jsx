import '../styles/home.css'

function Contact(){
    return(
        <div className="contact-page-container">
            <div className="contact-pg-first-div">
                <img src="/images/contact-bg-pic.png"/>
            </div> 
            <div className="contact-pg-2nd-div">
                <h1>Hello @uche</h1>
                <form className="form-bg">
                    <label className="single-form">
                        Name:<br/>
                        <input type="text"
                        required
                        placeholder="Enter Name or Organization"/>
                    </label>
                    <label className="single-form">
                        Email:<br/>
                        <input type="email"
                        required
                        placeholder="example@gmail.com"/>
                    </label>
                    <label className="single-form">
                        Subject:<br/>
                        <input type="text"/>
                    </label>
                    <label className="single-form">
                        Message:<br/>
                        <textarea
                        required/>
                    </label>
                </form>
                <div className="contact-pg-submit-btn"><button>Submit</button></div>
            </div>
        </div>
    )
}

export default Contact