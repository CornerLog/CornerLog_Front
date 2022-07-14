import React, { useRef } from "react";
import emailjs from '@emailjs/browser'
import contactpagest from "../css/ContactPage.module.css"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_svu9r8i', 'template_uks6z1e', form.current, 'NZIgJGMKjOKEQ9426')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    function doAction() {
        alert("전송되었습니다!");
    }
    return (
        <>
        <div>
            <img src="img/contact.jpg" style={{ width: '100%' }} />
        </div>

        <div className = {contactpagest.formbox}>
            <h5> Contact Us </h5>
            <form ref={form} onSubmit={sendEmail}>
                <div className={contactpagest.field1}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                </div>

                <button type="submit" value="Send" onClick={doAction} className = {contactpagest.submitBtn}>Send</button>
            </form>
            dswucorner@gmail.com
        </div>
        
        
        </>
    );

}
export default Contact;