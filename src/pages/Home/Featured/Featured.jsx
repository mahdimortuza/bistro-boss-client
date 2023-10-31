import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured Item"}
            >
            </SectionTitle>

            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg}></img>
                </div>
                <div className="md:ml-10">
                    <p> Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In inventore amet ducimus quae a nihil deserunt facere recusandae quidem! Consequuntur reiciendis explicabo ut architecto, ipsum quod aliquid debitis accusamus ex hic eligendi similique cum officiis aperiam a vel atque, reprehenderit corrupti voluptatem voluptatum sit provident tempore sapiente. Quas, magnam esse.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;