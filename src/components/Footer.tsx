import { Box, Link, Paper, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
export const Footer = () => {
  return (
    <Paper sx={{ backgroundColor: "secondary.main", borderRadius: 0, p: 2 }}>
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

          <Box display="flex" alignItems="center" gap={1}>
            <PhoneIcon fontSize="small" sx={{ color: "text.secondary" }} />

            <Typography
              color="text.secondary"
              textAlign={"start"}
              fontSize={"small"}
            >
              <span> +91 70759 67089</span>
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <EmailIcon fontSize="small" sx={{ color: "text.secondary" }} />
            <Typography
              color="text.secondary"
              textAlign={"start"}
              fontSize={"small"}
            >
              <span> support@thetruetouch.in</span>
            </Typography>
          </Box>
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
            Conscious clothing choices for a greener tomorrow
          </Typography>
          <Typography
            color="text.secondary"
            textAlign={"start"}
            fontSize={"small"}
          >
            <Link
              href="/feedback"
              color="text.secondary"
              textTransform={"uppercase"}
              fontSize={"small"}
            >
              Leave a review
            </Link>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
