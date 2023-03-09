import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Feedback.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Feedback = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_z9041gc",
        "template_i4bwlfj",
        form.current,
        "ytYkV-h8Uwayl8ecK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="feedbackDive">
      <form className="form" ref={form} onSubmit={sendEmail}>
      <h2>Feedback</h2>
        <TextField id="outlined-basic" label="From Name" variant="outlined" name="from_name"/>
        <br />
        <TextField id="outlined-basic" label="to Name" variant="outlined" name="to_name" value={"Mavericks"}/>
        <br />
        <TextField id="outlined-basic" label="Feed back" variant="outlined" name="message"/>
        <br /><br />
        <Button variant="outlined" type="submit" value="send">Send</Button>
      </form>
    </div>
  );
};
export default Feedback;
