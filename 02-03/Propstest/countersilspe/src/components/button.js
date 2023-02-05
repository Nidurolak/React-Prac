function CustomButton(props){
    const{ background,color, onClick, children} = props
    if(color){
      return(
        <button
        style={{background:background, color: color}}
        onClick={onClick}>
        {children}</button>
      )
    }
    return<button onClick={props.onClick}> {props.children}</button>
  }


export default CustomButton;