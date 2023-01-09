import { Social } from "../types/type";

interface Props {
  social: Social;
}

const Social = ({ social }: Props) => {
  return <a href={social.path}>CLick</a>;
};

export default Social;
