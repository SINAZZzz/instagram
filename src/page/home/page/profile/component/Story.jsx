import { Box } from "@mui/material";

export default function Story({ img, title, alt }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          mr: "1rem",
        }}
      >
        <Box
          component="img"
          alt={alt}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            border: "solid 1px  rgb(210, 207, 207)",
          }}
          src={img}
        />
        <Box component="span" sx={{ fontWeight: "400", fontSize: "12px" }}>
          {title}
        </Box>
      </Box>
    </div>
  );
}
