INSTRUCTIONS:
1. Run `npm install`
2. Run `npm run dev` to start the server

Some decisions I made here:
- I scaffolded the project using Vite (https://vite.dev/guide/) with a React + Typescript template
- Using CSS grid as for the overall header-sidebar-content structure of the page, as it's a perfect use-case for it
- I'm using React Context as a substitute for proper state management because of it's simplicity, but in reality, it's a not a proper state management solution. It is most useful for state that needs to be read more than it needs to be updated. 
- For search (the only tricky part of this assignment), I decided to turn the paragraph content into an array of paragraphs. This made it easier to look for the search term within the text and then transform the text with the proper highlight JSX wrapped around it. This simpler and more performant than trying to do any direct HTML modifying.
- For the pages, I decided to go as simple as possible. I did not reach for React Router or some other routing library, because for this assignment, I think it's overkill. We also do not care about URL changes for this assignment. Routing in the assignment is very simple, so I created a simple RouterContext, which really just "routes" to the correct content. NextJS is another framework with built-in routing I could have used, but I don't think it's worth it just for some simple, minimal routing.
- For chat, I would NOT normally use Context. Instead I'd reach for a proper state management solution like Valtio or Zustand or one of the other great ones. Why? Because chat has frequent updates, meaning much more re-rendering. I used Context here because this is not a production app and is just a simple take home assignment.
- Also in chat, I did the simplest solution I could, not necessarily the best for a production app.

- I did not focus much on styling, and I skipped adding actual icons. I could do all of these things, but I do not have the time to do those parts at the moment.