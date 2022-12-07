const Card = (props: any) => {
  return (
    <section className={`${props.className ? props.className : ""}`}>
      {props.children}
    </section>
  );
};

export default Card;
