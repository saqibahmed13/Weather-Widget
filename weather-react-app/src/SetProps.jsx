import MeraProps from "./Props";

export default function SetProps() {
  let myName = () => {
    return "saqib";
  };
  return (
    <div>
      <MeraProps setName={myName()} />
    </div>
  );
}
