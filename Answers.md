1. What problem does the context API help solve?
   It avoids having to prop drill data through many child components. Rather It has components cosume the data from the providers higher up on the component tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   The store keeps our initial data intact while our reducers handle any actions taken on that initial state and modifies a copy of the initial state rather than modify the state itself.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   application state holds a global state while component state holds state for that individual component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   It allows us to apply middleware in between our actions and reducer thus giving redux the ability to use asyncronous functionality.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   I love redux and the way it ties in with everything. It is simple once you grasp the way data is flowing. If anything I use a mix of all state management systems we have learned this week.
