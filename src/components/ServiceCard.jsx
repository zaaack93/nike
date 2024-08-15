const ServiceCard = ({imgURL,title,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
    <div className="flex justify-center items-center rounded-full bg-coral-red w-11 h-11">
    <img src={imgURL} alt={title} className="w-6 h-6" />
    </div>
                
                <h3 className="font-palanquin text-3xl leading-normal mt-5 font-bold text-center">{label}</h3>
                <p className="font-montserrat text-slate-gray text-lg text-center break-words mt-3 leading-normal">{subtext}</p>
            </div>
  )
}

export default ServiceCard