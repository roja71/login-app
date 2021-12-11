import React, { useState } from "react";

const Registerform = () => {
    const [userRegister,setUserRegister] = useState({
        username:"",
        email:"",
        phoneno:"",
        password:""
    });
    const [records,setRecords]= useState([]);

    const handleInput= (e) => {
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setUserRegister({ ...userRegister , [name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        const newUser = { ...userRegister , id:new Date().getTime().toString() }
        
        setRecords([...records,newUser ])
        console.log(records)

        setUserRegister({username:"" ,email:"", phoneno:"", password:""});
    }
    return (
        <>
        <section className="Signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign-Up</h2>
                            <div className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text"  name="username" id="username" placeholder="Full name"onChange={handleInput}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="text"  name="email" id="email" placeholder="email"onChange={handleInput}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="text"  name="phone" id="phone" placeholder="Phone no"onChange={handleInput}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password"  name="password" id="password" placeholder="Password"onChange={handleInput}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password"  name="cpassword" id="cpassword" placeholder="Re-Enter Password"onChange={handleInput}/>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit"  name="signup" id="signup" className="form-submit" value="Register"/>
                                </div>
                                
                            </div>
                    </div>
                </div>
            </div>
        </section>   
        </>
    )
}
export default Registerform