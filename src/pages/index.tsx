import { Card, CardContent } from "@/components/ui/card";
import PerformanceGauge  from "@/components/dashboard/PerformanceGauge";
import { MetricCard } from "@/components/dashboard/MetricCard";
import UtilizationChart  from "@/components/dashboard/UtilizationChart";
import { 
  Users,
  Package, 
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FillRate, LineFillRate, NonZeroFillRate } from "@/lib/calculation";


export default function DealersDashboard() {

  
  return (
    <div className="min-h-screen px-6 space-y-6">

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-1 space-y-4">
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-3">
                  <div>
                    <h2 className="text-2xl font-bold">Welcome back, John!</h2>
                    <p className="text-blue-100 mt-1">Have a great day at work</p>
                  </div>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
          <PerformanceGauge />
          <Card className="p-0">
            <CardContent className=" p-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold mb-2  text-purple-600">Need Assistance?</h3>
              <p className=" mb-4 text-foreground">Get actionable insights and recommendations.</p>
              <Button 
                variant="secondary" 
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => console.log("Chat with AI clicked")}
              >
                Keep Chat with Me
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Analytics */}
        <div className="xl:col-span-2 space-y-6">
          <UtilizationChart />
          {/* Bottom Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* Dealer Profiles */}
            <MetricCard
              title="Fill Rate"
              value={FillRate().toPrecision(2).toString()+"%"}
              subtitle="7 platforms avg"
              trend={{ value: 12, isPositive: true }}
              icon={<Users className="h-4 w-4" />}
              chartType="profile"
            />

            {/* Transactions */}
            <MetricCard
              title="Line fill rate"
              value={LineFillRate().toPrecision(2).toString()+"%"}
              subtitle="7 platforms avg"
              trend={{ value: 8, isPositive: true }}
              icon={<CreditCard className="h-4 w-4" />}
              chartType="transaction"
            />

            {/* Products */}
            <MetricCard
              title="NZFR"
              value={NonZeroFillRate().toPrecision(2).toString()+"%"}
              subtitle="7 New Products"
              trend={{ value: 5, isPositive: true }}
              icon={<Package className="h-4 w-4" />}
              chartType="product"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Card className="shadow-card hover:shadow-hover transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Total Active Dealers
              </h3>
              <p className="text-sm text-muted-foreground">
                Showing 285 / 320 dealers
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="hover:scale-105 transition-all duration-200 hover:shadow-md">
                All Dealers
              </Button>
              <Button variant="outline" className="hover:scale-105 transition-all duration-200 hover:shadow-md">
                Subscriptions
              </Button>
              <Button className="hover:bg-orange/90 text-orange-foreground hover:scale-105 transition-all duration-200 hover:shadow-lg">
                Add Dealer
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}