import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  PlusIcon,
  TrendingUpIcon,
  ArrowUpIcon,
  TrendingDownIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  MinusIcon,
  ArrowRightIcon,
  WalletIcon,
  FilterIcon,
  CalendarIcon,
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  HandshakeIcon,
  ShoppingCartIcon,
  WifiIcon,
  ChevronDownIcon,
} from "lucide-react";

export default function TransactionsPage() {
  return (
    <div className="container mx-auto py-8 space-y-8 max-w-6xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Transactions
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your financial activities
          </p>
        </div>
        <div className="flex items-center space-x-3 self-end sm:self-auto">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <PlusIcon className="h-4 w-4 mr-2" />
            New Transaction
          </Button>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        <Card className="bg-gradient-to-br from-background to-background/80 border-border/40 shadow-md overflow-hidden">
          <CardHeader className="pb-2 pt-5">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <TrendingUpIcon className="h-4 w-4 mr-2 text-primary/70" />
              Income
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,345,000 MGA</div>
            <div className="flex items-center mt-1">
              <Badge
                variant="outline"
                className="text-xs bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20"
              >
                <ArrowUpIcon className="h-3 w-3 mr-1" /> +15%
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">
                from last month
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-background to-background/80 border-border/40 shadow-md overflow-hidden">
          <CardHeader className="pb-2 pt-5">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <TrendingDownIcon className="h-4 w-4 mr-2 text-primary/70" />
              Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,789,500 MGA</div>
            <div className="flex items-center mt-1">
              <Badge
                variant="outline"
                className="text-xs bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20"
              >
                <ArrowDownIcon className="h-3 w-3 mr-1" /> -5%
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">
                from last month
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-background to-background/80 border-border/40 shadow-md overflow-hidden">
          <CardHeader className="pb-2 pt-5">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <ArrowLeftIcon className="h-4 w-4 mr-2 text-primary/70" />
              Owed to You
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">500,000 MGA</div>
            <div className="flex items-center mt-1">
              <Badge
                variant="outline"
                className="text-xs bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20"
              >
                <MinusIcon className="h-3 w-3 mr-1" /> 0%
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">
                no change
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-background to-background/80 border-border/40 shadow-md overflow-hidden">
          <CardHeader className="pb-2 pt-5">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <ArrowRightIcon className="h-4 w-4 mr-2 text-primary/70" />
              You Owe
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">200,000 MGA</div>
            <div className="flex items-center mt-1">
              <Badge
                variant="outline"
                className="text-xs bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-yellow-500/20"
              >
                <ArrowUpIcon className="h-3 w-3 mr-1" /> +11%
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">
                from last month
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-md overflow-hidden">
          <CardHeader className="pb-2 pt-5">
            <CardTitle className="text-sm font-medium flex items-center">
              <WalletIcon className="h-4 w-4 mr-2 text-primary" />
              Current Assets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">855,500 MGA</div>
            <div className="flex items-center mt-1">
              <Badge
                variant="outline"
                className="text-xs bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
              >
                <ArrowUpIcon className="h-3 w-3 mr-1" /> +10%
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">
                from last month
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions List */}
      <Card className="border-border/40 shadow-md overflow-hidden mt-8">
        <CardHeader className="pb-0 pt-6 px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
                aria-label="Previous month"
              >
                <ArrowLeftIcon className="h-4 w-4" />
              </Button>
              <CardTitle>July 2023</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
                aria-label="Next month"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-1 border border-border/40 rounded-md overflow-hidden">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-3 rounded-none bg-primary/10 text-primary hover:bg-primary/20"
                aria-label="List view"
              >
                List
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-3 rounded-none hover:bg-primary/10 hover:text-primary"
                aria-label="Calendar view"
              >
                Calendar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-0 pt-2 pb-4">
          <div className="space-y-2">
            {/* Day 1 */}
            <div className="border-border/30 transition-all">
              <button
                className="w-full px-6 py-3 bg-muted/30 hover:bg-muted/50 transition-colors flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                aria-expanded="true"
              >
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 text-primary mr-2" />
                  <h3 className="text-sm font-medium">Today, July 24</h3>
                  <Badge className="ml-3 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                    3 transactions
                  </Badge>
                </div>
                <ChevronDownIcon className="h-4 w-4 text-muted-foreground transition-transform duration-200" />
              </button>

              <div className="transition-all duration-300">
                <div className="flex items-center p-4 hover:bg-accent/5 transition-colors border-b border-border/30">
                  <div className="mr-4">
                    <div className="p-2 rounded-full bg-green-500/10 text-green-500">
                      <ArrowUpCircleIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium flex items-center">
                      <span>Salary</span>
                      <Badge
                        variant="outline"
                        className="ml-2 text-xs bg-green-500/5 text-green-500 border-green-500/20"
                      >
                        Income/Wages
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center space-x-1">
                      <span>Personal Wallet</span>
                      <span className="text-muted-foreground/50">•</span>
                      <span className="text-xs">
                        Monthly payment from ABC Company
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-500">
                      +2,000,000 MGA
                    </div>
                    <div className="text-xs text-muted-foreground">9:30 AM</div>
                  </div>
                </div>

                <div className="flex items-center p-4 hover:bg-accent/5 transition-colors border-b border-border/30">
                  <div className="mr-4">
                    <div className="p-2 rounded-full bg-red-500/10 text-red-500">
                      <ArrowDownCircleIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium flex items-center">
                      <span>Rent</span>
                      <Badge
                        variant="outline"
                        className="ml-2 text-xs bg-red-500/5 text-red-500 border-red-500/20"
                      >
                        Housing/Rent
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center space-x-1">
                      <span>Bank Account</span>
                      <span className="text-muted-foreground/50">•</span>
                      <span className="text-xs">
                        Monthly apartment rent payment
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-red-500">-350,000 MGA</div>
                    <div className="text-xs text-muted-foreground">2:15 PM</div>
                  </div>
                </div>

                <div className="flex items-center p-4 hover:bg-accent/5 transition-colors border-b border-border/30">
                  <div className="mr-4">
                    <div className="p-2 rounded-full bg-red-500/10 text-red-500">
                      <ShoppingCartIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium flex items-center">
                      <span>Supermarket</span>
                      <Badge
                        variant="outline"
                        className="ml-2 text-xs bg-red-500/5 text-red-500 border-red-500/20"
                      >
                        Food/Groceries
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center space-x-1">
                      <span>Credit Card</span>
                      <span className="text-muted-foreground/50">•</span>
                      <span className="text-xs">Weekly grocery shopping</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-red-500">-85,000 MGA</div>
                    <div className="text-xs text-muted-foreground">4:45 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="border-border/30 transition-all">
              <button
                className="w-full px-6 py-3 bg-muted/30 hover:bg-muted/50 transition-colors flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                aria-expanded="true"
              >
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 text-primary mr-2" />
                  <h3 className="text-sm font-medium">July 23</h3>
                  <Badge className="ml-3 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                    2 transactions
                  </Badge>
                </div>
                <ChevronDownIcon className="h-4 w-4 text-muted-foreground transition-transform duration-200" />
              </button>

              <div className="transition-all duration-300">
                <div className="flex items-center p-4 hover:bg-accent/5 transition-colors border-b border-border/30">
                  <div className="mr-4">
                    <div className="p-2 rounded-full bg-yellow-500/10 text-yellow-500">
                      <HandshakeIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium flex items-center">
                      <span>Loan to Friend</span>
                      <Badge
                        variant="outline"
                        className="ml-2 text-xs bg-yellow-500/5 text-yellow-500 border-yellow-500/20"
                      >
                        Personal/Loans
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center space-x-1">
                      <span>Cash</span>
                      <span className="text-muted-foreground/50">•</span>
                      <span className="text-xs">
                        John's car repair emergency
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-yellow-500">
                      +100,000 MGA <span className="text-xs">(Owed)</span>
                    </div>
                    <div className="text-xs text-muted-foreground">6:40 PM</div>
                  </div>
                </div>

                <div className="flex items-center p-4 hover:bg-accent/5 transition-colors border-b border-border/30">
                  <div className="mr-4">
                    <div className="p-2 rounded-full bg-red-500/10 text-red-500">
                      <ShoppingCartIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium flex items-center">
                      <span>Restaurant</span>
                      <Badge
                        variant="outline"
                        className="ml-2 text-xs bg-red-500/5 text-red-500 border-red-500/20"
                      >
                        Food/Dining Out
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center space-x-1">
                      <span>Credit Card</span>
                      <span className="text-muted-foreground/50">•</span>
                      <span className="text-xs">Dinner with colleagues</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-red-500">-75,500 MGA</div>
                    <div className="text-xs text-muted-foreground">
                      10:20 AM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="border-border/30 transition-all">
              <button
                className="w-full px-6 py-3 bg-muted/30 hover:bg-muted/50 transition-colors flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                aria-expanded="true"
              >
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 text-primary mr-2" />
                  <h3 className="text-sm font-medium">July 22</h3>
                  <Badge className="ml-3 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                    1 transaction
                  </Badge>
                </div>
                <ChevronDownIcon className="h-4 w-4 text-muted-foreground transition-transform duration-200" />
              </button>

              <div className="transition-all duration-300">
                <div className="flex items-center p-4 hover:bg-accent/5 transition-colors border-b border-border/30">
                  <div className="mr-4">
                    <div className="p-2 rounded-full bg-red-500/10 text-red-500">
                      <WifiIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium flex items-center">
                      <span>Internet Bill</span>
                      <Badge
                        variant="outline"
                        className="ml-2 text-xs bg-red-500/5 text-red-500 border-red-500/20"
                      >
                        Utilities/Internet
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center space-x-1">
                      <span>Bank Account</span>
                      <span className="text-muted-foreground/50">•</span>
                      <span className="text-xs">
                        Monthly fiber subscription
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-red-500">-120,000 MGA</div>
                    <div className="text-xs text-muted-foreground">
                      12:30 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-border/40 py-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:text-primary/90"
          >
            Load More Transactions
            <ChevronDownIcon className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
