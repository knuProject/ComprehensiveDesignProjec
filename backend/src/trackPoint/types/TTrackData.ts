export type TTrackData = {
  name: string;
  startTime: string;
  endTime: string;
  geom: GeoJSON.MultiLineString; // GeoJSON에서 MultiLineString만 지원하는 경우
};
