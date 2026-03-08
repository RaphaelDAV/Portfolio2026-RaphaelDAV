export interface Education {
  id: string;
  diploma: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  subjects: string[];
  context?: string;
}
