import React from "react";

type SocialCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
};

const SocialCard: React.FC<SocialCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
    >
      <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
      <div className="relative flex items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-2xl hover:bg-blue-500/20 hover:border-blue-500/50 transition-all backdrop-blur-sm group-hover:scale-[1.02]">
        {icon}
        <div className="text-left">
          <p className="text-sm text-gray-500">{title}</p>
          <p className="font-semibold text-gray-200">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default SocialCard;
