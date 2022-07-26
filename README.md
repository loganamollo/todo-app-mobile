# todo-app-mobile
This is a todo application implemented in React Native.

# implementation
it is implemented as a tree of components with state stored in the nearest parent of components with shared state, that being the `HomeScreenView`
State trickles down while events are bubbled up to implement one way data flow.

# How to run it
1. clone this repo
2. navigate to the root folder
3. run `npm install`
4. ensure `expo-cli` is available globally or follow the steps in https://docs.expo.dev/workflow/expo-cli/
5. run `expo start`
6. view on android virtual device

<a href="https://drive.google.com/uc?export=view&id=18Z_rnqy8uiykN9ksjDtsg9sI6QFU2vEh/view">
<img src="https://drive.google.com/uc?export=view&id=18Z_rnqy8uiykN9ksjDtsg9sI6QFU2vEh" style="width: 650px; max-width: 100%; height: auto" title="Click to enlarge picture" />
</a>
