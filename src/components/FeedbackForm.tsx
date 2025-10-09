import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { postRequest } from "../utils/requests";

export const FeedbackForm = ({
  snackBarFunction,
}: {
  snackBarFunction: (message: string, type: "success" | "error") => void;
}) => {
  const [showFields, setShowFields] = useState([false, false]);
  const [ageValue, setAgeValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [q2Value, setQ2Value] = useState("");
  const [q4Value, setQ4Value] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
    const {
      data: response,
      error,
      message,
    } = await postRequest<any>("/products/feedbacks/save-feedback", data);
    if (error) {
      snackBarFunction(message, "error");
    } else {
      formElement.reset();
      setAgeValue("");
      setGenderValue("");
      setQ2Value("");
      setQ4Value("");
      snackBarFunction("Feedback received", "success");
    }
    console.log(response, error, message);
    setShowFields([false, false]);
  };

  // // New enhanced style object
  // const focusVisibleSx = {
  //   // Target the root of FormControlLabel (which uses ButtonBase internally)
  //   "&.Mui-focusVisible": {
  //     backgroundColor: "transparent !important", // Use !important as a last resort for ButtonBase
  //   },
  //   // Target the specific area where the focus ring might be applied (ButtonBase/Radio wrapper)
  //   "& .MuiButtonBase-root": {
  //     "&.Mui-focusVisible": {
  //       backgroundColor: "transparent !important",
  //     },
  //   },
  //   // Ensure the label text itself isn't picking up a background
  //   "& .MuiFormControlLabel-label": {
  //     "&.Mui-focusVisible": {
  //       backgroundColor: "transparent",
  //     },
  //   },
  // };

  return (
    <Paper
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        borderRadius: 0,
        px: 2,
        pb: 2,
        backgroundColor: "primary.main",
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
        onSubmit={handleSubmit}
      >
        <Typography textTransform={"uppercase"} fontWeight={"bold"}>
          Share your experience
        </Typography>
        <TextField
          id="fullName"
          name="fullName"
          label="FULL NAME"
          variant="outlined"
          size="small"
          fullWidth
          slotProps={{
            inputLabel: {
              sx: {
                fontSize: "small",
                color: "#135638", // eco-green
              },
            },
          }}
          required
        />
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography id="age" component="legend" sx={{ fontSize: "small" }}>
            Age
            {/* Manually add the required asterisk if needed */}
            <span style={{ color: "red" }}>*</span>
          </Typography>
          <RadioGroup
            row
            aria-labelledby="age"
            name="age"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.5, // space between items
              fontSize: "small",
            }}
            value={ageValue}
            onChange={(e) => setAgeValue(e.target.value)}
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
                  // ...focusVisibleSx, // 👈 APPLIED THE FIX HERE
                }}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <FormControl>
          <Typography id="gender" component="legend" sx={{ fontSize: "small" }}>
            Gender
            {/* Manually add the required asterisk if needed */}
            <span style={{ color: "red" }}>*</span>
          </Typography>
          <RadioGroup
            row
            aria-labelledby="gender"
            name="gender"
            value={genderValue}
            onChange={(e) => setGenderValue(e.target.value)}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              // sx={focusVisibleSx} // 👈 APPLIED THE FIX HERE
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              // sx={focusVisibleSx} // 👈 APPLIED THE FIX HERE
            />
            <FormControlLabel
              value="others"
              control={<Radio />}
              label="Others"
              // sx={focusVisibleSx} // 👈 APPLIED THE FIX HERE
            />
          </RadioGroup>
        </FormControl>
        <TextField
          id="mobileNumber"
          name="mobileNumber"
          label="Mobile Number"
          variant="outlined"
          type="tel"
          size="small"
          fullWidth
          helperText="Enter 10 digit mobile number"
          slotProps={{
            htmlInput: {
              inputMode: "tel",
              pattern: "[0-9]*",
              maxLength: 10,
              minLength: 10,
            },
            inputLabel: {
              sx: {
                fontSize: "small",
                color: "#135638", // eco-green
              },
            },
          }}
          required
        />
        <TextField
          id="emailId"
          name="emailId"
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
                color: "#135638", // eco-green
              },
            },
          }}
          required
        />

        <TextField
          id="q1"
          name="q1"
          label="What did you make about our launch event today (11th Oct, 2025)?"
          multiline
          rows={2}
          slotProps={{
            inputLabel: {
              sx: {
                fontSize: "small",
                textWrap: "wrap",
                color: "#135638", // eco-green
              },
            },
          }}
        />
        <FormControl>
          <Typography id="q2" component="legend" sx={{ fontSize: "small" }}>
            Did you make a purchase decision?
            {/* Manually add the required asterisk if needed */}
            <span style={{ color: "red" }}>*</span>
          </Typography>
          <RadioGroup
            row
            aria-labelledby="q2"
            name="q2"
            onChange={(event) => {
              event.target.value == "no"
                ? setShowFields([true, false])
                : setShowFields([false, true]);
              setQ2Value(event.target.value);
            }}
            value={q2Value}
          >
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label="Yes"
              defaultChecked
              // sx={focusVisibleSx} // 👈 APPLIED THE FIX HERE
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label="No"
              // sx={focusVisibleSx} // 👈 APPLIED THE FIX HERE
            />
          </RadioGroup>
        </FormControl>
        {showFields[0] && (
          <TextField
            id="q3"
            name="q3"
            label="Please let us know why?"
            multiline
            rows={2}
            slotProps={{
              inputLabel: {
                sx: {
                  fontSize: "small",
                  color: "#135638", // eco-green
                },
              },
            }}
          />
        )}
        {showFields[1] && (
          <>
            <FormControl>
              <Typography id="q4" component="legend" sx={{ fontSize: "small" }}>
                Would you be open to sharing feedback about the product usage at
                a later stage?
                {/* Manually add the required asterisk if needed */}
                <span style={{ color: "red" }}>*</span>
              </Typography>

              <RadioGroup
                row
                aria-labelledby="q4"
                name="q4"
                value={q4Value}
                onChange={(e) => setQ4Value(e.target.value)}
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  defaultChecked
                  // sx={focusVisibleSx} // 👈 APPLIED THE FIX HERE
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  // sx={focusVisibleSx} // 👈 APPLIED THE FIX HERE
                />
              </RadioGroup>
            </FormControl>
          </>
        )}
        <Button variant="outlined" type="submit" sx={{ color: "text.primary" }}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
};
