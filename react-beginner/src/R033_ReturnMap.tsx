function R033_ReturnMap() {
  const contents = ["React", "200"];
  return (
    <ul>
      {contents.map(e => <li>{e}</li>)}
    </ul>
  )
}

export function R033_ReturnArray() {
  return [<p>React</p>, <p>200</p>];
}

export default R033_ReturnMap;