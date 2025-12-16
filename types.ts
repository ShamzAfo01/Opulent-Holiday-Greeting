export interface GreetingRequest {
  recipientName: string;
  tone: 'professional' | 'warm' | 'poetic' | 'witty';
  companyName: string;
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
