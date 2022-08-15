import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
  font-family: "Roboto";
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
  font-family: "Roboto";
`;

const Desc = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
  font-family: "Roboto";
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
  font-family: "Roboto";
  display: flex;
`;

const SocialIcon = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
  font-family: "Roboto";
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
  font-family: "Roboto";
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
  font-family: "Roboto";
  margin-bottom: 30px;
`;

const List = styled.ul`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
  font-family: "Roboto";
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
  font-family: "Roboto";
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
  font-family: "Roboto";
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
  font-family: "Roboto";
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
  font-family: "Roboto";
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PHIENPHIEN</Logo>
        <Desc>
          Có rất nhiều biến thể của đoạn văn Lorem Ipsum có sẵn, nhưng phần lớn
          đã bị thay đổi dưới một số hình thức, bằng cách tiêm sự hài hước hoặc
          những từ ngẫu nhiên trông thậm chí còn không đáng tin.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Liên kết</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Shoe man Fashion</ListItem>
          <ListItem>Shoe Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 113 /11 Đông Bắc, Đường Tân
          Chánh Hiệp, Quận 12.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 0948157445
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          phienphienshop@gmail.com
        </ContactItem>
        <Payment src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/297051333_5308343859251973_7759590293881958206_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RVhoaTLxs28AX-_JPPO&_nc_oc=AQnXS_T_OfaVAdLHoou27N6MPeufljYdsfRYKrGpjdI7H4Wi12FPA0pC_ujec8q6v2dvpJ7FFEdzVDag8nNi1018&_nc_ht=scontent.fsgn2-5.fna&oh=03_AVLZoJUGGkdxG0lyjBv0pP9E2WAL_OWeweNg0vEj5Wae8A&oe=631A93EC" />
      </Right>
    </Container>
  );
};

export default Footer;
