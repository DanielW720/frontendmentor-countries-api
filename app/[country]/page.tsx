import "material-icons/iconfont/material-icons.css";
import { Backbutton } from "./Backbutton";
import { Details } from "./Details";

const page = ({ params }: { params: { country: string } }) => {
  return (
    <div className="py-10 w-full px-8 flex justify-center">
      <div className="max-w-[410px]">
        <Backbutton />
        <Details />
      </div>
    </div>
  );
};

export default page;
