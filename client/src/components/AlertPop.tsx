import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

export default function AlertPop(title: string | any) {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>{title}</AlertTitle>
    </Alert>
  );
}
