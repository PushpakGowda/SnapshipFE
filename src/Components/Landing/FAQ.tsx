import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is SnapShip?",
    answer:
      "SnapShip is a photo printing and album creation platform that transforms your favorite moments into beautifully designed photo albums, delivered right to your doorstep.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Our standard delivery time is between 5–7 business days, depending on your location. Express delivery options are also available at checkout.",
  },
  {
    question: "Can I customize my photo album design?",
    answer:
      "Absolutely! You can choose from a wide variety of templates, layouts, and cover designs to personalize your album to match your style.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, SnapShip ships worldwide. International shipping rates and times vary depending on destination.",
  },
  {
    question: "What image formats are supported?",
    answer:
      "We support JPG, PNG, and HEIC image formats. For the best print quality, we recommend uploading high-resolution images of at least 300 DPI.",
  },
  {
    question: "Is there a limit to how many photos I can upload?",
    answer:
      "There’s no strict limit — you can upload as many photos as your chosen album design allows. For larger collections, we recommend dividing them into multiple albums for better organization.",
  },
  {
    question: "Can I preview my album before printing?",
    answer:
      "Yes! SnapShip provides a full digital preview of your album before final confirmation, so you can review and adjust layouts, captions, and photo placements.",
  },
];

export const FAQ= () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box
      id="Landing-FAQ"
      sx={{
        width: "100%",
        mx: "auto",
        mt: 8,
        mb: 8,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box display="flex" justifyContent="center" width="100%">
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            color: "#333",
            fontWeight: "bold",
            maxWidth: { xs: "100%", sm: 650 },
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem", lg: "3rem" },
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </Typography>
      </Box>

      {faqs.map((faq, index) => (
        <Card
          key={index}
          elevation={3}
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            },
          }}
        >
          <CardContent>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              onClick={() => handleExpandClick(index)}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#333",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                {faq.question}
              </Typography>

              <IconButton
                sx={{
                  transform:
                    expanded === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
                aria-expanded={expanded === index}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </Box>

            <Collapse in={expanded === index} timeout="auto" unmountOnExit>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  color: "#555",
                  lineHeight: 1.6,
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {faq.answer}
              </Typography>
            </Collapse>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
