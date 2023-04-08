import styled from "styled-components"
import Introduction from "./Introduction"
import Mail from "./assets/Gray Mail.svg"
import Lock from "./assets/Gray Lock.svg"
import Google from "./assets/Google.svg"
import User from "./assets/User.svg"

export default function Inscription() {

    const Field = styled.input`
        background-color: transparent;
        border: 0px solid;
        height: 20px;
        width: 160px;
        &:focus {
            outline: none;
            color: #000000;
        }
    `

    return (
        <div className="d-flex" style={{height : '100vh' , maxHeight:'100vh'}}>
            <Introduction />
            {/* Connexion */}
            <div className="h-100 w-50 container " style={{marginRight: '0',  padding: 0 , paddingTop : '0vh' }}>
                <h1 className="fw-bold" style={{marginLeft:'5%',marginTop:'3%',marginBottom:'2%'}}>Sign Up to CPCode</h1>
                <form className="mx-5">
                    <label className="fs-4 mb-2 ms-0">Name</label>
                    <div className="border rounded-3 w-75 px-5 d-flex justify-content-between  ms-1" style={{ height: '7vh'}}>
                        <Field type="email" style={{marginTop : '2vh'}} className="fs-5 w-75 h-50 " placeholder="Enter your name" />
                        <span className=""><img src={User} style={{marginTop : '3vh'}}/></span>
                    </div>
                    <label className="fs-4 mb-2 ms-0">Email</label>
                    <div className="border rounded-3 w-75 px-5 d-flex justify-content-between  ms-1" style={{ height: '7vh'}}>
                        <Field type="email" style={{marginTop : '2vh'}} className="fs-5 w-75 h-50 " placeholder="Enter your email" />
                        <span className=""><img src={Mail} style={{marginTop : '3vh'}}/></span>
                    </div>
                    <label className="fs-4 mb-2 mt-3 ms-0">Password</label>
                    <div className="border rounded-3 w-75 px-5 d-flex justify-content-between  ms-1" style={{ height: '7vh'}}>
                        <Field type="password" style={{marginTop : '2vh'}} className="fs-5 w-75 h-50 " placeholder="+6 Characters , 1 Capital letter" />
                        <span className=""><img className="" src={Lock} style={{marginTop : '3vh'}}/></span>
                    </div>
                    <label className="fs-4 mb-2 mt-3 ms-0">Re-Type Password</label>
                    <div className="border rounded-3 w-75 px-5 d-flex justify-content-between  ms-1" style={{ height: '7vh'}}>
                        <Field type="password" style={{marginTop : '2vh'}} className="fs-5 w-75 h-50 " placeholder="+6 Characters , 1 Capital letter" />
                        <span className=""><img className="" src={Lock} style={{marginTop : '3vh'}}/></span>
                    </div>
                    <input type="submit" value="Create account" className="fs-5 text-white mt-4 w-75 rounded-3" style={{ height: '8vh' , backgroundColor : '#022B3A'}} />
                    <button className="fs-5 text-secondary btn w-75 mt-4 rounded-3" style={{ height: '8vh' , backgroundColor : '#E1E5F2' , outlineColor : '#E1E5F2'}}>
                        <img src={Google} style={{height : '4vh'}} className="me-5"/>
                        Sign in with Google
                    </button>
                    <p className="text-center text-secondary my-4 fs-4 w-75">Already have an account ?<a href="#">Sign In</a></p>
                </form>
                
            </div>
        </div>
    )
}