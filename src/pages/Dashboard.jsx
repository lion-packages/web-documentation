import CodeBlock from './components/CodeBlock'

const Dashboard = () => {
  return (
    <div className='max-w-screen-md text-white mx-10 my-2'>
      <h2 className='font-semibold text-4xl'>
        Install
      </h2>
      <div className='flex flex-col justify-around my-4 '>
        <CodeBlock
          language={"bash"}
          content={"composer create-project lion/framework"}
        />

        <CodeBlock
          language={"bash"}
          content={"git clone https://github.com/Lion-Packages/framework.git"}
        />
      </div>
      <p className="my-4">
        Lion-Framework can also serve as an API backend for a JavaScript single page application or a mobile application. For example, you can use Lion-Framework as an API backend for your ReactJS app or Kotlin app.
      </p>
      <p className="my-4">
        You can use Lion-Framework to provide authentication and data storage/retrieval for your application, while taking advantage of Lion-Framework services such as emails, databases and more.
      </p>
      <p className="my-4">
        To install Lion-Framework and libraries you must have composer installed, Lion-Framework integrates most of the available Lion libraries.
      </p>
    </div>
  )
}

export default Dashboard
