import { Cookies, useCookies } from "react-cookie";

const cookies = new Cookies();

const SESSION_KEY_NAME = "session";

export default class TokenService {
  public static get(): string | null {
    console.log(cookies.get(SESSION_KEY_NAME));
    return cookies.get(SESSION_KEY_NAME);
  }

  public static set(session: string): void {
    cookies.set(SESSION_KEY_NAME, session);
  }

  public static remove(): void {
    cookies.remove(SESSION_KEY_NAME);
  }
}
