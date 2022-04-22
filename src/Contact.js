// import React, { useState } from "react";
// import './Contact.css';
// import emailjs from 'emailjs'
// const Contact = () =>{
//     const [email, setEmail] = useState('')
//     const [username, setUsername] = useState('')
//     const [message, setMessage] = useState('')
//     const handleChange = (e) =>{
//         console.log(e.target.id)
//         if(e.target.id === 'user-email'){
//             setEmail(e.target.value)
//         }
//         if(e.target.id === 'username'){
//             setUsername(e.target.value)
//         }
//         if(e.target.id === 'textarea'){
//             setMessage(e.target.value)
//         }
//     }
//     const handleSubmit = ()=>{
//         emailjs.sendForm(
//             'service_6jd87p6','template_69i6ff3'
//         )
//       console.log("test");

//     }
//     return(
//         <div>
//        <div className="form__contain">
//        <form className="Login__form ">
//           <div>
//           <div>
//             <input
//               type="text"
//               placeholder="name"
//               id="user_name"
//               name="user_name"
//               value={username}
//               onChange={handleChange}
//               className=" form-control"

//             />
//             <textarea
//             placeholder="Message"
//             className="form-control"
//             id="textarea"
//             name="message"
//             value={message}
//             onChange={handleChange}
//             rows="3"/>
//           </div>
//             <input
//               type="email"
//               placeholder="email"
//               id="user_email"
//               name="user_email"
//               value={email}
//               onChange={handleChange}
//               className="form-control"
//             />
//           </div>
        
//           <div type="submit" className="btn btn-lg bg-primary text-white font-helvetica-bold" onClick={handleSubmit}>
//             submit
//           </div>
//         </form>
//        </div>
//         </div>
//     )
// }
// export default Contact