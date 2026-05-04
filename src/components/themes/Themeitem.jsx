const Themeitem = ({hue, img, changeColor}) => {
  return (
    <img src={img} alt="" className="theme-img" onClick={() => changeColor(hue)}/> 
  )
}

export default Themeitem
