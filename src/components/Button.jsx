const Button = ({ label , iconURL }) => {
  return (
    <div className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red cursor-pointer">
        {label}
        {
            iconURL && <img src={iconURL} alt="arrow right" className="ml-2 rounded-full w-5 h-5" />
        }
    </div>
  )
}

export default Button