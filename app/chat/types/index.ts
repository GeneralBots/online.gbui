export interface Message {
  id: string;
  type: 'message' | 'event';
  text?: string;
  timestamp: string;
  from: User;
  attachments?: Attachment[];
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
}

export interface Attachment {
  type: 'image' | 'video' | 'document';
  url: string;
  thumbnailUrl?: string;
}

export interface ChatInstance {
  id: string;
  name: string;
  logo?: string;
  botId: string;
  webchatToken: string;
}
