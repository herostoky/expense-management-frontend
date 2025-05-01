import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Sign In | Expense Management",
  description: "Sign in to your Expense Management account",
};

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="flex justify-center mb-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Landmark className="h-6 w-6 text-primary" />
            </div>
          </Link>
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-tight hover:text-primary/90 transition-colors">
              Expense Management
            </h1>
          </Link>
          <p className="text-sm text-muted-foreground mt-1">
            Sign in to manage your finances
          </p>
        </div>

        <Card className="border-border/40 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">Sign in</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="border-border/60 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-primary hover:text-primary/90 underline-offset-4 hover:underline transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                className="border-border/60 focus-visible:ring-primary"
              />
            </div>
            <Button type="submit" className="w-full">
              Sign in
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="border-border/60 hover:bg-accent/10 hover:text-accent-foreground"
              >
                Google
              </Button>
              <Button
                variant="outline"
                className="border-border/60 hover:bg-accent/10 hover:text-accent-foreground"
              >
                GitHub
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="text-primary hover:text-primary/90 underline-offset-4 hover:underline transition-colors"
              >
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>
            By signing in, you agree to our{" "}
            <Link
              href="/terms"
              target="_blank"
              className="text-primary hover:text-primary/90 underline-offset-4 hover:underline transition-colors"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              target="_blank"
              className="text-primary hover:text-primary/90 underline-offset-4 hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
