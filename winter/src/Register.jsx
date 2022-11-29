import './Register.css';
import {useState} from 'react';

function Register(){
function handleSubmit(event){
    SetNameInvalid(!name);
    SetEmailInvalid(!Email);
    SetConfirmInvalid(!Confirm);
    SetConfirmMatch(Confirm==Email);
       event.preventDefault();
}

const [name,SetName]=useState('');
const [Email,SetEmail]=useState('');
const [Confirm,SetConfirm]=useState('');

const [NameInvalid,SetNameInvalid]=useState(false);
const [EmailInvalid,SetEmailInvalid]=useState(false);
const [ConfirmMatch,SetConfirmMatch]=useState(true);
const [ConfirmInvalid,SetConfirmInvalid]=useState(false);

return(
<div className="text">
    <h2>Register to join us!</h2>
    <form className="register" action="register/" method="Post">
        <label className="register__label">
            <span className="register__name-label">Name</span>
            <input name="name" value={name} className="register__name" onInput={event=>{SetName(event.target.value)}}/>
            <div className="register-name__error">{NameInvalid && "This field is required"} </div>
        </label>
        <label className="register__label">
            <span className="register__email-label">Email</span>
            <input name="email"  className="register__email" onInput={event=>{SetEmail(event.target.value)}}/>
            <div className="register-email__error">{EmailInvalid && "This field is required"}</div>
        </label>
        <label className="register__label">
            <span className="register__confirm-label">Confirm Email</span>
            <input name="confirm"  className="register__confirm" onInput={event=>{SetConfirm(event.target.value)}}/>
            <div className="register-confirm__error">{!ConfirmMatch &&"Please match your email"}</div>
            <div className="register-confirm__error">{ConfirmInvalid && "This field is required"}</div>
        </label>

        <label>
            <input name="wants-spam" type="checkbox" />
            Do you want to receive our e-mail?
        </label>
        <div>
            <label>
                Select your area:
                <select name="tier">
                    <option value="">Please select</option>
                    <option value="1">San Jose</option>
                    <option value="2">Mountain View</option>
                    <option value="3">Sunnyvale</option>
                </select>
            </label>
        </div>
        <button onClick={handleSubmit}type="submit">Register</button>
    </form>
</div>
);

}

export default Register;