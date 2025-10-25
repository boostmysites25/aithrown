import img1 from "../../assets/services-details/rpa1.jpeg";
import img2 from "../../assets/services-details/rpa2.jpeg";

const RPA = () => {
  return (
    <div className="flex flex-col gap-10 text-white">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="rpa"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          AI Automation Tools for Streamlined Operations
        </h2>
        
        {/* Problem Statement */}
        <div data-aos="fade-up" className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
          <h3 className="text-xl font-semibold text-red-800 mb-2">The Challenge</h3>
          <p className="description text-red-700">
            Businesses struggle with manual operations that consume valuable time and resources. 
            Repetitive tasks lead to human errors, increased operational costs, and reduced productivity. 
            Without AI automation tools, companies find themselves spending 60-80% of their time on routine tasks 
            instead of strategic initiatives that drive growth.
          </p>
        </div>

        <p data-aos="fade-up" className="description">
          Robotic Process Automation (RPA) is a technology that uses software
          robots to automate repetitive, rule-based tasks. These software robots
          can mimic human actions, interacting with applications and systems to
          perform tasks that were previously done manually. RPA has emerged as a
          powerful tool for businesses looking to improve efficiency, reduce
          costs, and enhance accuracy.
          <br />
          <br />
          One of the key benefits of RPA is its ability to automate repetitive
          tasks that are prone to human error. By eliminating manual
          intervention, RPA can significantly reduce the risk of mistakes and
          ensure consistency in processes. This can lead to improved quality and
          compliance, as well as reduced operational costs.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        {/* Solution */}
        <div data-aos="fade-up" className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Our AI Automation Solution</h3>
          <p className="description text-green-700">
            Our AI automation tools streamline your workflow by implementing intelligent software robots that handle repetitive tasks 24/7. 
            We develop custom AI solutions for business that integrate seamlessly with your existing systems, 
            eliminating manual bottlenecks and enabling your team to focus on strategic initiatives that drive growth.
          </p>
        </div>

        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          AI Solutions for Business: What We Provide
        </h2>

        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="rpa"
        />
        
        {/* Benefits */}
        <div data-aos="fade-up" className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Measurable Benefits of Our AI Automation Tools</h3>
          <ul className="space-y-3 text-blue-700">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>70% reduction</strong> in processing time with AI automation tools</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>99.9% accuracy</strong> in automated processes, eliminating human errors</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>50% cost savings</strong> through reduced manual labor requirements</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>24/7 operation</strong> with AI automation tools working around the clock</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>ROI of 400%+</strong> within 6 months of implementation</span>
            </li>
          </ul>
        </div>

        <p data-aos="fade-up" className="description">
          Process Assessment and Analysis: We identify processes that are
          suitable for automation, evaluate their complexity, and assess the
          potential benefits of RPA implementation.
          <br />
          <br />
          RPA Solution Design: Our experts design and develop customized RPA
          solutions that align with your specific business requirements and
          objectives.
          <br />
          <br />
          RPA Implementation: We deploy and configure RPA software robots to
          automate the identified processes, ensuring seamless integration with
          your existing systems.
          <br />
          <br />
          Ongoing Management and Support: We provide ongoing maintenance,
          monitoring, and support for your RPA implementation, ensuring optimal
          performance and addressing any issues that may arise.
          <br />
          <br />
          Training and Knowledge Transfer: We offer training programs to equip
          your team with the skills and knowledge needed to effectively manage
          and utilize RPA technology.
        </p>
      </div>
    </div>
  );
};

export default RPA;
