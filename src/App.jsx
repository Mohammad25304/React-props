import Student from './Student'

function App() {

  return (
    <>
      <Student name="Mohammad " age={22} isStudent={true} />
      <Student name="Aly" age={25} isStudent={false} />
      <Student name='Ahmed' />
      <Student />
    </>
  )
}

export default App

// The App component is the main compennet and the student is the child component. The App component is passing the name prop to the Student component. The Student component is receiving the name prop and rendering it in a paragraph element. The name prop is a string that is passed from the App component to the Student component. The Student component can use the name prop to customize its behavior and appearance based on the value of the name prop. In this example, the Student component is rendering the name prop in a paragraph element, but it could also use the name prop to determine how to style itself or what other content to render.

//props = read only the properties that are shared between components. They are immutable and cannot be changed by the component that receives them. Props are used to pass data from a parent component to a child component. They allow you to customize the behavior and appearance of a component based on the data that is passed to it.

//props are passed to a component as an object. The keys of the object are the names of the props, and the values are the values of the props. For example, if you have a component called "Button" that takes a prop called "color", you can pass the color prop like this:

//<Button color="red" />

//In this example, the Button component will receive a prop called "color" with the value "red". The Button component can then use this prop to determine how to render itself, such as by setting its background color to red.

//Props are a fundamental concept in React and are essential for building reusable and composable components. They allow you to create components that can be easily customized and reused throughout your application.