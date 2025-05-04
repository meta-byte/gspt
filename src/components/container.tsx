import { Box } from "ink";

interface containerProps {
  children?: React.ReactNode;
}

const Container = ({ children }: containerProps) => {
  return (
    <Box
      alignSelf="center"
      width="80%"
      height={20}
      margin={2}
      borderStyle="bold"
      borderColor="magenta">
      {children}
    </Box>
  );
};

export default Container;
