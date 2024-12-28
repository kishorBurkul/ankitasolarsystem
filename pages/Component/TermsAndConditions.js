import React from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';

const termsAndConditionsData = {
  title: "Terms and Conditions",
  introduction:
    "Welcome to greenlifepowersolution.in By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully before using the website.",
  sections: [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing our website, you agree to these terms and conditions in full. If you disagree with any part of these terms, you must not use our website."
      ]
    },
    {
      title: "2. Changes to Terms",
      content: [
        "We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the revised terms."
      ]
    },
    {
      title: "3. User Responsibilities",
      content: [
        "You agree to use the website only for lawful purposes and in a way that does not infringe on the rights of, restrict, or inhibit anyone else’s use of the website.",
        "You must not engage in any activity that could harm the website or its users."
      ]
    },
    {
      title: "4. Intellectual Property Rights",
      content: [
        "All content on this website, including text, images, logos, and designs, is the property of greenlifepowersolution.in and is protected by copyright laws. You may not reproduce, distribute, or create derivative works from this content without prior written consent."
      ]
    },
    {
      title: "5. Limitation of Liability",
      content: [
        "We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the website. This includes but is not limited to damages for loss of data or profit, or due to business interruption."
      ]
    },
    {
      title: "6. Governing Law",
      content: [
        "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which greenlifepowersolution.in operates."
      ]
    },
    {
      title: "7. Contact Information",
      content: [
        "If you have any questions about these terms, please contact us at greenlifepowersolutionMh@gmail.com."
      ]
    }
  ]
};

const TermsAndConditions = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="md" sx={{ py: isSmallScreen ? 5 : 5, px: isSmallScreen ? 2 : 4 }}>
      <Box>
        <Typography variant={isSmallScreen ? "h5" : "h4"} gutterBottom>
          {termsAndConditionsData.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {termsAndConditionsData.introduction}
        </Typography>
      </Box>
      {termsAndConditionsData.sections.map((section, index) => (
        <Box key={index}>
          <Typography variant={isSmallScreen ? "h6" : "h5"} gutterBottom>
            {section.title}
          </Typography>
          <List>
            {section.content.map((item, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Container>
  );
};

export default TermsAndConditions;
