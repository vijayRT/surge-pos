# Surge POS

Live at: https://vijayrt.github.io/surge-pos

Web Framework: React

UI Component Library: Bootstrap

State Management: Zustand (https://github.com/pmndrs/zustand)

The entrypoint for the App component logic is in `src/App.tsx`, which imports the Sales Order Entry and Credit Check widgets. The individual widgets are available in `src/widgets`. 

As per given requirements, the widgets are fully decoupled from each other and can be used independently in other projects. This is achieved by making state management local to each widget. For the credit limit check component, the value to compare with, i.e the total of the sales order, is passed as a prop from the root `App.tsx` component. This is an optional prop. 

The credit limit value is also stored across sessions using Persistence middleware provided by Zustand, which stores the value in the browser's LocalStorage API.

In the Sales Order Entry widget, new items can be added and the table will update whenever correspondingly. The total is also calculated, and the credit check widget monitors the total value through the prop passed from `App.tsx`.