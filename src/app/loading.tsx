import Layout from '@/components/Layout';

export default function Loading() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-600"></div>
      </div>
    </Layout>
  );
} 