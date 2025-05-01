import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

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
          <Link href="/sign-up">
            <Button size="lg" className="w-full sm:w-auto hover:cursor-pointer">
              Sign Up
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto hover:cursor-pointer"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-1 relative">
        <Card className="aspect-square max-w-md mx-auto rounded-2xl shadow-xl border-border/40">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-black">Expense Overview</CardTitle>
              <span className="text-sm text-muted-foreground">August 2023</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-40 bg-muted/30 rounded-lg mb-6 flex items-center justify-center">
              <div className="w-full h-32 flex items-end justify-around px-4">
                <div className="w-1/5 bg-chart-1 h-[60%] rounded-t-md" />
                <div className="w-1/5 bg-chart-2 h-[80%] rounded-t-md" />
                <div className="w-1/5 bg-chart-3 h-[40%] rounded-t-md" />
                <div className="w-1/5 bg-chart-4 h-[70%] rounded-t-md" />
                <div className="w-1/5 bg-chart-5 h-[50%] rounded-t-md" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Groceries</span>
                <span className="font-medium text-muted-foreground">
                  10 000 MGA
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Transportation</span>
                <span className="font-medium text-muted-foreground">
                  5 000 MGA
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Entertainment</span>
                <span className="font-medium text-muted-foreground">
                  1 500 MGA
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
