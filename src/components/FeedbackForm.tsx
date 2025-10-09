import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const FeedbackForm = () => {
  const [showFields, setShowFields] = useState([false, false]);
  return (
    <Paper
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        borderRadius: 0,
        mt: 2,
        px: 2,
        pb: 2,
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        sx={{
          width: { xs: "100%", sm: "80%", md: "40%" },
          mx: "auto",
        }}
        component={"form"}
      >
        <Typography textTransform={"uppercase"} fontWeight={"bold"}>
          Share your experience
        </Typography>
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            "& .MuiFormControlLabel-label": { fontSize: "small" },
          }}
        >
          <TextField
            id="full_name"
            label="FULL NAME"
            variant="outlined"
            size="small"
            fullWidth
            slotProps={{
              inputLabel: {
                sx: {
                  fontSize: "small",
                  color: "#000000", // eco-green
                },
              },
            }}
            sx={{ mb: 2 }}
            required
          />
          <FormLabel id="age" sx={{ fontSize: "small" }} required>
            Age
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="age"
            name="age"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.5, // space between items
            }}
          >
            {[
              ["under_18", "Under 18"],
              ["18_to_24", "18–24"],
              ["25_to_34", "25–34"],
              ["35_to_44", "35–44"],
              ["45_to_54", "45–54"],
              ["55_to_64", "55–64"],
              ["65_or_older", "65 or older"],
            ].map(([value, label]) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={label}
                sx={{
                  flex: "0 1 150px", // min-width 120px, allow shrink/wrap
                }}
              />
            ))}
          </RadioGroup>
          <FormLabel id="gender" sx={{ fontSize: "small" }} required>
            Gender
          </FormLabel>
          <RadioGroup row aria-labelledby="gender" name="gender">
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
          <TextField
            id="mobile_number"
            label="Mobile Number"
            variant="outlined"
            type="tel"
            size="small"
            fullWidth
            slotProps={{
              htmlInput: { inputMode: "tel", pattern: "[0-9]*", maxLength: 10 },
              inputLabel: {
                sx: {
                  fontSize: "small",
                  color: "#000000", // eco-green
                },
              },
            }}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            id="email_id"
            label="Email ID"
            variant="outlined"
            type="email"
            size="small"
            fullWidth
            slotProps={{
              htmlInput: {
                inputMode: "email",
              },
              inputLabel: {
                sx: {
                  fontSize: "small",
                  color: "#000000", // eco-green
                },
              },
            }}
            sx={{ mb: 2 }}
            required
          />

          <TextField
            id="q1"
            label="What did you make about our launch event today?"
            multiline
            rows={2}
            slotProps={{
              inputLabel: {
                sx: {
                  fontSize: "small",
                  color: "#000000", // eco-green
                },
              },
            }}
            sx={{ mb: 2 }}
          />
          <FormLabel id="q2" sx={{ fontSize: "small" }} required>
            Did you make a purchase decision?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="q1"
            name="q2"
            onChange={(event) =>
              event.target.value == "no"
                ? setShowFields([true, false])
                : setShowFields([false, true])
            }
          >
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label="Yes"
              defaultChecked
            />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          {showFields[0] && (
            <TextField
              id="q3"
              label="Make us improve?"
              multiline
              rows={2}
              slotProps={{
                inputLabel: {
                  sx: {
                    fontSize: "small",
                    color: "#000000", // eco-green
                  },
                },
              }}
              sx={{ mb: 2 }}
            />
          )}
          {showFields[1] && (
            <>
              <FormLabel id="q4" sx={{ fontSize: "small" }}>
                Would you be open to sharing feedback about the product usage at
                a later stage?
              </FormLabel>

              <RadioGroup row aria-labelledby="q4" name="q4">
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  defaultChecked
                />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </>
          )}
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </FormControl>
      </Box>
    </Paper>
  );
};
