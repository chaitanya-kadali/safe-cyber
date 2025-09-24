import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";
import defaultProfilePicture from "./emtyprof.jpg";

const Header = styled(Box)`
  height: 44px;
  background: #ededed;
  display: flex;
  padding: 8px 16px;
  align-items: center;
`;

const Image = styled("img")({
  width: 40,
  height: 40,
  objectFit: "cover",
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 8px;
    font-size: 22px;
    color: #000;
  }
`;

const Status = styled(Typography)`
  font-size: 12px !important;
  color: rgb(0, 0, 0, 0.6);
  margin-left: 12px !important;
`;

const ChatHeader = ({email, clickedMetaChat}) => {
  // const url = person.picture || defaultProfilePicture;
  return (
    clickedMetaChat&& <Header>
      <Image src={defaultProfilePicture} alt="display picture" />
      <Box>
        <Name>{clickedMetaChat ? `${clickedMetaChat.chat_name} : ${clickedMetaChat.chat_id}` :"loading"}</Name>
        {/* <Status>
          {/* {activeUsers?.find((user) => user.sub === person.sub)
            ? "Online"
            : "Offline"} 
          "Offline"
        </Status> */}
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
