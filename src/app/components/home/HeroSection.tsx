export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="text-primary">Manage</span> your finances with ease
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Track expenses, monitor income, and take control of your financial
          future with our intuitive expense management app.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="aspect-square max-w-md rounded-2xl bg-card p-6 shadow-xl border border-border">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Expense Overview</h3>
            <span className="text-sm text-muted-foreground">August 2023</span>
          </div>
          <div className="space-y-4">
            <div className="h-40 bg-muted/30 rounded-lg mb-6 flex items-center justify-center">
              <div className="w-full h-32 flex items-end justify-around px-4">
                <div className="w-1/5 bg-chart-1 h-[60%] rounded-t-md"></div>
                <div className="w-1/5 bg-chart-2 h-[80%] rounded-t-md"></div>
                <div className="w-1/5 bg-chart-3 h-[40%] rounded-t-md"></div>
                <div className="w-1/5 bg-chart-4 h-[70%] rounded-t-md"></div>
                <div className="w-1/5 bg-chart-5 h-[50%] rounded-t-md"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span>Groceries</span>
                <span className="font-medium">$350.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span>Transportation</span>
                <span className="font-medium">$120.50</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span>Entertainment</span>
                <span className="font-medium">$85.75</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
