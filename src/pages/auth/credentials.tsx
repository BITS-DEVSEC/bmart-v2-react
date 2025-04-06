import { Anchor, Box, Checkbox, Container, Flex, Group, PinInput, Text, Title } from "@mantine/core";
import { Check, ChevronsLeft, Lock } from "lucide-react";
import CustomButton from "../../components/ui/button";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setUser } from "../../store/state/user";
import { useSignUpMutation } from "../../store/api/auth";
import { notifications } from "@mantine/notifications";

export default function Credentials() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [signUp, { isLoading }] = useSignUpMutation();

  const submit = async () => {
    const response = await signUp(user);
    if (response.data) {
      navigate("/auth/login");
    } else {
     notifications.show({
      title: "Error",
      message: "Something went wrong",
      color: "red",
    });
    }
  }
  
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
          <Box>
            <Group justify="space-between" align="center" gap={20}>
              <Flex direction="column">
                <Title order={4}>Your Credentials</Title>
                <Text size="xs" c="dimmed">
                  ACCESS DETAILS
                </Text>
              </Flex>
              <Flex justify="flex-end">
                <Lock size={25} />
              </Flex>
            </Group>
          </Box>
        </Flex>
        <Flex mt="lg" direction="column" gap={10}>
          <PinInput onChange={(value) => dispatch(setUser({ ...user, password: value }))} size="lg" length={6} mask/>
          <Checkbox mt="lg" label={<Text size="sm">I agree to the, <Anchor fw={700}>Terms & Conditions</Anchor></Text>}/>
          <CustomButton loading={isLoading} action={() => submit()} label="Finish" ltr icon={<Check size={18}/>}/>
          <CustomButton altColor action={() => navigate("/auth/business-details")} label="Back" rtl icon={<ChevronsLeft size={18}/>}/>
        </Flex>
      </Container>
    </Box>
  );
}
