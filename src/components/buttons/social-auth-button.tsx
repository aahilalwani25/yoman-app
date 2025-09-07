import SvgGoogle from "@/src/assets/svg/icons/google-icon";
import { Text, TouchableOpacity } from "react-native";

interface Props{
    social: "facebook"|"google"
    title: string
    onPress: ()=>void
}

const SocialAuthButton = ({...props}:Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} className="flex flex-row border py-3 items-center justify-center gap-x-2 border-gray-500 w-full rounded-full bg-white">
      {props.social==='google' && (<SvgGoogle/>)}
      {/* {social==='facebook' && (<SvgFacebook/>)} */}
      <Text className="font-pp-mori text-black">{props.title}</Text>
    </TouchableOpacity>
  );
};

export default SocialAuthButton