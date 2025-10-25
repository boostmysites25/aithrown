import img1 from "../../assets/services-details/data1.jpg";
import img2 from "../../assets/services-details/data2.jpg";
const DataAnalytics = () => {
  return (
    <div className="flex flex-col gap-10 text-white">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="data-analytics"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Predictive Analytics for Business Growth
        </h2>
        
        {/* Problem Statement */}
        <div data-aos="fade-up" className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
          <h3 className="text-xl font-semibold text-red-800 mb-2">The Challenge</h3>
          <p className="description text-red-700">
            Businesses struggle with vast amounts of data that remain untapped, leading to missed opportunities and reactive decision-making. 
            Without proper predictive analytics, companies make decisions based on historical data rather than future trends, 
            resulting in inefficient resource allocation and competitive disadvantages.
          </p>
        </div>

        <p data-aos="fade-up" className="description">
          Data Analytics is the process of examining data sets to draw
          conclusions about the information they contain, with the help of
          specialized systems and software. By utilizing statistical techniques
          and algorithms, data analytics helps businesses uncover patterns,
          correlations, and insights that can drive better decision-making,
          improve operational efficiency, and predict future trends.
          <br />
          <br />
          One of the key benefits of data analytics is its ability to extract
          valuable insights from large volumes of data. By transforming raw data
          into actionable information, businesses can optimize performance,
          enhance customer experiences, and create new opportunities for growth.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        {/* Solution */}
        <div data-aos="fade-up" className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Our Predictive Analytics Solution</h3>
          <p className="description text-green-700">
            Our AI automation tools and predictive analytics solutions transform your data into actionable insights. 
            We implement advanced machine learning algorithms that forecast trends, identify opportunities, 
            and optimize your business processes. Our AI solutions for business provide real-time analytics 
            that enable proactive decision-making and strategic planning.
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
          alt="data-analytics"
        />
        
        {/* Benefits */}
        <div data-aos="fade-up" className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Measurable Benefits of Our Predictive Analytics</h3>
          <ul className="space-y-3 text-blue-700">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>95% accuracy</strong> in predictive analytics for demand forecasting</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>60% reduction</strong> in inventory costs through optimized predictions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>45% improvement</strong> in customer retention with AI-powered insights</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>80% faster</strong> data processing with AI automation tools</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>ROI of 250%+</strong> within 8 months of implementation</span>
            </li>
          </ul>
        </div>

        <p data-aos="fade-up" className="description">
          Data Collection and Integration: We help gather and integrate data
          from various sources, ensuring it is clean, accurate, and ready for
          analysis.
          <br />
          <br />
          Data Analysis and Insights: Our experts apply advanced analytics
          techniques to uncover patterns, trends, and correlations that drive
          business decisions.
          <br />
          <br />
          Predictive Analytics: We use statistical models and machine learning
          to forecast future trends, helping businesses make proactive decisions
          and plan effectively.
          <br />
          <br />
          Data Visualization: We create interactive dashboards and visual
          reports that make it easy to understand and communicate key insights
          to stakeholders.
          <br />
          <br />
          Ongoing Monitoring and Reporting: We provide continuous monitoring of
          your data analytics systems and offer regular updates to ensure you
          stay informed of the latest developments and opportunities.
          <br />
          <br />
          Training and Knowledge Transfer: We offer training to equip your team
          with the skills and knowledge needed to interpret and leverage data
          for strategic decision-making.
        </p>
      </div>
    </div>
  );
};

export default DataAnalytics;
