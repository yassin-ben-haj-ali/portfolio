type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  isPurple: boolean;
  href?: string;
};

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  href,
  isPurple,
}) => {
  return (
    <div className="group relative">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          isPurple
            ? "from-purple-500/10 to-blue-500/10"
            : "from-blue-500/10 to-purple-500/10"
        } rounded-2xl blur-xl group-hover:blur-2xl transition-all`}
      />
      <a
        href={href}
        className={`relative flex items-center gap-4 p-6 bg-gradient-to-br ${
          isPurple
            ? "from-purple-500/5 border-purple-500/20 hover:border-purple-500/40"
            : "from-blue-500/5 border-blue-500/20 hover:border-blue-500/40"
        } to-transparent rounded-2xl border transition-all backdrop-blur-sm group-hover:scale-[1.02] h-full`}
      >
        <div
          className={`p-3 ${
            isPurple ? "bg-purple-500/10" : "bg-blue-500/10"
          } rounded-xl border ${
            isPurple ? "border-purple-500/30" : "border-blue-500/30"
          }`}
        >
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-gray-200 font-medium">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ContactCard;
