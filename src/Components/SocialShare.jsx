import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

const SocialShare = ({ url, title, description }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
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
          {/* <span>LinkedIn</span> */}
        </button>
        <button
          onClick={() => handleShare("twitter")}
          className="flex items-center space-x-2 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
          aria-label="Share on Twitter"
        >
          <FaTwitter className="text-xl" />
          {/* <span>Twitter</span> */}
        </button>
        <button
          onClick={() => handleShare("facebook")}
          className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors"
          aria-label="Share on Facebook"
        >
          <FaFacebook className="text-xl" />
          {/* <span>Facebook</span> */}
        </button>
        <button
          onClick={() => handleShare("whatsapp")}
          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp className="text-xl" />
          {/* <span>WhatsApp</span> */}
        </button>
        <button
          onClick={() => handleShare("telegram")}
          className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          aria-label="Share on Telegram"
        >
          <FaTelegram className="text-xl" />
          {/* <span>Telegram</span> */}
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
