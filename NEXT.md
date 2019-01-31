# Next steps and stuff to remember

1. Create event page

   - Add RSVP bool and possibility to select which are are in use, possibly in same component
   - Decide and start implementation of how to select dates and times, possibly spanning many days

     - How to minimize overhead? react/preact-day-picker seems cool and just the library but 7.4kbits... would at least require a lazy loading or something of the sort
       - Use parcel lazy loading and provide a component lookalike while the datetime-picker loads, then pass value to it and use it

2. Event / participation page
