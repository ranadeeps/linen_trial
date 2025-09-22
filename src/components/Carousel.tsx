import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Carousel = () => {
  const items = [
    { url: "", text: "Price increase sale" },
    { url: "", text: "Now pay with LT pay later" },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        m: 0,
        backgroundColor: "primary.main",
        py: 1,
      }}
    >
      <Typography variant="h6" sx={{ textAlign: "center", color: "white" }}>
        {items[index].text}
      </Typography>
    </Box>
  );
};

export default Carousel;
