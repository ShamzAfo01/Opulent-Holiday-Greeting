
export interface GreetingRequest {
    recipientName: string;
    companyName: string;
    tone: 'professional' | 'warm' | 'poetic' | 'witty';
}

export interface SnowDroplet {
    id: number;
    x: number;
    delay: number;
}

export interface Puddle {
    id: number;
    x: number;
    y: number;
}
