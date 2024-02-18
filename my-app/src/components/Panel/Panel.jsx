export const Panel = (props) => {
  return (
    <div className="box">
      <h3 className="box__name">Custom</h3>
      <p className="box__price">Contact us</p>
      <ul className="box__offers">
        {props.conditions.map((element) => { return <li key={element} className="offer__condition">{element}</li> })}
      </ul>
    </div>
  )
}