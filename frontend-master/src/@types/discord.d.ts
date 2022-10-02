type GuildFeatures =
  | "ANIMATED_BANNER"
  | "ANIMATED_ICON"
  | "AUTO_MODERATION"
  | "BANNER"
  | "COMMERCE"
  | "COMMUNITY"
  | "DISCOVERABLE"
  | "FEATURABLE"
  | "INVITE_SPLASH"
  | "MEMBER_VERIFICATION_GATE_ENABLED"
  | "MONETIZATION_ENABLED"
  | "MORE_STICKERS"
  | "NEWS"
  | "PARTNERED"
  | "PREVIEW_ENABLED"
  | "PRIVATE_THREADS"
  | "ROLE_ICONS"
  | "TICKETED_EVENTS_ENABLED"
  | "VANITY_URL"
  | "VERIFIED"
  | "VIP_REGIONS"
  | "WELCOME_SCREEN_ENABLED";

type DiscordAccessTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
};

type User = {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  avatar_decoration?: null // NOT IMPLEMENTED YET
  verified: string;
  email?: string;
  flags: number;
  banner?: string;
  banner_color: string;
  locale: string;
  accent_color: number;
  mfa_enabled: boolean;
  premium_type: number;
  public_flags: number;
};

type UserConnection = {
  id: string;
  name: string;
  type: string;
  revoked: boolean;
  integrations: []; // Guild Integration
  verified: boolean;
  friend_sync: boolean;
  show_activity: boolean;
  visibility: 0 | 1;
};

type Guild = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: GuildFeatures;
};

export { DiscordAccessTokenResponse, User };
