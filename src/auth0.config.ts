import {
  Auth0Client,
  Auth0ClientOptions,
  LogoutOptions,
} from "@auth0/auth0-spa-js";

import { BehaviorSubject } from "rxjs";

const auth0Config: Auth0ClientOptions = {
  domain: "vdv-auth0-demo.eu.auth0.com",
  client_id: "manV7DM9P2qpHo2qzCEe8Y8tIRvnLGwl",
  cacheLocation: "localstorage",
};

export interface Auth0User {
  email: string;
  email_verified: boolean;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  updated_at: Date;
}
export let auth0 = new Auth0Client(auth0Config);

export const userSub = new BehaviorSubject<Auth0User>(null);

export const performLogin = async () => {
  await auth0.loginWithPopup();
  console.log(await auth0.getUser());
  userSub.next(await auth0.getUser());
};

export const logout = () => {
  const logoutOptions: LogoutOptions = {
    localOnly: true,
  };
  auth0.logout(logoutOptions);
  userSub.next(null);
};

export const checkLogin = async () => {
  userSub.next(await auth0.getUser());
};
