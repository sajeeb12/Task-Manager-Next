export interface Task {
    id: string;
    title: string;
    status: 'pending' | 'completed';
}
export type filter = 'all' | 'pending' | 'completed'