export interface ReportedIssue {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    status: 'pending' | 'in-progress' | 'resolved';
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    id: string;
    name: string;
    email: string;
    reportedIssues: ReportedIssue[];
}

export interface DashboardData {
    totalIssues: number;
    resolvedIssues: number;
    pendingIssues: number;
    issues: ReportedIssue[];
}

export interface TrackingInfo {
    issueId: string;
    status: 'pending' | 'in-progress' | 'resolved';
    updates: string[];
}