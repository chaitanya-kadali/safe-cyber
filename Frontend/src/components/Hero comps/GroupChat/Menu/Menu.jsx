import { Box } from '@mui/material';

import HeaderMenu from './HeaderMenu';
import Conversations from './Conversations';

const Menu = (props) => {
    return (
        <Box>
            <HeaderMenu />
            <Conversations email={props.email} 
            setclickedMetaChat={props.setclickedMetaChat} />
        </Box>
    )
}

export default Menu;