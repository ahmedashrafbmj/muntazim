import './Contact.css';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
// import TextareaAutosize from '@mui/icons-material/TextareaAutosize';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div id='COntainer'>
    <div id='first'>
      <div id='firstSub'>
        <h1>Contact Us</h1>
        <p>Contact us free bla bla bla Contact <br /> us free bla bla bla</p>
        <hr />
        <div id="iconmain">
        <div id="icons">
          <p>
        <LocationOnIcon id="icon"/> 
          </p>
       <p> Gulistan e Johar, Karachi, <span>Pakistan</span></p> 
       </div>
        <div id="icons">
          <p>
        <LocalPhoneIcon id="icon"/>
          </p>
       <p> +92 324 3387656</p> 
       </div>
        <div id="icons">
          <p>
        <EmailIcon id="icon"/>
          </p>
       <p>info@coderatory.com</p> 
       </div>
       </div>
       
       
      </div>
    </div>
    <div id='second'>
      <div id="secondsub">
        <h1 id="head">DROP US A MESSAGE</h1>
        <div id='inpfields'>
        <div className="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
</div>
        {/* <TextField id="standard-basic" className="inp" label="Name" variant="standard" />   
        <TextField id="standard-basic"  className='task' label="Email" variant="standard" /> */}
        
        </div>
        <Form.Control placeholder="type a message" id="textarea" className="textarea" as="textarea" rows={8} />
      </div>

    </div>
    </div>
  );
}

export default Contact;
