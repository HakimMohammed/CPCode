import styled from "styled-components";
import Introduction from "./Introduction";
import Mail from "./assets/Gray Mail.svg";
import Lock from "./assets/Gray Lock.svg";
import Google from "./assets/Google.svg";
import User from "./assets/User.svg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  max-height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0;
  padding-top: 2%;
  margin-right: 0;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-top: 10%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  height: 7vh;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const Field = styled.input`
  background-color: transparent;
  border: none;
  height: 100%;
  width: 100%;
  margin-left: 1%;
  margin-right: 1%;
  font-size: 1.5rem;
  &:focus {
    outline: none;
    color: #000000;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 1%;
  padding-right: 1%;
`;

const Icon = styled.img`
  height: 3vh;
`;

const SubmitButton = styled.input`
  font-size: 1.5rem;
  color: white;
  background-color: #022b3a;
  border: none;
  border-radius: 0.5rem;
  height: 8vh;
  margin-top: 1rem;
  cursor: pointer;
`;

const GoogleButton = styled.button`
  font-size: 1.5rem;
  color: #5f6368;
  background-color: #e1e5f2;
  border: none;
  border-radius: 0.5rem;
  height: 8vh;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const GoogleIcon = styled.img`
  height: 3vh;
`;

const Title = styled.h1`
    margin-bottom: 3%;
`;

const Link = styled.p`
    font-size: 1.5rem;
    margin-top: 3%;
`;

const Inscription = () => {
    return (
        <Container>
            <Introduction/>
            <FormContainer>
                <Form>
                    <Title>Sign Up to CPCode</Title>
                    <Label>Name</Label>
                    <FieldContainer>
                        <IconContainer>
                            <Icon src={User} alt="User icon" />
                        </IconContainer>
                        <Field type="text" placeholder="Enter your name" />
                    </FieldContainer>
                    <Label>Email</Label>
                    <FieldContainer>
                        <IconContainer>
                            <Icon src={Mail} alt="Email icon" />
                        </IconContainer>
                        <Field type="email" placeholder="Enter your email" />
                    </FieldContainer>
                    <Label>Password</Label>
                    <FieldContainer>
                        <IconContainer>
                            <Icon src={Lock} alt="Password icon" />
                        </IconContainer>
                        <Field type="password" placeholder="Enter your password" />
                    </FieldContainer>
                    <Label>Re-Type Password</Label>
                    <FieldContainer>
                        <IconContainer>
                            <Icon src={Lock} alt="Password icon" />
                        </IconContainer>
                        <Field type="password" placeholder="Confirm your password" />
                    </FieldContainer>
                    <SubmitButton type="submit" value="Sign Up" />
                    <GoogleButton>
                        <GoogleIcon src={Google} alt="Google icon" />
                        Sign up with Google
                    </GoogleButton>
                </Form>
                <Link className="text-center">Already have an account ? <a href="#">Sign In</a></Link>
            </FormContainer>
        </Container>
    );
};

export default Inscription;




