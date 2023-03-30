import { ThreeDots } from 'react-loader-spinner';

export function Loader() {
  return (
    <ThreeDots
      height="35"
      width="35"
      radius="9"
      color="red"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
}
