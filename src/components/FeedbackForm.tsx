import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

export const FeedbackForm = () => {
  return (
    <Paper
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        borderRadius: 0,
        mt: 2,
        px: 2,
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        sx={{
          width: { xs: "100%", sm: "100%", md: "50%" },
          mx: "auto",
        }}
      >
        <Typography textTransform={"uppercase"}>
          Share your experience
        </Typography>
        <FormControl sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="outlined-basic"
            label="FULL NAME"
            variant="outlined"
            size="small"
            fullWidth
            slotProps={{
              inputLabel: {
                sx: {
                  fontWeight: "500", // make label bold
                  color: "#000000", // eco-green
                },
              },
            }}
            sx={{ mb: 2 }}
          />
          <FormLabel id="demo-row-radio-buttons-group-label">Age</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="under_18"
              control={<Radio />}
              label="Under 18"
            />
            <FormControlLabel
              value="18_to_24"
              control={<Radio />}
              label="18-24"
            />
            <FormControlLabel
              value="25_to_34"
              control={<Radio />}
              label="25-34"
            />
            <FormControlLabel
              value="35_to_44"
              control={<Radio />}
              label="35-44"
            />
            <FormControlLabel
              value="45_to_54"
              control={<Radio />}
              label="45-54"
            />
            <FormControlLabel
              value="55_to_64"
              control={<Radio />}
              label="55-64"
            />
            <FormControlLabel
              value="65_or_older"
              control={<Radio />}
              label="65 or older"
            />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="others"
              control={<Radio />}
              label="Others"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Paper>
  );
};
