export default function ServiceBlock(props) {
  return (
    <div className="service-block">
      <img alt={props.block.title} src={props.block.imgURL} />
      <p>{props.block.title}</p>
    </div>
  );
}