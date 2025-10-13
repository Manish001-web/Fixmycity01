export type User = {
    id: string;
    name: string;
    email: string;
};

export type Report = {
    id: string;
    title: string;
    description: string;
    location: {
        latitude: number;
        longitude: number;
    };
    status: 'open' | 'in-progress' | 'resolved';
};

export type Comment = {
    id: string;
    reportId: string;
    userId: string;
    content: string;
    createdAt: Date;
};