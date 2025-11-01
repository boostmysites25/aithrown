import { FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

const SocialShare = ({ url, title, description }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  const handleShare = (platform) => {
    window.open(shareLinks[platform], "_blank", "width=600,height=400");
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-lg font-semibold text-white">Share this content</h3>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => handleShare("linkedin")}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin className="text-xl" />
        </button>

        <button
          onClick={() => handleShare("facebook")}
          className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors"
          aria-label="Share on Facebook"
        >
          <FaFacebook className="text-xl" />
        </button>
        <button
          onClick={() => handleShare("whatsapp")}
          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
