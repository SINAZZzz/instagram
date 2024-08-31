import Box from "@mui/material/Box";
import useWindowSize from "../../util/Utility";

const Loading = () => {
  const { width } = useWindowSize();
  return (
    <>
      {width < 900 ? (
        <Box component="div" className="loading-container">
          <Box component="div" className="spinner"></Box>
          <Box component="p" sx={{ fontSize: "20px", fontWeight: "600" }}>
            Loading...
          </Box>
        </Box>
      ) : (
        <Box component="div" className="loading-container">
          <Box component="div" className="spinner"></Box>
          <Box component="p" sx={{ fontSize: "20px", fontWeight: "600" }}>
            It works only with the phone...
          </Box>
        </Box>
      )}
    </>
  );
};

export default Loading;
