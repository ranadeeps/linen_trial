import { Link, Paper, Typography } from "@mui/material";
import LocationPinIcon from "@mui/icons-material/LocationPin";

export const PreLaunch = () => {
  return (
    <Paper
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        borderRadius: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
      }}
    >
      <Typography
        textAlign={"center"}
        variant="h5"
        sx={{
          fontWeight: "500",
          textTransform: "uppercase",
          textAlign: "justify",
          p: 2,
        }}
      >
        We are going live on 11th Oct, 2025.
      </Typography>
      <Typography
        textAlign={"center"}
        variant="h6"
        sx={{
          fontWeight: "300",
          textTransform: "uppercase",
          textAlign: "justify",

          p: 2,
        }}
      >
        <LocationPinIcon fontSize="small"></LocationPinIcon>
        Bower School of Entrepreneurship, Hyderabad, Telangana.
      </Typography>
      <Typography
        textAlign={"center"}
        sx={{
          fontWeight: "300",
          textTransform: "uppercase",
          textAlign: "justify",
          p: 2,
        }}
      >
        Interested folks need to{" "}
        <Link
          href="https://zfrmz.in/CVton98r7bKXGnFPlMQq?referrername=11thOctober2025"
          target="_blank"
          color="text.primary"
        >
          register here
        </Link>{" "}
        to be part of our launch.
      </Typography>
    </Paper>
  );
};
