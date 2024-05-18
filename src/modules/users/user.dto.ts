export interface UserDTO {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phoneNumber?: string;
  password: string;
}

export interface UserFilters {
  readonly search: string;
  readonly ids?: string[];
}
