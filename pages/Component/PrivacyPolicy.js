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

const privacyPolicyData = {
    title: "Privacy Policy",
    introduction:
        "At greenlifepowersolution.in official website, we are committed to safeguarding the privacy of our visitors. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website.",
    sections: [
        {
            title: "1. Information we collect",
            content: [
                "Personal Identification Information: This includes your name, email address, phone number, and any other information you provide via forms on the website.",
                "Usage Data: We may collect information on how the website is accessed and used. This may include your IP address, browser type, pages visited, and the time and date of your visit.",
                "Cookies: We use cookies to enhance your experience on our site. Cookies are small data files stored on your browser. You can choose to disable cookies through your browser settings."
            ]
        },
        {
            title: "2. How we use your information",
            content: [
                "To respond to your inquiries or requests",
                "To improve the website and provide a better user experience",
                "To send you updates, newsletters, or other communications you have opted to receive",
                "To comply with legal requirements and prevent fraudulent activities"
            ]
        },
        {
            title: "3. Sharing your information",
            content: [
                "With your explicit consent",
                "To comply with legal obligations, such as responding to subpoenas or court orders",
                "To protect the rights, safety, or property of greenlifepowersolution.in, its website, or others"
            ]
        },
        {
            title: "4. Data security",
            content: [
                "We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security."
            ]
        },
        {
            title: "5. Your rights",
            content: [
                "Access the personal data we have collected about you",
                "Correct any inaccuracies in your data",
                "Request deletion of your data"
            ],
            note: "To exercise these rights, please contact us at "
        },
        {
            title: "6. Third-party services",
            content: [
                "Our website may contain links to third-party services or websites. Please note that we are not responsible for the privacy practices of third-party websites. We encourage you to read the privacy policies of any third-party websites you visit."
            ]
        },
        {
            title: "7. Changes to this privacy policy",
            content: [
                "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and we encourage you to review this policy periodically. Your continued use of the website following the posting of changes constitutes your acceptance of those changes."
            ]
        }
    ]
};

const PrivacyPolicy = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="md" sx={{ pt: isSmallScreen ? 5 : 5, px: isSmallScreen ? 2 : 4 }}>
            <Box>
                <Typography variant={isSmallScreen ? "h5" : "h4"} gutterBottom>
                    {privacyPolicyData.title}
                </Typography>
                <Typography variant="body1" paragraph>
                    {privacyPolicyData.introduction}
                </Typography>
            </Box>
            {privacyPolicyData.sections.map((section, index) => (
                <Box key={index} sx={{ mt: 3 }}>
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
                    {section.note && (
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            {section.note}
                        </Typography>
                    )}
                </Box>
            ))}
        </Container>
    );
};

export default PrivacyPolicy;
