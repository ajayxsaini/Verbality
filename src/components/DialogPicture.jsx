const DialogPicture = ({show}) => {
  return (
    <div className= {`bg-transparent absolute h-1/2 w-2xl right-10 mt-4 z-0 border-2 border-gray-400 box-border ${show ? "opacity-100" : "opacity-0"} `  } >
      <div>
        <p>This is how we do it</p>
      </div>
    </div>
  )
}

export default DialogPicture