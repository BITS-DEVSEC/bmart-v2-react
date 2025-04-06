import {
  Container,
  Box,
  Flex,
  Group,
  Title,
  Text,
} from "@mantine/core";
import { KeyRound, LockIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { ContainedInputs } from "../../components/ui/inputs/text";
import CustomButton from "../../components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Login() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  console.log(user);
  

  return (
    <Box>
      <Box miw={"100%"} mih={"30vh"} bg="primary">
        <Box
          bg="primary.8"
          style={{
            height: "30vh",
            width: 30,
            position: "absolute",
            top: 0,
            right: 20,
          }}
        ></Box>
        <Box
          bg="primary.8"
          style={{
            height: "30vh",
            width: 30,
            position: "absolute",
            top: 0,
            left: 20,
          }}
        ></Box>
      </Box>
      <Container mt="lg">
        <Flex gap={20} direction="column">
          <Group justify="space-between" align="center" gap={20}>
            <Flex direction="column">
              <Title order={4}>Welcome Back, to BMART</Title>
              <Text size="xs" c="dimmed">
                LOGIN TO YOUR ACCOUNT
              </Text>
            </Flex>
            <Flex justify="flex-end">
              <LockIcon size={25} />
            </Flex>
          </Group>
          <ContainedInputs
            label="Phone Number"
            placeholder="Enter Your Phone Number"
          />
          <CustomButton
            action={() => navigate("/auth/pin-pass")}
            icon={<KeyRound size={18} />}
            ltr
            label="Login"
          />
        </Flex>
      </Container>
    </Box>
  );
}
