import { motion } from "framer-motion";
import { Code2, Zap, Shield, Smartphone, Layers, Rocket } from "lucide-react";

const features = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Modern Stack",
    description:
      "Built with Next.js, TypeScript, and Tailwind CSS for the best developer experience.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description:
      "Optimized for performance with server-side rendering and static generation.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure by Default",
    description:
      "Built-in security features and best practices for your applications.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Responsive Design",
    description:
      "Beautiful and responsive UI that works on all devices and screen sizes.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Component Library",
    description:
      "Rich set of pre-built components using shadcn/ui for consistent design.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Easy Deployment",
    description:
      "Deploy your applications with ease using Vercel or any other platform.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to build modern web applications
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
