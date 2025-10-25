import { Link } from "react-router-dom";
import PageBanner from "../Components/PageBanner";
import { blogsLinks } from "../contant";
import blogimg from "../assets/blogs/blog1.jpeg";
import SEO from "../Components/SEO";
import SocialShare from "../Components/SocialShare";
const BlogPage = () => {
  return (
    <div className="">
      <SEO 
        title="AI Insights & Trends | Aithrown Blog"
        description="Stay updated with the latest AI insights, trends, and innovations. Read expert articles on artificial intelligence, machine learning, and business automation."
        keywords="AI insights, AI trends, artificial intelligence blog, machine learning, AI innovation, business automation"
        canonical="https://www.aithrown.com/blogs"
      />
      <PageBanner title={"Blogs"} />
      
      {/* Social Sharing Section */}
      <div className="wrapper py-8">
        <SocialShare 
          url="https://www.aithrown.com/blogs"
          title="AI Insights & Trends | Aithrown Blog"
          description="Stay updated with the latest AI insights, trends, and innovations. Read expert articles on artificial intelligence, machine learning, and business automation."
        />
      </div>
      
      <div className="grid wrapper lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-[5rem]">
        {blogsLinks.map((obj, i) => (
          <Link key={i} to={obj.link} className=" group">
            <div className="flex flex-col h-full bg-[#0458F6] rounded-lg overflow-clip  items-center ">
              <img
                src={obj.image}
                alt={`AI insights and trends blog post ${i + 1} - ${obj.desc.substring(0, 50)}...`}
                className=" h-full w-full max-h-[10rem] left-0 top-0 object-cover group-hover:scale-105 transition-all duration-300"
              />
              <div className="p-4">
                <h4 className=" text-white font-bold text-3xl  transition-all duration-300  ">
                  {" "}
                  Blog {i + 1}
                </h4>
                <p className="text-white line-clamp-5">{obj.desc}</p>
                <div className="mt-3">
                  <Link to="/services" className="text-blue-300 hover:text-blue-100 text-sm underline">
                    Explore our AI marketing solutions
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
