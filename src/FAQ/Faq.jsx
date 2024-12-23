
import { useState } from "react";
import { faqsData } from "./Faq";
import FaqSingle from "./FaqSingle";
const Faq = () => {

    const [faqs,setFaqs] = useState(faqsData)

    return (
        <div>

            <h1 className="text-4xl font-serif font-bold text-center">FAQ APP</h1>

            <div>
                {
                    faqs.map(faq => <FaqSingle key={faqs.id} faq={faq} ></FaqSingle> )
                }
            </div>



            
        </div>
    );
};

export default Faq;