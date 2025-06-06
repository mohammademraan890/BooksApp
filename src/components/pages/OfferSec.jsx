import { BooksArr } from "../../Data";
import ProductCard from "../Includes/ProductCard";
import Heading1 from "../Includes/Heading1";
import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
const OfferSec = () => {
  const {State} = useContext(StoreContext)
  useEffect(()=>{
    document.title="Your Offers|| BookSaw"
  },[])
  return (
    <div>
      <Heading1 desc="grab your oppurtunity" title={"books with offer"} />
      <section
        data-aos="fade-up"
        data-aos-duration="1100"
        className="offersec "
      >
        <div className="offersec-inner obj-width1">
          <div className="row">
            {State?.AllBooks?.slice(11,15)?.map((item) => {
              return (
                <ProductCard
                  key={item?.id}
                  id={item?.id}
                  title={item?.title}
                  author={item?.author}
                  price={item?.price}
                  prevPrice={item?.prevPrice}
                  showDiscout={true}
                  img={item?.img}
                  
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(OfferSec);
