import "material-icons/iconfont/material-icons.css";
import { Backbutton } from "./Backbutton";
import { Details } from "./Details";

export default async function page({
  params,
}: {
  params: { country: string };
}) {
  return (
    <div>
      <Backbutton />
      <Details />
    </div>
  );
}
