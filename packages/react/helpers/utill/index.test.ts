import { convertTimestampToLocalTime } from "./timeUtill";

test("convert timestamp to local time", () => {
  const testTimeStamp = 1649693592000;
  const testDate = new Date("2022-04-12 01:13");
  const convertedTime = convertTimestampToLocalTime(testTimeStamp);
  expect(convertedTime).toEqual(testDate);
});
