const parent = React.createElement('div', { id: 'parent' }, React.createElement('h1', { id: "child" }, "I am an H1 tag."))

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)