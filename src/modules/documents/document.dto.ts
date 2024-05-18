export interface DocumentDTO {
  readonly title: string;
  readonly createdById: string;
  readonly body: string;
  readonly tags?: string[];
}

export interface DocumentFilters {
  readonly search?: string;
  readonly ids?: string[];
  readonly userId?: string;
}
