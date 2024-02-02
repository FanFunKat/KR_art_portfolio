export const Panel = (props) => {
  return (
    <div class="box">
      <h3 class="box__name">Custom</h3>
      <p class="box__price">Contact us</p>
      <ul class="box__offers">
        {props.conditions.map((element) => { return <li key={element} className="offer__condition">{element}</li> })}
      </ul>
    </div>
  )
}