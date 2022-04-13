import { masterApi } from "../api/masterApi";
import { Master } from "../components/home/InstanseKeyword";

export type MasterObj = {
  category: Array<Master>;
  commodities: Array<Master>;
  events: Array<Master>;
  fx: Array<Master>;
  index: Array<Master>;
  macrotopic: Array<Master>;
  sectors: Array<Master>;
  startup: Array<Master>;
  tickers: Array<Master>;
  topics: Array<Master>;
  [arg: string]: Array<Master>;
};
export let master: MasterObj;
export let category: Array<Master> = [];
export let sector: Array<Master> = [];
export let sectorKey: SectorKey = {};
export let startup: Array<Master> = [];

export async function fetchMaster() {
  let res: MasterObj = await masterApi();
  // master = addKeyToMasterObj(res);
  master = res;
  category = res.category;
  startup = res.startup;
  sector = res.sectors;
  sectorKey = divideSectorKey(res.sectors);
  return { master, category, startup, sector, sectorKey };
}

type AddedKeyTypeMaster = {
  [arg: string]: string;
};

function addKeyToMasterObj(res: MasterObj) {
  for (let key in res) {
    res[key].forEach((obj: AddedKeyTypeMaster) => (obj.keyType = key));
  }
  return res;
}

type SectorKey = {
  [arg: string]: Array<Master>;
};

function divideSectorKey(sector: Array<Master>) {
  let sectorKey: SectorKey = {};
  for (let i = 0; i < sector.length; i++) {
    if (i === 0 || sector[i].name[0] !== sector[i - 1].name[0]) {
      sectorKey[sector[i].name[0]] = [sector[i]];
    } else {
      sectorKey[sector[i].name[0]].push(sector[i]);
    }
  }
  return sectorKey;
}