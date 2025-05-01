export default function FeaturesSection() {
  const features = [
    {
      title: "Expense Tracking",
      description:
        "Log and categorize your expenses with ease. Keep track of where your money goes.",
      icon: "📊",
    },
    {
      title: "Income Management",
      description:
        "Record all your income sources and see your earnings at a glance.",
      icon: "💰",
    },
    {
      title: "Custom Categories",
      description:
        "Create personalized categories that match your specific financial needs.",
      icon: "🏷️",
    },
  ];

  return (
    <section className="w-full py-20 bg-blue-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Powerful Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your personal finances effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={`${index}-${feature.title}`}
              className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border/40 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
