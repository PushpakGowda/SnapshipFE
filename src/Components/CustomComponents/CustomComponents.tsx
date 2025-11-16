// CircularCheck.tsx
import { Box, Stack } from "@mui/material";

export const CircularCheck = ({ checked }: { checked: boolean }) => {
  return (
    <Box
      sx={{
        width: 22,
        height: 22,
        borderRadius: "50%",
        border: "2px solid #fff",
        backgroundColor: checked ? "#1976d2" : "rgba(255,255,255,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.25s ease",
        boxShadow: checked
          ? "0 0 8px rgba(25,118,210,0.6)"
          : "0 0 4px rgba(0,0,0,0.2)",

        "&:after": {
          content: checked ? '"✓"' : "''",
          color: "white",
          fontSize: "14px",
          fontWeight: 700,
          transition: "opacity 0.2s ease",
        },
      }}
    />
  );
};

// ---------------- Helper: Dots Carousel ----------------
export const DotsCarousel: React.FC<{
  length: number;
  active: number;
  onDotClick?: (index: number) => void;
}> = ({ length, active, onDotClick }) => {
  return (
    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mt: 1 }}>
      {Array.from({ length }).map((_, i) => (
        <Box
          key={i}
          onClick={() => onDotClick?.(i)}
          sx={{
            width: active === i ? 14 : 8,
            height: 8,
            borderRadius: 6,
            backgroundColor: active === i ? "primary.main" : "divider",
            transition: "all .25s ease",
            cursor: "pointer",
          }}
        />
      ))}
    </Stack>
  );
};
