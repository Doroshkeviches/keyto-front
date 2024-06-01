import { BaseState } from "types/base-state.type";

export interface AuthState extends BaseState {
  session: DecodedUser | null;
  email: string,
  pending: {
    session: boolean;
    resetCode: boolean,

  };
  errors: {
    session: string | null;
    resetCode: string | null,

  }
}
export interface DecodedUser {
  email: string,
  id: string,
  role_type: string,
  role_id: string,
}