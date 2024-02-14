export const FormImage = () => {

  return (
    <form action="javascript:;" id="productCard" className="product__card">
      <input type="image" alt="cat" src="#" className="form__img" />
      <div className="form_card">
        <div className="form_information">
          <button className="form__close--btn"><i className="fa-solid fa-xmark form-close"></i></button>
          <h2 id="formTitle" className="form__title">Title</h2>
          <p id="formPrice" className="form__price">$10</p>
          <span id="formHash1" className="form__hash">#tag1</span>
          <span id="formHash2" className="form__hash">#tag2</span>
          <span id="formHash3" className="form__hash">#tag3</span>
        </div>
        <button type="submit" id="formBuy" className="form__buy">Add to basket</button>
      </div>
    </form>
  )
}
