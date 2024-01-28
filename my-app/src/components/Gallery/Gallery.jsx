const gallery = [
  'image/bride-8182890_1280.jpg',
  'image/children-817365_1280.jpg',
  'image/liberec-5285846_1280.jpg',
  'image/nature-3106213_1280.jpg',
  "image/park-7407081_1280.jpg",
  'image/woman-1509956_1280.jpg',
  'image/girl-2436545_1280.jpg',
  'image/cat.jpg'
]


export const Gallery = () => {
  return (
    <section id="Examples" class="examples">
      {gallery.map((img) => { return <img src={img} key={img} /> })}
    </section>
  )
}