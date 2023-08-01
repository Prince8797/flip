import { useState, useContext } from "react";
import { Dialog, Box, TextField, Button, Typography, styled } from "@mui/material";
import { DataContext } from "../../context/data-provider";

// components
import { authenticateSignup, authenticateLogin } from "../../service/api";


const Component = styled(Box)`
    height:70vh;
    width:90vh;
    display:flex;
`
const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding: 25px 35px;
    flex:1;
    &>div,&>p,&>button{
        margin-top:20px;
    }
`
const Image = styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:83%;
    width:30%;
    padding: 45px 35px;
    &> h5,&>p{
        color:#fff;
        font-weight:600;
    }
`
const LoginButton = styled(Button)`
    text-transform:none;
    background:#Fb641b;
    color:#fff;
    height:48px;
    border-radius:2px;
`
const RequestOTP = styled(Button)`
    background:#fff;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
`
const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`
const CreateAccount = styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;
`
const ValidUser = styled(Typography)`
    color:#ff6161;
    font-size:10px;
    line-height:0;
    margin-top:10px;
    font-weight:600;
`

const AccountInitialValues = {
    login: {
        view: 'login',
        heading: "Login",
        subheading: "Get access to your Orders, Wishlists and recommendations"
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subheading: "Signup with your mobile number to get started"
    }
}

const SignupInitialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: ""
}

const LoginInitialValues = {
    username: "",
    password: ""
}

// main code starts...

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(AccountInitialValues.login);
    const [signup, setSignup] = useState(SignupInitialValues);
    const [login, setLogin] = useState(LoginInitialValues);
    const [valid, setValid] = useState(false);

    const { setAccount } = useContext(DataContext);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(AccountInitialValues.login);
        setValid(false);
    }

    const toggleSignup = () => {
        toggleAccount(AccountInitialValues.signup);
    }

    const onInputChange = (e) => {  // tracking the input from signup dialog box
        setSignup({ ...signup, [e.target.name]: e.target.value });
        // console.log(signup);
    }

    const signupUser = async () => {// sending signup to authenticateSignup and it will send it to server
        let response = await authenticateSignup(signup);
        // console.log(response);
        if (!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const onValueChange = (e) => { // tracking the input from login dialog box
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {// sending login to authenticateSignup and it will send it to server
        let response = await authenticateLogin(login);
        // console.log(response);
        if (response.status === 200) {
            handleClose();
            setAccount(response.data.data.firstname);
        } else {
            setValid(true);
        }
    }

    return (
        <p>
            <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
                <Component>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>
                    </Image>
                    {account.view === 'login' ?
                        <Wrapper>
                            {valid && <ValidUser>Please enter valid username or password</ValidUser>}
                            <TextField variant="standard" onChange={(e) => { onValueChange(e) }} name='username' label="Enter Email/Mobile Number" />

                            <TextField variant="standard" onChange={(e) => { onValueChange(e) }} name='password' label="Enter Password" />

                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>

                            <LoginButton onClick={() => loginUser()}>Login</LoginButton>

                            <Typography style={{ textAlign: "center" }}>OR</Typography>

                            <RequestOTP>Request OTP</RequestOTP>

                            <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>

                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" name="firstname" onChange={(e) => onInputChange(e)} label="Enter Firstname" />
                            <TextField variant="standard" name="lastname" onChange={(e) => onInputChange(e)} label="Enter Lastname" />
                            <TextField variant="standard" name="username" onChange={(e) => onInputChange(e)} label="Enter Username" />
                            <TextField variant="standard" name="email" onChange={(e) => onInputChange(e)} label="Enter Email" />
                            <TextField variant="standard" name="password" onChange={(e) => onInputChange(e)} label="Enter Password" />
                            <TextField variant="standard" name="phone" onChange={(e) => onInputChange(e)} label="Enter Phone Number" />

                            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                        </Wrapper>
                    }
                </Component>
            </Dialog>
        </p>
    )
}
export default LoginDialog;