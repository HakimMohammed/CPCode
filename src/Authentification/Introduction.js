import logo from './assets/Logo.png'
import person from './assets/Person.svg'

import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  height: 100%;
  max-height: 100%;
  margin-left: 0;
  padding: 0;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 35%;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  height: 100%;
  width: 25%;
`;

const TextContainer = styled.div`
  text-align: center;
  width: 80%;
  font-size: 1.5rem;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65%;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const PersonImage = styled.img`
  height: 100%;
  width: 50%;
`;

export default function Introduction()
{
    return(
        <Container>
            <TopContainer>
                <LogoContainer>
                    <Logo src={logo} alt="Logo" />
                </LogoContainer>
                <TextContainer>
                    On offrent un ensemble de composants réutilisables et prêts à l'emploi pour la création de sites web.<br/>
                    Elle est conçue pour aider les développeurs à gagner du temps et à améliorer leur efficacité en leur fournissant des éléments de base pour la création d'interfaces utilisateur.
                </TextContainer>
            </TopContainer>
            <BottomContainer>
                <PersonImage src={person} alt="Person" />
            </BottomContainer>
        </Container>
    )
}
