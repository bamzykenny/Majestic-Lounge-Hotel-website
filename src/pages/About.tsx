import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {motion } from "framer-motion";
import { 
  Award,
  Users,
  Heart,
  Shield,
  Target,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import heroImage from "@/assets/hotel-hero.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Exceptional Service",
      description: "We believe every guest deserves personalized attention and care that exceeds expectations."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to quality drives us to continuously improve and set new standards in luxury hospitality."
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "We build lasting relationships through integrity, transparency, and consistent delivery of promises."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace new technologies and ideas to enhance the guest experience while maintaining timeless elegance."
    }
  ];

  const achievements = [
    { number: "25+", label: "Years of Excellence", description: "Serving discerning travelers since 1998" },
    { number: "50+", label: "Industry Awards", description: "Recognized globally for hospitality excellence" },
    { number: "500+", label: "Luxury Rooms", description: "Beautifully appointed accommodations" },
    { number: "98%", label: "Guest Satisfaction", description: "Consistently rated as exceptional" }
  ];

  const team = [
    {
      name: "Alexander Morrison",
      position: "General Manager",
      bio: "With over 20 years in luxury hospitality, Alexander leads our team with passion for excellence and guest satisfaction.",
      experience: "20+ years"
    },
    {
      name: "Isabella Chen", 
      position: "Director of Operations",
      bio: "Isabella ensures seamless operations across all departments, bringing efficiency and innovation to our daily service.",
      experience: "15+ years"
    },
    {
      name: "Marcus Williams",
      position: "Executive Chef",
      bio: "Marcus creates culinary masterpieces that define our dining experience, with Michelin-starred expertise.",
      experience: "18+ years"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
        </div>
        
        <motion.div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"           initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Our Story of Excellence
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            For over two decades, Grand Luxury Hotel has been synonymous with unparalleled hospitality, 
            setting the standard for luxury accommodation and personalized service.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-4xl font-bold text-primary mb-6">A Legacy of Luxury</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 1998 by visionary hotelier Margaret Sinclair, Grand Luxury Hotel began as a dream 
                    to create an oasis of sophistication in the heart of the city. What started as a boutique 
                    property with 50 rooms has evolved into a world-renowned destination.
                  </p>
                  <p>
                    Our journey has been marked by continuous innovation while preserving the timeless elegance 
                    and personalized service that defines our brand. We've expanded our offerings to include 
                    world-class dining, luxury spa services, and state-of-the-art business facilities.
                  </p>
                  <p>
                    Today, we stand as a testament to the belief that true luxury lies not just in opulent 
                    surroundings, but in the genuine care and attention we provide to every guest who walks 
                    through our doors.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  <Users className="w-5 h-5 mr-2" />
                  Meet Our Team
                </Button>
                <Button variant="outline" size="lg">
                  Our Awards
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="shadow-card text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-secondary mb-2">{achievement.number}</div>
                    <div className="font-semibold text-primary mb-1">{achievement.label}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Mission & Vision</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our purpose and aspirations guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-gold">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create extraordinary experiences that inspire and delight our guests, while fostering 
                  a culture of excellence, innovation, and genuine hospitality that enriches the lives of 
                  our team members and communities.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-gold">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the world's most admired luxury hotel brand, recognized for setting new standards 
                  in hospitality excellence, environmental responsibility, and community engagement while 
                  creating lasting memories for every guest.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-gold transition-elegant group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-elegant">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate professionals who lead our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-card hover:shadow-gold transition-elegant">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-gold rounded-full mx-auto mb-6 shadow-gold flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-2">{member.position}</p>
                  <div className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium">{member.experience}</span> in hospitality
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Our Commitment</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We are dedicated to creating memorable experiences while maintaining our responsibility 
              to our community and environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainability",
                items: ["Carbon-neutral operations by 2025", "Local sourcing partnerships", "Waste reduction programs", "Energy-efficient systems"]
              },
              {
                title: "Community",
                items: ["Local employment priority", "Community event hosting", "Charity partnership programs", "Educational scholarships"]
              },
              {
                title: "Guest Experience",
                items: ["Personalized service standards", "Continuous staff training", "Guest feedback integration", "Innovation in hospitality"]
              }
            ].map((commitment, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold mb-4">{commitment.title}</h3>
                  <div className="space-y-2">
                    {commitment.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;