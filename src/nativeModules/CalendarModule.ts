import { NativeModules } from "react-native";

const { CalendarModule } = NativeModules;

type CalendarModuleType = {
  addEventToCalendar: (
    title: string,
    location: string,
    date: string,
  ) => Promise<string>;

  requestCalendarPermission: () => Promise<boolean>;
};

export default CalendarModule as CalendarModuleType;
