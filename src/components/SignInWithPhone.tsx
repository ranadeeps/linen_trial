// src/components/SignInWithPhone.tsx
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  Typography,
  CircularProgress,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { postRequest } from "../utils/requests";
import { save_token } from "../utils/authentication";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess?: (phone: string) => void; // called on successful sign in
};

/** Replace these with real API calls */
async function SendOtp(
  phone: string
): Promise<{ success: boolean; message?: string | null }> {
  await new Promise((r) => setTimeout(r, 800));
  if (!/^(\+?\d{10,15})$/.test(phone))
    return { success: false, message: "Invalid phone format" };
  const { data, error, message } = await postRequest<any>(
    "/users/users/send-otp",
    {
      countryCode: "+91",
      mobileNumber: phone,
    }
  );
  if (error) {
    return { success: false, message };
  }
  localStorage.setItem("verficationToken", data.verificationToken);

  return { success: true, message };
}
async function VerifyOtp(
  otp: string
): Promise<{ success: boolean; message?: string | null }> {
  await new Promise((r) => setTimeout(r, 800));
  // For demo: accept '123456' as valid OTP
  const { data, error, message } = await postRequest<any>(
    "/users/users/verify-otp",
    {
      otp: otp,
      verificationToken: localStorage.getItem("verficationToken"),
    }
  );
  if (error) {
    return { success: false, message };
  }
  save_token(data.token);
  return { success: true, message };
}

export default function SignInWithPhone({ open, onClose, onSuccess }: Props) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"enter" | "verify">("enter");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [resendTimer, setResendTimer] = useState(0);
  const RESEND_SECONDS = 30;
  const [snackOpen, setSnackOpen] = useState(false);

  useEffect(() => {
    // reset when dialog opens/closes
    if (!open) {
      setPhone("");
      setOtp("");
      setStep("enter");
      setLoading(false);
      setError(null);
      setInfo(null);
      setResendTimer(0);
      setSnackOpen(false);
    }
  }, [open]);

  useEffect(() => {
    let t: number | undefined;
    if (resendTimer > 0) {
      t = window.setTimeout(() => setResendTimer((s) => s - 1), 1000);
    }
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [resendTimer]);

  function formatPhoneForBackend(input: string) {
    // Simple normalization: strip spaces and leading zeros (adjust per your rules)
    return input.replace(/\s+/g, "");
  }

  function validatePhone(p: string) {
    const normalized = formatPhoneForBackend(p);
    // very basic: allow digits with optional leading +
    return /^(\+?\d{10,15})$/.test(normalized);
  }

  const handleSendOtp = async () => {
    setError(null);
    const normalized = formatPhoneForBackend(phone);
    if (!validatePhone(normalized)) {
      setError("Please enter a valid phone number (10–15 digits, optional +).");
      return;
    }
    setLoading(true);
    try {
      const res = await SendOtp(normalized);
      if (!res.success) {
        setError(res.message || "Failed to send OTP.");
        setLoading(false);
        return;
      }
      setStep("verify");
      setInfo("OTP sent. Use code 123456 in this demo.");
      setResendTimer(RESEND_SECONDS);
    } catch (e) {
      setError("Network error while sending OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setError(null);
    if (!otp || otp.trim().length < 4) {
      setError("Please enter the OTP you received.");
      return;
    }
    setLoading(true);
    try {
      const res = await VerifyOtp(otp.trim());
      if (!res.success) {
        setError(res.message || "OTP verification failed.");
        setLoading(false);
        return;
      }
      setSnackOpen(true);
      onSuccess?.(formatPhoneForBackend(phone));
      // Optionally close the dialog after short delay
      setTimeout(() => {
        onClose();
      }, 900);
    } catch (e) {
      setError("Network error while verifying OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendTimer > 0) return;
    setError(null);
    setLoading(true);
    try {
      const res = await SendOtp(formatPhoneForBackend(phone));
      if (!res.success) {
        setError(res.message || "Failed to resend OTP.");
        setLoading(false);
        return;
      }
      setInfo("OTP resent.");
      setResendTimer(RESEND_SECONDS);
    } catch {
      setError("Network error while resending OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="xs"
        aria-labelledby="signin-phone-title"
      >
        <DialogTitle
          id="signin-phone-title"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          variant="button"
        >
          Sign in with phone
          <IconButton size="small" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Stack spacing={2} sx={{ mt: 1 }}>
            {step === "enter" && (
              <>
                <Typography variant="body2">
                  Enter your mobile number to receive a one-time code (OTP).
                </Typography>
                <TextField
                  label="Mobile number"
                  placeholder="+919876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  fullWidth
                  inputProps={{ inputMode: "tel" }}
                  helperText="Include country code (e.g. +91) or enter local number"
                />
                {error && (
                  <Typography color="error" variant="body2">
                    {error}
                  </Typography>
                )}
                {info && (
                  <Typography color="text.secondary" variant="body2">
                    {info}
                  </Typography>
                )}
              </>
            )}

            {step === "verify" && (
              <>
                <Typography variant="body2">
                  We sent an OTP to <strong>{phone}</strong>. Enter it below.
                </Typography>
                <TextField
                  label="Enter OTP"
                  placeholder="123456"
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  fullWidth
                  inputProps={{ inputMode: "numeric" }}
                />

                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="caption" color="text.secondary">
                    {resendTimer > 0
                      ? `Resend in ${resendTimer}s`
                      : "Didn't get it?"}
                  </Typography>
                  <Button
                    size="small"
                    onClick={handleResend}
                    disabled={resendTimer > 0 || loading}
                  >
                    Resend
                  </Button>
                </Stack>

                {error && (
                  <Typography color="error" variant="body2">
                    {error}
                  </Typography>
                )}
                {info && (
                  <Typography color="text.secondary" variant="body2">
                    {info}
                  </Typography>
                )}
              </>
            )}
          </Stack>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          {step === "enter" ? (
            <Button
              variant="contained"
              onClick={handleSendOtp}
              disabled={loading}
            >
              {loading ? <CircularProgress size={20} /> : "Send OTP"}
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleVerifyOtp}
              disabled={loading}
            >
              {loading ? <CircularProgress size={20} /> : "Verify & Sign in"}
            </Button>
          )}
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackOpen}
        autoHideDuration={2000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Signed in successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
