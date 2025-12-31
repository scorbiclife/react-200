function R033_ReturnMap() {
  const contents = ["React", "200"];
  return (
    <ul>
      {contents.map(e => <li>{e}</li>)}
    </ul>
  )
}

export default R033_ReturnMap;