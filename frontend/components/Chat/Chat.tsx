import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";



interface IChatProps {


};


const Chat: React.FC<IChatProps> = () => {

    const handleSignOut = () => {
        signOut();
    }




    
    return (
        <div>
            <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
    )
}

export default Chat;