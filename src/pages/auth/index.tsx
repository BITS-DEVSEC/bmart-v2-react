import { Container, Box, Flex, Title, LoadingOverlay } from "@mantine/core";
import { ChevronsRightIcon, Globe } from "lucide-react";
import CustomButton from "../../components/ui/button";
import { useNavigate } from "react-router";
import { ContainedInputs } from "../../components/ui/inputs/text";
import { useEffect, useState } from "react";
import { useLazyGetUserByIdQuery } from "../../store/api/fayda";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/state/user";
import { FaydaSchema } from "../../store/schema";

export default function Auth() {
  const navigate = useNavigate();
  const [faydaId, setFaydaId] = useState("");
  const [getUserById, { data, isLoading }] = useLazyGetUserByIdQuery();
  const dispatch = useDispatch();

  const register = async (data: FaydaSchema) => {
    dispatch(setUser(data));
    navigate("/auth/personal-details");
  };

  useEffect(() => {
    if (data) {
      register(data);
    }
  }, [data]);

  return (
    <Box>
      <LoadingOverlay visible={isLoading} />
      <Box miw={"100%"} mih={"50vh"} bg="primary">
        <Box
          bg="primary.8"
          style={{
            height: "50vh",
            width: 30,
            position: "absolute",
            top: 0,
            right: 20,
          }}
        ></Box>
        <Box
          bg="primary.8"
          style={{
            height: "50vh",
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
            <Flex justify="space-between" align="center" gap={20}>
              <Title order={4}>Hey There, Welcome to BMart</Title>
            </Flex>
            <ContainedInputs
              mt="sm"
              label="Enter you FAYDA (FAN) Identification Number"
              placeholder="1234 5678 9012 3456"
              setValue={setFaydaId}
              value={faydaId}
            />
          </Box>
          <Flex direction="column" gap={10}>
            <CustomButton
              action={() => getUserById(Number(faydaId))}
              icon={<ChevronsRightIcon size={20} />}
              ltr
              label="Continue"
            />
            <CustomButton
              altColor
              action={() => navigate("/")}
              icon={<Globe size={20} />}
              ltr
              label="Browse Market"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
