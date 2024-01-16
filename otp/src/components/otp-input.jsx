import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({ length = 4, onOtpSubmit }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""))
    const inputRefs = useRef([])

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [])

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (isNaN(value)) return;
        const newOtp = [...otp]

        // Allow only single digit
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp);

        // On otp submit
        const combinedOtp = newOtp.join("")
        if (combinedOtp.length === length) {
            onOtpSubmit(combinedOtp)
        }

        // Move to next field if input is filled
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus()
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            // Moving to previous input on backspace
            inputRefs.current[index - 1].focus()
        }
    }

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1,1)

        if(index>0 && !otp[index-1]){
            inputRefs.current[otp.indexOf("")].focus()
        }
        
    }
    return (
        <div>{otp.map((item, index) => <input key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            value={item}
            onChange={(e) => handleChange(e, index)}
            onClick={() => handleClick(index)} onKeyDown={(e) => handleKeyDown(e,index)}
            className='otpInput' />)}</div>
    )
}

export default OtpInput