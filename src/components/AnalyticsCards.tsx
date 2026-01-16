'use client';

import { useQuery } from '@tanstack/react-query';
import { leadApi } from '@/lib/api';

export default function AnalyticsCards() {
  const { data: analytics, isLoading } = useQuery({
    queryKey: ['analytics'],
    queryFn: leadApi.getAnalytics,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!analytics) return null;

  const cards = [
    {
      title: 'Total Leads',
      value: analytics.totalLeads.toLocaleString(),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Active Leads',
      value: analytics.activeLeads.toLocaleString(),
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Converted Leads',
      value: analytics.convertedLeads.toLocaleString(),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Total Value',
      value: `$${(analytics.totalValue / 1000000).toFixed(1)}M`,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card, index) => (
        <div key={index} className={`${card.bgColor} rounded-lg shadow p-6`}>
          <p className="text-sm font-medium text-gray-600 mb-2">{card.title}</p>
          <p className={`text-3xl font-bold ${card.color}`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
}
