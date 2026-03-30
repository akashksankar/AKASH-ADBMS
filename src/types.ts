export interface Experiment {
  id: number;
  title: string;
  aim: string;
  type: 'mysql' | 'mongodb';
  content: string;
  explanation: string;
  analogy: string;
  commands: { name: string; desc: string }[];
}

export interface LabTopic {
  title: string;
  experiments: Experiment[];
}
