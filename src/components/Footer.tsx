import { Box, Link, Paper, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
export const Footer = () => {
  return (
    <Paper sx={{ backgroundColor: "primary.main", borderRadius: 0, p: 2 }}>
      <Box
        display={"flex"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 15 },
          justifyContent: "center",
        }}
      >
        <Box display={"flex"} sx={{ flexDirection: "column" }} gap={0.4}>
          <Typography
            color="text.secondary"
            textAlign={"start"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
          >
            Contact us
          </Typography>
          <Typography
            color="text.secondary"
            textAlign={"start"}
            fontSize={"small"}
          >
            <PhoneIcon fontSize="small"></PhoneIcon> +91 70759 67089
          </Typography>
          <Typography
            color="text.secondary"
            textAlign={"start"}
            fontSize={"small"}
          >
            <EmailIcon fontSize="small" /> support@thetruetouch.in
          </Typography>
        </Box>
        <Box display={"flex"} sx={{ flexDirection: "column" }} gap={0.4}>
          <Typography
            color="text.secondary"
            textAlign={"start"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
          >
            THE TRUE TOUCH
          </Typography>
          <Typography
            color="text.secondary"
            textAlign={"start"}
            fontSize={"small"}
          >
            The premium and sustainable linen clothing brand
          </Typography>
          <Typography color="text.secondary" textAlign={"start"}>
            <Link
              href="/feedback"
              color="text.secondary"
              textTransform={"uppercase"}
            >
              Leave a review
            </Link>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
