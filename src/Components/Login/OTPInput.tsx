import { Box, TextField } from "@mui/material";
import { useState, useRef } from "react";

export const OTPInput = ({
    length = 4,
    onChangeOTP,
    }: {
    length?: number;
    onChangeOTP?: (otp: string) => void;
    }) => {
    const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (onChangeOTP) onChangeOTP(newOtp.join(""));

    if (value && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
    }
    };

    const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
    ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
    }
    };


  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={2}
      sx={{
        mt: 3,
      }}
    >
      {otp.map((digit, index) => (
        <TextField
        key={index}
        value={digit}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value, index)
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            handleKeyDown(e, index)
        }
        inputRef={(el) => (inputRefs.current[index] = el)}
        inputProps={{
            maxLength: 1,
            style: {
            textAlign: "center",
            fontSize: "1.5rem",
            color: "#fff",
            width: "3rem",
            },
        }}
        sx={{
            "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)",
            transition: "all 0.3s ease-in-out",
            "& fieldset": { borderColor: "transparent" },
            "&:hover fieldset": {
                borderColor: "rgba(255,255,255,0.5)",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#42a5f5",
                boxShadow: "0 0 10px rgba(66,165,245,0.5)",
            },
            },
        }}
        />

      ))}
    </Box>
  );
};
