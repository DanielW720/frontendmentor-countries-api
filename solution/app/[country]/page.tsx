import "material-icons/iconfont/material-icons.css";
import { Backbutton } from "./Backbutton";
import { Details } from "./Details";

export default async function page({
  params,
}: {
  params: { country: string };
}) {
  return (
    <div className="px-2 lg:w-full lg:px-10">
      <Backbutton />
      <Details />
    </div>
  );
}
