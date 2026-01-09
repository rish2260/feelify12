import { getAllLeads, getRecentLeads } from '@/lib/queries';

export default async function AdminDashboard() {
    // Fetch leads on the server
    const leads = await getAllLeads();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0B0B0B] py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-black font-heading text-gray-900 dark:text-white mb-8">
                    Admin Dashboard
                </h1>

                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-white/5">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                        Recent Leads ({leads.length})
                    </h2>

                    <div className="space-y-4">
                        {leads.map((lead: any) => (
                            <div
                                key={lead.id}
                                className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-2xl border border-gray-100 dark:border-white/5"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                                        <p className="font-bold text-gray-900 dark:text-white">{lead.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                        <p className="font-bold text-gray-900 dark:text-white">{lead.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                        <p className="font-bold text-gray-900 dark:text-white">{lead.phone}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Service</p>
                                        <p className="font-bold text-gray-900 dark:text-white">{lead.service || 'N/A'}</p>
                                    </div>
                                    {lead.business_name && (
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Business</p>
                                            <p className="font-bold text-gray-900 dark:text-white">{lead.business_name}</p>
                                        </div>
                                    )}
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                                        <p className="font-bold text-gray-900 dark:text-white">
                                            {new Date(lead.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                {lead.message && (
                                    <div className="mt-4">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Message</p>
                                        <p className="text-gray-900 dark:text-white">{lead.message}</p>
                                    </div>
                                )}
                            </div>
                        ))}

                        {leads.length === 0 && (
                            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                                No leads yet. Start promoting your website!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
