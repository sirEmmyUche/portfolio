import '../styles/home.css'
import { useState } from 'react';

function Contact(){
    const [formData, setFormData] = useState({email:"",name:"",message:"",subject:""});
    const [feedback, setFeedback] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false);
        
    const submitUserDetails = async ()=>{
        try{
            const sendData = await fetch("https://formspree.io/f/mwkdlbyq",{
                    method:"post", 
                    headers:{'Accept': 'application/json'},
                    body: JSON.stringify(formData)
                })
                const res = await sendData.json()
                if(res.ok == true){
                    setFeedback("Thank you")
                }else{
                    setFeedback("Soory, an error occured and this is on us")
                }
            }catch(err){console.log(err)}
    }

    const user = (event)=>{
        setFormData((prev)=>{
            { return {...prev,[event.target.name]:event.target.value}}
        })
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        setIsSubmitting(true);
        submitUserDetails();
    }

    return(
        <div className="contact-page-container">
            <div className="contact-pg-first-div">
                <img src="/images/contact-bg-pic.png"/>
            </div> 
            <div className="contact-pg-2nd-div">
                <h1>Hello @uche</h1>
                {!feedback?<form className="form-bg" onSubmit={handleSubmit}>
                    <label className="single-form" htmlFor="text">
                        Name:<br/>
                        <input type="text"
                        id='text'
                        name='name'
                        required
                        value={formData.name}
                        onChange={user}
                        placeholder="Enter Name or Organization"/>
                    </label>

                    <label className="single-form" htmlFor="email">
                        Email:<br/>
                        <input type="email"
                        id="email"
                        name='email'
                        required
                        value={formData.email}
                        onChange={user}
                        placeholder="example@gmail.com"/>
                    </label>

                    <label className="single-form">
                        Subject:<br/>
                        <input type="text"
                        id='subject'
                        name='subject'
                        required
                        value={formData.subject}
                        onChange={user}/>
                    </label>

                    <label className="single-form">
                        Message:<br/>
                        <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={user}/>
                    </label>
                    <div className="contact-pg-submit-btn">
                        <button type="submit" onSubmit={handleSubmit} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
                :
                <div>
                    <h1>{feedback}</h1>
                </div>
                }
            </div>
        </div>
    )
}

export default Contact