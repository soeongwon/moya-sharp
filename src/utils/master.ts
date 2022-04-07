import { masterApi } from "../api/masterApi";

export let master = {};

export async function fetchMaster() {
  let res = await masterApi();
  master = res;
}
