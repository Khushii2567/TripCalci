import React from 'react';
import Icon from '../../../components/AppIcon';

const ExpenseBreakdown = ({ calculation, isCalculating }) => {
  if (!calculation || isCalculating) {
    return (
      <div className="bg-card rounded-xl p-6 border border-border shadow-subtle">
        <div className="flex items-center justify-center h-32">
          {isCalculating ? (
            <div className="flex flex-col items-center space-y-3">
              <div className="animate-spin">
                <Icon name="Loader2" size={32} color="var(--color-primary)" />
              </div>
              <p className="text-sm text-muted-foreground">Calculating expenses...</p>
            </div>
          ) : (
            <div className="text-center">
              <Icon name="Calculator" size={32} color="var(--color-muted-foreground)" className="mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Enter trip details to see cost breakdown</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const expenseItems = [
    {
      icon: 'Bed',
      label: 'Accommodation',
      amount: calculation?.accommodation,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'Car',
      label: 'Transportation',
      amount: calculation?.transportation,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'UtensilsCrossed',
      label: 'Food & Dining',
      amount: calculation?.food,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: 'MapPin',
      label: 'Activities & Misc',
      amount: calculation?.miscellaneous,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-subtle">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Trip Cost Breakdown</h3>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-primary">
            {formatCurrency(calculation?.totalCost)}
          </div>
          <div className="text-sm text-muted-foreground">
            {formatCurrency(calculation?.costPerPerson)} per person
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {expenseItems?.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${item?.bgColor}`}>
                <Icon name={item?.icon} size={20} className={item?.color} />
              </div>
              <span className="font-medium text-foreground">{item?.label}</span>
            </div>
            <div className="text-right">
              <div className="font-semibold text-foreground">
                {formatCurrency(item?.amount)}
              </div>
              <div className="text-xs text-muted-foreground">
                {formatCurrency(item?.amount / calculation?.groupSize)} per person
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Trip Duration:</span>
          <span>{calculation?.days} {calculation?.days === 1 ? 'day' : 'days'}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground mt-1">
          <span>Group Size:</span>
          <span>{calculation?.groupSize} {calculation?.groupSize === 1 ? 'person' : 'people'}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseBreakdown;