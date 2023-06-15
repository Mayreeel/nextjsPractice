import PutEdit from "./PutEdit";

export default function Edit(props: any) {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <PutEdit id={props.params.id} />
    </div>
  );
}
