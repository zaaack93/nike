import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
        
        <h2 className="font-palanquin text-4xl text-center font-bold">What Our <span className="text-coral-red">Customers</span> Say</h2>
         <p className="font-montserrat text-xl text-center text-slate-gray mt-4 max-w-xl m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in risus, euismod vel ultricies ac, tempus quis arcu. Quisque at dolor sit amet.</p>
    
        <div className="flex flex-wrap justify-evenly items-center gap-14 mt-40 max-sm:flex-col">
            {
                reviews.map((review) => (
                    <ReviewCard {...review} key={review.customerName}/>
                ))
            }
           
        </div>
    </section>


  )
}

export default CustomerReviews