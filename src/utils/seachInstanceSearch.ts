export function seachInstanceSearch(master: any, str: string) {
  let arr: { name: string; paramValue: string; key: string }[] = [];
  for (let key in master) {
    master[key].forEach(
      (item: { name: string; paramValue: string; key: string }) => {
        if (item.name.toLocaleLowerCase().includes(str.toLocaleLowerCase())) {
          item["key"] = key;
          arr.push(item);
        }
      }
    );
  }
  return arr;
}
