Application will practice props & state

App Component -> Governs information across our entire application.

Accordion Component -> Controls the entire piece of content being shown. This component will be re usable, and able to show different sets in the future.

App component will pass down a prop into the accordion component. The accordion will decide what set of questions & answers to show on the screen based upon this items prop.

There is one thing changing as a user begins to click on the page, this is the question that is actually expanded and displayed to the user.

If a user clicks on a question, it will expand, if a user clicks on another question, the previous one will close and the other one will open. There can only ever be one active question at a time. When a user clicks on a question, we will set an active index piece of state to indicate that we can to expand this question.

The accordion will have a piece of state that is going to know which question is currently expanded.

App Component
Items Props

Accordion Component
Items Props
Active Index Props
