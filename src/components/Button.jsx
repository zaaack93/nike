const Button = ({ label , iconURL, backgroundColor,borderColor, textColor  }) => {
  return (
    <div className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full cursor-pointer  
      ${backgroundColor || 'bg-coral-red'}  
      ${borderColor || 'bg-coral-red' } 
      ${textColor || 'text-white'}`
     }>
        {label}
        {
            iconURL && <img src={iconURL} alt="arrow right" className="ml-2 rounded-full w-5 h-5" />
        }
    </div>
  )
}

export default Button