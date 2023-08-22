function Subtitle(props: any) {
  return (
    <div className={props.name} id={props.id}>
      <p>{props.paragraph} </p>
    </div>
  );
}

export default Subtitle;
