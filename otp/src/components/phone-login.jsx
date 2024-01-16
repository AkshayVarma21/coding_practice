import React, { useState } from 'react'
import OtpInput from './otp-input';

const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showOtp, setShowOtp] = useState(false);

    // Submit phone number
    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        const regex = /[^0-9]/g
        if (!phoneNumber || regex.test(phoneNumber)) {
            alert("invalid number");
            return;
        } else {
            setShowOtp(true);
        }
    }

    // On changing phone number
    const handleNumberChange = (e) => {
        setPhoneNumber(e.target.value)
    }

    // On submit otp
    const onOtpSubmit = (otp) => {
        console.log("login successful", otp)
    }

    return (
        <>
            {
                !showOtp ?
                    (<div>
                        <form onSubmit={handlePhoneSubmit}>
                            <input type='text' onChange={handleNumberChange} />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>)
                    :
                    (<div>
                        <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
                    </div>)
            }
        </>

    )
}

export default PhoneOtpForm;