import React
import UIKit
import EventKit

@objc(CalendarModule)
class CalendarModule: NSObject {
  private let eventStore = EKEventStore()
  
  @objc
  func addEventToCalendar(_ title: String, location: String, date: String, resolver: @escaping RCTPromiseResolveBlock, rejecter: @escaping RCTPromiseRejectBlock) {
    eventStore.requestAccess(to: .event) { (granted, error) in
      if let error = error {
        rejecter("E_CALENDAR_ACCESS_ERROR", "Error accessing calendar: \(error.localizedDescription)", error)
        return
      }

      let dateDouble: Double = Double(date) ?? 0
      
      if granted {
        let event = EKEvent(eventStore: self.eventStore)
        event.title = title
        event.location = location
        event.startDate = Date(timeIntervalSince1970: dateDouble)
        event.endDate = Date(timeIntervalSince1970: dateDouble + 60)
        event.calendar = self.eventStore.defaultCalendarForNewEvents
        
        do {
          try self.eventStore.save(event, span: .thisEvent)
          resolver("Event added successfully!")
        } catch let saveError {
          rejecter("E_CALENDAR_SAVE_ERROR", "Error saving event: \(saveError.localizedDescription)", saveError)
        }
      } else {
        rejecter("E_CALENDAR_DENIED", "Calendar access denied", nil)
      }
    }
  }

  @objc
  func requestCalendarPermission(_ resolver: @escaping RCTPromiseResolveBlock, rejecter: @escaping RCTPromiseRejectBlock) {
    let status = EKEventStore.authorizationStatus(for: .event)
    
    switch status {
    case .notDetermined:
      eventStore.requestAccess(to: .event) { granted, error in
        if let error = error {
          rejecter("PERMISSION_ERROR", "Failed to request permission", error)
        } else {
          resolver(granted)
        }
      }
    case .authorized:
      resolver(true)
    case .denied, .restricted:
      resolver(false)
    @unknown default:
      resolver(false)
    }
  }
}
