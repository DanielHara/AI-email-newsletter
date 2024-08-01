import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
    Tailwind,
  } from "@react-email/components";
  import * as React from "react";
  
  interface NetlifyWelcomeEmailProps {
    steps?: {
      id: number;
      Description: React.ReactNode;
    }[];
    links?: string[];
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

const Reply = () => {
    return (
      <Html>
        <Head />
        <Preview>This is an AI-generated email</Preview>
        <Tailwind
          config={{
            theme: {
              extend: {
                colors: {
                  brand: "#2250f4",
                  offwhite: "#fafbfb",
                },
                spacing: {
                  0: "0px",
                  20: "20px",
                  45: "45px",
                },
              },
            },
          }}
        >
          <Body className="bg-offwhite text-base font-sans">
            <Img
              src={`${baseUrl}/static/netlify-logo.png`}
              width="184"
              height="75"
              alt="Netlify"
              className="mx-auto my-20"
            />
            <Container className="bg-white p-45">
              <Heading className="text-center my-0 leading-8">
                Welcome to a random newsletter!
              </Heading>
  
              <Section>
                <Row>
                  <Text className="text-base">
                    This is just some random text
                  </Text>
                  </Row>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };

export default Reply;
