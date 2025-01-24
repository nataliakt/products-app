import { useEffect } from "react";
import { NativeModules } from "react-native";

const { CalendarModule } = NativeModules;

const checkCalendarPermission = async () => {
  try {
    const hasPermission = await CalendarModule.requestCalendarPermission();
    if (hasPermission) {
      console.log("Permission granted");
    } else {
      console.log("Permission denied");
    }
  } catch (error) {
    console.error("Error requesting permission:", error);
  }
};

export function useCalendar() {
  const addCalendarEvent = async () => {
    try {
      const response = await CalendarModule.addEventToCalendar(
        "Buy Product XYZ",
        "Product App",
        1737692198,
      );
      console.log("Event added to calendar:", response, Date.now() / 1000);
      return true;
    } catch (error: any) {
      console.error("Error adding event to calendar:", error);
      return false;
    }
  };

  useEffect(() => {
    checkCalendarPermission();
  }, []);

  return { addCalendarEvent };
}
