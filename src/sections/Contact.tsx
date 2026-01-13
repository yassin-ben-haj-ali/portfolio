import ContactCard from "@/components/ContactCard";
import SocialCard from "@/components/SocialCard";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-purple-900/5 to-black" />
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Let's Stay In {""}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Don't hesitate to contact me to discuss your
            ideas.
          </p>
        </div>
        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <ContactCard
            icon={<Mail className="text-blue-400" size={28} />}
            title="Email"
            description="yassinbenhajali5@gmail.com"
            href="mailto:yassinbenhajali5@gmail.com"
            isPurple={false}
          />
          {/* Phone */}
          <ContactCard
            icon={<Phone className="text-purple-400" size={28} />}
            title="Phone"
            description="+216 28 75 22 73"
            href="tel:+21628752273"
            isPurple
          />
          {/* Location */}
          <ContactCard
            icon={<MapPin className="text-blue-400" size={28} />}
            title="Location"
            description="Sousse, Tunisia"
            isPurple={false}
          />
          {/* Availability */}
          <ContactCard
            icon={
              <div className="w-7 h-7 bg-green-500/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
            }
            title="Availability"
            description="Available for new projects"
            isPurple
          />
        </div>

        {/* Social Links */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-6">
            Retrouvez-moi sur
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {/* GitHub */}
            <SocialCard
              icon={
                <Github
                  className="text-blue-400 group-hover:scale-110 transition-transform"
                  size={28}
                />
              }
              link="https://github.com/yassin-ben-haj-ali"
              title="GitHub"
              description="@YassineBenHadjAli"
            />
            {/* LinkedIn */}
            <SocialCard
              icon={
                <Linkedin
                  className="text-blue-400 group-hover:scale-110 transition-transform"
                  size={28}
                />
              }
              link="https://www.linkedin.com/in/yassine-ben-haj-ali-820ba81b5"
              title="LinkedIn"
              description="@YassineBenHadjAli"
            />
          </div>
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
};
export default Contact;
