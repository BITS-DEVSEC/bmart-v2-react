import { ActionIcon, Modal, Loader, Center, Title } from "@mantine/core";
import { QrCode } from "lucide-react";
import { Capacitor } from "@capacitor/core";
import { useDisclosure } from "@mantine/hooks";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useEffect, useState } from "react";

const QRScanner = ({ size }: { size: "input-md" | "sm" }) => {
  const platform = Capacitor.getPlatform();
  const [opened, { open, close }] = useDisclosure(false);
  const [result, setResult] = useState("");
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    setIsCameraReady(false);
    setInterval(() => {
      setIsCameraReady(true);
    }, 8000);
  }, [opened]);

  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => {
          setIsCameraReady(false);
          close();
        }}
        title={<Title order={5}>Scan QR Code</Title>}
        size="lg"
        radius="md"
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        {!isCameraReady && (
          <Center>
            <Loader type="bars" size="xl" />
          </Center>
        )}
        <Scanner
          scanDelay={6000}
          onScan={(result) => {
            setResult(result[0]?.rawValue);
          }}
          constraints={{
            facingMode: "environment",
            aspectRatio: 1,
          }}
          allowMultiple={false}
          formats={["qr_code"]}
          styles={{
            container: {
              display: isCameraReady ? "block" : "none",
              maxWidth: "400px",
            },
            video: {
              width: "100%",
            },
          }}
        />

        {result && (
          <div>
            <p>Result: {result}</p>
            <button onClick={() => setResult("")}>Close</button>
          </div>
        )}
      </Modal>
      <ActionIcon
        loading={opened}
        style={{ display: platform === "web" ? "none" : "block" }}
        size={size}
        variant="light"
        color="primary"
        onClick={open}
        disabled={opened}
      >
        <QrCode size={size === "sm" ? 16 : 20} />
      </ActionIcon>
    </div>
  );
};

export default QRScanner;
