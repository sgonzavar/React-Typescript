interface Props {
  subs: Array<{
    nick: string,
    avatar: string,
    subMounths: number,
    description?: string
  }>
}


const List: React.FC<Props> = ({subs}: Props) =>  {
  return (
    <ul>
      {
        subs.map(sub => {
          return (
            <li key={sub.avatar}>
              <img src={sub.avatar} alt={`esta es la imagen del sub ${sub.avatar}`} />
              <h4>{sub.nick} ( <small> {sub.subMounths}</small> )</h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

export default List