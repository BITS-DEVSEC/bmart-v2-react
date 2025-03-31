import {
  ChevronsRightIcon,
  ShoppingCart,
} from "lucide-react";
import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Box,
  Card,
  Center,
  Drawer,
  Group,
  Image,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import classes from "./productCards.module.css";
import { useDisclosure } from "@mantine/hooks";
import CustomButton from "../button";
import { ContainedInputs } from "../inputs/text";
import { useNavigate } from "react-router";

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];

export default function ProductCards({ alt }: { alt?: boolean }) {
  const [opened, { toggle }] = useDisclosure();
  const [openedQuote, { toggle: toggleQuote }] = useDisclosure();
  const navigate = useNavigate();
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={opened ? 580 : 180} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Drawer
        title={<Title order={4}>Forde, Norway</Title>}
        opened={opened}
        onClose={toggle}
      >
        <Text mb="xs" fz="sm" c="dimmed" mt={0}>
          Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel
          close to nature in ultimate comfort. Enjoy the view of the epic
          mountain range of Blegja and the Førdefjord.
        </Text>
        <Carousel
          style={{ borderRadius: 10 }}
          slideSize="90%"
          height={"79.5vh"}
          align="center"
          orientation="vertical"
          slideGap="xs"
          withControls={false}
          withIndicators
          loop
        >
          {images.map((image, index) => (
            <Carousel.Slide style={{ borderRadius: 10 }} key={image}>
              <Card withBorder p={0} bg="white" style={{position: "absolute" , top: 0, right: 0}} h={30} w={30}>
                <Center h={30} >
                  <Text fw={700} size="xs">{index + 1}</Text>
                </Center>
              </Card>
              <Image style={{ borderRadius: 10, height: "69vh" }} src={image} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Drawer>
      <Modal opened={openedQuote} onClose={toggleQuote} title={<Title order={5}>Forde, Norway</Title>}>
        <ContainedInputs mb="xs" label="Per Unit Price" placeholder="Per UnitPrice"/>
        <ContainedInputs mb="xs" label="Quantity" placeholder="Quantity"/>
        <CustomButton label="Submit Quote"/>
      </Modal>
      <Card mb="md" radius="md" withBorder padding="md">
        <Card.Section onClick={toggle}>
          <Carousel withControls={false} withIndicators loop={false}>
            {slides}
          </Carousel>
        </Card.Section>

        <Group justify="space-between" mt="sm">
          <Text fw={500} fz="lg">
            Forde, Norway
          </Text>
        </Group>

        <Text lineClamp={2} fz="sm" c="dimmed" mt="sm">
          Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel
          close to nature in ultimate comfort. Enjoy the view of the epic
          mountain range of Blegja and the Førdefjord.
        </Text>

        <Group display={alt ? "none" : "block"} justify="space-between" mt="md">
          <div>
            <Text fz="xl" span fw={500} className={classes.price}>
              397 ETB
            </Text>
          </div>

          <Box
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              borderTopLeftRadius: 10,
            }}
            bg="primary"
          >
            <ActionIcon size="lg" variant="transparent">
              <ShoppingCart color="white" size={16} />
            </ActionIcon>
          </Box>
        </Group>
        {alt && (
          <CustomButton
            icon={<ChevronsRightIcon size={20} />}
            props={{ mt: "md" }}
            ltr
            altSize
            altColor
            label="Place Quote"
            action={() => navigate('/product/1/quote')}
          />
        )}
      </Card>
    </>
  );
}
