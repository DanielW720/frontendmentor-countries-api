import "material-icons/iconfont/material-icons.css";
import { Backbutton } from "./Backbutton";
import { Details } from "./Details";

export default async function page({
  params,
}: {
  params: { country: string };
}) {
  return (
    <div className="py-8 w-full px-8 flex justify-center">
      <div className="max-w-[410px]">
        <Backbutton />
        <Details />
      </div>
    </div>
  );
}
