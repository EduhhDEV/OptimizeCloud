export type VPSData = {
  id: number;
  cpus: number;
  cpu_clock: number;
  memory: number;
  storage: number;
  storage_type: string;
  price: number;
};

export type VPSList = {
  id: string;
  name: string;
  description: string;
  image_url: string;
};

export type PartnerData = {
  name: string;
  image_url: string;
};
export type FeedbackData = {
  name: string;
  feedback: string;
  image: string;
};
