export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  verifyUrl?: string;
};

/**
 * No verified certifications were present in the source material.
 * The Certifications section is automatically hidden while this list
 * is empty. Owner action: add real, verifiable certifications here.
 */
export const certifications: Certification[] = [];
