import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  bussiness?: string;
  phone: string;
  message: string;
}

export default function EmailTemplate({
  name,
  email,
  bussiness,
  phone,
  message,
}: EmailTemplateProps) {
  return (
    <Html>
      <Body style={{ fontFamily: "Arial, sans-serif" }}>
        <Container>
          <Heading>New Contact Message</Heading>

          <Text><strong>Name:</strong> {name}</Text>
          <Text><strong>Email:</strong> {email}</Text>
          <Text><strong>Phone:</strong> {phone}</Text>

          {bussiness && (
            <Text><strong>Business:</strong> {bussiness}</Text>
          )}

          <Hr />

          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}

