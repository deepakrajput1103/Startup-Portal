import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Room from "@mui/icons-material/Room";
import Phone from "@mui/icons-material/Phone";
import MailOutline from "@mui/icons-material/EmailOutlined";
const logo = require("../../images/ministrylogo.png");

const Container = styled.div`
  display: flex;
  background-color: #009470;
  padding: 50px 70px;
  color: white;
`;

const Left = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  margin-left: 10%;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  //flex-wrap: wrap;
  flex-direction: column;
  // text-align: left;
  align-items: center;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  text-align: center;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Right = styled.div`
  flex: 1.5;
  padding: 20px;
  margin-left: 10%;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LETS AYUSH</Logo>
        <Desc>
          We are based on a simple premise – to make fundraising and investing
          easier for start-ups and investors respectively. Today we are poised
          to scale private markets on a global level and aim to build the
          world’s largest ecosystem for founders and investors.
        </Desc>
        <img
          src={logo}
          style={{ width: "80%", height: "90%", textAlign: "center" }}
        ></img>
      </Left>
      <Center>
        <Title>Review</Title>
        <List>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Risk</ListItem>
          <ListItem>Terms of use</ListItem>
          <ListItem>FAQs</ListItem>
        </List>
        <div
          style={{ fontSize: "25px", textAlign: "center", margin: "20px 30px" }}
        >
          Follow us on
        </div>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="3D5990">
            <LinkedInIcon />
          </SocialIcon>
        </SocialContainer>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Buildings Alyssa, Outer Ring
          Road, Bengaluru
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> letsayush@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
