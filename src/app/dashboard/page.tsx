'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { leadApi } from '@/lib/api';
import ProtectedRoute from '@/components/ProtectedRoute';
import Navbar from '@/components/Navbar';
import AnalyticsCards from '@/components/AnalyticsCards';
import LeadFilters from '@/components/LeadFilters';
import LeadsTable from '@/components/LeadsTable';
import Pagination from '@/components/Pagination';
import type { LeadFilters as LeadFiltersType } from '@/types';

export default function DashboardPage() {
  const [filters, setFilters] = useState<LeadFiltersType>({
    page: 1,
    limit: 10,
    sortBy: 'createdAt',
    sortOrder: 'desc',
  });

  const { data, isLoading } = useQuery({
    queryKey: ['leads', filters],
    queryFn: () => leadApi.getLeads(filters),
  });

  const handleFilterChange = (newFilters: LeadFiltersType) => {
    setFilters(newFilters);
  };

  const handlePageChange = (page: number) => {
    setFilters({ ...filters, page });
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <p className="text-gray-600">Manage and track your leads</p>
          </div>

          <AnalyticsCards />

          <LeadFilters filters={filters} onFilterChange={handleFilterChange} />

          <LeadsTable leads={data?.data || []} isLoading={isLoading} />

          {data && data.pagination.totalPages > 1 && (
            <Pagination
              currentPage={data.pagination.page}
              totalPages={data.pagination.totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}
