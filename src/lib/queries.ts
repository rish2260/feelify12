import { supabase } from './supabase';

// ============================================
// FETCH ALL LEADS
// ============================================
export async function getAllLeads() {
    const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching leads:', error);
        return [];
    }

    return data;
}

// ============================================
// FETCH RECENT LEADS (Last 10)
// ============================================
export async function getRecentLeads() {
    const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

    if (error) {
        console.error('Error fetching recent leads:', error);
        return [];
    }

    return data;
}

// ============================================
// FETCH LEADS BY EMAIL
// ============================================
export async function getLeadByEmail(email: string) {
    const { data, error } = await supabase
        .from('leads')
        .select('*')
        .eq('email', email)
        .single();

    if (error) {
        console.error('Error fetching lead:', error);
        return null;
    }

    return data;
}

// ============================================
// FETCH LEADS BY SERVICE
// ============================================
export async function getLeadsByService(service: string) {
    const { data, error } = await supabase
        .from('leads')
        .select('*')
        .eq('service', service)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching leads by service:', error);
        return [];
    }

    return data;
}

// ============================================
// FETCH ALL PARTNER INQUIRIES
// ============================================
export async function getAllPartnerInquiries() {
    const { data, error } = await supabase
        .from('partner_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching partner inquiries:', error);
        return [];
    }

    return data;
}

// ============================================
// COUNT TOTAL LEADS
// ============================================
export async function getLeadsCount() {
    const { count, error } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true });

    if (error) {
        console.error('Error counting leads:', error);
        return 0;
    }

    return count || 0;
}

// ============================================
// SEARCH LEADS BY NAME OR EMAIL
// ============================================
export async function searchLeads(searchTerm: string) {
    const { data, error } = await supabase
        .from('leads')
        .select('*')
        .or(`name.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%`)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error searching leads:', error);
        return [];
    }

    return data;
}

// ============================================
// FETCH LEADS FROM LAST 7 DAYS
// ============================================
export async function getRecentLeadsThisWeek() {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const { data, error } = await supabase
        .from('leads')
        .select('*')
        .gte('created_at', sevenDaysAgo.toISOString())
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching recent leads:', error);
        return [];
    }

    return data;
}

// ============================================
// REAL-TIME SUBSCRIPTION (Listen for new leads)
// ============================================
export function subscribeToNewLeads(callback: (payload: any) => void) {
    const subscription = supabase
        .channel('leads_channel')
        .on(
            'postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: 'leads'
            },
            callback
        )
        .subscribe();

    return subscription;
}
