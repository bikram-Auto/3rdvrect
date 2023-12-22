const now = new Date();

export default [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2024, 12, 11),
    end: new Date(2024,12, 12)
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2023, 3, 7),
    end: new Date(2023, 3, 10)
  },

  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2023, 2, 13, 0, 0, 0),
    end: new Date(2023, 2, 20, 0, 0, 0)
  },
  {
    id: 15,
    title: "Point in Time Event",
    start: now,
    end: now
  },
]

// export function LatestEvent(){
//   const latestEvent = event.reduce: any((latest, event) => event.start > latest.start ? event : latest, events[0]);
//   return(
//     <div>
//       <h2>Latest Event</h2>
//       <p>Title: {latestEvent.title}</p>
//     </div>
//   )
// }
