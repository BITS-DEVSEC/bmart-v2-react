import { Container, Box, Flex, Title, Group, Text } from "@mantine/core";
import { CheckIcon, ChevronsLeftIcon, IdCardIcon } from "lucide-react";
import CustomButton from "../../components/ui/button";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setUser } from "../../store/state/user";
import { ContainedInputs } from "../../components/ui/inputs/text";

export default function BusinessDetails() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

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
                <Title order={4}>Your FAYDA Information</Title>
                <Text size="xs" c="dimmed">
                  BUSINESS DETAILS
                </Text>
              </Flex>
              <Flex justify="flex-end">
                <IdCardIcon size={25} />
              </Flex>
            </Group>
            {[
              { title: "Business Name", placeholder: "Business Name" },
              { title: "Tax Identification Number (TIN)", placeholder: "Tax Identification Number" },
            ].map((item, index) => (
              <ContainedInputs
                value={index == 0 ? user.businessName : user.tinNumber}
                mt="xs"
                key={index}
                label={item.title}
                placeholder={item.placeholder}
                override
                mutator={
                  (value: string) => {
                    dispatch(setUser({ ...user, [item.title]: value }));
                  }
                }
              />
            ))}
          </Box>
          <Flex direction="column" gap={10}>
            <CustomButton
              action={() => navigate("/auth/credentials")}
              icon={<CheckIcon size={20} />}
              ltr
              label="Continue"
            />
            <CustomButton
              altColor
              action={() => navigate("/auth/address-details")}
              icon={<ChevronsLeftIcon size={20} />}
              rtl
              label="Back"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
