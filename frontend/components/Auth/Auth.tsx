import { Box, Button, Center, Image, Stack, Text, Input } from "@chakra-ui/react";
import { Session } from "inspector";
import { signIn } from 'next-auth/react'
import { useState } from "react";
import Link from "next/link";


interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;

}


const Auth:React.FC<IAuthProps> = ({session, reloadSession}) => {

  const [username, setUsername] = useState("")

  return (
  <Center height={"100vh"}>
    <Stack spacing={20} align={"center"}>
      {session ? (
        <>
        <Text className="font-bold text-5-xl pb-4">Create A Username</Text>
        <Input value={username} onChange={(e) => setUsername(e.target.value)}></Input>
        </>
      ) : (
        <>
        <Text className="font-bold self-center text-5xl font-sans">MessengerQL</Text>
        <Button className="relative px-5 py-3 font-medium text-black-600 bg-gray-100 hover:bg-gray-300 border border-gray-900 rounded-lg " 
                leftIcon={<Image height={'20px'} 
                src="/images/googlelogo.png" />} 
                onClick={() => signIn("google")}>Continue With Google</Button>
        </>
      )}
    </Stack>

  </Center>
  )
    
    
}
    


export default Auth;

