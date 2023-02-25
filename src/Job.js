export const Job = (props) => {
    return (
      <div className='job'>
        <h1>{props.salary}</h1>
        <h1>{props.position}</h1>
        <h1>{props.company}</h1>
      </div>
    )
  }