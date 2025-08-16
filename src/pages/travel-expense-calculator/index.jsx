import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CalculatorForm from './components/CalculatorForm';
import ExpenseBreakdown from './components/ExpenseBreakdown';
import Icon from '../../components/AppIcon';

const TravelExpenseCalculator = () => {
  const [calculation, setCalculation] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Mock calculation logic with realistic pricing
  const calculateExpenses = useCallback((formData) => {
    setIsCalculating(true);

    // Simulate API call delay
    setTimeout(() => {
      const { groupSize, days, source, destination } = formData;

      // Base rates per person per day
      const accommodationRate = 120; // Hotel per person per night
      const foodRate = 75; // Food per person per day
      const miscellaneousRate = 50; // Activities per person per day

      // Transportation calculation (mock distance-based pricing)
      const locationDistances = {
        'new-york': { 'los-angeles': 2800, 'chicago': 800, 'miami': 1200, 'las-vegas': 2500 },
        'los-angeles': { 'new-york': 2800, 'chicago': 2000, 'miami': 2700, 'las-vegas': 270 },
        'chicago': { 'new-york': 800, 'los-angeles': 2000, 'miami': 1300, 'las-vegas': 1750 },
        'miami': { 'new-york': 1200, 'los-angeles': 2700, 'chicago': 1300, 'las-vegas': 2400 },
        'las-vegas': { 'new-york': 2500, 'los-angeles': 270, 'chicago': 1750, 'miami': 2400 }
      };

      const distance = locationDistances?.[source]?.[destination] || 1000;
      const transportationCostPerPerson = Math.max(200, Math.min(800, distance * 0.25));

      // Calculate individual costs
      const accommodation = accommodationRate * groupSize * days;
      const transportation = transportationCostPerPerson * groupSize;
      const food = foodRate * groupSize * days;
      const miscellaneous = miscellaneousRate * groupSize * days;

      const totalCost = accommodation + transportation + food + miscellaneous;
      const costPerPerson = totalCost / groupSize;

      const result = {
        groupSize,
        days,
        accommodation,
        transportation,
        food,
        miscellaneous,
        totalCost,
        costPerPerson
      };

      setCalculation(result);
      setIsCalculating(false);
    }, 1500);
  }, []);

  const handleReset = () => {
    setCalculation(null);
    setIsCalculating(false);
  };

  return (
    <>
      <Helmet>
        <title>Travel Expense Calculator - Plan Your Trip Budget</title>
        <meta name="description" content="Calculate travel expenses for group trips. Get instant cost estimates for accommodation, transportation, food, and activities." />
        <meta name="keywords" content="travel calculator, trip budget, expense calculator, travel planning, group travel" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-2xl shadow-floating">
                  <Icon name="Calculator" size={32} color="white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Travel Expense Calculator
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Plan your perfect trip with our smart expense calculator. Get instant cost estimates for accommodation, transportation, food, and activities based on your group size and destination.
              </p>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Calculator Form */}
              <div className="order-2 lg:order-1">
                <div className="bg-card rounded-xl p-6 border border-border shadow-subtle">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      <Icon name="Settings" size={20} color="var(--color-primary)" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Trip Details</h2>
                  </div>
                  
                  <CalculatorForm
                    onCalculate={calculateExpenses}
                    onReset={handleReset}
                    isCalculating={isCalculating}
                  />
                </div>

                {/* Features */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Zap" size={16} color="var(--color-success)" />
                      <span className="text-sm font-medium text-foreground">Instant Results</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Real-time calculations as you type
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Users" size={16} color="var(--color-primary)" />
                      <span className="text-sm font-medium text-foreground">Group Travel</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Perfect for planning group trips
                    </p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="order-1 lg:order-2">
                <ExpenseBreakdown 
                  calculation={calculation} 
                  isCalculating={isCalculating} 
                />

                {calculation && (
                  <div className="mt-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-border">
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon name="Lightbulb" size={20} color="var(--color-accent)" />
                      <h3 className="font-semibold text-foreground">Money-Saving Tips</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={14} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                        <span>Book accommodations early for better rates</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={14} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                        <span>Consider group discounts for activities</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={14} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                        <span>Mix dining out with grocery shopping</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-16 text-center">
              <div className="bg-card rounded-xl p-8 border border-border shadow-subtle max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  How Our Calculator Works
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-3">
                      <Icon name="MapPin" size={24} color="var(--color-primary)" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Location-Based Pricing</h4>
                    <p className="text-sm text-muted-foreground">
                      Costs vary by destination and distance between locations
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-xl mx-auto mb-3">
                      <Icon name="Users" size={24} color="var(--color-success)" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Group Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      Shared accommodations and group rates reduce per-person costs
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mx-auto mb-3">
                      <Icon name="Calendar" size={24} color="var(--color-accent)" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Duration Scaling</h4>
                    <p className="text-sm text-muted-foreground">
                      Longer trips benefit from economies of scale and bulk pricing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TravelExpenseCalculator;